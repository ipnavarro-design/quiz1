import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { QuizResponses } from '../types';

interface ScreenAnalyzingLoaderProps {
  onComplete: () => void;
  respuestas: QuizResponses;
}

export const ScreenAnalyzingLoader: React.FC<ScreenAnalyzingLoaderProps> = ({
  onComplete,
  respuestas,
}) => {
  const [progress, setProgress] = useState(15);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const protectedCount = respuestas.zonasDolorMovimiento?.filter((z) => z !== 'ninguna').length || 0;

  const steps = [
    'Analizando localización y tipo de dolor...',
    protectedCount > 0
      ? `Calibrando ejercicios para proteger ${protectedCount} zona(s) articular(es)...`
      : 'Evaluando descompresión articular y nervio ciático...',
    'Ajustando micro-rutinas de 10-15 minutos...',
    'Estructurando calendario progresivo de 30 días...',
    '¡Tu plan personalizado DolorCiao está listo!',
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setProgress(40);
      setCurrentStepIndex(1);
    }, 800);

    const timer2 = setTimeout(() => {
      setProgress(68);
      setCurrentStepIndex(2);
    }, 1800);

    const timer3 = setTimeout(() => {
      setProgress(90);
      setCurrentStepIndex(3);
    }, 2800);

    const timer4 = setTimeout(() => {
      setProgress(100);
      setCurrentStepIndex(4);
    }, 3800);

    const timerFinal = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timerFinal);
    };
  }, [onComplete]);

  const userName = respuestas.nombre ? respuestas.nombre.split(' ')[0] : 'vos';

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[460px] gap-8 py-8 text-center">
      {/* Animated Medical Spinner */}
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Outer pulsing circle */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-emerald-100"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Spinning indicator */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-[#16A34A] border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />
        {/* Center Percentage Display */}
        <span
          className="text-[28px] font-extrabold text-[#1A1A1A]"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          {progress}%
        </span>
      </div>

      {/* Main Title */}
      <div className="space-y-2 max-w-sm">
        <h2
          id="loader-title"
          className="text-[24px] sm:text-[28px] font-bold text-[#1A1A1A] leading-snug"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          Diseñando el plan de alivio para{' '}
          <span className="text-[#16A34A]">{userName}</span>...
        </h2>
        <p className="text-[14px] text-neutral-500">
          Personalizando la secuencia de descompresión según tu historial.
        </p>
      </div>

      {/* Checklist Progress Display */}
      <div className="w-full max-w-sm bg-white border border-[#1A1A1A]/10 rounded-[20px] p-5 flex flex-col gap-3.5 shadow-xs text-left">
        {steps.map((stepText, idx) => {
          const isDone = idx < currentStepIndex;
          const isCurrent = idx === currentStepIndex;
          return (
            <div
              key={idx}
              className={`flex items-center gap-3 transition-all ${
                isDone
                  ? 'text-emerald-800 font-medium'
                  : isCurrent
                  ? 'text-[#1A1A1A] font-bold'
                  : 'text-neutral-400 font-normal'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0 ${
                  isDone
                    ? 'bg-emerald-600 text-white'
                    : isCurrent
                    ? 'border-2 border-emerald-600 text-emerald-600 animate-pulse'
                    : 'border border-neutral-300 text-neutral-300'
                }`}
              >
                {isDone ? '✓' : idx + 1}
              </div>
              <span className="text-[13.5px] leading-tight">{stepText}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
