import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { ReinforcementText } from '../components/ReinforcementText';
import {
  PhysioIcon,
  ChiroIcon,
  YogaGymIcon,
  MassageDryNeedleIcon,
  SwimmingIcon,
  PainkillersIcon,
  RestImmobilityIcon,
  NoneMethodsIcon,
} from '../components/Icons';

interface ScreenPreviousMethodsProps {
  onContinue: (selectedMethods: string[]) => void;
}

interface MethodOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  isNone?: boolean;
}

export const ScreenPreviousMethods: React.FC<ScreenPreviousMethodsProps> = ({ onContinue }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const options: MethodOption[] = [
    {
      id: 'opt-physio',
      label: 'Kinesiólogo / Fisioterapeuta',
      icon: <PhysioIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-chiro',
      label: 'Quiropraxia',
      icon: <ChiroIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-yoga-gym',
      label: 'Yoga / Pilates / Gimnasio',
      icon: <YogaGymIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-massage',
      label: 'Masajes / Calor / Punción seca',
      icon: <MassageDryNeedleIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-swimming',
      label: 'Natación',
      icon: <SwimmingIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-painkillers',
      label: 'Analgésicos / Pastillas',
      icon: <PainkillersIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-rest',
      label: 'Reposo / Evitar el movimiento',
      icon: <RestImmobilityIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-none',
      label: 'Ninguno de los anteriores',
      icon: <NoneMethodsIcon className="w-11 h-11" />,
      isNone: true,
    },
  ];

  const handleToggle = (option: MethodOption) => {
    if (option.isNone) {
      if (selectedIds.includes(option.id)) {
        setSelectedIds([]);
      } else {
        setSelectedIds([option.id]);
      }
      return;
    }

    // If selecting a regular option, remove 'none' if present
    if (selectedIds.includes(option.id)) {
      setSelectedIds((prev) => prev.filter((id) => id !== option.id));
    } else {
      setSelectedIds((prev) => [...prev.filter((id) => id !== 'opt-none'), option.id]);
    }
  };

  const handleProceed = () => {
    if (selectedIds.length === 0) return;
    const selectedLabels = options
      .filter((opt) => selectedIds.includes(opt.id))
      .map((opt) => opt.label);
    onContinue(selectedLabels);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header with 28% progress */}
      <div className="w-full">
        <Eyebrow percentage={28} />
        <ProgressBar progress={28} />
      </div>

      {/* Screen Title & Subtitle */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q-methods-title">
          ¿Qué métodos has intentado{' '}
          <span className="bg-[#DC2626] text-white px-2 py-0.5 rounded-md inline-block">
            sin resultados
          </span>
          ?
        </ScreenHeading>
        <ReinforcementText>
          Puedes seleccionar más de una opción.
        </ReinforcementText>
      </div>

      {/* Multi-Select Option Cards */}
      <div className="w-full flex flex-col gap-2.5">
        {options.map((option) => {
          const isSelected = selectedIds.includes(option.id);
          return (
            <button
              key={option.id}
              id={option.id}
              type="button"
              onClick={() => handleToggle(option)}
              className={`w-full flex items-center gap-3.5 p-3.5 sm:p-4 rounded-[16px] text-left transition-all duration-200 cursor-pointer select-none bg-white ${
                isSelected
                  ? 'border-2 border-[#1A1A1A] ring-1 ring-[#1A1A1A] bg-[#F7F4EE] shadow-sm'
                  : 'border border-[#1A1A1A]/15 hover:border-[#1A1A1A] hover:bg-[#FAF8F5] active:border-[#1A1A1A]'
              }`}
            >
              {/* Left custom thematic icon */}
              <div className="shrink-0">{option.icon}</div>

              {/* Label */}
              <div className="flex-1 text-[15px] sm:text-[16px] font-medium text-[#1A1A1A] leading-snug">
                {option.label}
              </div>

              {/* Checkbox indicator */}
              <div
                className={`shrink-0 w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${
                  isSelected
                    ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white'
                    : 'border-[#1A1A1A]/30 bg-white'
                }`}
              >
                {isSelected && (
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Action Button */}
      <div className="w-full pt-2">
        <button
          type="button"
          id="btn-continue-methods"
          onClick={handleProceed}
          disabled={selectedIds.length === 0}
          className={`w-full py-3.5 px-6 rounded-[14px] font-bold text-[16.5px] sm:text-[17px] text-center transition-all duration-200 select-none shadow-sm flex items-center justify-center gap-2 ${
            selectedIds.length > 0
              ? 'bg-[#16A34A] hover:bg-[#15803D] text-white cursor-pointer active:scale-[0.99]'
              : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
          }`}
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          <span>Continuar</span>
          <span className="text-[18px]">→</span>
        </button>
      </div>
    </div>
  );
};
