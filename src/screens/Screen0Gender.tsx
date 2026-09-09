import React from 'react';
import { motion } from 'motion/react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { OptionCard } from '../components/OptionCard';
import { WomanIcon, ManIcon } from '../components/Icons';

interface Screen0GenderProps {
  onSelectOption: (option: string) => void;
}

export const Screen0Gender: React.FC<Screen0GenderProps> = ({ onSelectOption }) => {
  const options = [
    {
      id: 'opt-gender-mujer',
      label: 'Mujer',
      icon: <WomanIcon className="w-12 h-12" />,
    },
    {
      id: 'opt-gender-hombre',
      label: 'Hombre',
      icon: <ManIcon className="w-12 h-12" />,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={12} phase="Evaluación" />
        <ProgressBar progress={12} />
      </div>

      {/* Banner de tiempo limitado animado llamativo */}
      <motion.div
        id="banner-urgency-gender"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full bg-red-50 border-2 border-red-300 rounded-[16px] p-3.5 sm:p-4 text-center shadow-[0_4px_16px_rgba(220,38,38,0.12)]"
      >
        <p className="text-[13.5px] sm:text-[15px] font-extrabold text-red-700 leading-snug">
          ⏰ Este test está disponible por tiempo limitado hoy.
          <br />
          <span className="text-red-800 font-black">
            Completalo ahora para no perder tu oportunidad.
          </span>
        </p>
      </motion.div>

      {/* Screen Title */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q0-gender-title">
          ¿Cuál es tu género?
        </ScreenHeading>
      </div>

      {/* Option Cards */}
      <div className="w-full flex flex-col gap-3">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            id={option.id}
            leftSlot={option.icon}
            onSelect={() => onSelectOption(option.label)}
          >
            <span className="font-medium text-[#1A1A1A] text-[16px] sm:text-[17px] leading-snug">
              {option.label}
            </span>
          </OptionCard>
        ))}
      </div>
    </div>
  );
};
