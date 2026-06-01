import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import {
  Printer,
  RotateCcw,
  ClipboardList,
  Target,
  LineChart,
  Users,
  UserCog,
  Share2,
  Link2,
  Mail,
  FileDown,
  Send,
  Check,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

import {
  categoryLabels,
  levelLabels,
  measures,
  symptoms,
  type Category,
  type Measure,
  type Symptom,
} from "@/data/adhd";

const searchSchema = z.object({
  ids: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/resultados")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Resultados y medidas recomendadas — AulaTDAH" },
      {
        name: "description",
        content:
          "Medidas DUA e individualizadas para el aula, con evaluación académica, conductual y socioemocional.",
      },
      { property: "og:title", content: "Resultados y medidas recomendadas — AulaTDAH" },
      {
        property: "og:description",
        content: "Plan de actuación con medidas y evaluación multidimensional según marco DUA/PAP.",
      },
    ],
  }),
  component: ResultadosPage,
});

function renderEvaluation(text: string) {
  // Split by newlines and render each as a paragraph; lines starting with
  // "Académico:", "Conductual/ejecutivo:" or "Socioemocional:" get a small label.
  const blocks = text.split("\n").filter((l) => l.trim().length > 0);
  return (
    <div className="mt-2 space-y-2 text-sm text-foreground">
      {blocks.map((block, i) => {
        const match = block.match(/^(Académico|Conductual\/ejecutivo|Socioemocional|Académico\/conductual|Académico\/conductual\/socioemocional)\s*:\s*(.*)$/);
        if (match) {
          return (
            <p key={i}>
              <span className="font-semibold text-foreground">{match[1]}:</span>{" "}
              <span className="text-foreground/90">{match[2]}</span>
            </p>
          );
        }
        return (
          <p key={i} className="text-foreground/90">
            {block}
          </p>
        );
      })}
    </div>
  );
}

function MeasureCard({
  measure,
  relatedSymptoms,
}: {
  measure: Measure;
  relatedSymptoms: Symptom[];
}) {
  return (
    <Card className="print:break-inside-avoid">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="space-y-2">
            <CardTitle className="text-lg">{measure.title}</CardTitle>
            <Badge
              variant={measure.level === "universal" ? "secondary" : "default"}
              className="text-xs font-normal"
            >
              {measure.level === "universal" ? (
                <Users className="mr-1 h-3 w-3" />
              ) : (
                <UserCog className="mr-1 h-3 w-3" />
              )}
              {levelLabels[measure.level]}
            </Badge>
          </div>
          <div className="flex flex-wrap gap-1">
            {relatedSymptoms.map((s) => (
              <Badge key={s.id} variant="outline" className="text-xs font-normal">
                {categoryLabels[s.category]}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="whitespace-pre-line text-sm text-foreground">{measure.description}</p>
        <div className="rounded-lg border border-border bg-muted/40 p-4">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <LineChart className="h-3.5 w-3.5" />
            Cómo evaluar su impacto
          </p>
          {renderEvaluation(measure.evaluation)}
        </div>
        {relatedSymptoms.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Responde a:
            </p>
            <ul className="mt-1 space-y-1">
              {relatedSymptoms.map((s) => (
                <li key={s.id} className="text-sm text-muted-foreground">
                  — {s.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ResultadosPage() {
  const { ids } = Route.useSearch();
  const selectedIds = ids ? ids.split(",").filter(Boolean) : [];

  const selectedSymptoms = symptoms.filter((s) => selectedIds.includes(s.id));

  if (selectedSymptoms.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <Card>
          <CardHeader>
            <CardTitle>Aún no hay resultados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Para ver medidas y métodos de evaluación, primero completa la lista de
              verificación marcando los síntomas observados.
            </p>
            <Button asChild>
              <Link to="/checklist">Ir a la evaluación</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  const byCategory: Record<Category, Symptom[]> = {
    inatencion: [],
    hiperactividad: [],
    impulsividad: [],
  };
  selectedSymptoms.forEach((s) => byCategory[s.category].push(s));

  const measureIdSet = new Set<string>();
  selectedSymptoms.forEach((s) => s.measureIds.forEach((m) => measureIdSet.add(m)));
  const recommendedMeasures = Array.from(measureIdSet)
    .map((id) => measures[id])
    .filter(Boolean);

  const universal = recommendedMeasures.filter((m) => m.level === "universal");
  const individualizadas = recommendedMeasures.filter((m) => m.level === "individualizada");

  const relatedFor = (measure: Measure) =>
    selectedSymptoms.filter((s) => s.measureIds.includes(measure.id));

  const buildPlainTextReport = () => {
    const lines: string[] = [];
    lines.push("PLAN DE ACTUACIÓN — AulaTDAH");
    lines.push(`Fecha: ${new Date().toLocaleDateString("es-ES")}`);
    lines.push("");
    lines.push("SÍNTOMAS IDENTIFICADOS");
    (Object.keys(byCategory) as Category[]).forEach((cat) => {
      if (byCategory[cat].length === 0) return;
      lines.push(`\n${categoryLabels[cat].toUpperCase()}`);
      byCategory[cat].forEach((s) => lines.push(`  - ${s.label}`));
    });
    lines.push("\nMEDIDAS UNIVERSALES (DUA)");
    universal.forEach((m) => {
      lines.push(`\n• ${m.title}`);
      lines.push(`  ${m.description}`);
      lines.push(`  Evaluación: ${m.evaluation.replace(/\n/g, " ")}`);
    });
    if (individualizadas.length > 0) {
      lines.push("\nMEDIDAS INDIVIDUALIZADAS (PAP)");
      individualizadas.forEach((m) => {
        lines.push(`\n• ${m.title}`);
        lines.push(`  ${m.description}`);
        lines.push(`  Evaluación: ${m.evaluation.replace(/\n/g, " ")}`);
      });
    }
    return lines.join("\n");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Enlace copiado al portapapeles");
    } catch {
      toast.error("No se pudo copiar el enlace");
    }
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Plan de actuación TDAH — AulaTDAH");
    const body = encodeURIComponent(
      `Comparto el plan de actuación generado con AulaTDAH:\n\n${window.location.href}\n\n` +
        `Resumen:\n${selectedSymptoms.length} síntomas · ${universal.length} medidas universales · ${individualizadas.length} individualizadas.`,
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([buildPlainTextReport()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `plan-actuacion-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Registro descargado");
  };

  const handleSendOrientacion = () => {
    toast.success("Solicitud enviada al Departamento de Orientación (simulado)");
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 print:py-6">
      <header className="mb-8 flex flex-wrap items-start justify-between gap-4 print:mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Plan de actuación
          </h1>
          <p className="mt-2 text-muted-foreground">
            {selectedSymptoms.length} síntoma{selectedSymptoms.length === 1 ? "" : "s"} identificado
            {selectedSymptoms.length === 1 ? "" : "s"} · {universal.length} medida
            {universal.length === 1 ? "" : "s"} universal{universal.length === 1 ? "" : "es"} ·{" "}
            {individualizadas.length} individualizada{individualizadas.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 print:hidden">
          <Button variant="outline" onClick={() => window.print()}>
            <Printer className="mr-2 h-4 w-4" />
            Imprimir / PDF
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <Share2 className="mr-2 h-4 w-4" />
                Compartir registro
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Opciones de compartir</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleCopyLink}>
                <Link2 className="mr-2 h-4 w-4" />
                Copiar enlace del plan
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleEmail}>
                <Mail className="mr-2 h-4 w-4" />
                Enviar por correo
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDownloadTxt}>
                <FileDown className="mr-2 h-4 w-4" />
                Descargar registro (.txt)
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSendOrientacion}>
                <Send className="mr-2 h-4 w-4" />
                Enviar a Orientación
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild variant="ghost">
            <Link to="/checklist">
              <RotateCcw className="mr-2 h-4 w-4" />
              Nueva evaluación
            </Link>
          </Button>
        </div>
      </header>

      <Alert className="mb-6 print:hidden">
        <Check className="h-4 w-4" />
        <AlertTitle>Vista prototipo</AlertTitle>
        <AlertDescription>
          Las opciones de "Compartir registro" muestran cómo funcionará el envío al
          equipo docente, a Orientación o a la familia. El envío real requerirá conectar
          la herramienta con el correo del centro o con la plataforma educativa.
        </AlertDescription>
      </Alert>



      <section className="mb-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <ClipboardList className="h-5 w-5 text-primary" />
          Síntomas identificados
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {(Object.keys(byCategory) as Category[]).map((cat) => (
            <Card key={cat} className="print:break-inside-avoid">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{categoryLabels[cat]}</CardTitle>
              </CardHeader>
              <CardContent>
                {byCategory[cat].length === 0 ? (
                  <p className="text-sm text-muted-foreground">Ningún síntoma marcado.</p>
                ) : (
                  <ul className="space-y-2">
                    {byCategory[cat].map((s) => (
                      <li
                        key={s.id}
                        className="text-sm text-foreground before:mr-2 before:text-primary before:content-['•']"
                      >
                        {s.label}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      <section className="mb-10">
        <div className="mb-4 flex items-center justify-between gap-2">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <Target className="h-5 w-5 text-primary" />
            Medidas universales (DUA)
          </h2>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          Diseñadas bajo principios del Diseño Universal del Aprendizaje. Se aplican a todo
          el grupo, evitan la segregación del alumnado con TDAH y benefician al conjunto del
          aula (Decreto 104/2018, niveles 1-2 de respuesta).
        </p>
        {universal.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Ninguna medida universal recomendada para los síntomas marcados.
          </p>
        ) : (
          <div className="space-y-4">
            {universal.map((m) => (
              <MeasureCard key={m.id} measure={m} relatedSymptoms={relatedFor(m)} />
            ))}
          </div>
        )}
      </section>

      {individualizadas.length > 0 && (
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <UserCog className="h-5 w-5 text-primary" />
            Medidas individualizadas (PAP)
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Requieren coordinación con el Departamento de Orientación y, en su caso, la
            incorporación o revisión del Plan de Actuación Personalizado conforme a la Orden
            20/2019 (niveles 3-4 de respuesta).
          </p>
          <div className="space-y-4">
            {individualizadas.map((m) => (
              <MeasureCard key={m.id} measure={m} relatedSymptoms={relatedFor(m)} />
            ))}
          </div>
        </section>
      )}

      <Alert className="mt-10 print:mt-6">
        <AlertTitle>Recuerda</AlertTitle>
        <AlertDescription>
          Las medidas son orientativas. Coordina su aplicación con el equipo de orientación
          (Decreto 104/2018, Orden 20/2019) y con la familia. Registra los datos durante al
          menos dos o tres semanas y revisa el plan con flexibilidad cuando los indicadores
          muestren estancamiento, sin esperar a la evaluación final del trimestre.
        </AlertDescription>
      </Alert>
    </main>
  );
}
