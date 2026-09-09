import React, { useEffect } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { motion } from 'motion/react';

interface ScreenSocialProofIntermediaProps {
  genero?: string;
  onContinue: () => void;
}

export const ScreenSocialProofIntermedia: React.FC<ScreenSocialProofIntermediaProps> = ({
  genero,
  onContinue,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onContinue();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onContinue]);

  const isMujer = genero?.toLowerCase().includes('mujer');
  const headline = isMujer
    ? 'El 87% de las mujeres que hacen este test sienten alivio en la primera semana.'
    : 'El 87% de las personas que hacen este test sienten alivio en la primera semana.';

  return (
    <div
      onClick={onContinue}
      className="w-full flex flex-col gap-6 cursor-pointer select-none py-2"
      id="screen-social-proof-intermedia"
    >
      {/* Header section with Eyebrow and Progress Bar */}
      <div className="w-full">
        <Eyebrow percentage={66} phase="Evaluación" />
        <ProgressBar progress={66} />
      </div>

      {/* Main motivational card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="w-full bg-[#FAF8F5] border border-[#1A1A1A]/10 rounded-[24px] p-6 sm:p-8 flex flex-col items-center text-center gap-5 shadow-sm"
      >
        {/* Rating Stars & Badge */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1 text-amber-500 text-[19px] tracking-wider font-bold">
            ★★★★★
          </div>
          <span className="inline-block bg-[#0E4A72]/10 text-[#0E4A72] border border-[#0E4A72]/20 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            +45.000 espaldas recuperadas
          </span>
        </div>

        {/* Big Motivating Metric / Headline */}
        <h2
          className="text-[21px] sm:text-[24px] font-extrabold text-[#0E4A72] leading-snug tracking-tight max-w-sm"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          {headline}
        </h2>

        {/* Supporting micro-line */}
        <p className="text-[13.5px] text-slate-600 leading-relaxed max-w-xs">
          Completando este diagnóstico vas a descubrir cómo liberar la tensión lumbar de forma progresiva y segura.
        </p>

        {/* Dynamic Auto-advance indicator bar */}
        <div className="w-full max-w-[200px] h-1.5 bg-slate-200 rounded-full overflow-hidden mt-1">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.8, ease: 'linear' }}
            className="h-full bg-[#16A34A] rounded-full"
          />
        </div>

        <span className="text-[11px] text-slate-400 font-medium tracking-wide">
          Tocá en cualquier lugar para avanzar
        </span>
      </motion.div>
    </div>
  );
};
