import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { OptionCard } from '../components/OptionCard';
import {
  LumbarIcon,
  CervicalIcon,
  DorsalIcon,
  SciaticLegIcon,
  TinglingSpineIcon,
  FullBackIcon,
} from '../components/Icons';

interface Screen1LocationProps {
  onSelectOption: (option: string) => void;
}

export const Screen1Location: React.FC<Screen1LocationProps> = ({ onSelectOption }) => {
  const options = [
    {
      id: 'opt-lumbar',
      label: 'Lumbar',
      icon: <LumbarIcon />,
    },
    {
      id: 'opt-cervical',
      label: 'Cervical',
      icon: <CervicalIcon />,
    },
    {
      id: 'opt-dorsal',
      label: 'Dorsal (Espalda media)',
      icon: <DorsalIcon />,
    },
    {
      id: 'opt-pierna',
      label: 'Molestia que se extiende hacia la pierna',
      icon: <SciaticLegIcon />,
    },
    {
      id: 'opt-hormigueo',
      label: 'Hormigueo o entumecimiento',
      icon: <TinglingSpineIcon />,
    },
    {
      id: 'opt-toda-espalda',
      label: 'Toda la espalda',
      icon: <FullBackIcon />,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={46} phase="Evaluación" />
        <ProgressBar progress={46} />
      </div>

      {/* Screen Title */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q1-title">
          ¿Dónde sentís más tensión o rigidez?
        </ScreenHeading>
      </div>

      {/* Option Cards */}
      <div className="w-full flex flex-col gap-2">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            id={option.id}
            leftSlot={option.icon}
            onSelect={() => onSelectOption(option.label)}
          >
            <span className="font-medium text-[#1A1A1A] text-[15.5px] sm:text-[16px] leading-snug">
              {option.label}
            </span>
          </OptionCard>
        ))}
      </div>
    </div>
  );
};
