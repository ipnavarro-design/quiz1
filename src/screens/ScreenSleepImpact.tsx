import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';

interface ScreenSleepImpactProps {
  onContinue: (option: string) => void;
}

export const ScreenSleepImpact: React.FC<ScreenSleepImpactProps> = ({
  onContinue,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    {
      id: 'opt-sleep-low',
      emoji: '🌙',
      title: 'Menos de 5 horas',
    },
    {
      id: 'opt-sleep-med',
      emoji: '🛏️',
      title: '5 a 6 horas con interrupciones',
    },
    {
      id: 'opt-sleep-good',
      emoji: '😴',
      title: '7 a 8 horas de descanso regular',
    },
    {
      id: 'opt-sleep-high',
      emoji: '✨',
      title: 'Más de 8 horas',
    },
  ];

  const handleSelect = (title: string) => {
    setSelectedOption(title);
    setTimeout(() => {
      onContinue(title);
    }, 250);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={94} phase="Personalización" />
        <ProgressBar progress={94} />
      </div>

      {/* Screen Title */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q-sleep-title">
          ¿Cuántas horas dormís y cómo afecta el{' '}
          <span className="bg-[#DC2626] text-white px-2 py-0.5 rounded-md inline-block">
            dolor
          </span>{' '}
          tu descanso?
        </ScreenHeading>
      </div>

      {/* Educational Insight Card for Sleep (trimmed to 1 short sentence) */}
      <div className="w-full bg-[#F0FDF4] border border-[#16A34A]/30 rounded-[16px] p-3.5 flex items-center gap-2.5 shadow-2xs">
        <span className="text-[20px] shrink-0">🌙</span>
        <div className="flex flex-col gap-0.5 text-left">
          <strong className="text-[#16A34A] font-bold text-[12.5px]">
            ¿Por qué el descanso es clave para tu espalda?
          </strong>
          <p className="text-[12.5px] text-neutral-700 leading-snug">
            Durante el sueño profundo tu musculatura se relaja por completo y la columna descomprime la carga diaria.
          </p>
        </div>
      </div>

      {/* Option Cards with auto-advance */}
      <div className="w-full flex flex-col gap-3">
        {options.map((opt) => {
          const isSelected = selectedOption === opt.title;
          return (
            <button
              key={opt.id}
              id={opt.id}
              type="button"
              onClick={() => handleSelect(opt.title)}
              className={`w-full flex items-center gap-3.5 p-4 rounded-[16px] text-left transition-all duration-200 cursor-pointer select-none bg-white ${
                isSelected
                  ? 'border-2 border-[#16A34A] ring-1 ring-[#16A34A] bg-[#F0FDF4] shadow-sm'
                  : 'border border-[#1A1A1A]/15 hover:border-[#1A1A1A] hover:bg-[#FAF8F5]'
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-200/70 flex items-center justify-center text-[24px] shrink-0">
                {opt.emoji}
              </div>
              <div className="flex-1 flex flex-col">
                <span className="font-semibold text-[#1A1A1A] text-[16px] leading-snug">
                  {opt.title}
                </span>
              </div>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  isSelected
                    ? 'border-[#16A34A] bg-[#16A34A]'
                    : 'border-neutral-300 bg-white'
                }`}
              >
                {isSelected && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
