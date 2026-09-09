import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { ReinforcementText } from '../components/ReinforcementText';
import { OptionCard } from '../components/OptionCard';

interface ScreenActivityLevelProps {
  onSelectOption: (option: string) => void;
}

export const ScreenActivityLevel: React.FC<ScreenActivityLevelProps> = ({
  onSelectOption,
}) => {
  const options = [
    {
      id: 'opt-act-sedentary',
      emoji: '🛋️',
      title: 'Sedentario',
    },
    {
      id: 'opt-act-light',
      emoji: '🚶',
      title: 'Ligeramente activo',
    },
    {
      id: 'opt-act-moderate',
      emoji: '🏃',
      title: 'Moderadamente activo',
    },
    {
      id: 'opt-act-high',
      emoji: '⚡',
      title: 'Muy activo',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={83} phase="Personalización" />
        <ProgressBar progress={83} />
      </div>

      {/* Screen Title */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q-activity-title">
          ¿Cuál es tu nivel de actividad física en la semana?
        </ScreenHeading>
        <ReinforcementText>
          Esto nos ayuda a calibrar la intensidad de las micro-rutinas para que sean cómodas para vos.
        </ReinforcementText>
      </div>

      {/* Option Cards */}
      <div className="w-full flex flex-col gap-3">
        {options.map((opt) => (
          <OptionCard
            key={opt.id}
            id={opt.id}
            leftSlot={
              <div className="w-11 h-11 rounded-xl bg-neutral-100/90 border border-neutral-200/80 flex items-center justify-center text-[24px] shrink-0">
                {opt.emoji}
              </div>
            }
            onSelect={() => onSelectOption(opt.title)}
          >
            <div className="flex flex-col text-left">
              <span className="font-semibold text-[#1A1A1A] text-[16px] leading-snug">
                {opt.title}
              </span>
            </div>
          </OptionCard>
        ))}
      </div>
    </div>
  );
};
