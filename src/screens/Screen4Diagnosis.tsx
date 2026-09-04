import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { OptionCard } from '../components/OptionCard';
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
  onSelectOption: (option: string) => void;
}

export const Screen4Diagnosis: React.FC<Screen4DiagnosisProps> = ({ onSelectOption }) => {
  const options = [
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
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section */}
      <div className="w-full">
        <Eyebrow percentage={80} />
        <ProgressBar progress={80} />
      </div>

      {/* Screen Title with only 'diagnóstico médico' in red background */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q4-title">
          ¿Ya recibiste algún diagnóstico médico?
        </ScreenHeading>
      </div>

      {/* Option Cards with clear dedicated icons and clean neutral typography */}
      <div className="w-full flex flex-col gap-2.5">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            id={option.id}
            leftSlot={option.icon}
            onSelect={() => onSelectOption(option.label)}
          >
            <span className="font-medium text-[#1A1A1A] text-[15px] sm:text-[16px] leading-snug">
              {option.label}
            </span>
          </OptionCard>
        ))}
      </div>
    </div>
  );
};


