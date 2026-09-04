import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { ReinforcementText } from '../components/ReinforcementText';
import { OptionCard } from '../components/OptionCard';

interface ScreenRoutineDurationProps {
  onSelectOption: (option: string) => void;
}

export const ScreenRoutineDuration: React.FC<ScreenRoutineDurationProps> = ({
  onSelectOption,
}) => {
  const options = [
    {
      id: 'opt-dur-10-15',
      emoji: '⚡',
      title: '10 a 15 minutos al día',
      desc: 'Micro-rutinas rápidas y efectivas, ideales para días con poco tiempo.',
    },
    {
      id: 'opt-dur-20-40',
      emoji: '⏳',
      title: '20 a 40 minutos al día',
      desc: 'Sesión integral de descompresión vertebral y movilidad guiada.',
    },
    {
      id: 'opt-dur-40-60',
      emoji: '⌛',
      title: '40 a 60 minutos al día',
      desc: 'Enfoque profundo de restauración funcional y fortalecimiento postural.',
    },
    {
      id: 'opt-dur-auto',
      emoji: '🤖',
      title: 'Que la app decida por mí',
      desc: 'Optimizar la duración diaria según mi nivel de dolor y progreso.',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={60} />
        <ProgressBar progress={60} />
      </div>

      {/* Screen Title */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q-routine-dur-title">
          ¿Cuánto tiempo deseas dedicar a tus rutinas de alivio?
        </ScreenHeading>
        <ReinforcementText>
          La consistencia diaria importa mucho más que la duración de una sola sesión.
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
              <span className="text-[13px] text-neutral-500 font-normal mt-0.5">
                {opt.desc}
              </span>
            </div>
          </OptionCard>
        ))}
      </div>
    </div>
  );
};
