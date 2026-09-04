import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { PrimaryButton } from '../components/PrimaryButton';
import { QuizResponses } from '../types';

interface ScreenPainLevelSummaryProps {
  onContinue: () => void;
  respuestas: QuizResponses;
}

export const ScreenPainLevelSummary: React.FC<ScreenPainLevelSummaryProps> = ({
  onContinue,
  respuestas,
}) => {
  const userName = respuestas.nombre ? respuestas.nombre.split(' ')[0] : 'vos';

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={95} />
        <ProgressBar progress={95} />
      </div>

      {/* Screen Title */}
      <div className="w-full text-center space-y-2">
        <div className="inline-block bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/20 text-[13px] font-bold px-3 py-1 rounded-full">
          Diagnóstico Preliminar
        </div>
        <h2
          id="summary-level-title"
          className="text-[23px] sm:text-[27px] font-bold text-[#1A1A1A] leading-tight"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          {userName}, hemos evaluado tu{' '}
          <span className="bg-[#DC2626] text-white px-2 py-0.5 rounded-md inline-block">
            perfil de dolor
          </span>
        </h2>
        <p className="text-[14px] text-neutral-500 max-w-sm mx-auto">
          Tus respuestas indican un patrón claro de compresión que responde de forma excelente a la descompresión guiada.
        </p>
      </div>

      {/* Diagnostic Overview Card */}
      <div className="w-full bg-white border border-[#1A1A1A]/15 rounded-[20px] p-5 sm:p-6 flex flex-col gap-4 shadow-xs">
        {/* Metric 1: Nivel de Dolor */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <span className="text-[22px]">⚡</span>
            <div className="flex flex-col">
              <span className="text-[14.5px] font-semibold text-[#1A1A1A]">
                Nivel de Inflamación
              </span>
              <span className="text-[12.5px] text-neutral-500">
                Compresión discal activa
              </span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-[13px] font-bold bg-amber-100 text-amber-800">
            Moderada a Alta
          </span>
        </div>

        {/* Metric 2: Rango de Movilidad */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <span className="text-[22px]">📐</span>
            <div className="flex flex-col">
              <span className="text-[14.5px] font-semibold text-[#1A1A1A]">
                Movilidad Lumbar
              </span>
              <span className="text-[12.5px] text-neutral-500">
                Rango articular actual
              </span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-[13px] font-bold bg-red-100 text-red-800">
            Restringida por dolor
          </span>
        </div>

        {/* Metric 3: Potencial de Alivio */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[22px]">🎯</span>
            <div className="flex flex-col">
              <span className="text-[14.5px] font-semibold text-[#1A1A1A]">
                Potencial de Alivio
              </span>
              <span className="text-[12.5px] text-neutral-500">
                En las primeras 3 semanas
              </span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-[13px] font-bold bg-emerald-100 text-emerald-800">
            94% Favorable
          </span>
        </div>
      </div>

      {/* Clinical Reassurance Banner */}
      <div className="w-full bg-[#F0FDF4] border border-[#16A34A]/25 rounded-[16px] p-4 flex items-center gap-3">
        <span className="text-[24px] shrink-0">✅</span>
        <p className="text-[13.5px] text-emerald-900 leading-snug">
          Tu columna tiene memoria biomecánica: con los micro-movimientos correctos, el tejido discal se descomprime y el dolor remite.
        </p>
      </div>

      {/* Continue Button */}
      <div className="w-full pt-1">
        <PrimaryButton
          id="btn-summary-continue"
          onClick={onContinue}
        >
          Ver cómo será mi recuperación →
        </PrimaryButton>
      </div>
    </div>
  );
};
