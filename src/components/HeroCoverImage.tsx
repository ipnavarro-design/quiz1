import React from 'react';

export const HeroCoverImage: React.FC = () => {
  return (
    <div className="w-full relative rounded-[20px] overflow-hidden border border-[#CBD5E1] shadow-md bg-slate-900 select-none">
      <img
        src="/images/primera-etapa.png"
        onError={(e) => {
          // Fallback directly to original file path
          (e.currentTarget as HTMLImageElement).src =
            encodeURI('/images/Captura de pantalla 2026-09-04 183055.png');
        }}
        alt="Evaluación inicial DolorCiao"
        className="w-full h-auto object-cover block"
        referrerPolicy="no-referrer"
      />

      {/* Superimposed High-Contrast Text Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end p-4 sm:p-5 bg-gradient-to-t from-black/95 via-black/45 to-transparent text-center">
        {/* Line 1: Fine white text */}
        <p className="text-[12px] sm:text-[13px] font-medium text-white/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] tracking-[0.15em] uppercase">
          PUEDES ESTAR A UN PASO DE
        </p>

        {/* Line 2: Large text in vibrant green with bold styling */}
        <p
          className="text-[19px] sm:text-[22px] font-bold text-[#22C55E] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-tight my-1"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          ¡VIVIR SIN DOLOR OTRA VEZ!
        </p>

        {/* Line 3: Small pill with brand blue background and white text */}
        <div className="inline-block bg-[#0E4A72] text-white text-[11px] font-bold tracking-[0.1em] uppercase px-3.5 py-1 rounded-full shadow-md mt-1 border border-white/20">
          ¡NO SUFRAS MÁS!
        </div>
      </div>
    </div>
  );
};


