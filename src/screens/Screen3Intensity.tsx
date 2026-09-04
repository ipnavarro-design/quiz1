import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { ReinforcementText } from '../components/ReinforcementText';
import { OptionCard } from '../components/OptionCard';

interface Screen3IntensityProps {
  onSelectOption: (option: string) => void;
}

export const Screen3Intensity: React.FC<Screen3IntensityProps> = ({ onSelectOption }) => {
  const options = [
    {
      id: 'opt-pain-mild',
      label: 'Dolor leve',
      emoji: '😟',
      colorClass: 'bg-[#16A34A] text-white',
    },
    {
      id: 'opt-pain-moderate',
      label: 'Dolor moderado',
      emoji: '😣',
      colorClass: 'bg-[#FACC15] text-[#1A1A1A]',
    },
    {
      id: 'opt-pain-severe',
      label: 'Dolor fuerte',
      emoji: '😖',
      colorClass: 'bg-[#F97316] text-white',
    },
    {
      id: 'opt-pain-extreme',
      label: 'Dolor muy fuerte',
      emoji: '🤕',
      colorClass: 'bg-[#DC2626] text-white',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section */}
      <div className="w-full">
        <Eyebrow percentage={56} />
        <ProgressBar progress={56} />
      </div>

      {/* Screen Title & Reinforcement */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q3-title">
          ¿Qué tan fuerte es tu{' '}
          <span className="bg-[#DC2626] text-white px-2 py-0.5 rounded-md inline-block">
            dolor hoy
          </span>
          ?
        </ScreenHeading>
        <ReinforcementText>
          Ya casi terminamos…
        </ReinforcementText>
      </div>

      {/* Option Cards */}
      <div className="w-full flex flex-col gap-2">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            id={option.id}
            leftSlot={
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-[22px]">
                {option.emoji}
              </div>
            }
            onSelect={() => onSelectOption(option.label)}
          >
            <span className={`font-semibold px-2 py-1 rounded-md inline-block ${option.colorClass}`}>
              {option.label}
            </span>
          </OptionCard>
        ))}
      </div>
    </div>
  );
};
