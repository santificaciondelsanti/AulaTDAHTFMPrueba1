import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/acerca")({
  head: () => ({
    meta: [
      { title: "Acerca de AulaTDAH" },
      {
        name: "description",
        content:
          "Propósito, alcance y limitaciones de AulaTDAH, herramienta orientativa para el profesorado.",
      },
      { property: "og:title", content: "Acerca de AulaTDAH" },
      {
        property: "og:description",
        content: "Conoce el propósito, alcance y limitaciones de esta herramienta educativa.",
      },
    ],
  }),
  component: AcercaPage,
});

function AcercaPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Acerca de AulaTDAH
      </h1>
      <p className="mt-4 text-muted-foreground">
        Una herramienta gratuita y de uso libre, pensada para apoyar al profesorado en la
        observación, intervención y evaluación de posibles indicadores de TDAH en el aula.
      </p>

      <div className="mt-10 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>¿Para qué sirve?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-foreground">
            <p>
              Permite registrar de forma estructurada las conductas observadas en un
              estudiante y traducirlas en un plan de medidas concretas para el aula, cada
              una con un método de evaluación claro para comprobar su eficacia.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>¿Qué NO es?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-foreground">
            <p>
              No es una prueba diagnóstica ni una escala validada clínicamente. No sustituye
              la valoración de profesionales de la salud mental ni del equipo de orientación
              educativa. Las decisiones sobre adaptaciones formales o derivaciones deben
              tomarse siempre con apoyo de estos profesionales.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Privacidad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-foreground">
            <p>
              No se almacena información sobre los estudiantes. Toda la información existe
              únicamente en tu navegador durante la sesión actual y desaparece al cerrarla.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recomendaciones de uso</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-foreground">
            <p>
              Realiza la observación durante varias semanas antes de marcar los síntomas.
              Comparte el plan resultante con el equipo docente y la familia, y mantén el
              registro de evaluación al menos durante dos o tres semanas para valorar el
              impacto real de las medidas.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <Button asChild size="lg">
          <Link to="/checklist">Comenzar evaluación</Link>
        </Button>
      </div>
    </main>
  );
}
