export type Category = "inatencion" | "hiperactividad" | "impulsividad";

export interface Measure {
  id: string;
  title: string;
  description: string;
  /** Detailed evaluation method: instrument, frequency, baseline, success criteria. */
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

/**
 * Catálogo orientado a Educación Secundaria (ESO y Bachillerato).
 * Las medidas asumen un contexto de profesorado por materias, con rotación
 * de aulas, varios docentes implicados y coordinación con tutor/a y
 * Departamento de Orientación. Cada evaluación incluye instrumento,
 * periodicidad, línea base y criterio de éxito para poder valorar el impacto
 * de forma objetiva en sesiones de evaluación o reuniones de equipo docente.
 */
export const measures: Record<string, Measure> = {
  "asiento-estrategico": {
    id: "asiento-estrategico",
    title: "Ubicación estratégica en el aula",
    description:
      "Reubicar al estudiante en las primeras filas, en la zona central de visión del docente y lejos de ventanas, puerta o compañeros muy estimulantes. Acordar la ubicación con el equipo docente para mantenerla en todas las materias y evitar que sea percibida como castigo (justificarla como ayuda para la concentración).",
    evaluation:
      "Instrumento: registro de observación de 4 sesiones por semana (al menos 2 materias diferentes), anotando minutos de atención sostenida en intervalos de 10 minutos. Línea base: 1 semana antes del cambio. Seguimiento: 3 semanas. Criterio de éxito: aumento de ≥30 % del tiempo en tarea respecto a la línea base y reducción visible de redirecciones verbales. Revisar resultados en la siguiente reunión de equipo docente o tutoría.",
  },
  "instrucciones-segmentadas": {
    id: "instrucciones-segmentadas",
    title: "Instrucciones segmentadas y verificadas",
    description:
      "Dar las consignas de una en una, con frases cortas, escribir los pasos en la pizarra o en una tarjeta y pedir al estudiante que parafrasee la tarea antes de empezar. Especialmente útil en materias con enunciados largos (Lengua, Ciencias Sociales, problemas de Matemáticas/Física).",
    evaluation:
      "Instrumento: hoja de seguimiento con 3 indicadores por sesión: (1) inicia la tarea en <2 min, (2) realiza los pasos en orden, (3) entrega completa. Periodicidad: una sesión diaria durante 2 semanas. Línea base: 5 sesiones previas. Criterio de éxito: pasar de ≤40 % a ≥75 % de tareas iniciadas correctamente sin reexplicación individual.",
  },
  "apoyo-visual": {
    id: "apoyo-visual",
    title: "Apoyos visuales y organizadores gráficos",
    description:
      "Proporcionar mapas conceptuales, esquemas, líneas de tiempo, rúbricas visuales y plantillas de resolución (p. ej. estructura IRAS para problemas, esquema sujeto-verbo-complemento). Mantener visible en clase el guion de la unidad y los criterios de evaluación.",
    evaluation:
      "Instrumento: comparación de dos producciones equivalentes (con y sin organizador) usando la misma rúbrica de la materia. Periodicidad: una comparación por unidad didáctica durante un trimestre. Criterio de éxito: mejora de al menos 1 punto sobre 10 en la nota media y aumento del número de apartados completados.",
  },
  "agenda-tareas": {
    id: "agenda-tareas",
    title: "Agenda compartida y control de materiales",
    description:
      "Implantar el uso obligatorio de la agenda (papel o digital, p. ej. Google Classroom/Calendar) con anotación al final de cada clase. El tutor/a revisa diariamente al inicio de la jornada; la familia firma semanalmente. Acordar entre el equipo docente publicar siempre las tareas en el mismo lugar y formato.",
    evaluation:
      "Instrumento: hoja de control semanal con dos métricas: % de tareas anotadas correctamente (verificadas con el aula virtual) y % de tareas entregadas en plazo. Línea base: 2 semanas previas. Seguimiento mensual durante un trimestre. Criterio de éxito: alcanzar ≥85 % en ambas métricas y mantenerlo durante 3 semanas consecutivas.",
  },
  "rubrica-revision": {
    id: "rubrica-revision",
    title: "Rúbrica de autorrevisión antes de entregar",
    description:
      "Entregar al estudiante una pauta breve (5-7 ítems) específica de la materia para revisar su trabajo antes de entregarlo: ortografía y signos, datos del enunciado, unidades, presentación, comprobación del resultado. Reservar 3-5 minutos al final de la actividad para aplicarla.",
    evaluation:
      "Instrumento: contar errores por descuido (no de contenido) en 5 producciones escritas u exámenes consecutivos antes y después. Periodicidad: a lo largo de un trimestre. Criterio de éxito: reducción ≥40 % de los errores por descuido sin penalizar el tiempo total de la prueba.",
  },
  "pausas-activas": {
    id: "pausas-activas",
    title: "Pausas activas reguladas",
    description:
      "En sesiones largas (especialmente bloques de 90-110 min o exámenes), ofrecer micropausas cada 20-25 minutos: repartir material, salir 1 min al pasillo con permiso, ejercicios de respiración o estiramientos breves. Acordarlas con el grupo para no estigmatizar.",
    evaluation:
      "Instrumento: registro por sesión del número de episodios de levantarse sin permiso, conductas disruptivas y tareas terminadas en plazo. Periodicidad: diaria durante 2 semanas. Línea base: 1 semana previa. Criterio de éxito: reducción ≥50 % de incidencias disruptivas y mantenimiento o aumento de la productividad en clase.",
  },
  "señales-no-verbales": {
    id: "señales-no-verbales",
    title: "Código de señales no verbales privado",
    description:
      "Acordar en tutoría individual una señal discreta (un toque en la mesa, una tarjeta de color, un gesto) para reconducir la atención sin exponer al estudiante delante del grupo. Compartir el código con todo el equipo docente.",
    evaluation:
      "Instrumento: hoja de tally con dos columnas (redirecciones verbales vs. no verbales) en 3 materias diferentes durante 2 semanas. Criterio de éxito: las redirecciones verbales públicas se reducen ≥60 % y el estudiante reconoce la señal sin necesidad de repetirla.",
  },
  "tiempo-respuesta": {
    id: "tiempo-respuesta",
    title: "Técnica de demora en la respuesta",
    description:
      "Enseñar y practicar la regla \"para, piensa, responde\": contar mentalmente hasta 3 antes de levantar la mano o contestar; en pruebas escritas, subrayar la pregunta y reformularla antes de responder. Modelarlo en voz alta varias veces al inicio.",
    evaluation:
      "Instrumento: registro semanal del número de respuestas impulsivas (sin esperar el turno o sin leer el enunciado completo) en clase y de errores por mala lectura del enunciado en exámenes. Periodicidad: 4 semanas. Criterio de éxito: reducción ≥50 % de ambos indicadores.",
  },
  "turnos-estructurados": {
    id: "turnos-estructurados",
    title: "Sistema de turnos estructurado",
    description:
      "Sustituir el \"levantar la mano libre\" por sistemas predecibles: tarjetas con nombres, ronda por filas, palitos o herramientas digitales (Wheel of Names, ClassDojo). Combinar con tiempo de pensar-en-pareja-compartir antes de intervenir.",
    evaluation:
      "Instrumento: observación de 3 sesiones por semana, contando intervenciones realizadas en su turno frente al total. Línea base: 1 semana previa. Criterio de éxito: ≥80 % de intervenciones en turno durante 3 semanas consecutivas y disminución de quejas de compañeros.",
  },
  "refuerzo-positivo": {
    id: "refuerzo-positivo",
    title: "Refuerzo positivo específico e inmediato",
    description:
      "Reconocer de forma concreta (no genérica) las conductas objetivo en el momento en que ocurren: \"Has empezado el ejercicio en cuanto te lo he indicado, muy bien\". Adaptado a adolescentes: evitar elogios infantilizantes en público; preferir notas escritas, mensajes en el aula virtual o un sistema de puntos que se canjeen por privilegios académicos (elegir tema de exposición, eximir un control corto, etc.).",
    evaluation:
      "Instrumento: definir 2-3 conductas objetivo medibles (p. ej. \"trae el material\", \"entrega la tarea\", \"permanece sentado durante la explicación\") y registrar diariamente su presencia/ausencia. Línea base: 2 semanas. Seguimiento: 4 semanas. Criterio de éxito: aumento sostenido ≥40 % respecto a la línea base.",
  },
  "objeto-manipulativo": {
    id: "objeto-manipulativo",
    title: "Objeto manipulativo discreto autorizado",
    description:
      "Permitir un objeto silencioso (pelota antiestrés, blu-tack, anillo) para canalizar la necesidad de movimiento de manos durante explicaciones largas. Acordar normas claras: no se enseña, no se comparte, se retira si distrae a otros. Comunicarlo al equipo docente.",
    evaluation:
      "Instrumento: observación durante 10 sesiones de exposición/escucha activa, registrando movimientos disruptivos (golpear mesa, balancearse, jugar con material escolar). Criterio de éxito: reducción ≥50 % de movimientos disruptivos sin pérdida de seguimiento de la explicación, comprobada con preguntas orales rápidas al final.",
  },
  "tiempo-tarea": {
    id: "tiempo-tarea",
    title: "Temporizador visible y troceado de tareas",
    description:
      "Usar temporizador visual proyectado (Time Timer, classroomscreen.com) y dividir la actividad en bloques de 10-15 minutos con micrometas explícitas. Útil tanto en clase como en exámenes (avisos a la mitad y a 10 minutos del final).",
    evaluation:
      "Instrumento: porcentaje de actividades terminadas dentro del tiempo previsto y porcentaje de exámenes completados en su totalidad. Periodicidad: 2 semanas con temporizador y 1 semana sin él para comparar. Criterio de éxito: incremento ≥25 % en tareas finalizadas y reducción de preguntas en blanco en exámenes.",
  },
  "examen-adaptado": {
    id: "examen-adaptado",
    title: "Adaptación no significativa de exámenes",
    description:
      "Aplicar adaptaciones metodológicas avaladas por el Departamento de Orientación: tiempo extra (25-33 %), enunciados con tipografía clara y numerados, posibilidad de hacer el examen en dos sesiones, lectura del enunciado por el docente y ubicación con menos distractores. No modifican criterios de evaluación.",
    evaluation:
      "Instrumento: comparar nota y número de apartados completados en 3 exámenes con adaptación frente a 3 sin ella (o cursos previos). Recoger también la percepción del estudiante mediante una mini-encuesta (1-5) sobre claridad y tiempo. Criterio de éxito: mejora ≥1 punto sobre 10 y/o aumento del % de apartados respondidos, sin diferencias en el rigor de los criterios.",
  },
  "tutoria-individual": {
    id: "tutoria-individual",
    title: "Tutoría individualizada quincenal",
    description:
      "Reuniones breves (10-15 min) cada dos semanas entre tutor/a y estudiante para revisar agenda, entregas, calificaciones y bienestar. Establecer 1-2 objetivos concretos para la quincena siguiente y dejarlos por escrito.",
    evaluation:
      "Instrumento: ficha de seguimiento de tutoría con objetivos quincenales y % de cumplimiento. Triangular con datos del aula virtual (entregas, calificaciones) y aportaciones del equipo docente recogidas por correo o reunión mensual. Criterio de éxito: cumplimiento ≥70 % de los objetivos durante un trimestre.",
  },
  "coordinacion-orientacion": {
    id: "coordinacion-orientacion",
    title: "Coordinación con familia y Departamento de Orientación",
    description:
      "Activar el protocolo del centro: derivación a Orientación si no existe valoración previa, reunión inicial con la familia para acordar medidas y canal de comunicación quincenal (agenda, correo, plataforma). Si hay tratamiento clínico, mantener coordinación con el profesional externo con autorización familiar.",
    evaluation:
      "Instrumento: acta breve de cada reunión (objetivos, acuerdos, responsable, fecha de revisión) y cuestionario de seguimiento a familia y profesorado al final del trimestre (escala 1-5 sobre comunicación, ajuste y resultados). Criterio de éxito: puntuación media ≥4 y acuerdos cumplidos en ≥80 %.",
  },
  "autoinstrucciones": {
    id: "autoinstrucciones",
    title: "Entrenamiento en autoinstrucciones",
    description:
      "Enseñar al estudiante a verbalizar mentalmente las fases de una tarea: \"¿Qué tengo que hacer? ¿Cómo lo voy a hacer? ¿Lo estoy haciendo bien? ¿Cómo me ha salido?\". Modelar el proceso en voz alta y proporcionar una tarjeta recordatorio adherida a la mesa o estuche. Especialmente útil en resolución de problemas y comentarios de texto.",
    evaluation:
      "Instrumento: análisis cualitativo de 3 producciones por mes con una rúbrica de 4 ítems (planificación, ejecución, revisión, autoevaluación) puntuados 0-2. Criterio de éxito: paso de una puntuación media ≤3/8 a ≥6/8 en un trimestre.",
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
    measureIds: ["instrucciones-segmentadas", "apoyo-visual", "autoinstrucciones"],
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
    measureIds: ["rubrica-revision", "tiempo-tarea", "examen-adaptado"],
  },
  {
    id: "no-termina",
    category: "inatencion",
    label: "No termina las tareas o exámenes que empieza",
    description:
      "Abandona la actividad o deja preguntas en blanco al final del examen aunque sepa hacerlas.",
    measureIds: ["tiempo-tarea", "refuerzo-positivo", "instrucciones-segmentadas", "examen-adaptado"],
  },
  {
    id: "parece-no-escuchar",
    category: "inatencion",
    label: "Parece no escuchar cuando se le habla directamente",
    description:
      "Mira al docente pero su atención está en otro lugar; no recuerda la última indicación dada.",
    measureIds: ["señales-no-verbales", "asiento-estrategico"],
  },
  {
    id: "planificacion-pobre",
    category: "inatencion",
    label: "Dificultad para planificar trabajos largos y estudiar",
    description:
      "Deja para el último día proyectos, exposiciones o repaso de exámenes; no sabe trocear el contenido a estudiar.",
    measureIds: ["agenda-tareas", "tutoria-individual", "autoinstrucciones", "apoyo-visual"],
  },
  {
    id: "rendimiento-irregular",
    category: "inatencion",
    label: "Rendimiento académico muy irregular entre materias o pruebas",
    description:
      "Alterna calificaciones altas y bajas sin patrón claro, dependiendo del docente, formato del examen o estado del día.",
    measureIds: ["coordinacion-orientacion", "tutoria-individual", "examen-adaptado"],
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
