import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { PrimaryButton } from '../components/PrimaryButton';
import { QuizResponses } from '../types';

interface ScreenPlanReadyProps {
  onContinue: () => void;
  respuestas: QuizResponses;
}

export const ScreenPlanReady: React.FC<ScreenPlanReadyProps> = ({
  onContinue,
  respuestas,
}) => {
  const userName = respuestas.nombre ? respuestas.nombre.split(' ')[0] : 'vos';

  const comparisons = [
    {
      metric: 'Intensidad del Dolor',
      before: '8.5 / 10 (Dolor agudo diario)',
      after: '1.0 / 10 (Alivio y desinflamación)',
    },
    {
      metric: 'Movilidad de Columna',
      before: 'Rigidez y dolor al agacharte',
      after: 'Rango libre de movimiento',
    },
    {
      metric: 'Calidad de Sueño',
      before: 'Despertares nocturnos por punzadas',
      after: '7-8h de descanso reparador',
    },
    {
      metric: 'Independencia Funcional',
      before: 'Miedo al movimiento y a cargar peso',
      after: 'Seguridad en trabajo y familia',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with 100% progress */}
      <div className="w-full">
        <Eyebrow percentage={100} line1="Plan generado con éxito" />
        <ProgressBar progress={100} />
      </div>

      {/* Title */}
      <div className="w-full text-center space-y-2">
        <div className="inline-block bg-[#16A34A] text-white text-[13px] font-bold px-3 py-1 rounded-full shadow-sm">
          🎉 ¡Plan Calibrado y Listo!
        </div>
        <h2
          id="plan-ready-title"
          className="text-[23px] sm:text-[28px] font-bold text-[#1A1A1A] leading-tight"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          {userName}, tu programa personalizado{' '}
          <span className="text-[#16A34A]">Dolor Ciao</span> está listo
        </h2>
        <p className="text-[14px] text-neutral-500 max-w-sm mx-auto">
          Mirá la transformación proyectada para las próximas 3 semanas:
        </p>

        {respuestas.zonasDolorMovimiento &&
          respuestas.zonasDolorMovimiento.length > 0 &&
          !respuestas.zonasDolorMovimiento.includes('ninguna') && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[12px] text-emerald-900 text-left mx-auto">
              <span>🛡️</span>
              <span>
                <strong>Modificaciones de protección activadas:</strong> Ejercicios ajustados para{' '}
                {respuestas.zonasDolorMovimiento.join(', ')}.
              </span>
            </div>
          )}
      </div>

      {/* Comparison Table / Cards */}
      <div className="w-full bg-white border border-[#1A1A1A]/15 rounded-[22px] p-5 sm:p-6 flex flex-col gap-4 shadow-xs">
        <div className="grid grid-cols-2 gap-3 pb-2 border-b border-neutral-100 text-center text-[12px] font-extrabold uppercase tracking-wider">
          <div className="text-red-700 bg-red-50 py-1 rounded-lg">Estado Actual</div>
          <div className="text-emerald-700 bg-emerald-50 py-1 rounded-lg">Tu Meta con Dolor Ciao</div>
        </div>

        <div className="flex flex-col gap-3.5">
          {comparisons.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1.5 pb-3 border-b border-neutral-100 last:border-0 last:pb-0">
              <span className="text-[12.5px] font-bold text-neutral-700">
                {item.metric}
              </span>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded-[12px] bg-red-50/60 border border-red-200/50 text-[12.5px] text-red-950 leading-snug">
                  ❌ {item.before}
                </div>
                <div className="p-2.5 rounded-[12px] bg-emerald-50/70 border border-emerald-200/60 text-[12.5px] text-emerald-950 font-medium leading-snug">
                  ✅ {item.after}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="w-full pt-1">
        <PrimaryButton
          id="btn-plan-ready-continue"
          onClick={onContinue}
        >
          Ver cómo funciona el plan paso a paso →
        </PrimaryButton>
      </div>
    </div>
  );
};
