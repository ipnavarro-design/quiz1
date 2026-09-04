import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { ReinforcementText } from '../components/ReinforcementText';

interface Screen6GoalsProps {
  onContinue: (selectedGoals: string[]) => void;
}

interface GoalOption {
  id: string;
  label: string;
  emoji: string;
}

export const Screen6Goals: React.FC<Screen6GoalsProps> = ({ onContinue }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const options: GoalOption[] = [
    {
      id: 'opt-goal-1',
      label: 'Poder levantarme sin sentir dolor',
      emoji: '🌅',
    },
    {
      id: 'opt-goal-2',
      label: 'Pasar el día sin estar pendiente de mi espalda',
      emoji: '🧘',
    },
    {
      id: 'opt-goal-3',
      label: 'Sentarme y trabajar sin molestias',
      emoji: '💻',
    },
    {
      id: 'opt-goal-4',
      label: 'Volver a entrenar sin miedo',
      emoji: '🏃',
    },
    {
      id: 'opt-goal-5',
      label: 'Dormir toda la noche sin dolor',
      emoji: '🌙',
    },
    {
      id: 'opt-goal-6',
      label: 'Moverme con libertad y confianza',
      emoji: '🕊️',
    },
    {
      id: 'opt-goal-7',
      label: 'Sentirme más fuerte y flexible',
      emoji: '💪',
    },
    {
      id: 'opt-goal-8',
      label: 'Disfrutar de jugar con mi familia y amigos',
      emoji: '👨‍👩‍👧',
    },
    {
      id: 'opt-goal-9',
      label: 'Dejar atrás el dolor de espalda de una vez por todas',
      emoji: '🎯',
    },
  ];

  const handleToggle = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleProceed = () => {
    if (selectedIds.length === 0) return;
    const selectedLabels = options
      .filter((opt) => selectedIds.includes(opt.id))
      .map((opt) => opt.label);
    onContinue(selectedLabels);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with 92% progress */}
      <div className="w-full">
        <Eyebrow percentage={92} />
        <ProgressBar progress={92} />
      </div>

      {/* Screen Title & Subtitle */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q6-goals-title">
          ¿Qué te gustaría lograr en los{' '}
          <span className="bg-[#0E4A72] text-white px-2 py-0.5 rounded-md inline-block">
            próximos 30 días
          </span>
          ?
        </ScreenHeading>
        <ReinforcementText>
          Puedes seleccionar varias opciones.
        </ReinforcementText>
      </div>

      {/* Multi-Select Option Cards */}
      <div className="w-full flex flex-col gap-2.5">
        {options.map((option) => {
          const isSelected = selectedIds.includes(option.id);
          return (
            <button
              key={option.id}
              id={option.id}
              type="button"
              onClick={() => handleToggle(option.id)}
              className={`w-full flex items-center gap-3.5 p-3.5 sm:p-4 rounded-[16px] text-left transition-all duration-200 cursor-pointer select-none bg-white ${
                isSelected
                  ? 'border-2 border-[#0E4A72] ring-1 ring-[#0E4A72] bg-[#EDF4F9] shadow-sm'
                  : 'border border-[#CBD5E1] hover:border-[#0E4A72] hover:bg-[#F4F8FB] active:border-[#0E4A72]'
              }`}
            >
              {/* Left thematic emoji badge */}
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[20px] shrink-0">
                {option.emoji}
              </div>

              {/* Label */}
              <div className={`flex-1 text-[15px] sm:text-[16px] leading-snug ${isSelected ? 'font-semibold text-[#0E4A72]' : 'font-medium text-[#1E293B]'}`}>
                {option.label}
              </div>

              {/* Checkbox indicator */}
              <div
                className={`shrink-0 w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${
                  isSelected
                    ? 'bg-[#0E4A72] border-[#0E4A72] text-white'
                    : 'border-slate-300 bg-white'
                }`}
              >
                {isSelected && (
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Action Button */}
      <div className="w-full pt-2">
        <button
          type="button"
          id="btn-continue-goals"
          onClick={handleProceed}
          disabled={selectedIds.length === 0}
          className={`w-full py-3.5 px-6 rounded-[14px] font-bold text-[16.5px] sm:text-[17px] text-center transition-all duration-200 select-none shadow-sm flex items-center justify-center gap-2 ${
            selectedIds.length > 0
              ? 'bg-[#16A34A] hover:bg-[#15803D] text-white cursor-pointer active:scale-[0.99]'
              : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
          }`}
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          <span>Continuar</span>
          <span className="text-[18px]">→</span>
        </button>
      </div>
    </div>
  );
};
