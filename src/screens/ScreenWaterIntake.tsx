import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { ReinforcementText } from '../components/ReinforcementText';
import { PrimaryButton } from '../components/PrimaryButton';

interface ScreenWaterIntakeProps {
  onContinue: (waterAmount: string) => void;
}

export const ScreenWaterIntake: React.FC<ScreenWaterIntakeProps> = ({
  onContinue,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showInsight, setShowInsight] = useState(false);

  const options = [
    {
      id: 'opt-water-1',
      emoji: '💧',
      title: 'Menos de 1 litro al día',
      desc: 'Rara vez tomo agua pura o solo cuando siento mucha sed.',
    },
    {
      id: 'opt-water-2',
      emoji: '🚰',
      title: '1 a 2 litros al día',
      desc: 'Consumo habitual moderado distribuido en la jornada.',
    },
    {
      id: 'opt-water-3',
      emoji: '🌊',
      title: 'Más de 2 litros al día',
      desc: 'Buena hidratación constante a lo largo de todo el día.',
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
        <Eyebrow percentage={72} />
        <ProgressBar progress={72} />
      </div>

      {/* Screen Title */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q-water-title">
          ¿Cuánta agua consumís al día?
        </ScreenHeading>
        <ReinforcementText>
          La hidratación celular es el factor clave en la salud de las almohadillas intervertebrales.
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
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-[24px] shrink-0">
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

      {/* Educational Insight Card (C.11) */}
      {showInsight && (
        <div className="w-full bg-[#F0FDF4] border border-[#16A34A]/30 rounded-[18px] p-4.5 flex flex-col gap-2.5 shadow-xs animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center gap-2 text-[#16A34A] font-bold text-[14.5px]">
            <span className="text-[18px]">💧</span>
            <span>¿Por qué el agua alivia tu columna?</span>
          </div>
          <p className="text-[13.5px] text-neutral-700 leading-relaxed">
            Los discos intervertebrales están compuestos en un <strong className="text-[#1A1A1A]">80% por agua</strong>. Cuando estás deshidratado, los discos pierden grosor, se comprimen y aumenta el rozamiento entre vértebras, agravando hernias y pinzamientos ciáticos.
          </p>
        </div>
      )}

      {/* Continue Button */}
      {showInsight && (
        <div className="w-full pt-1">
          <PrimaryButton
            id="btn-water-continue"
            onClick={handleFinalContinue}
          >
            Entendido, continuar
          </PrimaryButton>
        </div>
      )}
    </div>
  );
};
