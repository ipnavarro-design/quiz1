import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { OptionCard } from '../components/OptionCard';
import { WomanIcon, ManIcon } from '../components/Icons';

interface Screen0GenderProps {
  onSelectOption: (option: string) => void;
}

export const Screen0Gender: React.FC<Screen0GenderProps> = ({ onSelectOption }) => {
  const options = [
    {
      id: 'opt-gender-mujer',
      label: 'Mujer',
      icon: <WomanIcon className="w-12 h-12" />,
    },
    {
      id: 'opt-gender-hombre',
      label: 'Hombre',
      icon: <ManIcon className="w-12 h-12" />,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={5} />
        <ProgressBar progress={5} />
      </div>

      {/* Screen Title */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q0-gender-title">
          ¿Cuál es tu género?
        </ScreenHeading>
      </div>

      {/* Option Cards */}
      <div className="w-full flex flex-col gap-3">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            id={option.id}
            leftSlot={option.icon}
            onSelect={() => onSelectOption(option.label)}
          >
            <span className="font-medium text-[#1A1A1A] text-[16px] sm:text-[17px] leading-snug">
              {option.label}
            </span>
          </OptionCard>
        ))}
      </div>
    </div>
  );
};
