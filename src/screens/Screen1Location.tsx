import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { OptionCard } from '../components/OptionCard';
import { LumbarIcon, CervicalIcon, SciaticLegIcon, TinglingSpineIcon } from '../components/Icons';

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
      id: 'opt-pierna',
      label: 'Molestia que se extiende hacia la pierna',
      icon: <SciaticLegIcon />,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={32} />
        <ProgressBar progress={32} />
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
