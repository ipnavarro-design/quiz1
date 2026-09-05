import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { ReinforcementText } from '../components/ReinforcementText';
import { PrimaryButton } from '../components/PrimaryButton';
import {
  HerniaDiscIcon,
  SciaticInflammationIcon,
  DiscProtrusionIcon,
  SpineSuspectIcon,
  AcvIcon,
  AutoimmuneIcon,
  AnkylosingSpondylitisIcon,
  EnteropathicArthritisIcon,
  NoStudiesIcon,
} from '../components/Icons';

interface Screen4DiagnosisProps {
  onSelectOption: (options: string[]) => void;
}

interface DiagnosisOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  isNone?: boolean;
}

export const Screen4Diagnosis: React.FC<Screen4DiagnosisProps> = ({ onSelectOption }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const options: DiagnosisOption[] = [
    {
      id: 'opt-diag-hernia',
      label: 'Hernia de disco confirmada',
      icon: <HerniaDiscIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-diag-ciatico',
      label: 'Inflamación del nervio ciático',
      icon: <SciaticInflammationIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-diag-protrusion',
      label: 'Protrusión discal',
      icon: <DiscProtrusionIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-diag-acv',
      label: 'Antecedente de ACV (Accidente Cerebrovascular)',
      icon: <AcvIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-diag-autoinmune',
      label: 'Enfermedad autoinmune diagnosticada',
      icon: <AutoimmuneIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-diag-espondilitis',
      label: 'Espondilitis anquilosante',
      icon: <AnkylosingSpondylitisIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-diag-artritis-enteropatica',
      label: 'Artritis enteropática (Crohn o Colitis Ulcerosa)',
      icon: <EnteropathicArthritisIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-diag-sospecha',
      label: 'Solo sospecha de un problema en la columna',
      icon: <SpineSuspectIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-diag-ninguno',
      label: 'Nunca me hice estudios médicos',
      icon: <NoStudiesIcon className="w-11 h-11" />,
      isNone: true,
    },
  ];

  const handleToggle = (option: DiagnosisOption) => {
    if (option.isNone) {
      if (selectedIds.includes(option.id)) {
        setSelectedIds([]);
      } else {
        setSelectedIds([option.id]);
      }
      return;
    }

    if (selectedIds.includes(option.id)) {
      setSelectedIds((prev) => prev.filter((id) => id !== option.id));
    } else {
      setSelectedIds((prev) => [...prev.filter((id) => id !== 'opt-diag-ninguno'), option.id]);
    }
  };

  const handleProceed = () => {
    if (selectedIds.length === 0) return;
    const selectedLabels = options
      .filter((opt) => selectedIds.includes(opt.id))
      .map((opt) => opt.label);
    onSelectOption(selectedLabels);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section */}
      <div className="w-full">
        <Eyebrow percentage={80} />
        <ProgressBar progress={80} />
      </div>

      {/* Screen Title & Subtitle */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q4-title">
          ¿Ya recibiste algún diagnóstico médico?
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
              {/* Left thematic icon */}
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
        <PrimaryButton
          id="btn-continue-diagnosis"
          onClick={handleProceed}
          disabled={selectedIds.length === 0}
          variant="green"
        >
          {selectedIds.length > 0
            ? `Continuar (${selectedIds.length} seleccionada${selectedIds.length > 1 ? 's' : ''})`
            : 'Selecciona al menos una opción'}
        </PrimaryButton>
      </div>
    </div>
  );
};


