export type Category = "inatencion" | "hiperactividad" | "impulsividad";

export type MeasureLevel = "universal" | "individualizada";

export interface Measure {
  id: string;
  title: string;
  description: string;
  /**
   * Nivel de respuesta según Decreto 104/2018 y Orden 20/2019:
   * - "universal": medidas DUA aplicables a todo el grupo (niveles 1-2).
   * - "individualizada": medidas vinculadas al PAP, coordinadas con el
   *   Departamento de Orientación (niveles 3-4).
   */
  level: MeasureLevel;
  /**
   * Método de evaluación con indicadores estructurados. Cuando procede se
   * desglosa en tres ejes (académico, conductual/ejecutivo, socioemocional)
   * y, si aplica, instrumento, periodicidad, línea base y criterio de éxito.
   */
  evaluation: string;
}

export interface Symptom {
  id: string;
  category: Category;
  label: string;
  description: string;
  measureIds: string[];
}

export const categoryLabels: Record<Category, string> = {
  inatencion: "Inatención",
  hiperactividad: "Hiperactividad",
  impulsividad: "Impulsividad",
};

export const levelLabels: Record<MeasureLevel, string> = {
  universal: "Medida universal (DUA)",
  individualizada: "Medida individualizada (PAP)",
};

/**
 * Catálogo orientado a Educación Secundaria (ESO y Bachillerato), alineado con
 * el Decreto 104/2018, la Orden 20/2019 y el principio de evaluación por
 * competencias de la LOMLOE. Las medidas universales se diseñan bajo Diseño
 * Universal del Aprendizaje (DUA) para beneficiar al conjunto del aula y
 * evitar la segregación del alumnado NEAE. Las medidas individualizadas se
 * vinculan al Plan de Actuación Personalizado (PAP) y requieren coordinación
 * con el Departamento de Orientación y la familia.
 */
export const measures: Record<string, Measure> = {
  "asiento-estrategico": {
    id: "asiento-estrategico",
    title: "Ubicación estratégica en el aula",
    description:
      "Ubicar al alumno o alumna cerca del profesorado, en la zona central de visión, y alejarlo de distractores visuales y sonoros (ventanas, puerta, compañeros muy estimulantes). Justificar la decisión como apoyo a la concentración —no como castigo— y acordarla con el equipo docente para mantenerla en todas las materias. Especialmente útil en etapas previas; en Secundaria se combina con estrategias de autonomía organizativa.",
    level: "universal",
    evaluation:
      "Conductual/ejecutivo: registro de observación de 4 sesiones semanales (al menos 2 materias) anotando minutos de atención sostenida en intervalos de 10 min. Línea base de 1 semana previa; seguimiento de 3 semanas. Criterio de éxito: aumento ≥30 % del tiempo en tarea y reducción visible de redirecciones públicas.\nSocioemocional: comprobar en tutoría que el alumnado no percibe la ubicación como estigmatizante.",
  },
  "instrucciones-segmentadas": {
    id: "instrucciones-segmentadas",
    title: "Instrucciones directas, segmentadas y verificadas",
    description:
      "Dar las consignas de una en una, con frases cortas y apoyo visual (pizarra, tarjeta, aula virtual), y verificar la comprensión pidiendo al estudiante que parafrasee o ponga un ejemplo antes de iniciar la actividad. Hervás-Torres (2022) señala que la inclusión efectiva requiere instrucciones directas, breves y con apoyo visual, garantizando que el alumno ha comprendido la demanda antes de empezar para mitigar la distractibilidad.",
    level: "universal",
    evaluation:
      "Académico: hoja de seguimiento con 3 indicadores por sesión: (1) inicia la tarea en <2 min, (2) realiza los pasos en orden, (3) entrega completa. Línea base de 5 sesiones previas; seguimiento diario durante 2 semanas. Criterio de éxito: pasar de ≤40 % a ≥75 % de tareas iniciadas correctamente sin reexplicación individual.\nConductual/ejecutivo: reducción del número de preguntas \"¿qué hay que hacer?\" tras la consigna.",
  },
  "fragmentacion-tareas": {
    id: "fragmentacion-tareas",
    title: "Fragmentación de tareas en pasos secuenciales",
    description:
      "Dividir las tareas extensas en pasos cortos y explícitos, con refuerzo verbal positivo tras la realización de cada paso. La memoria de trabajo ineficaz y la dificultad para planificar hacen que las tareas largas sean percibidas como inasumibles, aumentando el riesgo de abandono y de sintomatología ansiosa. Aplicable tanto a nivel de aula (todo el grupo se beneficia) como en adaptaciones individuales: trabajos por proyectos, comentarios de texto, problemas largos o repaso de exámenes.",
    level: "universal",
    evaluation:
      "Académico: % de pasos completados respecto al total previsto en 5 tareas extensas consecutivas; comparar con producciones previas sin fragmentación.\nConductual/ejecutivo: número de abandonos antes de finalizar la tarea (línea base 2 semanas). Criterio de éxito: reducción ≥50 % de abandonos y aumento ≥30 % de pasos completados.\nSocioemocional: autoinforme breve (escala 1-5) sobre nivel de agobio percibido antes y después.",
  },
  "apoyo-visual": {
    id: "apoyo-visual",
    title: "Apoyos visuales y organizadores gráficos",
    description:
      "Proporcionar mapas conceptuales, esquemas, líneas de tiempo, rúbricas visuales y plantillas de resolución (p. ej. estructura IRAS para problemas, esquema sujeto-verbo-complemento). Mantener visibles en el aula el guion de la unidad y los criterios de evaluación competencial. Bajo principios DUA, este apoyo es beneficioso para todo el grupo, no sólo para el alumnado con TDAH.",
    level: "universal",
    evaluation:
      "Académico: comparar dos producciones equivalentes (con y sin organizador) usando la misma rúbrica competencial. Una comparación por unidad durante un trimestre. Criterio de éxito: mejora ≥1 punto sobre 10 en la nota media y aumento del número de apartados completados.\nConductual/ejecutivo: reducción del tiempo dedicado a \"empezar\" la tarea.",
  },
  "agenda-tareas": {
    id: "agenda-tareas",
    title: "Agenda compartida y supervisión escuela-familia",
    description:
      "Implantar el uso sistemático de la agenda (papel o digital, p. ej. Aules / Google Classroom) con anotación al final de cada clase, supervisión del tutor o tutora al inicio de la jornada y firma semanal de la familia. Acordar entre el equipo docente publicar siempre las tareas en el mismo lugar y formato. Intervenciones que combinan modificaciones del entorno con entrenamiento organizativo muestran mejoras consistentes en la implicación académica y el control conductual (Costa et al., 2026).",
    level: "universal",
    evaluation:
      "Académico: hoja de control semanal con dos métricas — % de tareas anotadas correctamente (verificadas con el aula virtual) y % de entregas en plazo. Línea base de 2 semanas; seguimiento mensual durante un trimestre. Criterio de éxito: ≥85 % en ambas métricas mantenido durante 3 semanas consecutivas.\nConductual/ejecutivo: observación de la autonomía organizativa (preparación de la mochila, uso autónomo de la agenda) registrada por familia y profesorado.",
  },
  "rubrica-revision": {
    id: "rubrica-revision",
    title: "Rúbrica de autorrevisión antes de entregar",
    description:
      "Entregar al alumnado una pauta breve (5-7 ítems) específica de la materia para revisar su trabajo antes de entregarlo: ortografía y signos, datos del enunciado, unidades, presentación, comprobación del resultado. Reservar 3-5 minutos finales para aplicarla. Se vincula al modelo de evaluación por competencias de la LOMLOE: el alumnado revisa su propio desempeño en lugar de centrarse sólo en detectar errores.",
    level: "universal",
    evaluation:
      "Académico: contar errores por descuido (no de contenido) en 5 producciones u exámenes consecutivos antes y después. Criterio de éxito: reducción ≥40 % de errores por descuido sin aumentar el tiempo total de la prueba.\nConductual/ejecutivo: % de tareas en las que el alumnado aplica la rúbrica de forma autónoma.",
  },
  "rubrica-competencial": {
    id: "rubrica-competencial",
    title: "Rúbrica competencial por capacidades",
    description:
      "Diseñar rúbricas que desglosen el desempeño en capacidades concretas (comprensión, análisis, expresión, autonomía, presentación) en lugar de una única calificación global. Compartirlas con el alumnado antes de la actividad. El uso de rúbricas específicas que separan capacidades permite al adolescente tomar conciencia de sus propios criterios de ejecución y fomenta la responsabilidad sobre su propio aprendizaje (Ministerio de Educación, 2020).",
    level: "universal",
    evaluation:
      "Académico: evolución de las puntuaciones por cada capacidad a lo largo del trimestre (no sólo nota global). Criterio de éxito: mejora ≥1 nivel en al menos 2 capacidades.\nSocioemocional: autoevaluación del alumnado contrastada con la del docente; reducción de la brecha como indicador de mejora del autoconcepto académico.",
  },
  "pausas-activas": {
    id: "pausas-activas",
    title: "Pausas activas reguladas",
    description:
      "En sesiones largas (bloques de 90-110 min o exámenes), ofrecer micropausas cada 20-25 minutos: repartir material, salir 1 min al pasillo con permiso, ejercicios de respiración o estiramientos breves. Acordarlas con todo el grupo para no estigmatizar al alumnado con TDAH.",
    level: "universal",
    evaluation:
      "Conductual/ejecutivo: registro por sesión del número de levantarse sin permiso, conductas disruptivas y tareas terminadas en plazo. Línea base de 1 semana; seguimiento diario durante 2 semanas. Criterio de éxito: reducción ≥50 % de incidencias disruptivas y mantenimiento o aumento de la productividad.\nSocioemocional: percepción del alumnado sobre cansancio/agobio (escala 1-5).",
  },
  "señales-no-verbales": {
    id: "señales-no-verbales",
    title: "Código de señales no verbales privado",
    description:
      "Acordar en tutoría individual una señal discreta (toque en la mesa, tarjeta de color, gesto) para reconducir la atención sin exponer al estudiante delante del grupo. Compartir el código con todo el equipo docente.",
    level: "universal",
    evaluation:
      "Conductual/ejecutivo: hoja de tally con dos columnas (redirecciones verbales públicas vs. señales no verbales) en 3 materias durante 2 semanas. Criterio de éxito: las redirecciones públicas se reducen ≥60 % y el estudiante reconoce la señal sin repetirla.\nSocioemocional: comprobar en tutoría que el alumnado se siente menos expuesto.",
  },
  "tiempo-respuesta": {
    id: "tiempo-respuesta",
    title: "Técnica de demora en la respuesta",
    description:
      "Enseñar y practicar la regla \"para, piensa, responde\": contar mentalmente hasta 3 antes de levantar la mano o contestar; en pruebas escritas, subrayar la pregunta y reformularla antes de responder. Modelarlo en voz alta varias veces al inicio.",
    level: "universal",
    evaluation:
      "Conductual/ejecutivo: registro semanal de respuestas impulsivas (sin esperar el turno o sin leer el enunciado completo) y de errores por mala lectura en exámenes. Seguimiento de 4 semanas. Criterio de éxito: reducción ≥50 % de ambos indicadores.",
  },
  "turnos-estructurados": {
    id: "turnos-estructurados",
    title: "Sistema de turnos estructurado",
    description:
      "Sustituir el \"levantar la mano libre\" por sistemas predecibles: tarjetas con nombres, ronda por filas, palitos o herramientas digitales (Wheel of Names). Combinar con tiempo de pensar-en-pareja-compartir antes de intervenir. Beneficia al conjunto del aula al equilibrar la participación.",
    level: "universal",
    evaluation:
      "Conductual/ejecutivo: observación de 3 sesiones por semana, contando intervenciones en turno frente al total. Línea base de 1 semana. Criterio de éxito: ≥80 % de intervenciones en turno durante 3 semanas consecutivas.\nSocioemocional: disminución de quejas de compañeros y mejora en dinámicas de grupo.",
  },
  "refuerzo-positivo": {
    id: "refuerzo-positivo",
    title: "Alabanza descriptiva específica e inmediata",
    description:
      "Reconocer de forma concreta, inmediata y sin exageraciones las conductas o logros observados: \"Has empezado el ejercicio en cuanto te lo he indicado\", \"Has organizado la respuesta en tres apartados claros\". El alumnado con TDAH suele presentar problemas motivacionales que alimentan el ciclo del fracaso; el refuerzo positivo descriptivo mejora la autoestima sin recurrir a recompensas externas. Importante: esta herramienta no incluye economías de fichas (token economy). Aunque puedan reducir conductas disruptivas, erosionan la motivación intrínseca y funcionan como un mecanismo de control que prioriza la sumisión sobre la autonomía moral (Kohn, 2018), siendo incompatibles con un enfoque inclusivo del alumnado neurodivergente.",
    level: "universal",
    evaluation:
      "Conductual/ejecutivo: definir 2-3 conductas objetivo medibles (p. ej. \"trae el material\", \"entrega la tarea\", \"permanece en su asiento durante la explicación\") y registrar su presencia/ausencia diariamente. Línea base de 2 semanas; seguimiento de 4 semanas. Criterio de éxito: aumento sostenido ≥40 % respecto a la línea base.\nSocioemocional: autoinforme breve sobre autoconcepto académico al inicio y al final del trimestre; mejora en la capacidad de afrontar errores sin abandono.",
  },
  "objeto-manipulativo": {
    id: "objeto-manipulativo",
    title: "Objeto manipulativo discreto autorizado",
    description:
      "Permitir un objeto silencioso (pelota antiestrés, blu-tack, anillo) para canalizar la necesidad de movimiento durante explicaciones largas. Acordar normas claras: no se enseña, no se comparte, se retira si distrae a otros. Comunicarlo al equipo docente. Especialmente útil en adolescentes con inquietud internalizada.",
    level: "universal",
    evaluation:
      "Conductual/ejecutivo: observación durante 10 sesiones de exposición/escucha activa, registrando movimientos disruptivos (golpear la mesa, balancearse, jugar con material). Criterio de éxito: reducción ≥50 % de movimientos disruptivos sin pérdida de seguimiento (comprobado con preguntas orales al final).",
  },
  "tiempo-tarea": {
    id: "tiempo-tarea",
    title: "Temporizador visible y micrometas",
    description:
      "Usar temporizador visual proyectado (Time Timer, classroomscreen.com) y dividir la actividad en bloques de 10-15 minutos con micrometas explícitas. Útil tanto en clase como en exámenes (avisos a la mitad y a 10 minutos del final).",
    level: "universal",
    evaluation:
      "Académico: % de actividades terminadas en el tiempo previsto y % de exámenes completados en su totalidad. Comparar 2 semanas con temporizador frente a 1 sin él. Criterio de éxito: incremento ≥25 % en tareas finalizadas y reducción de preguntas en blanco.\nConductual/ejecutivo: mejora en la capacidad de mantener atención sostenida antes de necesitar un descanso.",
  },
  "examen-adaptado": {
    id: "examen-adaptado",
    title: "Adaptación no significativa de exámenes",
    description:
      "Adaptaciones metodológicas avaladas por el Departamento de Orientación, sin modificar los criterios de evaluación. Según la Fundación CADAH (2023), las más frecuentes son: incremento de tiempo entre el 25 % y el 50 %, preguntas cortas, enunciados con palabras clave en negrita, tipografía clara y espacios de respuesta amplios. Otras opciones: realizar el examen en dos sesiones, lectura del enunciado por el docente y ubicación con menos distractores.",
    level: "individualizada",
    evaluation:
      "Académico: comparar nota y número de apartados completados en 3 exámenes con adaptación frente a 3 sin ella (o de cursos previos). Criterio de éxito: mejora ≥1 punto sobre 10 y/o aumento del % de apartados respondidos, manteniendo el mismo nivel de exigencia.\nSocioemocional: mini-encuesta al alumnado (escala 1-5) sobre claridad del enunciado, tiempo percibido y nivel de ansiedad ante el examen.",
  },
  "tutoria-individual": {
    id: "tutoria-individual",
    title: "Tutoría individualizada quincenal",
    description:
      "Reuniones breves (10-15 min) cada dos semanas entre tutor/a y estudiante para revisar agenda, entregas, calificaciones y bienestar. Establecer 1-2 objetivos concretos para la quincena siguiente y dejarlos por escrito. Permite ajustar las medidas del PAP con mayor frecuencia que las sesiones formales de evaluación previstas en la Orden 20/2019 (art. 9).",
    level: "individualizada",
    evaluation:
      "Académico: ficha de seguimiento con objetivos quincenales y % de cumplimiento; triangular con datos del aula virtual.\nConductual/ejecutivo: registro de autonomía organizativa y mantenimiento de atención sostenida aportado por el equipo docente.\nSocioemocional: registro cualitativo de autoconcepto, vínculos con iguales y tolerancia a la frustración. Criterio de éxito: cumplimiento ≥70 % de objetivos durante un trimestre.",
  },
  "coordinacion-orientacion": {
    id: "coordinacion-orientacion",
    title: "Coordinación con familia y Departamento de Orientación",
    description:
      "Activar el protocolo del centro conforme al Decreto 104/2018 y la Orden 20/2019: derivación a Orientación si no existe valoración previa, elaboración o revisión del PAP, reunión inicial con la familia y canal de comunicación quincenal (agenda, correo, plataforma). Si hay tratamiento clínico, mantener coordinación con el profesional externo con autorización familiar. Dado que el TDAH evoluciona en la adolescencia (la hiperactividad motora disminuye o se internaliza, mientras persisten inatención y disfunción ejecutiva), las medidas deben revisarse con flexibilidad y no únicamente en la evaluación final.",
    level: "individualizada",
    evaluation:
      "Académico/conductual/socioemocional: acta breve de cada reunión (objetivos, acuerdos, responsable, fecha de revisión) y cuestionario de seguimiento a familia y profesorado al final del trimestre (escala 1-5 sobre comunicación, ajuste y resultados en los tres ejes). Criterio de éxito: puntuación media ≥4 y acuerdos cumplidos en ≥80 %. Revisión del PAP cuando los indicadores muestren estancamiento o retroceso, sin esperar a la evaluación final.",
  },
  "autoinstrucciones": {
    id: "autoinstrucciones",
    title: "Entrenamiento en autoinstrucciones",
    description:
      "Enseñar al estudiante a verbalizar mentalmente las fases de una tarea: \"¿Qué tengo que hacer? ¿Cómo lo voy a hacer? ¿Lo estoy haciendo bien? ¿Cómo me ha salido?\". Modelar el proceso en voz alta y proporcionar una tarjeta recordatorio en la mesa o estuche. Especialmente útil en resolución de problemas, comentarios de texto y planificación de trabajos largos. Fortalece la autorregulación ejecutiva.",
    level: "universal",
    evaluation:
      "Académico/conductual: análisis de 3 producciones por mes con rúbrica de 4 ítems (planificación, ejecución, revisión, autoevaluación) puntuados 0-2. Criterio de éxito: paso de una puntuación media ≤3/8 a ≥6/8 en un trimestre.\nSocioemocional: aumento de las verbalizaciones positivas del alumnado sobre su propio proceso (\"sé cómo empezar\", \"puedo revisarlo yo\").",
  },
  "entrenamiento-organizativo": {
    id: "entrenamiento-organizativo",
    title: "Entrenamiento explícito en habilidades organizativas",
    description:
      "Trabajar de forma sistemática —en tutoría individual o en pequeños grupos— rutinas concretas de organización: preparación de la mochila la noche anterior con checklist, anotación de tareas con código de color por materia, planificación semanal con bloques de estudio, gestión del calendario de entregas y técnicas de troceado de contenido para exámenes. Las intervenciones que combinan modificaciones del entorno (asiento, agenda compartida) con entrenamiento explícito en habilidades organizativas muestran mejoras consistentes en la implicación académica y el control conductual del alumnado con TDAH. Complementa, no sustituye, a la agenda compartida y a la fragmentación de tareas.",
    level: "individualizada",
    evaluation:
      "Conductual/ejecutivo: checklist semanal de 5-6 rutinas (mochila preparada, agenda al día, materiales en clase, planificación de la semana, repaso fraccionado, entregas en plazo) cumplimentado por el alumnado y validado por familia o tutor/a. Línea base de 2 semanas; seguimiento durante un trimestre. Criterio de éxito: ≥80 % de rutinas cumplidas durante 4 semanas consecutivas y reducción de olvidos de material registrados por el equipo docente.\nSocioemocional: percepción de autoeficacia organizativa (escala 1-5) al inicio y al final del trimestre.",
  },
  "examen-dos-sesiones": {
    id: "examen-dos-sesiones",
    title: "División del examen en dos sesiones",
    description:
      "Cuando el examen excede la capacidad de atención sostenida del alumnado, fraccionarlo en dos sesiones (mismo día con descanso o en días distintos) acordando previamente el reparto de bloques con el Departamento de Orientación. Mantiene los mismos criterios de evaluación y nivel de exigencia. Útil sobre todo en pruebas extensas de fin de unidad o de evaluación, donde el cansancio agrava los errores por descuido y la sintomatología ansiosa.",
    level: "individualizada",
    evaluation:
      "Académico: comparar el % de apartados respondidos y los errores por descuido en 2 exámenes divididos frente a 2 en sesión única (o de cursos previos), aplicando la misma rúbrica. Criterio de éxito: aumento ≥20 % de apartados respondidos y reducción visible de errores por descuido sin merma del nivel de exigencia.\nSocioemocional: mini-encuesta al alumnado (escala 1-5) sobre fatiga, ansiedad y percepción de tiempo suficiente.",
  },
  "lectura-enunciado": {
    id: "lectura-enunciado",
    title: "Lectura y verificación del enunciado por el docente",
    description:
      "En pruebas escritas, el docente lee en voz alta el enunciado completo al inicio y, en pruebas largas, vuelve a recordar las indicaciones clave a la mitad. Comprobar individualmente que el alumnado ha comprendido la demanda antes de empezar (parafraseo breve). Reduce errores derivados de mala lectura, impulsividad lectora y dificultades de comprensión de instrucciones complejas.",
    level: "individualizada",
    evaluation:
      "Académico: registro del número de preguntas falladas por mala interpretación del enunciado en 3 exámenes con esta medida frente a 3 sin ella. Criterio de éxito: reducción ≥50 % de errores atribuibles a comprensión del enunciado, sin aumentar el tiempo total empleado.",
  },
  "seguimiento-socioemocional": {
    id: "seguimiento-socioemocional",
    title: "Seguimiento socioemocional cooperativo familia-profesorado",
    description:
      "Establecer un registro compartido (ficha mensual o cuestionario breve) en el que tutor/a, profesorado de referencia y familia anoten cualitativamente la evolución en tres indicadores difíciles de medir de forma objetiva: autoconcepto académico, estabilidad de vínculos con iguales y capacidad de afrontar la frustración (errores, correcciones, notas bajas) sin abandono de tarea ni episodios desregulados. Su importancia crece en la adolescencia, donde la hiperactividad disminuye o se internaliza y persisten inatención, disfunción ejecutiva y dificultades emocionales.",
    level: "individualizada",
    evaluation:
      "Socioemocional: ficha mensual con escala 1-5 en los tres indicadores (autoconcepto, vínculos, tolerancia a la frustración) cumplimentada por familia y tutor/a; comentario cualitativo breve. Triangular con autoinforme del alumnado en tutoría. Criterio de éxito: mejora sostenida ≥1 punto en al menos dos indicadores y ausencia de episodios disruptivos graves durante 6 semanas consecutivas.\nConductual/ejecutivo: registro de tareas abandonadas tras error o corrección; descenso ≥40 % respecto a la línea base.",
  },
};

export const symptoms: Symptom[] = [
  // Inatención
  {
    id: "distrae-estimulos",
    category: "inatencion",
    label: "Se distrae con facilidad ante estímulos del aula",
    description:
      "Cualquier ruido, movimiento en el pasillo o conversación de compañeros interrumpe su trabajo, especialmente en sesiones de tarde o de larga duración.",
    measureIds: ["asiento-estrategico", "señales-no-verbales", "pausas-activas"],
  },
  {
    id: "instrucciones-multiples",
    category: "inatencion",
    label: "Dificultad para seguir instrucciones de varios pasos",
    description:
      "Comienza la tarea pero olvida los pasos intermedios u objetivos finales; frecuente en problemas de ciencias, comentarios de texto y prácticas de laboratorio.",
    measureIds: ["instrucciones-segmentadas", "fragmentacion-tareas", "apoyo-visual", "autoinstrucciones"],
  },
  {
    id: "olvida-materiales",
    category: "inatencion",
    label: "Olvida materiales, deberes o entregas con frecuencia",
    description:
      "Pierde apuntes, no trae el libro de la materia o no anota las tareas, lo que genera retrasos acumulativos en varias asignaturas.",
    measureIds: ["agenda-tareas", "apoyo-visual", "tutoria-individual"],
  },
  {
    id: "errores-descuido",
    category: "inatencion",
    label: "Comete errores por descuido en trabajos y exámenes",
    description:
      "Salta enunciados, confunde signos, copia mal datos o no revisa, pese a dominar el contenido.",
    measureIds: ["rubrica-revision", "rubrica-competencial", "tiempo-tarea", "examen-adaptado"],
  },
  {
    id: "no-termina",
    category: "inatencion",
    label: "No termina las tareas o exámenes que empieza",
    description:
      "Abandona la actividad o deja preguntas en blanco al final del examen aunque sepa hacerlas.",
    measureIds: ["fragmentacion-tareas", "tiempo-tarea", "refuerzo-positivo", "examen-adaptado"],
  },
  {
    id: "parece-no-escuchar",
    category: "inatencion",
    label: "Parece no escuchar cuando se le habla directamente",
    description:
      "Mira al docente pero su atención está en otro lugar; no recuerda la última indicación dada.",
    measureIds: ["señales-no-verbales", "asiento-estrategico", "instrucciones-segmentadas"],
  },
  {
    id: "planificacion-pobre",
    category: "inatencion",
    label: "Dificultad para planificar trabajos largos y estudiar",
    description:
      "Deja para el último día proyectos, exposiciones o repaso de exámenes; no sabe trocear el contenido a estudiar.",
    measureIds: ["fragmentacion-tareas", "agenda-tareas", "tutoria-individual", "autoinstrucciones"],
  },
  {
    id: "rendimiento-irregular",
    category: "inatencion",
    label: "Rendimiento académico muy irregular entre materias o pruebas",
    description:
      "Alterna calificaciones altas y bajas sin patrón claro, dependiendo del docente, formato del examen o estado del día.",
    measureIds: ["coordinacion-orientacion", "tutoria-individual", "rubrica-competencial", "examen-adaptado"],
  },

  // Hiperactividad
  {
    id: "se-levanta",
    category: "hiperactividad",
    label: "Se levanta del asiento o cambia de postura constantemente",
    description:
      "Pasea por el aula, se balancea o cambia de postura durante explicaciones y trabajo individual.",
    measureIds: ["pausas-activas", "refuerzo-positivo", "objeto-manipulativo"],
  },
  {
    id: "habla-exceso",
    category: "hiperactividad",
    label: "Habla en exceso durante la clase",
    description:
      "Mantiene un flujo verbal continuo con compañeros y docentes, incluso durante explicaciones.",
    measureIds: ["señales-no-verbales", "turnos-estructurados", "refuerzo-positivo"],
  },
  {
    id: "mueve-manos-pies",
    category: "hiperactividad",
    label: "Mueve manos o pies de forma persistente",
    description:
      "Tamborilea en la mesa, balancea la silla o juega con bolígrafos, llaves o el estuche.",
    measureIds: ["objeto-manipulativo", "pausas-activas"],
  },
  {
    id: "actividad-motora",
    category: "hiperactividad",
    label: "Inquietud interna y dificultad para estar tranquilo",
    description:
      "Refiere o muestra incomodidad en sesiones largas; común en adolescentes que ya controlan algo el movimiento pero mantienen agitación interna.",
    measureIds: ["pausas-activas", "objeto-manipulativo", "tutoria-individual"],
  },
  {
    id: "dificultad-tareas-tranquilas",
    category: "hiperactividad",
    label: "Dificultad para realizar actividades en silencio",
    description:
      "En lectura silenciosa, exámenes o trabajo individual prolongado se distrae, habla o interrumpe.",
    measureIds: ["pausas-activas", "tiempo-tarea", "asiento-estrategico"],
  },

  // Impulsividad
  {
    id: "interrumpe",
    category: "impulsividad",
    label: "Interrumpe explicaciones o conversaciones de otros",
    description:
      "Se entromete en intervenciones de compañeros o docentes sin esperar el turno.",
    measureIds: ["turnos-estructurados", "señales-no-verbales", "refuerzo-positivo"],
  },
  {
    id: "responde-antes",
    category: "impulsividad",
    label: "Responde antes de que se termine la pregunta",
    description:
      "Lanza la respuesta sin escuchar el enunciado completo, también en exámenes escritos (no lee bien).",
    measureIds: ["tiempo-respuesta", "turnos-estructurados", "rubrica-revision"],
  },
  {
    id: "espera-turno",
    category: "impulsividad",
    label: "Dificultad para esperar su turno",
    description:
      "Se frustra en dinámicas de grupo, debates o exposiciones cuando no le toca intervenir.",
    measureIds: ["turnos-estructurados", "refuerzo-positivo"],
  },
  {
    id: "decisiones-rapidas",
    category: "impulsividad",
    label: "Toma decisiones precipitadas sin valorar consecuencias",
    description:
      "Actúa sin pensar, lo que provoca conflictos con compañeros, expulsiones de aula o errores evitables en pruebas.",
    measureIds: ["tiempo-respuesta", "rubrica-revision", "autoinstrucciones", "tutoria-individual"],
  },
  {
    id: "regulacion-emocional",
    category: "impulsividad",
    label: "Reacciones emocionales desproporcionadas ante la frustración",
    description:
      "Ante una corrección, una nota baja o un conflicto reacciona con enfado, llanto o desconexión que altera la dinámica de aula.",
    measureIds: ["tutoria-individual", "coordinacion-orientacion", "señales-no-verbales"],
  },
];
