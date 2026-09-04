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
  pregunta4: string; // Diagnóstico médico previo
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
  | 20 // Diagnostico medico previo
  | 21 // Impacto en vida diaria
  | 22 // Probabilidad de que el dolor se vuelva cronico
  | 23 // Objetivos 30 dias
  | 24 // Resumen nivel de dolor / movilidad
  | 25 // Transformacion postural (¡No se trata solo de disminuir el dolor!)
  | 26 // Proyeccion de resultados (Hoy vs 21 dias)
  | 27 // Loader analizando respuestas
  | 28; // Etapa final unificada: Plan listo, Metodología/Calendario, Testimonios, Bonuses, Oferta & Checkout

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
  20: 78,
  21: 82,
  22: 86,
  23: 90,
  24: 94,
  25: 97,
  26: 100,
  27: 100,
  28: 100,
};

// Punto final del funnel. Acción posterior a definir en un paso futuro. No implementar redirección a WhatsApp ni ningún otro destino aquí todavía.
export function alFinalizarFunnel(respuestas: QuizResponses) {
  // TODO: acción final a definir
  console.log("Respuestas registradas en DOLOR CIAO:", respuestas);
}
