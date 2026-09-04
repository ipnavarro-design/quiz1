import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { ReinforcementText } from '../components/ReinforcementText';
import { PrimaryButton } from '../components/PrimaryButton';

interface ScreenSleepImpactProps {
  onContinue: (option: string) => void;
}

export const ScreenSleepImpact: React.FC<ScreenSleepImpactProps> = ({
  onContinue,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showInsight, setShowInsight] = useState(false);

  const options = [
    {
      id: 'opt-sleep-low',
      emoji: '🌙',
      title: 'Menos de 5 horas',
      desc: 'El dolor o los pinchazos lumbares me despiertan repetidamente de noche.',
    },
    {
      id: 'opt-sleep-med',
      emoji: '🛏️',
      title: '5 a 6 horas con interrupciones',
      desc: 'Me cuesta encontrar una postura cómoda y amanezco con rigidez.',
    },
    {
      id: 'opt-sleep-good',
      emoji: '😴',
      title: '7 a 8 horas de descanso regular',
      desc: 'Duermo relativamente bien, aunque siento tensión en la espalda al levantarme.',
    },
    {
      id: 'opt-sleep-high',
      emoji: '✨',
      title: 'Más de 8 horas',
      desc: 'Tengo buen descanso, busco prevenir molestias y mejorar mi postura matutina.',
    },
  ];

  const handleSelect = (title: string) => {
    setSelectedOption(title);
    setShowInsight(true);
  };

  const handleFinalContinue = () => {
    if (selectedOption) {
      onContinue(selectedOption);
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={68} />
        <ProgressBar progress={68} />
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
        <ReinforcementText>
          Durante el sueño profundo ocurre el 80% de la regeneración discal y desinflamación muscular.
        </ReinforcementText>
      </div>

      {/* Option Cards */}
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
                <span className="text-[13px] text-neutral-500 font-normal mt-0.5">
                  {opt.desc}
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

      {/* Educational Insight Card for Sleep */}
      {showInsight && (
        <div className="w-full bg-[#F0FDF4] border border-[#16A34A]/30 rounded-[18px] p-4.5 flex flex-col gap-2.5 shadow-xs animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center gap-2 text-[#16A34A] font-bold text-[14.5px]">
            <span className="text-[18px]">🌙</span>
            <span>¿Por qué el descanso es vital para sanar tu espalda?</span>
          </div>
          <p className="text-[13.5px] text-neutral-700 leading-relaxed">
            Durante la noche, la gravedad deja de comprimir tu columna y los discos vertebrales <strong className="text-[#1A1A1A]">se rehidratan y expanden</strong>. Un sueño interrumpido bloquea la relajación de la musculatura lumbar y perpetúa la inflamación nerviosa.
          </p>
        </div>
      )}

      {/* Continue Button */}
      {showInsight && (
        <div className="w-full pt-1">
          <PrimaryButton
            id="btn-sleep-continue"
            onClick={handleFinalContinue}
          >
            Entendido, continuar
          </PrimaryButton>
        </div>
      )}
    </div>
  );
};
