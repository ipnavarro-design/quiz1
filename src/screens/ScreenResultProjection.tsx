import React from 'react';
import { motion } from 'motion/react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { PrimaryButton } from '../components/PrimaryButton';
import { QuizResponses } from '../types';

interface ScreenResultProjectionProps {
  onContinue: () => void;
  respuestas: QuizResponses;
}

export const ScreenResultProjection: React.FC<ScreenResultProjectionProps> = ({
  onContinue,
  respuestas,
}) => {
  const userName = respuestas.nombre ? respuestas.nombre.split(' ')[0] : 'vos';

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with 100% progress */}
      <div className="w-full">
        <Eyebrow percentage={100} line1="Análisis completado con éxito" />
        <ProgressBar progress={100} />
      </div>

      {/* Screen Title */}
      <div className="w-full text-center space-y-2">
        <div className="inline-block bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/20 text-[13px] font-bold px-3 py-1 rounded-full">
          Proyección personalizada
        </div>
        <h2
          id="projection-title"
          className="text-[23px] sm:text-[27px] font-bold text-[#1A1A1A] leading-tight"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          {userName}, así se proyecta tu{' '}
          <span className="bg-[#0E4A72] text-white px-2 py-0.5 rounded-md inline-block">
            alivio en 30 días
          </span>
        </h2>
        <p className="text-[14px] text-neutral-500 max-w-sm mx-auto">
          Basado en tu nivel de molestia actual y hábitos de movimiento.
        </p>
      </div>

      {/* Chart Visual Card */}
      <div className="w-full bg-white border border-[#1A1A1A]/15 rounded-[22px] p-5 sm:p-6 flex flex-col gap-5 shadow-xs">
        {/* Metric Badges */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-[14px] bg-red-50 border border-red-200/70 flex flex-col">
            <span className="text-[12px] font-bold text-red-700 uppercase tracking-wide">
              Dolor Hoy
            </span>
            <span
              className="text-[26px] font-extrabold text-red-900 mt-0.5"
              style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
            >
              8.5 / 10
            </span>
            <span className="text-[11.5px] text-red-600">
              Inflamación y rigidez activa
            </span>
          </div>

          <div className="p-3 rounded-[14px] bg-emerald-50 border border-emerald-200/70 flex flex-col">
            <span className="text-[12px] font-bold text-emerald-700 uppercase tracking-wide">
              En 30 Días
            </span>
            <span
              className="text-[26px] font-extrabold text-emerald-900 mt-0.5"
              style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
            >
              1.0 / 10
            </span>
            <span className="text-[11.5px] text-emerald-700 font-medium">
              Alivio y libertad de movimiento
            </span>
          </div>
        </div>

        {/* SVG Curve Graphic */}
        <div className="w-full flex flex-col gap-2 pt-2">
          <div className="flex justify-between text-[11px] sm:text-[12px] font-bold text-neutral-500">
            <span>Día 1 (Hoy)</span>
            <span>Día 10 (Descompresión)</span>
            <span>Día 20 (Movilidad)</span>
            <span>Día 30 (Meta)</span>
          </div>

          <div className="relative w-full h-36 bg-neutral-50 rounded-[16px] border border-neutral-200/80 p-3 overflow-hidden flex items-end">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none opacity-40">
              <div className="border-b border-dashed border-neutral-300 w-full" />
              <div className="border-b border-dashed border-neutral-300 w-full" />
              <div className="border-b border-dashed border-neutral-300 w-full" />
            </div>

            {/* Pain reduction line */}
            <svg
              viewBox="0 0 300 100"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              {/* Shaded area under curve */}
              <defs>
                <linearGradient id="painGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#DC2626" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#16A34A" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              <path
                d="M 10,15 Q 90,30 150,60 T 290,88 L 290,100 L 10,100 Z"
                fill="url(#painGradient)"
              />

              {/* Curve Stroke */}
              <motion.path
                d="M 10,15 Q 90,30 150,60 T 290,88"
                fill="none"
                stroke="#16A34A"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />

              {/* Start & End Points */}
              <circle cx="10" cy="15" r="5" fill="#DC2626" />
              <circle cx="290" cy="88" r="6" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Clinical Note */}
        <p className="text-[13px] text-neutral-600 text-center leading-snug">
          📉 La mayor reducción del dolor ocurre entre el <strong>día 4 y el día 12</strong>, cuando el tejido inflamatorio comienza a liberar las raíces nerviosas lumbares.
        </p>
      </div>

      {/* Continue Button */}
      <div className="w-full pt-1">
        <PrimaryButton
          id="btn-projection-continue"
          onClick={onContinue}
        >
          Construir mi plan de alivio →
        </PrimaryButton>
      </div>
    </div>
  );
};
