import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { OptionCard } from '../components/OptionCard';
import {
  AgeRange18to26Icon,
  AgeRange27to38Icon,
  AgeRange39to50Icon,
  AgeRangeOver50Icon,
} from '../components/Icons';

interface Screen0AgeProps {
  onSelectOption: (option: string) => void;
}

export const Screen0Age: React.FC<Screen0AgeProps> = ({ onSelectOption }) => {
  const options = [
    {
      id: 'opt-age-18-26',
      label: '18 a 26 años',
      icon: <AgeRange18to26Icon className="w-12 h-12" />,
    },
    {
      id: 'opt-age-27-38',
      label: '27 a 38 años',
      icon: <AgeRange27to38Icon className="w-12 h-12" />,
    },
    {
      id: 'opt-age-39-50',
      label: '39 a 50 años',
      icon: <AgeRange39to50Icon className="w-12 h-12" />,
    },
    {
      id: 'opt-age-over-50',
      label: 'Más de 50 años',
      icon: <AgeRangeOver50Icon className="w-12 h-12" />,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={8} />
        <ProgressBar progress={8} />
      </div>

      {/* Screen Title */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q0-age-title">
          Adapta tu plan de eliminación de dolor a tu edad
        </ScreenHeading>
        <p
          id="q0-age-subtitle"
          className="text-[15px] sm:text-[16px] text-neutral-600 text-center font-medium mt-2"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          ¿Qué edad tienes?
        </p>
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
