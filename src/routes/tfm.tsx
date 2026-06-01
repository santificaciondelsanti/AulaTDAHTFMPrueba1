import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/tfm")({
  head: () => ({
    meta: [
      { title: "TFM — AulaTDAH" },
      {
        name: "description",
        content:
          "Trabajo Fin de Máster: marco teórico, propuesta y discusión sobre TDAH en Secundaria.",
      },
      { property: "og:title", content: "TFM — AulaTDAH" },
      {
        property: "og:description",
        content: "Memoria del TFM asociado a la herramienta AulaTDAH.",
      },
    ],
  }),
  component: TfmPage,
});

/**
 * PROTOTIPO: contenedor del TFM. Añade aquí los textos definitivos.
 *
 * Cada sección es una <section> con un id que permite enlazar desde el índice
 * lateral. Edita libremente los <p> o sustitúyelos por componentes propios.
 */

const toc = [
  { id: "resumen", label: "1. Resumen" },
  { id: "introduccion", label: "2. Introducción" },
  { id: "marco-teorico", label: "3. Marco teórico" },
  { id: "propuesta", label: "4. Propuesta de intervención" },
  { id: "seguimiento", label: "5. Seguimiento y evaluación" },
  { id: "discusion", label: "6. Discusión y conclusiones" },
  { id: "referencias", label: "7. Referencias" },
];

function TfmPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            Trabajo Fin de Máster
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            TDAH en Educación Secundaria: medidas, evaluación e inclusión
          </h1>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Espacio reservado para la memoria escrita del TFM. Sustituye los textos
            marcadores por el contenido definitivo a medida que avance la redacción.
          </p>
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        {/* Índice lateral */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Índice
          </p>
          <nav className="space-y-1 border-l border-border pl-3 text-sm">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block py-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Contenido */}
        <article className="space-y-10">
          <Section id="resumen" title="1. Resumen">
            <p>
              [Resumen del TFM — añade aquí entre 150 y 250 palabras: contexto,
              objetivos, metodología, resultados principales y conclusiones.]
            </p>
            <p className="text-sm text-muted-foreground">
              Palabras clave: TDAH · Educación Secundaria · DUA · PAP · evaluación
              competencial · inclusión.
            </p>
          </Section>

          <Section id="introduccion" title="2. Introducción">
            <p>
              [Plantea la motivación del trabajo, la relevancia del TDAH en la etapa de
              Secundaria y la pregunta de investigación o reto profesional al que
              responde la herramienta AulaTDAH.]
            </p>
          </Section>

          <Section id="marco-teorico" title="3. Marco teórico">
            <p>
              [Desarrolla el marco normativo (Decreto 104/2018, Orden 20/2019, LOMLOE),
              el modelo de Diseño Universal del Aprendizaje y las evidencias sobre
              intervenciones escolares (Yegencik et al., 2025; Costa et al., 2026;
              Hervás-Torres, 2022; Fundación CADAH, 2023).]
            </p>
            <p>
              [Discute la economía de fichas desde una perspectiva ética e inclusiva
              (Kohn, 2018) y justifica su exclusión del catálogo de medidas.]
            </p>
          </Section>

          <Section id="propuesta" title="4. Propuesta de intervención">
            <p>
              [Describe el catálogo de medidas universales (DUA) e individualizadas
              (PAP), su clasificación y los criterios de selección. Vincula cada bloque
              con los síntomas observables en el alumnado de Secundaria.]
            </p>
          </Section>

          <Section id="seguimiento" title="5. Seguimiento y evaluación de las medidas">
            <p>
              [Explica el sistema de seguimiento multidimensional: indicadores
              académicos (rendimiento competencial, entregas en plazo, errores por
              descuido), conductuales/ejecutivos (autonomía organizativa, atención
              sostenida, espera de turno) y socioemocionales (autoconcepto, vínculos,
              tolerancia a la frustración).]
            </p>
            <p>
              [Justifica la necesidad de revisiones flexibles del PAP más allá de la
              evaluación final, especialmente en perfiles TDAH cuya sintomatología
              evoluciona en la adolescencia.]
            </p>
          </Section>

          <Section id="discusion" title="6. Discusión y conclusiones">
            <p>
              [Analiza los puntos fuertes y limitaciones de la propuesta, su viabilidad
              en centros reales y futuras líneas de mejora.]
            </p>
          </Section>

          <Section id="referencias" title="7. Referencias">
            <p className="text-sm text-muted-foreground">
              [Lista bibliográfica en formato APA 7. Incluye al menos: Yegencik et al.
              (2025), Costa et al. (2026), Hervás-Torres (2022), Fundación CADAH
              (2023), Kohn (2018), Ministerio de Educación (2020), Decreto 104/2018,
              Orden 20/2019, LOMLOE.]
            </p>
          </Section>
        </article>
      </div>
    </main>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card id={id} className="scroll-mt-24">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm leading-relaxed text-foreground">
        {children}
        <Separator className="mt-4 opacity-50" />
        <p className="text-xs text-muted-foreground">
          Editable — sustituye este texto por el contenido definitivo de la sección.
        </p>
      </CardContent>
    </Card>
  );
}
