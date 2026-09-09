export interface QuizResponses {
  genero: string; // Género
  edad: string; // Rango de edad
  conoceMovilidad: string; // Si conoce el método de Movilidad
  altura: number; // Altura en cm
  peso: number; // Peso en kg
  nombre: string;
  email: string;
  metodosPrevios: string[]; // Métodos intentados sin resultados
  pregunta1: string; // Localización del dolor
  zonasDolorMovimiento: string[]; // Zonas con dolor al realizar movimientos
  diasDolorSemana: string; // Días con dolor en la última semana
  nivelActividad: string; // Nivel de actividad física semanal
  lugarRutinas: string; // Lugar preferido para rutinas
  pregunta2: string; // Tiempo con el dolor
  pregunta3: string; // Intensidad del dolor hoy
  duracionRutinas: string; // Duración deseada de las rutinas
  horasSueno: string; // Horas de sueño y descanso
  consumoAgua: string; // Consumo de agua diario
  pregunta4: string[]; // Diagnósticos médicos previos (selección múltiple)
  pregunta5: string; // Impacto en la vida diaria
  objetivos30Dias: string[]; // Objetivos para los próximos 30 días
}

export type ScreenIndex =
  | 0 // Hero
  | 1 // Genero
  | 2 // Edad
  | 3 // Conoce Movilidad
  | 4 // Informacion Movilidad (Metodo 100% Biomecanico)
  | 5 // Localizacion del dolor
  | 6 // Zonas de dolor en movimiento
  | 7 // Dias molestia semana
  | 8 // Impacto en la vida diaria
  | 9 // Slide de refuerzo / prueba social intermedia
  | 10 // Metodos Previos
  | 11 // Nombre
  | 12 // Altura
  | 13 // Peso
  | 14 // Nivel de Actividad
  | 15 // Lugar de Rutinas
  | 16 // Tiempo con el dolor
  | 17 // Intensidad del dolor
  | 18 // Duracion deseada de rutinas
  | 19 // Educacion tiempo (10-15 min)
  | 20 // Horas de sueno
  | 21 // Consumo de agua
  | 22 // Prevención y riesgos
  | 23 // Objetivos 30 dias
  | 24 // Resumen nivel de rigidez / movilidad
  | 25 // Transformacion postural
  | 26 // Proyeccion de resultados (Hoy vs 21 dias)
  | 27 // Loader analizando respuestas
  | 28; // Etapa final unificada: Plan listo, Metodología/Calendario, Testimonios, Bonuses, Oferta & Checkout

export const PROGRESS_MAP: Record<ScreenIndex, number> = {
  0: 0,
  1: 12,
  2: 22,
  3: 30,
  4: 38,
  5: 46,
  6: 52,
  7: 58,
  8: 64,
  9: 66,
  10: 70,
  11: 74,
  12: 77,
  13: 80,
  14: 83,
  15: 85,
  16: 87,
  17: 89,
  18: 91,
  19: 92,
  20: 94,
  21: 95,
  22: 96,
  23: 97,
  24: 98,
  25: 99,
  26: 100,
  27: 100,
  28: 100,
};

// Punto final del funnel. Acción posterior a definir en un paso futuro. No implementar redirección a WhatsApp ni ningún otro destino aquí todavía.
export function alFinalizarFunnel(respuestas: QuizResponses) {
  // TODO: acción final a definir
  console.log("Respuestas registradas en DOLOR CIAO:", respuestas);
}
