import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download, ExternalLink, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const Route = createFileRoute("/recursos")({
  head: () => ({
    meta: [
      { title: "Recursos — AulaTDAH" },
      {
        name: "description",
        content:
          "Documentos de referencia, normativa y materiales descargables para el profesorado.",
      },
      { property: "og:title", content: "Recursos — AulaTDAH" },
      {
        property: "og:description",
        content: "Biblioteca de PDFs y materiales de apoyo sobre TDAH en Secundaria.",
      },
    ],
  }),
  component: RecursosPage,
});

/**
 * PROTOTIPO: lista de recursos PDF de referencia.
 *
 * Para añadir un PDF real:
 *   1. Sube el archivo con `lovable-assets create --file ruta/al.pdf > src/assets/mi.pdf.asset.json`
 *   2. Importa el JSON aquí y añade la entrada al array `resources`.
 *
 * Mientras tanto se muestran tarjetas marcadoras con botones deshabilitados.
 */
type Resource = {
  title: string;
  description: string;
  category: "Normativa" | "Guía" | "Artículo" | "Plantilla";
  // Cuando exista, sustituye el placeholder por la url de un asset:
  url?: string;
  pages?: number;
};

const resources: Resource[] = [
  {
    title: "Decreto 104/2018 — Inclusión educativa",
    description:
      "Marco normativo autonómico que define los niveles de respuesta y los principios DUA.",
    category: "Normativa",
  },
  {
    title: "Orden 20/2019 — Plan de Actuación Personalizado",
    description:
      "Procedimiento, contenidos mínimos y temporalización del PAP (art. 9 incluido).",
    category: "Normativa",
  },
  {
    title: "Guía GVA",
    description:
      "Adaptaciones metodológicas más frecuentes para alumnado con TDAH en Secundaria.",
    category: "Guía",
    url: "https://ceice.gva.es/documents/162640733/162655257/GuiaTDAH_Profesores_modificada.pdf/529df505-517c-41b3-84dd-2122f8e0cbb9", 
    pages: 28
  },
  {
    title: "Plantilla de registro de observación",
    description:
      "Hoja editable para línea base, seguimiento semanal y criterio de éxito.",
    category: "Plantilla",
  },
  {
    title: "Plantilla de acta de coordinación con Orientación",
    description:
      "Modelo breve para reuniones quincenales: objetivos, acuerdos, responsables, revisión.",
    category: "Plantilla",
  },
];

function ResourceCard({ resource }: { resource: Resource }) {
  const hasFile = Boolean(resource.url);
  return (
    <Card className="flex flex-col">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <FileText className="h-5 w-5" />
          </span>
          <Badge variant="secondary" className="text-xs font-normal">
            {resource.category}
          </Badge>
        </div>
        <CardTitle className="text-base leading-snug">{resource.title}</CardTitle>
      </CardHeader>
      <CardContent className="mt-auto space-y-3">
        <p className="text-sm text-muted-foreground">{resource.description}</p>
        <div className="flex flex-wrap gap-2">
          <Button
            asChild={hasFile}
            variant="outline"
            size="sm"
            disabled={!hasFile}
          >
            {hasFile ? (
              <a href={resource.url} target="_blank" rel="noreferrer">
                <ExternalLink className="mr-2 h-3.5 w-3.5" />
                Abrir
              </a>
            ) : (
              <span>
                <ExternalLink className="mr-2 h-3.5 w-3.5" />
                Próximamente
              </span>
            )}
          </Button>
          {hasFile && (
            <Button asChild variant="ghost" size="sm">
              <a href={resource.url} download>
                <Download className="mr-2 h-3.5 w-3.5" />
                Descargar
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function RecursosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recursos generales
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Documentos normativos, guías y plantillas de referencia para acompañar la
            implementación y la evaluación de las medidas.
          </p>
        </div>

      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <ResourceCard key={r.title} resource={r} />
        ))}
      </div><br></br><br></br><br></br>
 <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recursos compartidos
          </h1>
                    <p className="mt-2 max-w-2xl text-muted-foreground">
            En esta sección aparecen medidas y evaluaciones subidas por otros profesionales, a modo de repositorio público donde escoger medidas
            no dadas por la propia web e incluirlas en el apartado de mis medidas.
          </p><br></br>
          <Button variant="outline" disabled>
          <Plus className="mr-2 h-4 w-4" />
          Subir un recurso compartido
        </Button>
    </main>

  );
}

