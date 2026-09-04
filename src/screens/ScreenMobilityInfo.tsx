import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { PrimaryButton } from '../components/PrimaryButton';

interface ScreenMobilityInfoProps {
  onContinue: () => void;
}

export const ScreenMobilityInfo: React.FC<ScreenMobilityInfoProps> = ({
  onContinue,
}) => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={12} />
        <ProgressBar progress={12} />
      </div>

      {/* Main Title inspired by the reference design */}
      <div className="w-full text-center flex flex-col gap-3">
        <h2 className="text-[20px] sm:text-[23px] font-extrabold text-[#0D3820] leading-[1.25] tracking-tight">
          La Movilidad es un método terapéutico de descompresión y fortalecimiento que{' '}
          <span className="text-[#16A34A]">elimina el dolor de espalda</span>
        </h2>
        <p className="text-[14px] sm:text-[14.5px] text-neutral-600 leading-relaxed max-w-md mx-auto">
          En lugar de reposo forzado o cirugías, este método descompresiona las vértebras, reactiva el líquido sinovial y desbloquea las caderas para quitarle de raíz toda la sobrecarga a tu columna.
        </p>
      </div>

      {/* Infographic Visual: Pillars Donut Breakdown */}
      <div className="w-full bg-[#FAF8F5] border border-neutral-200/80 rounded-[24px] p-5 sm:p-6 flex flex-col items-center gap-5 shadow-xs">
        {/* Visual Circular Wheel Diagram */}
        <div className="relative w-48 h-48 sm:w-52 sm:h-52 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
            {/* Background circle */}
            <circle
              cx="80"
              cy="80"
              r="60"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="24"
            />
            {/* Segment 1: Descompresión Lumbar (35%) */}
            <circle
              cx="80"
              cy="80"
              r="60"
              fill="none"
              stroke="#16A34A"
              strokeWidth="24"
              strokeDasharray="132.0 377"
              strokeDashoffset="0"
              className="transition-all duration-700"
            />
            {/* Segment 2: Movilidad de Caderas (30%) */}
            <circle
              cx="80"
              cy="80"
              r="60"
              fill="none"
              stroke="#0284C7"
              strokeWidth="24"
              strokeDasharray="113.1 377"
              strokeDashoffset="-132.0"
              className="transition-all duration-700"
            />
            {/* Segment 3: Activación del Core (20%) */}
            <circle
              cx="80"
              cy="80"
              r="60"
              fill="none"
              stroke="#6366F1"
              strokeWidth="24"
              strokeDasharray="75.4 377"
              strokeDashoffset="-245.1"
              className="transition-all duration-700"
            />
            {/* Segment 4: Lubricación Articular (15%) */}
            <circle
              cx="80"
              cy="80"
              r="60"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="24"
              strokeDasharray="56.5 377"
              strokeDashoffset="-320.5"
              className="transition-all duration-700"
            />
          </svg>

          {/* Center core info */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <span className="text-[22px] sm:text-[24px]">🦴</span>
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#0D3820] mt-0.5">
              Método
            </span>
            <span className="text-[11px] font-medium text-neutral-500">
              100% Biomecánico
            </span>
          </div>
        </div>

        {/* Legend / Metrics Cards (4 Pillars) */}
        <div className="w-full grid grid-cols-2 gap-2.5 pt-1">
          <div className="bg-white border border-[#16A34A]/25 rounded-[14px] p-3 flex flex-col gap-1 shadow-2xs">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#16A34A] shrink-0" />
              <span className="text-[12px] font-bold text-[#16A34A]">35%</span>
            </div>
            <span className="text-[12.5px] font-semibold text-[#1A1A1A] leading-tight">
              Descompresión
            </span>
            <span className="text-[11px] text-neutral-500 leading-snug">
              Alivia presión en discos y ciática
            </span>
          </div>

          <div className="bg-white border border-[#0284C7]/25 rounded-[14px] p-3 flex flex-col gap-1 shadow-2xs">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0284C7] shrink-0" />
              <span className="text-[12px] font-bold text-[#0284C7]">30%</span>
            </div>
            <span className="text-[12.5px] font-semibold text-[#1A1A1A] leading-tight">
              Movilidad Caderas
            </span>
            <span className="text-[11px] text-neutral-500 leading-snug">
              Desbloquea la pelvis y evita sobrecarga
            </span>
          </div>

          <div className="bg-white border border-[#6366F1]/25 rounded-[14px] p-3 flex flex-col gap-1 shadow-2xs">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#6366F1] shrink-0" />
              <span className="text-[12px] font-bold text-[#6366F1]">20%</span>
            </div>
            <span className="text-[12.5px] font-semibold text-[#1A1A1A] leading-tight">
              Activación Core
            </span>
            <span className="text-[11px] text-neutral-500 leading-snug">
              Fuerza y faja protectora profunda
            </span>
          </div>

          <div className="bg-white border border-[#F59E0B]/25 rounded-[14px] p-3 flex flex-col gap-1 shadow-2xs">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] shrink-0" />
              <span className="text-[12px] font-bold text-[#F59E0B]">15%</span>
            </div>
            <span className="text-[12.5px] font-semibold text-[#1A1A1A] leading-tight">
              Lubricación
            </span>
            <span className="text-[11px] text-neutral-500 leading-snug">
              Líquido sinovial contra la rigidez
            </span>
          </div>
        </div>

        {/* Biomechanical Insight Callout about Hip Mobility */}
        <div className="w-full bg-[#E0F2FE]/60 border border-[#0284C7]/30 rounded-[16px] p-3.5 flex items-start gap-3 text-left">
          <span className="text-[20px] shrink-0 mt-0.5">🔄</span>
          <div className="flex flex-col gap-1 text-[12.5px] text-[#0C4A6E] leading-relaxed">
            <strong className="text-[#0369A1] font-bold text-[13px]">
              ¿Por qué la movilidad de caderas es clave para tu espalda?
            </strong>
            <span>
              Cuando pasamos horas sentados, las caderas pierden rotación y se vuelven rígidas. Al no poder moverse libremente, <strong>la columna lumbar se ve forzada a absorber todo el peso y torsión</strong>, detonando pinzamientos, lumbalgias y ciática. Desbloquear las caderas elimina de inmediato hasta un 70% de la tensión acumulada en la espalda baja.
            </span>
          </div>
        </div>
      </div>

      {/* Siguiente Button */}
      <div className="w-full pt-1">
        <PrimaryButton
          id="btn-mobility-info-continue"
          onClick={onContinue}
        >
          Siguiente
        </PrimaryButton>
      </div>
    </div>
  );
};
