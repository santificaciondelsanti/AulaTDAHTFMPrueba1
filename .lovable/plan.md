## Herramienta TDAH para profesores de español

Una utilidad web de una sola sesión, en español, que ayuda al profesorado a:
1. Identificar posibles síntomas de TDAH en un estudiante mediante una lista de verificación.
2. Recibir medidas concretas recomendadas según los síntomas marcados.
3. Conocer un método de evaluación para cada medida aplicada.

Sin cuentas, sin base de datos: todo vive en el estado de la sesión actual.

---

### Estructura de la aplicación

Tres rutas separadas (mejor SEO y navegación clara):

- `/` — Inicio: explicación de la herramienta, aviso (no sustituye diagnóstico clínico) y botón "Comenzar evaluación".
- `/checklist` — Lista de verificación de síntomas agrupados por categoría.
- `/resultados` — Resumen de síntomas marcados + medidas recomendadas con su método de evaluación.
- `/acerca` — Breve página informativa sobre el propósito, fuentes orientativas y limitaciones.

---

### Flujo del usuario

```text
Inicio  →  Checklist (marcar síntomas observados)  →  Resultados (medidas + evaluación)
                                                          ↓
                                              Imprimir / Reiniciar
```

---

### Página de checklist

Síntomas organizados en tres categorías clásicas, presentados como tarjetas con casillas:

- **Inatención** (p. ej. "Se distrae con facilidad ante estímulos externos", "Dificultad para seguir instrucciones de varios pasos", "Olvida materiales o tareas con frecuencia", "Comete errores por descuido en trabajos escritos").
- **Hiperactividad** (p. ej. "Se levanta del asiento en momentos inapropiados", "Habla en exceso", "Mueve manos o pies constantemente").
- **Impulsividad** (p. ej. "Interrumpe conversaciones o actividades", "Responde antes de terminar la pregunta", "Dificultad para esperar su turno").

Cada síntoma con una breve descripción al pasar el cursor. Botón "Ver recomendaciones" al final.

---

### Página de resultados

Para cada síntoma marcado, mostrar una tarjeta con:

- **Síntoma identificado**
- **Medida(s) recomendada(s)** — acciones concretas en el aula (p. ej. para "se distrae fácilmente": sentar cerca del profesor, eliminar estímulos visuales del entorno, usar señales no verbales).
- **Método de evaluación** — cómo medir si la medida funciona (p. ej. registro semanal de minutos de atención sostenida durante lectura, comparación de errores por descuido antes/después en una rúbrica).

Las medidas se agrupan al final por categoría para evitar duplicados cuando varios síntomas comparten la misma intervención.

Acciones disponibles: "Imprimir / Guardar como PDF" (usando `window.print` con estilos de impresión) y "Nueva evaluación".

---

### Diseño

- Estilo limpio y profesional, apropiado para entorno educativo.
- Paleta serena (azules/verdes suaves) sobre fondo claro, usando los tokens de tema existentes.
- Componentes shadcn ya disponibles: Card, Checkbox, Button, Badge, Separator, Alert (para el aviso legal).
- Totalmente responsive y con vista de impresión optimizada para los resultados.

---

### Detalles técnicos

- Rutas en `src/routes/`: `index.tsx`, `checklist.tsx`, `resultados.tsx`, `acerca.tsx`, cada una con su propio `head()` (título y descripción en español).
- Cabecera/navegación compartida en un componente `src/components/Header.tsx` montado dentro de `__root.tsx`.
- Catálogo de síntomas → medidas → evaluaciones en un archivo de datos tipado: `src/data/adhd.ts` (estructura: `Symptom { id, category, label, description, measureIds[] }` y `Measure { id, title, description, evaluation }`).
- Estado de los síntomas marcados: `useState` en la página de checklist, pasado a `/resultados` vía `search params` (`useSearch`) para que el resultado sea compartible/recargable sin backend.
- Estilos de impresión en `styles.css` para ocultar navegación al imprimir.
- Aviso visible en inicio y resultados: la herramienta es orientativa y no sustituye una valoración clínica profesional.
