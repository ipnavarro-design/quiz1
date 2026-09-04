import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { PrimaryButton } from '../components/PrimaryButton';

interface ScreenBonusesProps {
  onContinue: () => void;
}

export const ScreenBonuses: React.FC<ScreenBonusesProps> = ({
  onContinue,
}) => {
  const bonuses = [
    {
      number: '1',
      title: 'Cómo aliviar tu dolor y recuperar tu movilidad',
      desc: 'Manual completo paso a paso con la biomecánica de descompresión vertebral.',
      value: '$39 USD',
    },
    {
      number: '2',
      title: 'Rutina de alivio rápido en 5 minutos',
      desc: 'Protocolo de rescate SOS para cortar pinchazos lumbares o ciáticos en el acto.',
      value: '$29 USD',
    },
    {
      number: '3',
      title: 'Cómo dormir sin dolor y levantarse sin rigidez',
      desc: 'Guía de posturas terapéuticas y almohadillado para desinflamar mientras duermes.',
      value: '$35 USD',
    },
    {
      number: '4',
      title: 'Protocolo anti-recaída lumbar',
      desc: 'La rutina de 3 minutos para blindar tu columna antes de cargar peso o viajar.',
      value: '$45 USD',
    },
    {
      number: '5',
      title: 'Cómo mantenerte activo sin agravar tu dolor',
      desc: 'Aprende a caminar, sentarte y ejercitarte protegiendo tus discos L4, L5 y S1.',
      value: '$29 USD',
    },
    {
      number: '6',
      title: 'Protocolo anti-procrastinación y micro-hábitos',
      desc: 'Cómo mantener la constancia en solo 10 min al día sin esfuerzo mental.',
      value: '$25 USD',
    },
    {
      number: '7',
      title: 'Planilla de seguimiento de dolor y progreso',
      desc: 'Herramienta interactiva para medir tu evolución semana a semana.',
      value: '$19 USD',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section */}
      <div className="w-full">
        <Eyebrow percentage={100} line1="Regalos Exclusivos Incluidos" />
        <ProgressBar progress={100} />
      </div>

      {/* Screen Title */}
      <div className="w-full text-center space-y-2">
        <div className="inline-block bg-[#16A34A] text-white text-[13px] font-bold px-3 py-1 rounded-full shadow-sm">
          🎁 7 Bonuses Exclusivos (100% GRATIS Hoy)
        </div>
        <h2
          id="bonuses-title"
          className="text-[23px] sm:text-[27px] font-bold text-[#1A1A1A] leading-tight"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          Todo lo que incluye tu plan{' '}
          <span className="text-[#16A34A]">Dolor Ciao</span>
        </h2>
        <p className="text-[14px] text-neutral-500 max-w-sm mx-auto">
          Valorados en más de $220 USD, incluidos sin costo extra con tu acceso.
        </p>
      </div>

      {/* Bonus Cards List */}
      <div className="w-full flex flex-col gap-3">
        {bonuses.map((b) => (
          <div
            key={b.number}
            className="w-full bg-white border border-[#1A1A1A]/15 rounded-[16px] p-4 flex items-start gap-3.5 shadow-xs"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-emerald-800 font-extrabold flex items-center justify-center text-[15px] shrink-0 border border-emerald-300/60">
              #{b.number}
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-[#1A1A1A] text-[14.5px] leading-snug">
                  {b.title}
                </span>
                <span className="text-[12px] font-bold text-neutral-400 line-through shrink-0">
                  {b.value}
                </span>
              </div>
              <span className="text-[12.5px] text-neutral-600 mt-0.5 leading-snug">
                {b.desc}
              </span>
              <span className="text-[11.5px] font-bold text-[#16A34A] mt-1">
                ✓ INCLUIDO GRATIS
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Value Summary Callout */}
      <div className="w-full bg-[#FAF8F5] border border-neutral-300/80 rounded-[16px] p-4 text-center">
        <span className="text-[13.5px] text-neutral-700">
          Valor total del paquete: <span className="line-through text-neutral-400 font-semibold">$221 USD</span> ➔ <strong className="text-[#16A34A] font-extrabold text-[15px]">¡GRATIS con tu plan!</strong>
        </span>
      </div>

      {/* Continue Button */}
      <div className="w-full pt-1">
        <PrimaryButton
          id="btn-bonuses-continue"
          onClick={onContinue}
        >
          Obtener mi plan con todos los bonuses →
        </PrimaryButton>
      </div>
    </div>
  );
};
