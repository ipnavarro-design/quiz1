import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { ReinforcementText } from '../components/ReinforcementText';
import { OptionCard } from '../components/OptionCard';
import {
  WorkImpactIcon,
  SleepImpactIcon,
  ActivityImpactIcon,
  MoodEnergyIcon,
  RoutineImpactIcon,
  PlayWithChildImpactIcon,
} from '../components/Icons';

interface Screen5ImpactProps {
  onSelectOption: (option: string) => void;
}

export const Screen5Impact: React.FC<Screen5ImpactProps> = ({ onSelectOption }) => {
  const options = [
    {
      id: 'opt-impact-trabajo',
      label: 'Tengo dificultad para trabajar',
      icon: <WorkImpactIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-impact-dormir',
      label: 'Tengo dificultad para dormir',
      icon: <SleepImpactIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-impact-ejercicio',
      label: 'No puedo hacer actividad física',
      icon: <ActivityImpactIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-impact-hijo',
      label: 'No puedo jugar con mi hijo',
      icon: <PlayWithChildImpactIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-impact-animo',
      label: 'Afecta mi ánimo y mi energía',
      icon: <MoodEnergyIcon className="w-11 h-11" />,
    },
    {
      id: 'opt-impact-rutina',
      label: 'Afecta casi toda mi rutina',
      icon: <RoutineImpactIcon className="w-11 h-11" />,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section */}
      <div className="w-full">
        <Eyebrow percentage={84} />
        <ProgressBar progress={84} />
      </div>

      {/* Screen Title & Reinforcement */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q5-title">
          ¿Cómo{' '}
          <span className="bg-[#DC2626] text-white px-2 py-0.5 rounded-md inline-block">
            afecta el dolor
          </span>{' '}
          tu vida cotidiana?
        </ScreenHeading>
        <ReinforcementText>
          Ya falta poco para terminar.
        </ReinforcementText>
      </div>

      {/* Option Cards with dedicated left icons and clean neutral typography */}
      <div className="w-full flex flex-col gap-2.5">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            id={option.id}
            leftSlot={option.icon}
            onSelect={() => onSelectOption(option.label)}
          >
            <span className="font-medium text-[#1A1A1A] text-[15px] sm:text-[16px] leading-snug">
              {option.label}
            </span>
          </OptionCard>
        ))}
      </div>
    </div>
  );
};

