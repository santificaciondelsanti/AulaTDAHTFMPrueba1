## Objetivo

Reescribir los contenidos de la herramienta para que reflejen el marco teórico aportado: enfoque inclusivo bajo DUA, niveles de respuesta del Decreto 104/2018 y Orden 20/2019, evaluación por competencias (LOMLOE), y eliminación de prácticas controvertidas (economía de fichas). Añadir seguimiento socioemocional y ejecutivo, no sólo académico.

No se modifica la arquitectura ni el flujo: sólo cambian los contenidos (datos + textos visibles).

---

## Cambios por archivo

### 1. `src/data/adhd.ts` — reescritura del catálogo

**A. Añadir un nuevo campo a `Measure`:**
- `level: "universal" | "individualizada"` — indica si la medida es DUA de aula (niveles 1-2, beneficia a todo el grupo) o individualizada (niveles 3-4, requiere coordinación con Orientación / PAP).
- Mantener `evaluation` pero ampliarlo para incluir, donde proceda, indicadores **académicos**, **conductuales/ejecutivos** y **socioemocionales**.

**B. Revisar medidas existentes según teoría:**
- `asiento-estrategico`: añadir matiz "especialmente útil en etapas previas; en Secundaria combinar con autonomía organizativa". Nivel: universal.
- `instrucciones-segmentadas`: reforzar con cita a Hervás-Torres (2022) — instrucciones directas, breves, con apoyo visual, verificación de comprensión antes de iniciar. Nivel: universal.
- `apoyo-visual`, `pausas-activas`, `señales-no-verbales`, `turnos-estructurados`, `objeto-manipulativo`, `tiempo-tarea`: marcar como **universal (DUA)**, recalcando que benefician a toda el aula.
- `agenda-tareas`: enmarcarlo en "organización del entorno y del tiempo" con supervisión escuela-familia (Costa et al., 2026). Universal con seguimiento individual.
- `rubrica-revision`: vincular a evaluación por competencias LOMLOE y a "rúbricas que separan capacidades" (Ministerio de Educación, 2020) para fomentar metacognición. Universal.
- `refuerzo-positivo`: reescribir como **alabanza descriptiva específica**, inmediata, sin exageraciones; eliminar cualquier referencia a sistemas de puntos/canje (token economy) y añadir nota explícita: "se evita la economía de fichas por motivos éticos e inclusivos (Kohn, 2018)". Universal.
- `autoinstrucciones`: mantener, alineado con autorregulación ejecutiva.
- `examen-adaptado`: ajustar tiempo extra a **25-50 %** (Fundación CADAH, 2023), añadir preguntas cortas, negrita en palabras clave, espacios amplios. Nivel: individualizada (niveles 3-4 PAP).
- `tutoria-individual` y `coordinacion-orientacion`: vincular explícitamente al PAP (Orden 20/2019, art. 9), reuniones coincidentes con sesiones de evaluación y revisión flexible más allá de la evaluación final. Individualizada.

**C. Nuevas medidas a añadir:**
- `fragmentacion-tareas` — fragmentar tareas en pasos secuenciales con refuerzo tras cada paso, para mitigar memoria de trabajo ineficaz y prevenir abandono/ansiedad. Universal.
- `verificacion-comprension` — pedir parafraseo o ejemplo antes de iniciar la actividad (Hervás-Torres, 2022). Universal. *(O integrar en `instrucciones-segmentadas` para no duplicar — preferible integrar.)*
- `rubrica-competencial` — rúbrica por capacidades alineada con evaluación competencial LOMLOE para fomentar autoconciencia del propio aprendizaje. Universal.

**D. Síntomas:** mantener los 18 actuales, sólo reasignar `measureIds` donde la nueva medida `fragmentacion-tareas` aplique (especialmente `no-termina`, `planificacion-pobre`, `instrucciones-multiples`).

---

### 2. `src/routes/resultados.tsx` — mostrar nivel y evaluación multidimensional

- Añadir un `Badge` en cada `Measure` que muestre "Medida universal (DUA)" o "Medida individualizada (PAP)".
- Agrupar las medidas en dos secciones: primero las universales, después las individualizadas, con un párrafo introductorio breve que explique el principio de no segregación.
- En el bloque "Cómo evaluar su impacto", estructurar visualmente tres ejes cuando estén disponibles: **Académico**, **Conductual/ejecutivo**, **Socioemocional**.
- Aviso final actualizado: mencionar PAP, Decreto 104/2018 y coordinación con el Departamento de Orientación.

---

### 3. `src/routes/acerca.tsx` — contextualizar marco normativo

- Añadir tarjeta "Marco normativo y pedagógico" mencionando: Decreto 104/2018, Orden 20/2019, LOMLOE (evaluación por competencias) y principios DUA.
- Añadir tarjeta "Sobre la economía de fichas" explicando por qué la herramienta no recomienda token economy (motivación intrínseca, inclusión, autonomía moral; Kohn, 2018).
- Reforzar "Recomendaciones de uso" con seguimiento académico + conductual + socioemocional, y revisión flexible más allá de la evaluación final.

---

### 4. `src/routes/index.tsx` — ajuste menor del copy

- Subtítulo y bloques "1-2-3" alineados con la lógica: observar → medidas DUA / individualizadas → evaluación multidimensional.
- Aviso reforzado: orientativo, complementa al PAP y al Departamento de Orientación.

---

### 5. `src/routes/checklist.tsx`

- Sin cambios estructurales. Posible añadido de una nota previa: "marca tras varias semanas de observación sistemática".

---

## Fuera del alcance

- No se introducen sistemas de puntos/canje en ninguna medida.
- No se cambia el almacenamiento (sigue siendo single-session).
- No se añaden rutas nuevas ni dependencias.
- No se modifica el diseño visual general.
