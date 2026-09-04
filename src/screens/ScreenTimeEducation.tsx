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
        <Eyebrow percentage={64} />
        <ProgressBar progress={64} />
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
          No necesitas sesiones agotadoras de gimnasio ni pasar horas con máquinas. La clave científica del alivio duradero son las micro-dosis de descompresión guiada mediante la movilidad.
        </p>
      </div>

      {/* 3 Steps Visual Breakdown */}
      <div className="w-full bg-white border border-[#1A1A1A]/15 rounded-[20px] p-5 flex flex-col gap-4 shadow-xs">
        <div className="flex items-start gap-3.5 pb-3 border-b border-neutral-100">
          <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center text-[14px] shrink-0 border border-emerald-200">
            5m
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-[#1A1A1A] text-[15px]">
              Descompresión articular lumbar
            </span>
            <span className="text-[13px] text-neutral-500">
              Crea espacio entre vértebras y libera el pinzamiento de la raíz nerviosa.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3.5 pb-3 border-b border-neutral-100">
          <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-700 font-bold flex items-center justify-center text-[14px] shrink-0 border border-blue-200">
            5m
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-[#1A1A1A] text-[15px]">
              Liberación miofascial y flexibilidad
            </span>
            <span className="text-[13px] text-neutral-500">
              Desactiva contracturas profundas en glúteos, piramidal y psoas ilíaco.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-full bg-purple-50 text-purple-700 font-bold flex items-center justify-center text-[14px] shrink-0 border border-purple-200">
            5m
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-[#1A1A1A] text-[15px]">
              Activación postural preventiva
            </span>
            <span className="text-[13px] text-neutral-500">
              Fortalece la faja abdominal natural para blindar tu columna todo el día.
            </span>
          </div>
        </div>
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
