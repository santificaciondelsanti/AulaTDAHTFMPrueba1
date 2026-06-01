import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Importamos el componente Input de shadcn
import { useState } from "react"; // Importamos useState para manejar el texto
import { FileText, Download, ExternalLink, Plus } from "lucide-react";

export const Route = createFileRoute("/Mis medidas")({
  head: () => ({
    meta: [
      { title: "MEDIDAS" },
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
  // Estado para guardar el valor del cuadro de texto
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Mis medidas
      </h1>
      
      <p className="mt-2 text-muted-foreground">
        Visualiza el listado del alumnado y gestiona sus medidas específicas.
      </p>

      {/* Cuadro de texto (Textbox) añadido */}


      <div className="mt-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Listado</CardTitle>
          </CardHeader>
                <div className="mt-1">
        <Input
          type="text"
          placeholder="Buscar alumnado por nombre..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md" // Limita el ancho del textbox para que no ocupe toda la pantalla
        />
      </div> <br></br>
          <CardContent className="space-y-2 text-sm text-foreground">
            <p>
              Aquí aparecería un listado del alumnado con medidas compartidas con el o la docente que accede, junto con las propias. Desde esta sección se accede a los 'perfiles' de cada alumno o alumna, donde se encontrarian anotaciones,
              Medidas aplicadas junto con registros evaluativos y enlaces a ITACA para comprobar informes sociopsicopedagógicos y PAPs.  
            </p>
            
            {/* Feedback visual opcional para comprobar que el textbox funciona */}
            {searchQuery && (
              <p className="mt-2 text-xs text-muted-foreground italic">
                Buscando: "{searchQuery}"
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <Button asChild size="lg">
          <Link to="/checklist">Nueva evaluación</Link>
        </Button>
      </div>
<br></br><br></br>
 <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recursos compartidos
          </h1>
                    <p className="mt-2 max-w-2xl text-muted-foreground">
          En esta sección aparecería un listado de medidas compartidas 'descargadas', listas para añadir al plan actual de cada alumno o alumna.
          </p><br></br>
          <Button variant="outline" disabled>
          <Plus className="mr-2 h-4 w-4" />
          Añadir nuevas medidas
        </Button>
    </main>



  );
}