import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categoryLabels, symptoms, type Category } from "@/data/adhd";

export const Route = createFileRoute("/checklist")({
  head: () => ({
    meta: [
      { title: "Lista de verificación de síntomas — AulaTDAH" },
      {
        name: "description",
        content:
          "Marca los síntomas observados en el aula para obtener medidas y métodos de evaluación.",
      },
      { property: "og:title", content: "Lista de verificación de síntomas — AulaTDAH" },
      {
        property: "og:description",
        content: "Checklist de síntomas de TDAH agrupados por inatención, hiperactividad e impulsividad.",
      },
    ],
  }),
  component: ChecklistPage,
});

const categories: Category[] = ["inatencion", "hiperactividad", "impulsividad"];

function ChecklistPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSubmit = () => {
    navigate({
      to: "/resultados",
      search: { ids: Array.from(selected).join(",") },
    });
  };

  const total = selected.size;

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Lista de verificación
        </h1>
        <p className="mt-3 text-muted-foreground">
          Marca todos los síntomas que hayas observado en el estudiante de forma frecuente
          durante las últimas semanas. Puedes seleccionar tantos como sea necesario.
        </p>
      </header>

      <div className="space-y-8">
        {categories.map((cat) => {
          const items = symptoms.filter((s) => s.category === cat);
          return (
            <Card key={cat}>
              <CardHeader>
                <CardTitle className="text-xl">{categoryLabels[cat]}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((symptom) => {
                  const checked = selected.has(symptom.id);
                  return (
                    <label
                      key={symptom.id}
                      htmlFor={symptom.id}
                      className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent/40"
                    >
                      <Checkbox
                        id={symptom.id}
                        checked={checked}
                        onCheckedChange={() => toggle(symptom.id)}
                        className="mt-0.5"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">
                          {symptom.label}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {symptom.description}
                        </p>
                      </div>
                    </label>
                  );
                })}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="sticky bottom-4 mt-10 flex items-center justify-between rounded-xl border border-border bg-background/95 p-4 shadow-lg backdrop-blur">
        <p className="text-sm text-muted-foreground">
          {total === 0
            ? "Aún no has marcado ningún síntoma."
            : `${total} síntoma${total === 1 ? "" : "s"} marcado${total === 1 ? "" : "s"}.`}
        </p>
        <div className="flex gap-2">
          <Button asChild variant="ghost">
            <Link to="/">Cancelar</Link>
          </Button>
          <Button onClick={handleSubmit} disabled={total === 0}>
            Ver recomendaciones
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  );
}
