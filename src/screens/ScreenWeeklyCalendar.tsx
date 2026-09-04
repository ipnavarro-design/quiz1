import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { PrimaryButton } from '../components/PrimaryButton';

interface ScreenWeeklyCalendarProps {
  onContinue: () => void;
}

export const ScreenWeeklyCalendar: React.FC<ScreenWeeklyCalendarProps> = ({
  onContinue,
}) => {
  const [selectedPhase, setSelectedPhase] = useState<1 | 2 | 3>(1);

  const daysOfWeek = [
    { day: 'Lun', title: 'Descompresión L4-L5', time: '12 min', focus: 'Liberación' },
    { day: 'Mar', title: 'Apertura de Caderas', time: '10 min', focus: 'Miofascial' },
    { day: 'Mié', title: 'Micro-Pausa Lumbar', time: '8 min', focus: 'Articular' },
    { day: 'Jue', title: 'Descompresión Ciática', time: '12 min', focus: 'Nervio' },
    { day: 'Vie', title: 'Torsión Suave & Psoas', time: '10 min', focus: 'Alivio' },
    { day: 'Sáb', title: 'Estiramiento Nocturno', time: '15 min', focus: 'Sueño' },
    { day: 'Dom', title: 'Reset Postural', time: '10 min', focus: 'Recuperación' },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with progress */}
      <div className="w-full">
        <Eyebrow percentage={100} line1="Estructura de tu programa" />
        <ProgressBar progress={100} />
      </div>

      {/* Screen Title */}
      <div className="w-full text-center space-y-2">
        <div className="inline-block bg-[#EDF4F9] text-[#0E4A72] border border-[#CBD5E1] text-[13px] font-bold px-3 py-1 rounded-full">
          Metodología Científica de 3 Fases (30 Días)
        </div>
        <h2
          id="calendar-title"
          className="text-[23px] sm:text-[27px] font-bold text-[#1A1A1A] leading-tight"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          ¿Cómo funciona el plan{' '}
          <span className="bg-[#0E4A72] text-white px-2 py-0.5 rounded-md inline-block">
            DolorCiao
          </span>
          ?
        </h2>
        <p className="text-[14px] text-neutral-500 max-w-sm mx-auto">
          Rutinas guiadas en video de 10 a 15 min diseñadas para no exigir flexibilidad previa.
        </p>
      </div>

      {/* Phase Selector Tabs */}
      <div className="w-full grid grid-cols-3 gap-2 bg-neutral-100 p-1.5 rounded-[16px]">
        <button
          type="button"
          onClick={() => setSelectedPhase(1)}
          className={`py-2 px-1 text-[11px] sm:text-[12px] font-bold rounded-[12px] transition-all cursor-pointer ${
            selectedPhase === 1
              ? 'bg-white text-[#0E4A72] shadow-xs'
              : 'text-neutral-500 hover:text-neutral-900'
          }`}
        >
          Fase 1 (Días 1-10)
        </button>
        <button
          type="button"
          onClick={() => setSelectedPhase(2)}
          className={`py-2 px-1 text-[11px] sm:text-[12px] font-bold rounded-[12px] transition-all cursor-pointer ${
            selectedPhase === 2
              ? 'bg-white text-[#0E4A72] shadow-xs'
              : 'text-neutral-500 hover:text-neutral-900'
          }`}
        >
          Fase 2 (Días 11-20)
        </button>
        <button
          type="button"
          onClick={() => setSelectedPhase(3)}
          className={`py-2 px-1 text-[11px] sm:text-[12px] font-bold rounded-[12px] transition-all cursor-pointer ${
            selectedPhase === 3
              ? 'bg-white text-[#0E4A72] shadow-xs'
              : 'text-neutral-500 hover:text-neutral-900'
          }`}
        >
          Fase 3 (Días 21-30)
        </button>
      </div>

      {/* Phase Description */}
      <div className="w-full bg-[#EDF4F9] border border-[#CBD5E1] rounded-[16px] p-4 flex items-center gap-3">
        <span className="text-[24px]">
          {selectedPhase === 1 ? '🧊' : selectedPhase === 2 ? '🌱' : '🛡️'}
        </span>
        <div className="flex flex-col">
          <span className="font-bold text-[#0E4A72] text-[14px]">
            {selectedPhase === 1
              ? 'Fase 1: Descompresión y Adaptación Funcional (Días 1-10)'
              : selectedPhase === 2
              ? 'Fase 2: Restauración de Rango Articular (Días 11-20)'
              : 'Fase 3: Estabilidad Postural, Blindaje y Test de Cierre (Días 21-30)'}
          </span>
          <span className="text-[12.5px] text-neutral-600">
            {selectedPhase === 1
              ? 'Libera la presión del nervio ciático y apaga las señales agudas de dolor.'
              : selectedPhase === 2
              ? 'Recupera la movilidad de caderas y zona lumbar sin tirones molestos.'
              : 'Activa la faja protectora abdominal y evalúa tus resultados en el Test del Día 30.'}
          </span>
        </div>
      </div>

      {/* Weekly Schedule Cards */}
      <div className="w-full bg-white border border-[#1A1A1A]/15 rounded-[22px] p-4 sm:p-5 flex flex-col gap-2.5 shadow-xs">
        <span className="text-[12px] font-bold uppercase text-neutral-400 tracking-wider mb-1">
          Calendario Semanal Típico (10-15 min/día)
        </span>
        {daysOfWeek.map((dayItem, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 rounded-[12px] bg-[#FAF8F5] border border-neutral-200/60"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white text-[12px] font-bold flex items-center justify-center shrink-0">
                {dayItem.day}
              </span>
              <div className="flex flex-col">
                <span className="text-[13.5px] font-semibold text-[#1A1A1A]">
                  {dayItem.title}
                </span>
                <span className="text-[11.5px] text-emerald-700 font-medium">
                  {dayItem.focus}
                </span>
              </div>
            </div>
            <span className="text-[12px] font-bold text-neutral-600 bg-white px-2.5 py-1 rounded-full border border-neutral-200">
              ⏱️ {dayItem.time}
            </span>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <div className="w-full pt-1">
        <PrimaryButton
          id="btn-calendar-continue"
          onClick={onContinue}
        >
          Ver casos de éxito reales →
        </PrimaryButton>
      </div>
    </div>
  );
};
