import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Printer, RotateCcw, ClipboardList, Target, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  categoryLabels,
  measures,
  symptoms,
  type Category,
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
          "Medidas concretas para el aula y métodos de evaluación según los síntomas marcados.",
      },
      { property: "og:title", content: "Resultados y medidas recomendadas — AulaTDAH" },
      {
        property: "og:description",
        content: "Plan de actuación con medidas y evaluación para cada síntoma identificado.",
      },
    ],
  }),
  component: ResultadosPage,
});

function ResultadosPage() {
  const { ids } = Route.useSearch();
  const selectedIds = ids
    ? ids.split(",").filter(Boolean)
    : [];

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

  // Group symptoms by category
  const byCategory: Record<Category, Symptom[]> = {
    inatencion: [],
    hiperactividad: [],
    impulsividad: [],
  };
  selectedSymptoms.forEach((s) => byCategory[s.category].push(s));

  // Aggregate unique recommended measures
  const measureIdSet = new Set<string>();
  selectedSymptoms.forEach((s) => s.measureIds.forEach((m) => measureIdSet.add(m)));
  const recommendedMeasures = Array.from(measureIdSet)
    .map((id) => measures[id])
    .filter(Boolean);

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 print:py-6">
      <header className="mb-8 flex flex-wrap items-start justify-between gap-4 print:mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Plan de actuación
          </h1>
          <p className="mt-2 text-muted-foreground">
            {selectedSymptoms.length} síntoma{selectedSymptoms.length === 1 ? "" : "s"} identificado
            {selectedSymptoms.length === 1 ? "" : "s"} · {recommendedMeasures.length} medida
            {recommendedMeasures.length === 1 ? "" : "s"} recomendada
            {recommendedMeasures.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={() => window.print()}>
            <Printer className="mr-2 h-4 w-4" />
            Imprimir / PDF
          </Button>
          <Button asChild variant="ghost">
            <Link to="/checklist">
              <RotateCcw className="mr-2 h-4 w-4" />
              Nueva evaluación
            </Link>
          </Button>
        </div>
      </header>

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

      <section>
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <Target className="h-5 w-5 text-primary" />
          Medidas recomendadas y evaluación
        </h2>
        <div className="space-y-4">
          {recommendedMeasures.map((measure) => {
            const relatedSymptoms = selectedSymptoms.filter((s) =>
              s.measureIds.includes(measure.id),
            );
            return (
              <Card key={measure.id} className="print:break-inside-avoid">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <CardTitle className="text-lg">{measure.title}</CardTitle>
                    <div className="flex flex-wrap gap-1">
                      {relatedSymptoms.map((s) => (
                        <Badge key={s.id} variant="secondary" className="text-xs font-normal">
                          {categoryLabels[s.category]}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground">{measure.description}</p>
                  <div className="rounded-lg border border-border bg-muted/40 p-4">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      <LineChart className="h-3.5 w-3.5" />
                      Cómo evaluar su impacto
                    </p>
                    <p className="mt-2 text-sm text-foreground">{measure.evaluation}</p>
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
          })}
        </div>
      </section>

      <Alert className="mt-10 print:mt-6">
        <AlertTitle>Recuerda</AlertTitle>
        <AlertDescription>
          Las medidas son orientativas. Coordina su aplicación con el equipo de orientación
          del centro y con la familia, y registra los datos de evaluación durante al menos
          dos o tres semanas antes de extraer conclusiones.
        </AlertDescription>
      </Alert>
    </main>
  );
}
