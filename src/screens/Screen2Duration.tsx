import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { ReinforcementText } from '../components/ReinforcementText';
import { OptionCard } from '../components/OptionCard';

interface Screen2DurationProps {
  onSelectOption: (option: string) => void;
}

export const Screen2Duration: React.FC<Screen2DurationProps> = ({ onSelectOption }) => {
  const options = [
    {
      id: 'opt-duration-1',
      label: 'Menos de 1 mes',
      emoji: '⏱️',
      colorClass: 'bg-[#16A34A] text-white',
    },
    {
      id: 'opt-duration-2',
      label: 'Entre 1 y 6 meses',
      emoji: '🕐',
      colorClass: 'bg-[#FACC15] text-[#09090B]',
    },
    {
      id: 'opt-duration-3',
      label: 'Entre 6 y 12 meses',
      emoji: '🗓️',
      colorClass: 'bg-[#DC2626] text-white',
    },
    {
      id: 'opt-duration-4',
      label: 'Más de 12 meses',
      emoji: '😩',
      colorClass: 'bg-[#4E2323] text-white',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section */}
      <div className="w-full">
        <Eyebrow percentage={48} />
        <ProgressBar progress={48} />
      </div>

      {/* Screen Title & Reinforcement */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q2-title">
          ¿Hace cuánto tiempo sientes ese{' '}
          <span className="bg-[#DC2626] text-white px-2 py-0.5 rounded-md inline-block">
            dolor
          </span>
          ?
        </ScreenHeading>
        <ReinforcementText>
          Tus respuestas nos ayudan a entender el origen de tu dolor.
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
            <span className={`font-medium px-2 py-1 rounded-md inline-block ${option.colorClass}`}>
              {option.label}
            </span>
          </OptionCard>
        ))}
      </div>
    </div>
  );
};
