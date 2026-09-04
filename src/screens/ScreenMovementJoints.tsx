import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { PrimaryButton } from '../components/PrimaryButton';
import {
  ShouldersJointIcon,
  NeckJointIcon,
  ElbowJointIcon,
  KneeJointIcon,
  HipJointIcon,
  AnkleJointIcon,
  NoneJointIcon,
} from '../components/JointIcons';

interface ScreenMovementJointsProps {
  dolorPrevio?: string;
  initialSelected?: string[];
  onContinue: (selectedZones: string[]) => void;
}

export const ScreenMovementJoints: React.FC<ScreenMovementJointsProps> = ({
  dolorPrevio = '',
  initialSelected = [],
  onContinue,
}) => {
  const [selected, setSelected] = useState<string[]>(initialSelected);

  const zones = [
    {
      id: 'hombros',
      name: 'Hombros / Trapecios',
      description: 'Molestia o pinchazo al levantar peso o extender brazos',
      icon: <ShouldersJointIcon className="w-16 h-16 sm:w-18 sm:h-18" />,
    },
    {
      id: 'cuello',
      name: 'Cuello / Cervicales',
      description: 'Sobrecarga, contracturas o dolor al girar la cabeza',
      icon: <NeckJointIcon className="w-16 h-16 sm:w-18 sm:h-18" />,
    },
    {
      id: 'codos',
      name: 'Codos / Brazos',
      description: 'Molestia en tendones al apoyar, empujar o flexionar',
      icon: <ElbowJointIcon className="w-16 h-16 sm:w-18 sm:h-18" />,
    },
    {
      id: 'caderas',
      name: 'Caderas / Glúteos',
      description: 'Tensión articular profunda al caminar o levantarte',
      icon: <HipJointIcon className="w-16 h-16 sm:w-18 sm:h-18" />,
    },
    {
      id: 'rodillas',
      name: 'Rodillas',
      description: 'Crujidos, impacto o dolor al flexionar y subir escaleras',
      icon: <KneeJointIcon className="w-16 h-16 sm:w-18 sm:h-18" />,
    },
    {
      id: 'tobillos',
      name: 'Tobillos / Pies',
      description: 'Inestabilidad, molestia en pisada o rigidez matutina',
      icon: <AnkleJointIcon className="w-16 h-16 sm:w-18 sm:h-18" />,
    },
    {
      id: 'ninguna',
      name: 'Ninguna de las anteriores',
      description: 'No experimento dolor en otras articulaciones al moverme',
      icon: <NoneJointIcon className="w-16 h-16 sm:w-18 sm:h-18" />,
    },
  ];

  const handleToggle = (id: string) => {
    if (id === 'ninguna') {
      setSelected(['ninguna']);
      return;
    }

    setSelected((prev) => {
      const filtered = prev.filter((item) => item !== 'ninguna');
      if (filtered.includes(id)) {
        const next = filtered.filter((item) => item !== id);
        return next;
      } else {
        return [...filtered, id];
      }
    });
  };

  const handleNext = () => {
    if (selected.length === 0) {
      // Default to "ninguna" if user didn't pick anything
      onContinue(['ninguna']);
    } else {
      onContinue(selected);
    }
  };

  const countSelected = selected.filter((id) => id !== 'ninguna').length;

  return (
    <div className="w-full flex flex-col gap-5 pb-6">
      {/* Progress */}
      <div className="w-full">
        <Eyebrow percentage={35} line1="Personalización de tu programa" />
        <ProgressBar progress={35} />
      </div>

      {/* Title & Subtitle */}
      <div className="w-full text-center space-y-2.5">
        <div className="inline-flex items-center gap-1.5 bg-emerald-100/80 text-emerald-800 border border-emerald-300 text-[12px] font-bold px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>Calibración Biomecánica Personalizada</span>
        </div>

        <h2
          id="movement-joints-title"
          className="text-[20px] sm:text-[23px] font-bold text-[#1A1A1A] leading-snug"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          Además, ¿sientes{' '}
          <span className="bg-[#DC2626] text-white px-2 py-0.5 rounded-md inline-block">
            dolor o molestias
          </span>{' '}
          en alguna de estas articulaciones al moverte?
        </h2>

        <p className="text-[13.5px] sm:text-[14px] text-neutral-600 max-w-md mx-auto leading-relaxed">
          Adaptaremos los ejercicios para <strong>proteger tus zonas sensibles</strong> mientras recuperamos tu fuerza y movilidad articular sin riesgos.
        </p>
      </div>

      {/* Cards List */}
      <div className="w-full flex flex-col gap-2.5 mt-1">
        {zones.map((zone) => {
          const isSelected = selected.includes(zone.id);

          return (
            <button
              key={zone.id}
              type="button"
              id={`zone-btn-${zone.id}`}
              onClick={() => handleToggle(zone.id)}
              className={`w-full flex items-center justify-between p-3 sm:p-3.5 rounded-[20px] transition-all duration-200 text-left cursor-pointer border ${
                isSelected
                  ? 'border-[#16A34A] bg-[#16A34A]/5 shadow-sm ring-1 ring-[#16A34A]/30'
                  : 'border-[#1A1A1A]/10 bg-white hover:border-[#1A1A1A]/25 hover:bg-neutral-50/70 shadow-2xs'
              }`}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
                {/* Anatomical illustration with glowing hotspot */}
                <div className="shrink-0">{zone.icon}</div>

                <div className="flex flex-col min-w-0">
                  <span className="text-[15.5px] sm:text-[16.5px] font-bold text-[#1A1A1A] leading-snug">
                    {zone.name}
                  </span>
                  <span className="text-[12px] sm:text-[12.5px] text-neutral-500 leading-normal mt-0.5">
                    {zone.description}
                  </span>
                </div>
              </div>

              {/* Right Selection Indicator */}
              <div className="shrink-0 pl-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#16A34A] text-white shadow-xs'
                      : 'border-2 border-neutral-300 bg-white'
                  }`}
                >
                  {isSelected && (
                    <svg
                      className="w-4 h-4 stroke-[3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Sticky-like Action Button */}
      <div className="w-full pt-2 flex flex-col gap-2">
        <PrimaryButton
          id="btn-movement-joints-continue"
          onClick={handleNext}
        >
          {selected.includes('ninguna')
            ? 'Continuar (Sin zonas adicionales)'
            : countSelected > 0
            ? `Continuar con ${countSelected} zona${countSelected > 1 ? 's' : ''} protegida${countSelected > 1 ? 's' : ''}`
            : 'Continuar'}
        </PrimaryButton>

        <p className="text-[11.5px] text-center text-neutral-500 flex items-center justify-center gap-1.5">
          <span>🔒</span>
          <span>
            Tu protocolo Dolor Ciao descartará movimientos que sobrecarguen estas áreas.
          </span>
        </p>
      </div>
    </div>
  );
};
