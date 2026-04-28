export type Category = "inatencion" | "hiperactividad" | "impulsividad";

export interface Measure {
  id: string;
  title: string;
  description: string;
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

export const measures: Record<string, Measure> = {
  "asiento-estrategico": {
    id: "asiento-estrategico",
    title: "Asiento estratégico",
    description:
      "Sentar al estudiante cerca del profesor y lejos de ventanas, puertas o compañeros muy estimulantes para reducir distractores.",
    evaluation:
      "Registro semanal de minutos de atención sostenida durante una actividad de lectura o escritura, comparando antes y después del cambio de ubicación.",
  },
  "instrucciones-segmentadas": {
    id: "instrucciones-segmentadas",
    title: "Instrucciones segmentadas",
    description:
      "Dividir las consignas en pasos cortos, darlas de una en una y pedir al estudiante que las repita con sus palabras.",
    evaluation:
      "Porcentaje de tareas iniciadas correctamente sin necesidad de repetir la consigna, registrado durante una semana.",
  },
  "apoyo-visual": {
    id: "apoyo-visual",
    title: "Apoyos visuales",
    description:
      "Usar pictogramas, esquemas, listas de verificación y horarios visibles en la mesa o pizarra.",
    evaluation:
      "Lista de cotejo de tareas completadas con y sin apoyo visual durante dos semanas consecutivas.",
  },
  "agenda-tareas": {
    id: "agenda-tareas",
    title: "Agenda y control de materiales",
    description:
      "Revisión diaria de la agenda y de la mochila al final de la jornada, con la firma del profesor y la familia.",
    evaluation:
      "Registro semanal de materiales y tareas anotadas correctamente sobre el total esperado.",
  },
  "rubrica-revision": {
    id: "rubrica-revision",
    title: "Rúbrica de autorrevisión",
    description:
      "Entregar una pauta sencilla para que el estudiante revise su trabajo (ortografía, datos, presentación) antes de entregarlo.",
    evaluation:
      "Comparar el número de errores por descuido en producciones escritas antes y después de aplicar la rúbrica.",
  },
  "pausas-activas": {
    id: "pausas-activas",
    title: "Pausas activas reguladas",
    description:
      "Ofrecer pausas breves de movimiento cada 15-20 minutos (repartir material, borrar la pizarra, estiramientos).",
    evaluation:
      "Observación diaria de los episodios de levantarse sin permiso antes y después de implementar las pausas.",
  },
  "señales-no-verbales": {
    id: "señales-no-verbales",
    title: "Señales no verbales",
    description:
      "Acordar con el estudiante una señal discreta (gesto, tarjeta) para reconducir la atención sin interrumpir la clase.",
    evaluation:
      "Frecuencia semanal de redirecciones verbales necesarias antes y después del acuerdo.",
  },
  "tiempo-respuesta": {
    id: "tiempo-respuesta",
    title: "Técnica del tiempo de espera",
    description:
      "Pedir explícitamente que cuente hasta 3 antes de responder o levantar la mano para fomentar la reflexión.",
    evaluation:
      "Registro del número de respuestas impulsivas (sin esperar el turno) por sesión durante dos semanas.",
  },
  "turnos-estructurados": {
    id: "turnos-estructurados",
    title: "Turnos estructurados",
    description:
      "Usar palitos con nombres, ruleta o lista visible para asignar turnos de palabra de forma predecible.",
    evaluation:
      "Porcentaje de intervenciones realizadas en su turno frente al total de intervenciones por sesión.",
  },
  "refuerzo-positivo": {
    id: "refuerzo-positivo",
    title: "Refuerzo positivo inmediato",
    description:
      "Reconocer de forma específica e inmediata las conductas adecuadas mediante elogios, puntos o economía de fichas.",
    evaluation:
      "Registro semanal de conductas objetivo conseguidas y comparación de la línea base con el seguimiento.",
  },
  "objeto-manipulativo": {
    id: "objeto-manipulativo",
    title: "Objeto manipulativo discreto",
    description:
      "Permitir un objeto silencioso (pelota antiestrés, masilla) para canalizar la necesidad de movimiento de manos.",
    evaluation:
      "Observación de la reducción de movimientos disruptivos en la mesa durante actividades de escucha activa.",
  },
  "tiempo-tarea": {
    id: "tiempo-tarea",
    title: "Tiempo visible de tarea",
    description:
      "Usar temporizador visual (Time Timer, reloj de arena) para acotar el tiempo dedicado a cada actividad.",
    evaluation:
      "Porcentaje de actividades terminadas dentro del tiempo previsto, registrado durante dos semanas.",
  },
};

export const symptoms: Symptom[] = [
  // Inatención
  {
    id: "distrae-estimulos",
    category: "inatencion",
    label: "Se distrae con facilidad ante estímulos externos",
    description: "Cualquier ruido, movimiento o conversación cercana interrumpe su trabajo.",
    measureIds: ["asiento-estrategico", "señales-no-verbales", "pausas-activas"],
  },
  {
    id: "instrucciones-multiples",
    category: "inatencion",
    label: "Dificultad para seguir instrucciones de varios pasos",
    description: "Comienza la tarea pero olvida los pasos intermedios o el objetivo final.",
    measureIds: ["instrucciones-segmentadas", "apoyo-visual"],
  },
  {
    id: "olvida-materiales",
    category: "inatencion",
    label: "Olvida materiales, deberes o entregas con frecuencia",
    description: "Pierde libros, hojas o no anota las tareas para casa.",
    measureIds: ["agenda-tareas", "apoyo-visual"],
  },
  {
    id: "errores-descuido",
    category: "inatencion",
    label: "Comete errores por descuido en sus trabajos",
    description: "Salta enunciados, no revisa, confunde signos o copia mal.",
    measureIds: ["rubrica-revision", "tiempo-tarea"],
  },
  {
    id: "no-termina",
    category: "inatencion",
    label: "No termina las tareas que empieza",
    description: "Abandona la actividad antes de completarla aunque sepa hacerla.",
    measureIds: ["tiempo-tarea", "refuerzo-positivo", "instrucciones-segmentadas"],
  },
  {
    id: "parece-no-escuchar",
    category: "inatencion",
    label: "Parece no escuchar cuando se le habla directamente",
    description: "Mira al profesor pero su atención está en otro lugar.",
    measureIds: ["señales-no-verbales", "asiento-estrategico"],
  },

  // Hiperactividad
  {
    id: "se-levanta",
    category: "hiperactividad",
    label: "Se levanta del asiento en momentos inapropiados",
    description: "Pasea por el aula durante explicaciones o trabajo individual.",
    measureIds: ["pausas-activas", "refuerzo-positivo"],
  },
  {
    id: "habla-exceso",
    category: "hiperactividad",
    label: "Habla en exceso",
    description: "Mantiene un flujo verbal continuo, incluso en silencio.",
    measureIds: ["señales-no-verbales", "turnos-estructurados"],
  },
  {
    id: "mueve-manos-pies",
    category: "hiperactividad",
    label: "Mueve manos o pies constantemente en su asiento",
    description: "Tamborilea, balancea la silla o juega con objetos sin parar.",
    measureIds: ["objeto-manipulativo", "pausas-activas"],
  },
  {
    id: "actividad-motora",
    category: "hiperactividad",
    label: "Muestra una actividad motora elevada y continua",
    description: "Parece movido por un motor, le cuesta mantenerse quieto.",
    measureIds: ["pausas-activas", "objeto-manipulativo"],
  },

  // Impulsividad
  {
    id: "interrumpe",
    category: "impulsividad",
    label: "Interrumpe conversaciones o actividades de otros",
    description: "Se entromete en juegos, charlas o explicaciones del profesor.",
    measureIds: ["turnos-estructurados", "señales-no-verbales"],
  },
  {
    id: "responde-antes",
    category: "impulsividad",
    label: "Responde antes de que se termine la pregunta",
    description: "Lanza la respuesta sin escuchar el enunciado completo.",
    measureIds: ["tiempo-respuesta", "turnos-estructurados"],
  },
  {
    id: "espera-turno",
    category: "impulsividad",
    label: "Dificultad para esperar su turno",
    description: "Se frustra en filas, juegos o dinámicas con turnos.",
    measureIds: ["turnos-estructurados", "refuerzo-positivo"],
  },
  {
    id: "decisiones-rapidas",
    category: "impulsividad",
    label: "Toma decisiones precipitadas sin valorar consecuencias",
    description: "Actúa sin pensar, lo que provoca conflictos o errores evitables.",
    measureIds: ["tiempo-respuesta", "rubrica-revision"],
  },
];
