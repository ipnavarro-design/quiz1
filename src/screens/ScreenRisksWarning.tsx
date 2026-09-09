import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { PrimaryButton } from '../components/PrimaryButton';
import { QuizResponses } from '../types';

interface ScreenRisksWarningProps {
  onContinue: () => void;
  respuestas?: QuizResponses;
}

export const ScreenRisksWarning: React.FC<ScreenRisksWarningProps> = ({
  onContinue,
  respuestas,
}) => {
  // 1. Objetivo: Reducir el dolor de lo que votó
  const targetPainText = respuestas?.pregunta1
    ? respuestas.pregunta1
    : 'espalda y zona lumbar';

  // 2. Nivel de actividad actual: lo que votó
  const activityLevelText = respuestas?.nivelActividad
    ? respuestas.nivelActividad
    : 'Sedentario (muchas horas sentado/a)';

  // 3. Tercer dato que nos haya dicho: tiempo con molestia o frecuencia
  const thirdDataText = respuestas?.pregunta2
    ? respuestas.pregunta2
    : respuestas?.diasDolorSemana
    ? `${respuestas.diasDolorSemana} por semana`
    : 'Más de 3 a 6 meses';

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={96} phase="Personalización" />
        <ProgressBar progress={96} />
      </div>

      {/* Screen Title */}
      <div className="w-full text-center space-y-2">
        <div className="inline-block bg-amber-100 text-amber-900 border border-amber-300 text-[12.5px] font-bold px-3 py-1 rounded-full">
          Evaluación de Prevención y Movilidad
        </div>
        <h2
          id="risks-warning-title"
          className="text-[20px] sm:text-[23px] font-bold text-[#1A1A1A] leading-tight uppercase tracking-tight"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          CÓMO EVITAR QUE LA RIGIDEZ SE VUELVA{' '}
          <span className="bg-[#E07A2B] text-white px-2.5 py-0.5 rounded-md inline-block">
            PERMANENTE
          </span>
        </h2>
      </div>

      {/* Risk Gauge Visual Card */}
      <div className="w-full bg-white border-2 border-amber-300/80 rounded-[20px] p-5 flex flex-col gap-4 shadow-sm">
        {/* Visual Semáforo */}
        <div className="flex flex-col gap-2.5">
          <div className="flex justify-between items-center text-[12px] font-semibold text-neutral-600">
            <span className="text-emerald-700">Buena movilidad</span>
            <span className="text-amber-800 font-bold bg-amber-100/90 px-2.5 py-0.5 rounded-full border border-amber-300 text-[11.5px]">
              Atención recomendada
            </span>
            <span className="text-red-700">Rigidez alta</span>
          </div>

          <div className="w-full h-4 bg-gradient-to-r from-emerald-400 via-amber-400 to-red-600 rounded-full relative">
            {/* Punto situado en la zona anaranjada (60%) */}
            <div
              className="absolute top-1/2 w-5 h-5 bg-white border-[3.5px] border-amber-600 rounded-full shadow-md animate-pulse"
              style={{ left: '60%', transform: 'translate(-50%, -50%)' }}
            />
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-amber-900 font-medium bg-amber-50/80 border border-amber-200/80 rounded-lg py-1.5 px-2 mt-1 text-center">
            <span className="w-2 h-2 rounded-full bg-[#E07A2B] shrink-0 inline-block" />
            <span>
              Resultado: <strong>Zona de Atención</strong>. Estás a tiempo de incorporar buenos hábitos antes de que la rigidez se vuelva permanente.
            </span>
          </div>
        </div>

        {/* Panel de calibración en 2 columnas: Datos del usuario + Imagen */}
        <div className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[18px] p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mt-1">
          {/* Columna Izquierda: Datos del usuario */}
          <div className="flex flex-col gap-3 text-left">
            <div className="inline-block bg-[#EDF4F9] text-[#0E4A72] border border-[#CBD5E1] text-[11px] font-bold px-2.5 py-0.5 rounded-md self-start uppercase tracking-wider">
              Diagnóstico Calibrado
            </div>

            {/* 1. Objetivo (Reducir el dolor de lo que votó) */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                🎯 Objetivo
              </span>
              <span className="text-[13.5px] sm:text-[14px] font-extrabold text-[#0E4A72] leading-snug">
                Reducir el dolor de {targetPainText}
              </span>
            </div>

            {/* 2. Nivel de actividad actual (lo que votó) */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                🏃 Nivel de actividad actual
              </span>
              <span className="text-[12.5px] sm:text-[13px] font-bold text-[#0E4A72] leading-snug">
                {activityLevelText}
              </span>
            </div>

            {/* 3. Tercer dato que nos haya dicho */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                ⏳ Tiempo con la molestia
              </span>
              <span className="text-[12.5px] sm:text-[13px] font-semibold text-slate-700 leading-snug">
                {thirdDataText}
              </span>
            </div>
          </div>

          {/* Columna Derecha: Imagen solicitada optimizada para carga ultra rápida */}
          <div className="flex items-center justify-center">
            <img
              src="/images/calibracion-diagnostico.webp"
              alt="Calibración personalizada"
              className="w-full max-w-[200px] sm:max-w-[230px] h-auto object-contain rounded-[14px] shadow-sm border border-slate-200"
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="w-full pt-1">
        <PrimaryButton
          id="btn-risks-continue"
          onClick={onContinue}
        >
          Quiero mejorar mi postura y sentirme mejor →
        </PrimaryButton>
      </div>
    </div>
  );
};
