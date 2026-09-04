import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { ReinforcementText } from '../components/ReinforcementText';
import { OptionCard } from '../components/OptionCard';

interface ScreenRoutineLocationProps {
  onSelectOption: (option: string) => void;
}

export const ScreenRoutineLocation: React.FC<ScreenRoutineLocationProps> = ({
  onSelectOption,
}) => {
  const options = [
    {
      id: 'opt-loc-home',
      emoji: '🏠',
      title: 'En casa',
      desc: 'En una colchoneta, alfombra o en el suelo con comodidad y privacidad.',
    },
    {
      id: 'opt-loc-outdoor',
      emoji: '🌳',
      title: 'Al aire libre',
      desc: 'En el parque, jardín o terraza para conectar con la naturaleza.',
    },
    {
      id: 'opt-loc-both',
      emoji: '🔄',
      title: 'En ambos lugares',
      desc: 'Alternar según mis horarios, el clima y mi rutina semanal.',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={44} />
        <ProgressBar progress={44} />
      </div>

      {/* Screen Title */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q-location-title">
          ¿Dónde prefieres realizar tus rutinas de movilidad?
        </ScreenHeading>
        <ReinforcementText>
          No necesitas máquinas pesadas ni equipamiento especial para aliviar el dolor.
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
