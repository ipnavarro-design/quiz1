import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';

interface ScreenKnowsMobilityProps {
  onSelectOption: (option: string) => void;
}

export const ScreenKnowsMobility: React.FC<ScreenKnowsMobilityProps> = ({
  onSelectOption,
}) => {
  const options = [
    {
      id: 'opt-mobility-yes',
      label: 'Sí, la he probado',
      sublabel: 'Tengo experiencia previa con ejercicios de movilidad',
    },
    {
      id: 'opt-mobility-heard',
      label: 'He oído alguna que otra cosa',
      sublabel: 'He visto contenido pero nunca he seguido un protocolo guiado',
    },
    {
      id: 'opt-mobility-never',
      label: 'Nunca escuché hablar de ella',
      sublabel: 'Es mi primera vez y busco una solución segura y efectiva',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={10} />
        <ProgressBar progress={10} />
      </div>

      {/* Screen Title */}
      <div className="w-full text-center">
        <ScreenHeading as="h2" id="q-knows-mobility-title">
          ¿Conocés la{' '}
          <span className="text-[#16A34A] font-bold">
            Movilidad
          </span>
          ?
        </ScreenHeading>
      </div>

      {/* Option Cards */}
      <div className="w-full flex flex-col gap-3.5">
        {options.map((opt) => (
          <button
            key={opt.id}
            id={opt.id}
            type="button"
            onClick={() => onSelectOption(opt.label)}
            className="w-full flex items-center justify-between p-4.5 sm:p-5 rounded-[20px] text-left transition-all duration-200 cursor-pointer select-none bg-white border border-[#16A34A]/30 hover:border-[#16A34A] hover:bg-[#F0FDF4]/50 shadow-xs group"
          >
            <div className="flex-1 flex flex-col pr-3">
              <span className="font-semibold text-[#1A1A1A] text-[16.5px] sm:text-[17.5px] leading-snug group-hover:text-[#16A34A] transition-colors">
                {opt.label}
              </span>
              <span className="text-[13px] text-neutral-500 font-normal mt-0.5">
                {opt.sublabel}
              </span>
            </div>

            <div className="w-6 h-6 rounded-full border-2 border-[#16A34A]/50 group-hover:border-[#16A34A] group-hover:bg-[#16A34A]/10 flex items-center justify-center shrink-0 transition-all">
              <div className="w-2.5 h-2.5 rounded-full bg-[#16A34A] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
