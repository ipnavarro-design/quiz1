import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { ReinforcementText } from '../components/ReinforcementText';
import { OptionCard } from '../components/OptionCard';

interface ScreenWeeklyPainDaysProps {
  onSelectOption: (option: string) => void;
}

export const ScreenWeeklyPainDays: React.FC<ScreenWeeklyPainDaysProps> = ({ onSelectOption }) => {
  const options = [
    {
      id: 'opt-days-2-3',
      label: '2 / 3 días de 7',
      sublabel: 'Dolor intermitente durante la semana',
      emoji: '🗓️',
      colorBadge: 'bg-emerald-100 text-emerald-800',
    },
    {
      id: 'opt-days-4-5',
      label: '4 / 5 días de 7',
      sublabel: 'Dolor frecuente la mayor parte de la semana',
      emoji: '⚡',
      colorBadge: 'bg-amber-100 text-amber-800',
    },
    {
      id: 'opt-days-6-7',
      label: '6 / 7 días de 7',
      sublabel: 'Dolor constante casi todos o todos los días',
      emoji: '🚨',
      colorBadge: 'bg-red-100 text-red-800',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with progress */}
      <div className="w-full">
        <Eyebrow percentage={35} />
        <ProgressBar progress={35} />
      </div>

      {/* Screen Title & Subtitle */}
      <div className="w-full text-center sm:text-left">
        <ScreenHeading as="h2" id="q-days-weekly-title">
          En la última semana,
          <br className="hidden sm:inline" />
          ¿cuántos días has sentido{' '}
          <span className="bg-[#DC2626] text-white px-2 py-0.5 rounded-md inline-block">
            dolor
          </span>
          ?
        </ScreenHeading>
        <ReinforcementText>
          Esto nos permite evaluar la frecuencia e inflamación activa.
        </ReinforcementText>
      </div>

      {/* Option Cards */}
      <div className="w-full flex flex-col gap-3">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            id={option.id}
            leftSlot={
              <div className="w-11 h-11 rounded-xl bg-neutral-100/90 border border-neutral-200/80 flex items-center justify-center text-[24px] shrink-0">
                {option.emoji}
              </div>
            }
            onSelect={() => onSelectOption(option.label)}
          >
            <div className="flex flex-col text-left">
              <span className="font-semibold text-[#1A1A1A] text-[16px] sm:text-[17px] leading-snug">
                {option.label}
              </span>
              <span className="text-[13px] text-neutral-500 font-normal mt-0.5">
                {option.sublabel}
              </span>
            </div>
          </OptionCard>
        ))}
      </div>
    </div>
  );
};
