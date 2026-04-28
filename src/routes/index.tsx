import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, ClipboardCheck, Lightbulb, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AulaTDAH — Identifica, interviene y evalúa" },
      {
        name: "description",
        content:
          "Herramienta gratuita en español para profesorado: identifica síntomas de TDAH y obtén medidas con métodos de evaluación.",
      },
      { property: "og:title", content: "AulaTDAH — Identifica, interviene y evalúa" },
      {
        property: "og:description",
        content:
          "Lista de verificación de síntomas de TDAH y recomendaciones prácticas para el aula.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <section className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          <Brain className="h-3.5 w-3.5" />
          Herramienta para profesorado
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Identifica el TDAH en el aula y actúa con criterio
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Marca los síntomas que observas en un estudiante y recibe al instante medidas
          concretas para aplicar en clase, junto con un método de evaluación para cada una.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/checklist">Comenzar evaluación</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/acerca">Cómo funciona</Link>
          </Button>
        </div>
      </section>

      <section className="mt-20 grid gap-6 sm:grid-cols-3">
        {[
          {
            icon: ClipboardCheck,
            title: "1. Observa y marca",
            text: "Lista de síntomas de inatención, hiperactividad e impulsividad agrupados por categoría.",
          },
          {
            icon: Lightbulb,
            title: "2. Recibe medidas",
            text: "Recomendaciones específicas según los síntomas marcados, listas para aplicar en el aula.",
          },
          {
            icon: BarChart3,
            title: "3. Evalúa el impacto",
            text: "Cada medida incluye un método claro para medir si está funcionando con el estudiante.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-card-foreground">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </section>

      <Alert className="mt-16">
        <AlertTitle>Aviso importante</AlertTitle>
        <AlertDescription>
          Esta herramienta es orientativa y está pensada como apoyo pedagógico. No constituye
          un diagnóstico clínico ni sustituye la valoración de profesionales sanitarios o de
          orientación educativa.
        </AlertDescription>
      </Alert>
    </main>
  );
}
