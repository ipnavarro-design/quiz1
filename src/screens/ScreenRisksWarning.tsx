import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { PrimaryButton } from '../components/PrimaryButton';

interface ScreenRisksWarningProps {
  onContinue: () => void;
}

export const ScreenRisksWarning: React.FC<ScreenRisksWarningProps> = ({
  onContinue,
}) => {
  const risks = [
    {
      id: 'risk-1',
      icon: '⚡',
      title: 'Fase de Alerta: Rozamiento e inflamación constante',
      desc: 'Tus síntomas indican que los discos vertebrales y las terminaciones nerviosas sufren compresión repetitiva.',
    },
    {
      id: 'risk-2',
      icon: '🧠',
      title: 'Hipersensibilización neurológica del dolor',
      desc: 'Cuando el dolor no se resuelve desde la raíz, el sistema nervioso aprende el patrón y lo vuelve persistente.',
    },
    {
      id: 'risk-3',
      icon: '💊',
      title: 'Efecto rebote de fármacos e inyecciones',
      desc: 'Los analgésicos solo adormecen temporalmente la señal mientras el desgaste estructural sigue progresando.',
    },
    {
      id: 'risk-4',
      icon: '🛡️',
      title: 'Ventana de reversibilidad 100% activa',
      desc: 'Al encontrarte en la zona anaranjada, estás en el momento exacto para descomprimir y evitar que sea permanente.',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={88} />
        <ProgressBar progress={88} />
      </div>

      {/* Screen Title */}
      <div className="w-full text-center space-y-2">
        <div className="inline-block bg-amber-100 text-amber-900 border border-amber-300 text-[12.5px] font-bold px-3 py-1 rounded-full">
          ⚠️ Evaluación de Riesgo Clínico
        </div>
        <h2
          id="risks-warning-title"
          className="text-[21px] sm:text-[25px] font-bold text-[#1A1A1A] leading-tight uppercase tracking-tight"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          TU PROBABILIDAD DE QUE TU DOLOR SE VUELVA{' '}
          <span className="bg-[#E07A2B] text-white px-2.5 py-0.5 rounded-md inline-block">
            CRÓNICO
          </span>
        </h2>
      </div>

      {/* Risk Gauge Visual Card */}
      <div className="w-full bg-white border-2 border-amber-300/80 rounded-[20px] p-5 flex flex-col gap-4 shadow-sm">
        {/* Visual Semáforo / Risk Bar adaptada a la probabilidad de cronificación */}
        <div className="flex flex-col gap-2.5">
          <div className="flex justify-between items-center text-[12px] font-semibold text-neutral-600">
            <span className="text-emerald-700">Baja (0-30%)</span>
            <span className="text-amber-800 font-bold bg-amber-100/90 px-2.5 py-0.5 rounded-full border border-amber-300 text-[11.5px]">
              Moderada-Alta
            </span>
            <span className="text-red-700">Severa / Crónica</span>
          </div>

          <div className="w-full h-4 bg-gradient-to-r from-emerald-400 via-amber-400 to-red-600 rounded-full relative">
            {/* Punto situado en la zona anaranjada (60%) */}
            <div
              className="absolute top-1/2 w-5 h-5 bg-white border-[3.5px] border-amber-600 rounded-full shadow-md animate-pulse"
              style={{ left: '60%', transform: 'translate(-50%, -50%)' }}
            />
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-amber-900 font-medium bg-amber-50/80 border border-amber-200/80 rounded-lg py-1.5 px-2 mt-1 text-center">
            <span className="w-2 h-2 rounded-full bg-[#E07A2B] shrink-0 inline-block" />
            <span>
              Resultado: <strong>Zona Anaranjada</strong>. Estás a tiempo de revertir la causa antes de que el daño sea permanente.
            </span>
          </div>
        </div>

        {/* Risk Items List */}
        <div className="flex flex-col gap-2.5 pt-1">
          {risks.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 p-3 rounded-[14px] bg-amber-50/40 border border-amber-100/80"
            >
              <span className="text-[20px] shrink-0 mt-0.5">{item.icon}</span>
              <div className="flex flex-col">
                <span className="font-semibold text-neutral-900 text-[14px] leading-snug">
                  {item.title}
                </span>
                <span className="text-[12.5px] text-neutral-600 mt-0.5 leading-relaxed">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="w-full pt-1">
        <PrimaryButton
          id="btn-risks-continue"
          onClick={onContinue}
        >
          Quiero frenar el daño y aliviar mi dolor →
        </PrimaryButton>
      </div>
    </div>
  );
};
