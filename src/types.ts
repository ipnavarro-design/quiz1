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
  | 4 // Informacion Movilidad
  | 5 // Altura
  | 6 // Peso
  | 7 // Nombre
  | 8 // Metodos Previos
  | 9 // Localizacion del dolor
  | 10 // Zonas de dolor en movimiento (adaptacion ejercicios)
  | 11 // Dias dolor semana
  | 12 // Nivel de Actividad
  | 13 // Lugar de Rutinas
  | 14 // Tiempo con el dolor
  | 15 // Intensidad del dolor
  | 16 // Duracion deseada de rutinas
  | 17 // Educacion tiempo (10-15 min)
  | 18 // Horas de sueno
  | 19 // Consumo de agua + Info
  | 20 // Impacto en vida diaria
  | 21 // Prevención y riesgos
  | 22 // Objetivos 30 dias
  | 23 // Resumen nivel de rigidez / movilidad
  | 24 // Transformacion postural
  | 25 // Proyeccion de resultados (Hoy vs 21 dias)
  | 26 // Loader analizando respuestas
  | 27; // Etapa final unificada: Plan listo, Metodología/Calendario, Testimonios, Bonuses, Oferta & Checkout

export const PROGRESS_MAP: Record<ScreenIndex, number> = {
  0: 0,
  1: 4,
  2: 8,
  3: 10,
  4: 12,
  5: 16,
  6: 20,
  7: 24,
  8: 28,
  9: 32,
  10: 36,
  11: 40,
  12: 44,
  13: 48,
  14: 52,
  15: 56,
  16: 60,
  17: 64,
  18: 68,
  19: 72,
  20: 80,
  21: 84,
  22: 88,
  23: 92,
  24: 96,
  25: 100,
  26: 100,
  27: 100,
};

// Punto final del funnel. Acción posterior a definir en un paso futuro. No implementar redirección a WhatsApp ni ningún otro destino aquí todavía.
export function alFinalizarFunnel(respuestas: QuizResponses) {
  // TODO: acción final a definir
  console.log("Respuestas registradas en DOLOR CIAO:", respuestas);
}
