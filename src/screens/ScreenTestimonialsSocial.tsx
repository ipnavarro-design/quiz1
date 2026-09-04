import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { PrimaryButton } from '../components/PrimaryButton';

interface ScreenTestimonialsSocialProps {
  onContinue: () => void;
}

export const ScreenTestimonialsSocial: React.FC<ScreenTestimonialsSocialProps> = ({
  onContinue,
}) => {
  const testimonials = [
    {
      id: 'test-1',
      name: 'Dr. Roberto Méndez',
      age: '54 años',
      condition: 'Hernia discal L5-S1 y Ciática',
      quote:
        'Llevaba 3 años tomando antiinflamatorios a diario y temía la operación. Con 12 minutos al día de Dolor Ciao, en la segunda semana el hormigueo en la pierna desapareció por completo. Volví a jugar con mis nietos.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      id: 'test-2',
      name: 'Mariana Gomez',
      age: '42 años',
      condition: 'Lumbalgia crónica por trabajo de oficina',
      quote:
        'Sentarme a trabajar 8 horas era una tortura. Las rutinas de micro-pausas y descompresión me devolvieron la tranquilidad. Ya no amanezco rígida ni necesito inyecciones.',
      rating: 5,
      avatar: '👩‍💻',
    },
    {
      id: 'test-3',
      name: 'Gustavo Paez',
      age: '61 años',
      condition: 'Protrusión discal y rigidez matutina',
      quote:
        'Pensé que por mi edad era normal vivir con dolor. Este método me enseñó a moverme sin miedo. Hace 4 meses que no tengo una sola crisis de espalda.',
      rating: 5,
      avatar: '🏃‍♂️',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section */}
      <div className="w-full">
        <Eyebrow percentage={100} line1="Resultados Clínicos y Testimonios" />
        <ProgressBar progress={100} />
      </div>

      {/* Title */}
      <div className="w-full text-center space-y-2">
        <div className="inline-block bg-amber-100 text-amber-800 border border-amber-300 text-[13px] font-bold px-3 py-1 rounded-full">
          ⭐ 4.9 / 5.0 (Más de 45.000 usuarios)
        </div>
        <h2
          id="testimonials-title"
          className="text-[23px] sm:text-[27px] font-bold text-[#1A1A1A] leading-tight"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          Resultados reales que{' '}
          <span className="bg-[#16A34A] text-white px-2 py-0.5 rounded-md inline-block">
            nos enorgullecen
          </span>
        </h2>
        <p className="text-[14px] text-neutral-500 max-w-sm mx-auto">
          Personas que pasaron del dolor invalidante a recuperar su vida cotidiana.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="w-full grid grid-cols-3 gap-2 bg-white border border-[#1A1A1A]/10 rounded-[18px] p-4 text-center shadow-xs">
        <div className="flex flex-col">
          <span
            className="text-[22px] font-extrabold text-[#16A34A]"
            style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
          >
            94%
          </span>
          <span className="text-[11px] text-neutral-500 leading-tight mt-0.5">
            Reporta alivio en 14 días
          </span>
        </div>
        <div className="flex flex-col border-x border-neutral-200 px-1">
          <span
            className="text-[22px] font-extrabold text-[#16A34A]"
            style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
          >
            89%
          </span>
          <span className="text-[11px] text-neutral-500 leading-tight mt-0.5">
            Deja analgésicos diarios
          </span>
        </div>
        <div className="flex flex-col">
          <span
            className="text-[22px] font-extrabold text-[#16A34A]"
            style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
          >
            +45k
          </span>
          <span className="text-[11px] text-neutral-500 leading-tight mt-0.5">
            Espaldas recuperadas
          </span>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="w-full flex flex-col gap-3.5">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="w-full bg-white border border-[#1A1A1A]/15 rounded-[18px] p-4 sm:p-5 flex flex-col gap-2.5 shadow-xs"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[28px]">{t.avatar}</span>
                <div className="flex flex-col">
                  <span className="text-[14.5px] font-bold text-[#1A1A1A]">
                    {t.name}
                  </span>
                  <span className="text-[12px] text-neutral-400">
                    {t.age} • <strong className="text-neutral-700">{t.condition}</strong>
                  </span>
                </div>
              </div>
              <div className="text-amber-500 text-[14px] font-bold">
                ★★★★★
              </div>
            </div>
            <p className="text-[13px] text-neutral-700 leading-relaxed italic bg-[#FAF8F5] p-3 rounded-[12px] border border-neutral-100">
              "{t.quote}"
            </p>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <div className="w-full pt-1">
        <PrimaryButton
          id="btn-testimonials-continue"
          onClick={onContinue}
        >
          Ver los bonuses incluidos en mi plan →
        </PrimaryButton>
      </div>
    </div>
  );
};
