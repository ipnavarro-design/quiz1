import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { PrimaryButton } from '../components/PrimaryButton';

interface ScreenTimeEducationProps {
  onContinue: () => void;
}

export const ScreenTimeEducation: React.FC<ScreenTimeEducationProps> = ({
  onContinue,
}) => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={92} phase="Personalización" />
        <ProgressBar progress={92} />
      </div>

      {/* Screen Title & Reassurance */}
      <div className="w-full text-center space-y-2">
        <div className="inline-block bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/25 text-[13px] font-bold px-3 py-1 rounded-full">
          Diseñado para personas ocupadas
        </div>
        <h2
          id="time-edu-title"
          className="text-[23px] sm:text-[27px] font-bold text-[#1A1A1A] leading-tight"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          Tu plan personalizado de movilidad solo te llevará{' '}
          <span className="bg-[#16A34A] text-white px-2 py-0.5 rounded-md inline-block">
            10 a 15 minutos
          </span>{' '}
          al día
        </h2>
        <p className="text-[14px] text-neutral-600 max-w-md mx-auto">
          Micro-rutinas guiadas y consistentes para sentirte ágil sin agotar tus tiempos libres.
        </p>
      </div>

      {/* Continue Button */}
      <div className="w-full pt-1">
        <PrimaryButton
          id="btn-time-edu-continue"
          onClick={onContinue}
        >
          Entendido, continuar
        </PrimaryButton>
      </div>
    </div>
  );
};
