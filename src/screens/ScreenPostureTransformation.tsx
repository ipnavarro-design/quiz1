import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { PrimaryButton } from '../components/PrimaryButton';

interface ScreenPostureTransformationProps {
  onContinue: () => void;
}

// ============================================================================
// CONFIGURACIÓN DE IMÁGENES DEL CASO DE ÉXITO
// ============================================================================
const IMAGEN_ANTES = '/images/posture-antes.png';
const IMAGEN_DESPUES = '/images/posture-despues.png';
const FALLBACK_IMAGEN_ANTES = '/images/posture-transformation.png';
const FALLBACK_IMAGEN_DESPUES = '/images/posture-transformation.png';

export const ScreenPostureTransformation: React.FC<ScreenPostureTransformationProps> = ({
  onContinue,
}) => {
  const [imgAntesError, setImgAntesError] = useState(false);
  const [imgDespuesError, setImgDespuesError] = useState(false);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with progress */}
      <div className="w-full">
        <Eyebrow percentage={96} line1="Transformación Postural" />
        <ProgressBar progress={96} />
      </div>

      {/* Screen Title */}
      <div className="w-full text-center space-y-2">
        <h2
          id="posture-transformation-title"
          className="text-[21px] sm:text-[25px] font-bold text-[#1A1A1A] leading-tight"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          ¡No se trata solo de disminuir el dolor!{' '}
          <span className="block mt-1 text-[#0E4A72]">
            Así es como la movilidad puede cambiar tu postura
          </span>
        </h2>
      </div>

      {/* Before & After Images Card Container */}
      <div className="w-full bg-white border border-[#1A1A1A]/15 rounded-[22px] p-4 sm:p-5 flex flex-col gap-4 shadow-xs relative">
        {/* 2 Comparison Images Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
          {/* FOTO 1: ANTES */}
          <div className="relative rounded-[16px] overflow-hidden bg-slate-100 border border-slate-200 aspect-[3/4] flex items-center justify-center">
            <img
              src={imgAntesError ? FALLBACK_IMAGEN_ANTES : IMAGEN_ANTES}
              alt="Caso de éxito postura - Antes"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
              onError={() => setImgAntesError(true)}
            />
            {/* Tag Badge: Antes */}
            <div className="absolute top-2.5 left-2.5 bg-[#991B1B] text-white text-[11px] font-bold px-3 py-0.5 rounded-md shadow-xs uppercase tracking-wide">
              Antes
            </div>
          </div>

          {/* FOTO 2: DESPUÉS */}
          <div className="relative rounded-[16px] overflow-hidden bg-slate-100 border border-slate-200 aspect-[3/4] flex items-center justify-center">
            <img
              src={imgDespuesError ? FALLBACK_IMAGEN_DESPUES : IMAGEN_DESPUES}
              alt="Caso de éxito postura - Después"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
              onError={() => setImgDespuesError(true)}
            />
            {/* Tag Badge: Después */}
            <div className="absolute top-2.5 left-2.5 bg-[#16A34A] text-white text-[11px] font-bold px-3 py-0.5 rounded-md shadow-xs uppercase tracking-wide">
              Después
            </div>
          </div>
        </div>

        {/* Testimonial / Review Block */}
        <div className="w-full flex flex-col items-center text-center pt-2 pb-1 space-y-2">
          {/* User Name and Age */}
          <div className="font-bold text-[#1E293B] text-[15.5px] sm:text-[16.5px] tracking-tight">
            Agostina Martínez (33 años)
          </div>

          {/* 4 of 5 Golden Stars */}
          <div
            className="flex items-center justify-center gap-1 text-[20px] leading-none"
            aria-label="4 de 5 estrellas"
          >
            <span className="text-[#F59E0B]">★</span>
            <span className="text-[#F59E0B]">★</span>
            <span className="text-[#F59E0B]">★</span>
            <span className="text-[#F59E0B]">★</span>
            <span className="text-slate-300">★</span>
          </div>

          {/* Testimonial Quote */}
          <p className="text-[13.5px] sm:text-[14px] text-slate-700 leading-relaxed max-w-md italic px-2">
            "Me encanto totalmente este método! La App es muy facil de manejar. No creia que con 10 minutos de movilidad al día me iba a aliviar tanto!!!
            Sentía la espalda encorvada y los hombros cargados por tantas horas sentada frente a la computadora. No solo desapareció la molestia lumbar, ¡mi postura cambió por completo y volví a pararme derecha sin que me cueste esfuerzo! GRACIAS ETERNAS CHICOSSSSS"
          </p>
        </div>

        {/* Tricolor Progression Chevron Bar (Rojo -> Naranja -> Verde) */}
        <div className="w-full flex items-center h-10 sm:h-11 rounded-[14px] overflow-hidden my-1">
          {/* Bloque 1: Rojo */}
          <div
            className="flex-1 h-full bg-[#8A1C1C] relative"
            style={{
              clipPath: 'polygon(0% 0%, 88% 0%, 100% 50%, 88% 100%, 0% 100%)',
            }}
          />

          {/* Bloque 2: Naranja */}
          <div
            className="flex-1 h-full bg-[#E67E22] -ml-2.5 relative"
            style={{
              clipPath:
                'polygon(0% 0%, 88% 0%, 100% 50%, 88% 100%, 0% 100%, 12% 50%)',
            }}
          />

          {/* Bloque 3: Verde */}
          <div
            className="flex-1 h-full bg-[#16A34A] -ml-2.5 relative"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 12% 50%)',
            }}
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="w-full pt-2">
        <PrimaryButton
          id="btn-posture-continue"
          onClick={onContinue}
        >
          Continuar
        </PrimaryButton>
      </div>
    </div>
  );
};

