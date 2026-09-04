import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { QuizResponses, ScreenIndex, alFinalizarFunnel } from './types';
import { Screen0Hero } from './screens/Screen0Hero';
import { Screen0Gender } from './screens/Screen0Gender';
import { Screen0Age } from './screens/Screen0Age';
import { ScreenKnowsMobility } from './screens/ScreenKnowsMobility';
import { ScreenMobilityInfo } from './screens/ScreenMobilityInfo';
import { ScreenHeight } from './screens/ScreenHeight';
import { ScreenWeight } from './screens/ScreenWeight';
import { ScreenName } from './screens/ScreenName';
import { ScreenPreviousMethods } from './screens/ScreenPreviousMethods';
import { Screen1Location } from './screens/Screen1Location';
import { ScreenMovementJoints } from './screens/ScreenMovementJoints';
import { ScreenWeeklyPainDays } from './screens/ScreenWeeklyPainDays';
import { ScreenActivityLevel } from './screens/ScreenActivityLevel';
import { ScreenRoutineLocation } from './screens/ScreenRoutineLocation';
import { Screen2Duration } from './screens/Screen2Duration';
import { Screen3Intensity } from './screens/Screen3Intensity';
import { ScreenRoutineDuration } from './screens/ScreenRoutineDuration';
import { ScreenSleepImpact } from './screens/ScreenSleepImpact';
import { ScreenWaterIntake } from './screens/ScreenWaterIntake';
import { ScreenTimeEducation } from './screens/ScreenTimeEducation';
import { Screen4Diagnosis } from './screens/Screen4Diagnosis';
import { Screen5Impact } from './screens/Screen5Impact';
import { ScreenRisksWarning } from './screens/ScreenRisksWarning';
import { Screen6Goals } from './screens/Screen6Goals';
import { ScreenPainLevelSummary } from './screens/ScreenPainLevelSummary';
import { ScreenPostureTransformation } from './screens/ScreenPostureTransformation';
import { ScreenResultProjection } from './screens/ScreenResultProjection';
import { ScreenAnalyzingLoader } from './screens/ScreenAnalyzingLoader';
import { ScreenUnifiedFinalPlan } from './screens/ScreenUnifiedFinalPlan';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenIndex>(0);
  const [isFinalSubmitted, setIsFinalSubmitted] = useState(false);

  // In-memory state storing all responses throughout the funnel
  const [respuestas, setRespuestas] = useState<QuizResponses>({
    genero: '',
    edad: '',
    conoceMovilidad: '',
    altura: 172,
    peso: 74,
    nombre: '',
    email: '',
    metodosPrevios: [],
    pregunta1: '',
    zonasDolorMovimiento: [],
    diasDolorSemana: '',
    nivelActividad: '',
    lugarRutinas: '',
    pregunta2: '',
    pregunta3: '',
    duracionRutinas: '',
    horasSueno: '',
    consumoAgua: '',
    pregunta4: '',
    pregunta5: '',
    objetivos30Dias: [],
  });

  const goToNextScreen = () => {
    setCurrentScreen((prev) => Math.min(prev + 1, 28) as ScreenIndex);
  };

  const goToPreviousScreen = () => {
    setCurrentScreen((prev) => Math.max(prev - 1, 0) as ScreenIndex);
  };

  // Step 1: Género
  const handleSelectGenero = (option: string) => {
    setRespuestas((prev) => ({ ...prev, genero: option }));
    goToNextScreen();
  };

  // Step 2: Edad
  const handleSelectEdad = (option: string) => {
    setRespuestas((prev) => ({ ...prev, edad: option }));
    goToNextScreen();
  };

  // Step 3: ¿Conocés la Movilidad?
  const handleSelectConoceMovilidad = (option: string) => {
    setRespuestas((prev) => ({ ...prev, conoceMovilidad: option }));
    goToNextScreen();
  };

  // Step 4: Información sobre la Movilidad
  const handleContinueMobilityInfo = () => {
    goToNextScreen();
  };

  // Step 5: Altura
  const handleSelectHeight = (heightCm: number) => {
    setRespuestas((prev) => ({ ...prev, altura: heightCm }));
    goToNextScreen();
  };

  // Step 6: Peso
  const handleSelectWeight = (weightKg: number) => {
    setRespuestas((prev) => ({ ...prev, peso: weightKg }));
    goToNextScreen();
  };

  // Step 7: Nombre
  const handleSelectName = (name: string) => {
    setRespuestas((prev) => ({ ...prev, nombre: name }));
    goToNextScreen();
  };

  // Step 8: Métodos previos
  const handleSelectMetodosPrevios = (methods: string[]) => {
    setRespuestas((prev) => ({ ...prev, metodosPrevios: methods }));
    goToNextScreen();
  };

  // Step 9: Localización del dolor
  const handleSelectPregunta1 = (option: string) => {
    setRespuestas((prev) => ({ ...prev, pregunta1: option }));
    goToNextScreen();
  };

  // Step 10: Zonas de dolor al realizar movimientos
  const handleSelectZonasDolorMovimiento = (zones: string[]) => {
    setRespuestas((prev) => ({ ...prev, zonasDolorMovimiento: zones }));
    goToNextScreen();
  };

  // Step 10: Días con dolor en la semana
  const handleSelectDiasDolorSemana = (option: string) => {
    setRespuestas((prev) => ({ ...prev, diasDolorSemana: option }));
    goToNextScreen();
  };

  // Step 11: Nivel de actividad física
  const handleSelectNivelActividad = (option: string) => {
    setRespuestas((prev) => ({ ...prev, nivelActividad: option }));
    goToNextScreen();
  };

  // Step 12: Lugar de rutinas
  const handleSelectLugarRutinas = (option: string) => {
    setRespuestas((prev) => ({ ...prev, lugarRutinas: option }));
    goToNextScreen();
  };

  // Step 14: Tiempo con el dolor
  const handleSelectPregunta2 = (option: string) => {
    setRespuestas((prev) => ({ ...prev, pregunta2: option }));
    goToNextScreen();
  };

  // Step 15: Intensidad del dolor
  const handleSelectPregunta3 = (option: string) => {
    setRespuestas((prev) => ({ ...prev, pregunta3: option }));
    goToNextScreen();
  };

  // Step 16: Duración deseada de rutinas
  const handleSelectDuracionRutinas = (option: string) => {
    setRespuestas((prev) => ({ ...prev, duracionRutinas: option }));
    goToNextScreen();
  };

  // Step 17: Educación de tiempo: 10-15 min al día
  const handleContinueTimeEdu = () => {
    goToNextScreen();
  };

  // Step 18: Horas de sueño
  const handleSelectHorasSueno = (option: string) => {
    setRespuestas((prev) => ({ ...prev, horasSueno: option }));
    goToNextScreen();
  };

  // Step 19: Consumo de agua
  const handleSelectConsumoAgua = (option: string) => {
    setRespuestas((prev) => ({ ...prev, consumoAgua: option }));
    goToNextScreen();
  };

  // Step 20: Diagnóstico médico previo
  const handleSelectPregunta4 = (option: string) => {
    setRespuestas((prev) => ({ ...prev, pregunta4: option }));
    goToNextScreen();
  };

  // Step 21: Impacto en vida diaria
  const handleSelectPregunta5 = (option: string) => {
    setRespuestas((prev) => ({ ...prev, pregunta5: option }));
    goToNextScreen();
  };

  // Step 22: Riesgos de no tratar el dolor
  const handleContinueRisks = () => {
    goToNextScreen();
  };

  // Step 23: Objetivos para los próximos 30 días
  const handleSelectObjetivos30Dias = (goals: string[]) => {
    setRespuestas((prev) => ({ ...prev, objetivos30Dias: goals }));
    goToNextScreen();
  };

  // Step 24: Resumen nivel de dolor
  const handleContinueSummary = () => {
    goToNextScreen();
  };

  // Step 25: Transformación postural (¡No se trata solo de disminuir el dolor!)
  const handleContinuePosture = () => {
    goToNextScreen();
  };

  // Step 26: Proyección de resultados (Hoy vs 21 días)
  const handleContinueProjection = () => {
    goToNextScreen();
  };

  // Step 27: Loader de análisis completado -> Etapa unificada final
  const handleLoaderComplete = () => {
    goToNextScreen();
  };

  // Step 28: Acción final / checkout
  const handleFinalCheckoutAction = () => {
    setIsFinalSubmitted(true);
    alFinalizarFunnel(respuestas);
    window.location.href = 'https://dolorciaopago.myshopify.com/cart/46514408620129:1?checkout';
  };

  return (
    <main
      id="dolor-ciao-funnel-root"
      className="min-h-screen bg-[#F1F5F9] text-[#1E293B] flex flex-col justify-between items-center px-3 py-4 sm:py-8 selection:bg-[#0E4A72]/20"
    >
      {/* Top Editorial Brand Bar matching reference image */}
      <header className="w-full max-w-[448px] mx-auto flex items-center justify-between pb-3 mb-2 border-b border-[#CBD5E1]">
        <div className="flex items-center gap-2">
          {currentScreen > 0 && currentScreen < 27 && (
            <button
              type="button"
              id="btn-back-screen"
              onClick={goToPreviousScreen}
              aria-label="Volver a la pregunta anterior"
              className="p-1.5 -ml-1 text-slate-500 hover:text-[#0E4A72] transition-colors rounded-lg hover:bg-slate-200/60 flex items-center justify-center cursor-pointer active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Logo with anatomical silhouette & typography matching the image */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-8 relative flex items-center justify-center shrink-0">
              <svg viewBox="0 0 40 48" className="w-full h-full" fill="none" stroke="#0E4A72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                {/* Back silhouette */}
                <path d="M16 6C17 12 18 16 23 18C28 20 28 26 27 34" strokeWidth="2.4" />
                <path d="M16 6C15 12 12 16 9 20C6 24 6 30 9 36" strokeWidth="2.4" />
                {/* Spine dots */}
                <circle cx="19" cy="18" r="1.5" fill="#0E4A72" stroke="none" />
                <circle cx="19" cy="23" r="1.5" fill="#0E4A72" stroke="none" />
                <circle cx="19" cy="28" r="1.5" fill="#0E4A72" stroke="none" />
                {/* Lumbar target concentric rings */}
                <circle cx="19" cy="35" r="5.5" stroke="#0E4A72" strokeWidth="1.8" fill="none" />
                <circle cx="19" cy="35" r="2.8" stroke="#0E4A72" strokeWidth="1.4" fill="none" />
                <circle cx="19" cy="35" r="1" fill="#0E4A72" stroke="none" />
              </svg>
            </div>
            <div>
              <span 
                className="font-extrabold text-[17.5px] text-[#0E4A72] tracking-tight leading-none block"
                style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
              >
                DolorCiao
              </span>
              <p className="text-[9px] uppercase tracking-[0.16em] font-semibold text-[#526677] mt-0.5">
                Especialistas en Salud Lumbar
              </p>
            </div>
          </div>
        </div>

        {/* Certificate Badge from the image */}
        <div className="text-right">
          <div className="flex items-center gap-1 bg-[#EAF3F1] border border-[#BCE0DA] text-[#36776F] px-2 py-0.5 rounded-md shadow-2xs">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M2 12h20" />
            </svg>
            <span className="text-[8.5px] uppercase tracking-[0.15em] font-bold">
              Certificado
            </span>
          </div>
        </div>
      </header>

      {/* Centered Single-Column Container fixed to 448px max width with Editorial Card Frame */}
      <div className="w-full max-w-[448px] mx-auto relative bg-[#FFFFFF] rounded-[24px] border border-[#CBD5E1] p-4 sm:p-6 shadow-[0_8px_30px_rgba(14,74,114,0.06)] my-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="w-full"
          >
            {/* 0. Hero */}
            {currentScreen === 0 && (
              <Screen0Hero onContinue={goToNextScreen} />
            )}

            {/* 1. Género */}
            {currentScreen === 1 && (
              <Screen0Gender onSelectOption={handleSelectGenero} />
            )}

            {/* 2. Edad */}
            {currentScreen === 2 && (
              <Screen0Age onSelectOption={handleSelectEdad} />
            )}

            {/* 3. ¿Conocés la Movilidad? */}
            {currentScreen === 3 && (
              <ScreenKnowsMobility onSelectOption={handleSelectConoceMovilidad} />
            )}

            {/* 4. Información sobre la Movilidad */}
            {currentScreen === 4 && (
              <ScreenMobilityInfo onContinue={handleContinueMobilityInfo} />
            )}

            {/* 5. Altura (A.1) */}
            {currentScreen === 5 && (
              <ScreenHeight
                defaultHeight={respuestas.altura}
                onContinue={handleSelectHeight}
              />
            )}

            {/* 6. Peso actual (A.2) */}
            {currentScreen === 6 && (
              <ScreenWeight
                defaultWeight={respuestas.peso}
                onContinue={handleSelectWeight}
              />
            )}

            {/* 7. Nombre (A.3) */}
            {currentScreen === 7 && (
              <ScreenName
                defaultName={respuestas.nombre}
                onContinue={handleSelectName}
              />
            )}

            {/* 8. Métodos intentados sin resultados */}
            {currentScreen === 8 && (
              <ScreenPreviousMethods onContinue={handleSelectMetodosPrevios} />
            )}

            {/* 9. Localización del dolor */}
            {currentScreen === 9 && (
              <Screen1Location onSelectOption={handleSelectPregunta1} />
            )}

            {/* 10. Zonas de dolor al realizar movimientos (Adaptación y protección) */}
            {currentScreen === 10 && (
              <ScreenMovementJoints
                dolorPrevio={respuestas.pregunta1}
                initialSelected={respuestas.zonasDolorMovimiento}
                onContinue={handleSelectZonasDolorMovimiento}
              />
            )}

            {/* 11. Días con dolor en la última semana */}
            {currentScreen === 11 && (
              <ScreenWeeklyPainDays onSelectOption={handleSelectDiasDolorSemana} />
            )}

            {/* 12. Nivel de actividad física (B.4) */}
            {currentScreen === 12 && (
              <ScreenActivityLevel onSelectOption={handleSelectNivelActividad} />
            )}

            {/* 13. Lugar preferido para rutinas (B.5) */}
            {currentScreen === 13 && (
              <ScreenRoutineLocation onSelectOption={handleSelectLugarRutinas} />
            )}

            {/* 14. Tiempo con el dolor */}
            {currentScreen === 14 && (
              <Screen2Duration onSelectOption={handleSelectPregunta2} />
            )}

            {/* 15. Intensidad del dolor */}
            {currentScreen === 15 && (
              <Screen3Intensity onSelectOption={handleSelectPregunta3} />
            )}

            {/* 16. Duración deseada de rutinas (B.7) */}
            {currentScreen === 16 && (
              <ScreenRoutineDuration onSelectOption={handleSelectDuracionRutinas} />
            )}

            {/* 17. Educación tiempo: 10-15 min al día (C.12) */}
            {currentScreen === 17 && (
              <ScreenTimeEducation onContinue={handleContinueTimeEdu} />
            )}

            {/* 18. Horas de sueño y descanso (B.8) */}
            {currentScreen === 18 && (
              <ScreenSleepImpact onContinue={handleSelectHorasSueno} />
            )}

            {/* 19. Consumo de agua diario + Info discos (B.9 + C.11) */}
            {currentScreen === 19 && (
              <ScreenWaterIntake onContinue={handleSelectConsumoAgua} />
            )}

            {/* 20. Diagnóstico médico previo */}
            {currentScreen === 20 && (
              <Screen4Diagnosis onSelectOption={handleSelectPregunta4} />
            )}

            {/* 21. Impacto en la vida diaria */}
            {currentScreen === 21 && (
              <Screen5Impact onSelectOption={handleSelectPregunta5} />
            )}

            {/* 22. Probabilidad de que el dolor se vuelva crónico (C.13) */}
            {currentScreen === 22 && (
              <ScreenRisksWarning onContinue={handleContinueRisks} />
            )}

            {/* 23. Objetivos para los próximos 30 días */}
            {currentScreen === 23 && (
              <Screen6Goals onContinue={handleSelectObjetivos30Dias} />
            )}

            {/* 24. Resumen nivel de dolor / movilidad (D.14) */}
            {currentScreen === 24 && (
              <ScreenPainLevelSummary
                respuestas={respuestas}
                onContinue={handleContinueSummary}
              />
            )}

            {/* 25. Transformación postural: No se trata solo de disminuir el dolor */}
            {currentScreen === 25 && (
              <ScreenPostureTransformation onContinue={handleContinuePosture} />
            )}

            {/* 26. Proyección de resultados en 21 días (D.15) */}
            {currentScreen === 26 && (
              <ScreenResultProjection
                respuestas={respuestas}
                onContinue={handleContinueProjection}
              />
            )}

            {/* 27. Loader analizando respuestas (D.16) */}
            {currentScreen === 27 && (
              <ScreenAnalyzingLoader
                respuestas={respuestas}
                onComplete={handleLoaderComplete}
              />
            )}

            {/* 28. Etapa final unificada: Plan listo, Fases/Calendario, Testimonios, Bonuses, Oferta & Checkout */}
            {currentScreen === 28 && (
              <ScreenUnifiedFinalPlan
                respuestas={respuestas}
                onFinalAction={handleFinalCheckoutAction}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Editorial Subtle Footer */}
      <footer className="w-full max-w-[448px] mx-auto pt-4 mt-2 flex items-center justify-between border-t border-[#1A1A1A]/10 text-[10px] uppercase tracking-[0.15em] text-[#1A1A1A]/40 font-medium">
        <span>&copy; DOLORCIAO</span>
        <div className="flex gap-3">
          <span>Columna</span>
          <span>&bull;</span>
          <span>Ciática</span>
          <span>&bull;</span>
          <span>Hernia</span>
        </div>
      </footer>
    </main>
  );
}


