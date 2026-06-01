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
          "Marco normativo y pedagógico de AulaTDAH: DUA, Decreto 104/2018, Orden 20/2019 y LOMLOE.",
      },
      { property: "og:title", content: "Acerca de AulaTDAH" },
      {
        property: "og:description",
        content: "Propósito, marco normativo y limitaciones de la herramienta.",
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
       Herramienta conceptual que busca dar recursos a docentes para poder elaborar, evaluar, gestionar y cooperar a
       la hora de crear medidas para el alumnado TDAH.
      </p>

      <div className="mt-10 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Usos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-foreground">
            <p>
              Permite registrar de forma estructurada las conductas observadas y traducirlas
              en un listado de medidas para el aula, distinguiendo entre medidas universales
              (DUA, aplicables a todo el grupo) e individualizadas (vinculadas al Plan de
              Actuación Personalizado), cada una con un método de evaluación que incluye
              indicadores académicos, conductuales/ejecutivos y socioemocionales.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Marco normativo y pedagógico</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-foreground">
            <p>
              Las medidas se estructuran siguiendo el Decreto 104/2018 y la Orden 20/2019,
              que definen los niveles de respuesta a la inclusión educativa, y se diseñan
              bajo los principios del Diseño Universal del Aprendizaje (DUA) para minimizar
              barreras al aprendizaje y la participación.
            </p>
            <p>
              La evaluación del impacto sigue el modelo competencial de la LOMLOE: el éxito
              no se reduce a la nota numérica, sino que valora el desempeño integral del
              alumnado en distintas capacidades.
            </p>
            <p>
              Las medidas individualizadas se vinculan al PAP. La Orden 20/2019 prevé
              reuniones de revisión coincidentes con las sesiones de evaluación; la
              herramienta recomienda, además, revisiones flexibles cuando los indicadores
              muestren estancamiento, sin esperar a la evaluación final.
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
              la valoración de profesionales de la salud mental ni del Departamento de
              Orientación. Las decisiones sobre adaptaciones formales, derivaciones o
              elaboración del PAP deben tomarse siempre con su apoyo.
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
              Realiza la observación sistemática durante varias semanas antes de marcar
              síntomas. Comparte el plan con el equipo docente y la familia, y mantén el
              registro de evaluación durante al menos dos o tres semanas en los tres ejes:
              académico (entregas en plazo, errores por descuido, evolución competencial),
              conductual/ejecutivo (autonomía organizativa, atención sostenida, espera de
              turno) y socioemocional (autoconcepto académico, tolerancia a la frustración,
              vínculos con iguales).
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <Button asChild size="lg">
          <Link to="/feedback">Comenzar evaluación</Link>
        </Button>
      </div>

    </main>
    
  );
}
