import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { ReinforcementText } from '../components/ReinforcementText';
import { PrimaryButton } from '../components/PrimaryButton';

interface ScreenHeightProps {
  onContinue: (heightCm: number) => void;
  defaultHeight?: number;
}

export const ScreenHeight: React.FC<ScreenHeightProps> = ({
  onContinue,
  defaultHeight = 172,
}) => {
  const [height, setHeight] = useState<number>(defaultHeight);

  // Convert cm to feet/inches for subtext
  const totalInches = height / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);

  const handleMinus = () => {
    setHeight((prev) => Math.max(130, prev - 1));
  };

  const handlePlus = () => {
    setHeight((prev) => Math.min(220, prev + 1));
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={16} />
        <ProgressBar progress={16} />
      </div>

      {/* Screen Title */}
      <div className="w-full">
        <ScreenHeading as="h2" id="q-height-title">
          ¿Cuánto medís?
        </ScreenHeading>
        <ReinforcementText>
          Tu estatura nos ayuda a calcular los ángulos óptimos de descompresión articular.
        </ReinforcementText>
      </div>

      {/* Interactive Height Card */}
      <div className="w-full bg-white border border-[#1A1A1A]/15 rounded-[20px] p-6 flex flex-col items-center gap-6 shadow-xs">
        {/* Height Display */}
        <div className="flex flex-col items-center">
          <div className="flex items-baseline gap-2">
            <span
              className="text-[44px] sm:text-[52px] font-extrabold text-[#1A1A1A] tracking-tight"
              style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
            >
              {height}
            </span>
            <span className="text-[20px] font-bold text-neutral-500">cm</span>
          </div>
          <span className="text-[13.5px] font-medium text-neutral-400">
            Equivalente a {feet}' {inches}"
          </span>
        </div>

        {/* Stepper & Slider */}
        <div className="w-full flex items-center gap-4 max-w-xs">
          <button
            type="button"
            onClick={handleMinus}
            className="w-12 h-12 rounded-full border border-neutral-300 bg-neutral-50 hover:bg-neutral-100 flex items-center justify-center text-[22px] font-bold text-neutral-700 active:scale-95 transition-all cursor-pointer"
            aria-label="Disminuir altura"
          >
            −
          </button>

          <input
            type="range"
            min={135}
            max={215}
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="flex-1 h-2.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#16A34A]"
            aria-label="Seleccionar altura"
          />

          <button
            type="button"
            onClick={handlePlus}
            className="w-12 h-12 rounded-full border border-neutral-300 bg-neutral-50 hover:bg-neutral-100 flex items-center justify-center text-[22px] font-bold text-neutral-700 active:scale-95 transition-all cursor-pointer"
            aria-label="Aumentar altura"
          >
            +
          </button>
        </div>

        {/* Visual Spinal Ruler Representation */}
        <div className="w-full flex justify-between items-end px-2 pt-2 border-t border-neutral-100">
          {[140, 155, 170, 185, 200].map((mark) => (
            <div key={mark} className="flex flex-col items-center gap-1">
              <div
                className={`w-0.5 transition-all ${
                  Math.abs(height - mark) <= 7
                    ? 'h-4 bg-[#16A34A] w-1'
                    : 'h-2.5 bg-neutral-300'
                }`}
              />
              <span className="text-[11px] font-medium text-neutral-400">
                {mark}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="w-full pt-1">
        <PrimaryButton
          id="btn-height-continue"
          onClick={() => onContinue(height)}
        >
          Continuar
        </PrimaryButton>
      </div>
    </div>
  );
};
