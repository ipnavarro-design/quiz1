import React from 'react';

interface EyebrowProps {
  phase?: string;
  line1?: string;
  line2?: string;
  percentage: number;
}

export const Eyebrow: React.FC<EyebrowProps> = ({ phase, line1, line2, percentage }) => {
  const currentPhase = phase || (percentage < 72 ? 'Evaluación' : percentage < 98 ? 'Personalización' : 'Tu Plan');

  return (
    <div className="w-full flex flex-col gap-1 mb-2">
      <div className="w-full flex items-center justify-between">
        {/* Visible phase label badge above progress bar */}
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1.5 bg-[#0E4A72]/10 text-[#0E4A72] border border-[#0E4A72]/20 text-[10.5px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E4A72]" />
            {currentPhase}
          </span>
        </div>

        {/* Percentage indicator */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] tracking-[0.15em] uppercase font-bold text-slate-400">
            Progreso
          </span>
          <span className="text-[13px] sm:text-[14px] font-bold text-[#0E4A72] leading-tight font-mono">
            {percentage}%
          </span>
        </div>
      </div>

      {line1 || line2 ? (
        <div className="flex flex-col text-left pt-0.5">
          {line1 && (
            <span className="text-[11px] sm:text-[12px] font-bold text-[#1E293B] tracking-[0.15em] uppercase leading-tight">
              {line1}
            </span>
          )}
          {line2 && (
            <span className="text-[11px] sm:text-[12px] text-[#0E4A72] font-bold tracking-[0.1em] uppercase leading-tight mt-0.5">
              {line2}
            </span>
          )}
        </div>
      ) : null}
    </div>
  );
};
