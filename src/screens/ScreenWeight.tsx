import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { ReinforcementText } from '../components/ReinforcementText';
import { PrimaryButton } from '../components/PrimaryButton';

interface ScreenWeightProps {
  onContinue: (weightKg: number) => void;
  defaultWeight?: number;
}

export const ScreenWeight: React.FC<ScreenWeightProps> = ({
  onContinue,
  defaultWeight = 74,
}) => {
  const [weight, setWeight] = useState<number>(defaultWeight);

  const handleMinus = () => {
    setWeight((prev) => Math.max(40, prev - 1));
  };

  const handlePlus = () => {
    setWeight((prev) => Math.min(160, prev + 1));
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={20} />
        <ProgressBar progress={20} />
      </div>

      {/* Screen Title */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q-weight-title">
          ¿Cuál es tu peso actual?
        </ScreenHeading>
        <ReinforcementText>
          La carga corporal incide directamente en la presión que soportan los discos lumbares L4-L5 y L5-S1.
        </ReinforcementText>
      </div>

      {/* Interactive Weight Card */}
      <div className="w-full bg-white border border-[#1A1A1A]/15 rounded-[20px] p-6 flex flex-col items-center gap-6 shadow-xs">
        {/* Weight Display */}
        <div className="flex flex-col items-center">
          <div className="flex items-baseline gap-2">
            <span
              className="text-[44px] sm:text-[52px] font-extrabold text-[#1A1A1A] tracking-tight"
              style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
            >
              {weight}
            </span>
            <span className="text-[20px] font-bold text-neutral-500">kg</span>
          </div>
          <span className="text-[13.5px] font-medium text-neutral-400">
            Aproximadamente {Math.round(weight * 2.20462)} lbs
          </span>
        </div>

        {/* Stepper & Slider */}
        <div className="w-full flex items-center gap-4 max-w-xs">
          <button
            type="button"
            onClick={handleMinus}
            className="w-12 h-12 rounded-full border border-neutral-300 bg-neutral-50 hover:bg-neutral-100 flex items-center justify-center text-[22px] font-bold text-neutral-700 active:scale-95 transition-all cursor-pointer"
            aria-label="Disminuir peso"
          >
            −
          </button>

          <input
            type="range"
            min={40}
            max={150}
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="flex-1 h-2.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#16A34A]"
            aria-label="Seleccionar peso"
          />

          <button
            type="button"
            onClick={handlePlus}
            className="w-12 h-12 rounded-full border border-neutral-300 bg-neutral-50 hover:bg-neutral-100 flex items-center justify-center text-[22px] font-bold text-neutral-700 active:scale-95 transition-all cursor-pointer"
            aria-label="Aumentar peso"
          >
            +
          </button>
        </div>

        {/* Visual Ruler */}
        <div className="w-full flex justify-between items-end px-2 pt-2 border-t border-neutral-100">
          {[50, 70, 90, 110, 130].map((mark) => (
            <div key={mark} className="flex flex-col items-center gap-1">
              <div
                className={`w-0.5 transition-all ${
                  Math.abs(weight - mark) <= 6
                    ? 'h-4 bg-[#16A34A] w-1'
                    : 'h-2.5 bg-neutral-300'
                }`}
              />
              <span className="text-[11px] font-medium text-neutral-400">
                {mark} kg
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Clinical Notice Box */}
      <div className="w-full bg-[#F7F4EE] border border-[#1A1A1A]/10 rounded-[14px] p-3.5 flex items-center gap-3">
        <span className="text-[20px] shrink-0">💡</span>
        <p className="text-[13px] text-neutral-700 leading-snug">
          Cada kilogramo liberado de tensión muscular reduce significativamente la carga axial sobre las raíces nerviosas y la ciática.
        </p>
      </div>

      {/* Continue Button */}
      <div className="w-full pt-1">
        <PrimaryButton
          id="btn-weight-continue"
          onClick={() => onContinue(weight)}
        >
          Continuar
        </PrimaryButton>
      </div>
    </div>
  );
};
