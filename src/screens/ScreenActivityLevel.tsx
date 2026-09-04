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
      desc: 'Paso la mayor parte del día sentado o con muy poco movimiento.',
    },
    {
      id: 'opt-act-light',
      emoji: '🚶',
      title: 'Ligeramente activo',
      desc: 'Caminatas suaves, tareas cotidianas o estiramientos ocasionales.',
    },
    {
      id: 'opt-act-moderate',
      emoji: '🏃',
      title: 'Moderadamente activo',
      desc: 'Movimiento o actividad física 3 a 4 veces por semana.',
    },
    {
      id: 'opt-act-high',
      emoji: '⚡',
      title: 'Muy activo',
      desc: 'Entrenamiento o trabajo físico regular de 5 o más días por semana.',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={40} />
        <ProgressBar progress={40} />
      </div>

      {/* Screen Title */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q-activity-title">
          ¿Cuál es tu nivel de actividad física en la semana?
        </ScreenHeading>
        <ReinforcementText>
          Esto nos ayuda a calibrar la intensidad de las micro-rutinas sin sobrecargar tu columna.
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
