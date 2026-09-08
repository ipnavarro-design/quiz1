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
        <Eyebrow percentage={92} />
        <ProgressBar progress={92} />
      </div>

      {/* Screen Title */}
      <div className="w-full text-center space-y-2">
        <div className="inline-block bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/20 text-[13px] font-bold px-3 py-1 rounded-full">
          Evaluación Inicial de Movilidad
        </div>
        <h2
          id="summary-level-title"
          className="text-[23px] sm:text-[27px] font-bold text-[#1A1A1A] leading-tight"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          {userName}, hemos analizado tu{' '}
          <span className="bg-[#0E4A72] text-white px-2 py-0.5 rounded-md inline-block">
            perfil de movilidad
          </span>
        </h2>
        <p className="text-[14px] text-neutral-500 max-w-sm mx-auto">
          Tus respuestas muestran que tu cuerpo responderá de forma excelente a rutinas progresivas de movilidad y estiramiento.
        </p>
      </div>

      {/* Diagnostic Overview Card */}
      <div className="w-full bg-white border border-[#1A1A1A]/15 rounded-[20px] p-5 sm:p-6 flex flex-col gap-4 shadow-xs">
        {/* Metric 1 */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <span className="text-[22px]">⚡</span>
            <div className="flex flex-col">
              <span className="text-[14.5px] font-semibold text-[#1A1A1A]">
                Nivel de Sobrecarga
              </span>
              <span className="text-[12.5px] text-neutral-500">
                Tensión acumulada
              </span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-[13px] font-bold bg-amber-100 text-amber-800">
            Moderada a Alta
          </span>
        </div>

        {/* Metric 2 */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <span className="text-[22px]">📐</span>
            <div className="flex flex-col">
              <span className="text-[14.5px] font-semibold text-[#1A1A1A]">
                Rango de Movilidad
              </span>
              <span className="text-[12.5px] text-neutral-500">
                Flexibilidad y postura actual
              </span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-[13px] font-bold bg-red-100 text-red-800">
            Restringida por rigidez
          </span>
        </div>

        {/* Metric 3 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[22px]">🎯</span>
            <div className="flex flex-col">
              <span className="text-[14.5px] font-semibold text-[#1A1A1A]">
                Potencial de Mejora
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
          Tu cuerpo tiene una gran capacidad de adaptación: con los movimientos adecuados, tus músculos y articulaciones recuperan flexibilidad y ligereza.
        </p>
      </div>

      {/* Continue Button */}
      <div className="w-full pt-1">
        <PrimaryButton
          id="btn-summary-continue"
          onClick={onContinue}
        >
          Ver la proyección de mis resultados →
        </PrimaryButton>
      </div>
    </div>
  );
};
