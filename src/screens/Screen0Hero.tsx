import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { HeroCoverImage } from '../components/HeroCoverImage';
import { PrimaryButton } from '../components/PrimaryButton';

interface Screen0HeroProps {
  onContinue: () => void;
}

export const Screen0Hero: React.FC<Screen0HeroProps> = ({ onContinue }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with Eyebrow and Progress Bar */}
      <div className="w-full">
        <Eyebrow percentage={0} />
        <ProgressBar progress={0} />
      </div>

      {/* Title with specified color highlights and subtitle */}
      <div className="w-full flex flex-col items-center gap-2.5">
        <ScreenHeading as="h1" id="hero-title">
          DESCUBRE EN{' '}
          <span className="text-[#0E4A72]">1 MINUTO</span>
          {' '}SI PUEDES{' '}
          <span className="bg-[#0E4A72] text-white px-2 py-0.5 rounded-md inline-block text-[20px]">
            LIBERARTE DEL DOLOR
          </span>
          {' '}DE ESPALDA
        </ScreenHeading>

        <p
          id="hero-subtitle"
          className="text-[17px] sm:text-[18px] font-normal text-[#1E293B] text-center tracking-tight"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          Antes de que sea{' '}
          <span className="text-[#DC2626] font-semibold">crónico</span>
        </p>

        {/* Badge 100% SIN CIRUGÍA */}
        <div
          id="hero-surgery-free-badge"
          className="inline-block bg-[#36776F] text-white text-[13px] font-semibold px-3.5 py-1 rounded-full uppercase tracking-normal shadow-sm mt-0.5"
        >
          100% SIN CIRUGÍA
        </div>
      </div>

      {/* Image with overlay */}
      <div className="w-full">
        <HeroCoverImage />
      </div>

      {/* Primary CTA Button */}
      <div className="w-full pt-2">
        <PrimaryButton id="btn-hero-continuar" onClick={onContinue}>
          Continuar
        </PrimaryButton>
      </div>
    </div>
  );
};
