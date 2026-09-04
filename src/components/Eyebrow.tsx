import React from 'react';

interface EyebrowProps {
  line1?: string;
  line2?: string;
  percentage: number;
}

export const Eyebrow: React.FC<EyebrowProps> = ({ line1, line2, percentage }) => {
  return (
    <div className="w-full flex items-start justify-between mb-2">
      {line1 || line2 ? (
        <div className="flex flex-col text-left">
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
      ) : (
        <div />
      )}
      <div className="flex items-center gap-1.5 ml-auto">
        <span className="text-[10px] tracking-[0.15em] uppercase font-bold text-slate-400">
          Progreso
        </span>
        <span className="text-[13px] sm:text-[14px] font-bold text-[#0E4A72] leading-tight font-mono">
          {percentage}%
        </span>
      </div>
    </div>
  );
};
