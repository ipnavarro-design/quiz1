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
    <div className="w-full flex flex-col gap-5">
      {/* Header section with Eyebrow and Progress Bar */}
      <div className="w-full">
        <Eyebrow percentage={0} phase="Evaluación" />
        <ProgressBar progress={0} />
      </div>

      {/* Imagen del regalo centrada y más grande justo arriba del título */}
      <div className="w-full flex justify-center -mb-1 sm:-mb-2">
        <img
          src="/images/ChatGPT Image 9 sept 2026, 05_58_52 p.m..png"
          alt="Regalo especial al completar"
          className="w-[400px] max-w-full h-[130px] object-contain drop-shadow-md"
          style={{ width: '400px', height: '130px' }}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Title with specified color highlights and subtitle */}
      <div className="w-full flex flex-col items-center gap-2.5">
        <ScreenHeading as="h1" id="hero-title">
          DESCUBRÍ SI PODÉS MEJORAR TU ESPALDA
        </ScreenHeading>

        <p
          id="hero-subtitle"
          className="text-[16px] sm:text-[17px] font-normal text-[#1E293B] text-center tracking-tight"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          <span className="text-[#DC2626] font-semibold">En un minuto</span>
          {', antes de que se vuelva una molestia permanente'}
        </p>

        {/* Badge 100% sin equipamiento */}
        <div
          id="hero-surgery-free-badge"
          className="inline-block bg-[#36776F] text-white text-[12.5px] font-semibold px-3.5 py-1 rounded-full uppercase tracking-normal shadow-sm mt-0.5"
        >
          100% sin equipamiento
        </div>
      </div>

      {/* Image with overlay */}
      <div className="w-full">
        <HeroCoverImage />
      </div>

      {/* Gancho de regalo abajo de la imagen con 'Desbloquea' en rojo */}
      <p
        id="hero-gift-hook-text"
        className="text-[13.5px] text-[#0E4A72] font-semibold text-center leading-snug max-w-sm mx-auto"
      >
        <span className="text-[#DC2626] font-bold">Desbloquea</span> tu plan personalizado al completar el test.
      </p>

      {/* Primary CTA Button */}
      <div className="w-full pt-1">
        <PrimaryButton id="btn-hero-continuar" onClick={onContinue}>
          comenzar test
        </PrimaryButton>
      </div>
    </div>
  );
};
