import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { PrimaryButton } from '../components/PrimaryButton';
import { QuizResponses } from '../types';

interface ScreenOfferCheckoutProps {
  onFinalAction: () => void;
  respuestas: QuizResponses;
}

export const ScreenOfferCheckout: React.FC<ScreenOfferCheckoutProps> = ({
  onFinalAction,
  respuestas,
}) => {
  // Countdown Timer (15 mins = 900s)
  const [timeLeft, setTimeLeft] = useState(899);
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
  });

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const userName = respuestas.nombre ? respuestas.nombre.split(' ')[0] : 'vos';

  const faqs: { q: string; a: React.ReactNode }[] = [
    {
      q: '¿Cómo voy a lograr resultados si el programa es online/a distancia?',
      a: (
        <p>
          Que el programa sea online no determina si habrá resultados o no. Lo determinante es si existe un{' '}
          <strong className="font-bold text-white">plan claro, personalizado y ajustable</strong>, o si se trata de contenido genérico sin acompañamiento real. Si fuera únicamente material grabado, sería razonable dudar de su efectividad. La diferencia aquí es que la persona no ingresa a “ver un curso”, sino a seguir un{' '}
          <strong className="font-bold text-white">proceso paso a paso</strong>, diseñado según su caso, su contexto y la respuesta de su cuerpo. El formato online es solo el medio; el cambio proviene de ejecutar lo adecuado, medir avances y realizar los ajustes necesarios.
        </p>
      ),
    },
    {
      q: '¿Qué pasa si ahora mismo no tengo tiempo para dedicarle al programa?',
      a: (
        <p>
          La mayoría llega con la agenda completamente cargada. Por eso el programa está diseñado para{' '}
          <strong className="font-bold text-white">adaptarse a tu rutina</strong> y requerir{' '}
          <strong className="font-bold text-white">aproximadamente 3 horas por semana</strong>. Las sesiones suelen ser de{' '}
          <strong className="font-bold text-white">30–40 minutos</strong> y, si estás justo de tiempo, también puede ajustarse con bloques más cortos de{' '}
          <strong className="font-bold text-white">15–20 minutos</strong>, en el horario que te funcione.
        </p>
      ),
    },
    {
      q: 'Si ya probé de todo para resolver mi dolor, ¿cómo sé que esto sí me va a funcionar?',
      a: (
        <div className="space-y-3">
          <p>
            Es una duda totalmente razonable. Muchos de los métodos “típicos” que se prueban —
            <strong className="font-bold text-white">
              masajes, fisioterapia/kinesiología, quiropraxia, osteopatía, bloqueos, electro/ultrasonido, antiinflamatorios o analgésicos, infiltraciones, estiramientos genéricos, pilates, natación
            </strong>
            , etc.— suelen enfocarse en <strong className="font-bold text-white">bajar el dolor en el corto plazo</strong>. El problema es que, si no cambian tu{' '}
            <strong className="font-bold text-white">capacidad real</strong> (control, fuerza y rango útil), es fácil caer en el ciclo de{' '}
            <strong className="font-bold text-white">alivio → recaída</strong>.
          </p>
          <p>
            Nuestro método es distinto: no busca “<strong className="font-bold text-white">calmar</strong>” por un rato, busca{' '}
            <strong className="font-bold text-white">reconstruir desde las bases</strong>. Con un enfoque de{' '}
            <strong className="font-bold text-white">fuerza y movilidad progresivo y medible</strong>, desarrollás un cuerpo{' '}
            <strong className="font-bold text-white">más capaz, más estable y más resistente</strong>, para que el resultado sea{' '}
            <strong className="font-bold text-white">sostenible</strong> y no dependas de <strong className="font-bold text-white">parches</strong> ni de{' '}
            <strong className="font-bold text-white">sesiones eternas nunca más</strong>.
          </p>
        </div>
      ),
    },
    {
      q: '¿Qué pasa si no logro resultados?',
      a: (
        <div className="space-y-2">
          <p>
            Existe una <strong className="font-bold text-white">garantía por contrato</strong>.
          </p>
          <p>
            Si en los <strong className="font-bold text-white">primeros 30 días</strong> no ves resultados/progreso se{' '}
            <strong className="font-bold text-white">devuelve el 100% del dinero</strong>.
          </p>
        </div>
      ),
    },
    {
      q: '¿Cómo me ayuda este plan a aliviar mi dolor de espalda?',
      a: (
        <p>
          El programa <strong className="font-bold text-white">Dolor Ciao</strong> utiliza micro-movimientos de descompresión biomecánica que liberan el espacio entre las vértebras lumbares, desinflaman las raíces nerviosas y alivian el nervio ciático sin requerir fuerza extrema ni posturas complejas.
        </p>
      ),
    },
    {
      q: '¿Está bien si nunca hice ejercicio o no soy flexible?',
      a: (
        <p>
          ¡Totalmente! El 85% de nuestros usuarios nunca antes había realizado rutinas de movilidad. Cada ejercicio está adaptado con progresiones suaves para comenzar desde la cama o colchoneta sin forzar tu espalda.
        </p>
      ),
    },
    {
      q: '¿Es seguro si tengo hernia de disco, ciática o dolor crónico?',
      a: (
        <p>
          Sí, de hecho el método está diseñado específicamente para personas con diagnóstico de hernias (L4-L5, L5-S1), protrusiones discales, pinzamientos de ciática y lumbalgias mecánicas. Cuidamos al máximo la articulación lumbar, caderas y columna.
        </p>
      ),
    },
    {
      q: '¿Cómo accedo a mi plan y los bonuses?',
      a: (
        <p>
          Inmediatamente tras confirmar tu orden, recibirás acceso instantáneo a tu plataforma interactiva en tu correo electrónico con todas las video-rutinas guiadas, guías en PDF descargables y los 7 bonuses exclusivos.
        </p>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 pb-8">
      {/* Header section */}
      <div className="w-full">
        <Eyebrow percentage={100} line1="Oferta Especial de Lanzamiento" />
        <ProgressBar progress={100} />
      </div>

      {/* Countdown Warning Banner */}
      <div className="w-full bg-[#DC2626]/10 border border-[#DC2626]/30 rounded-[14px] p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[18px] animate-pulse">⏰</span>
          <span className="text-[13px] font-bold text-[#DC2626]">
            Tu descuento expira en:
          </span>
        </div>
        <span
          className="text-[17px] font-extrabold text-[#DC2626] font-mono tracking-wider bg-white px-2.5 py-0.5 rounded-md border border-[#DC2626]/20"
        >
          {formattedTime}
        </span>
      </div>

      {/* Hero Offer Title */}
      <div className="w-full text-center space-y-2">
        <h2
          id="checkout-title"
          className="text-[24px] sm:text-[29px] font-bold text-[#1E293B] leading-tight"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          Comenzá hoy tu programa de 30 días con{' '}
          <span className="text-[#0E4A72] font-extrabold">DolorCiao</span>
        </h2>
        <p className="text-[14px] text-slate-600 max-w-md mx-auto">
          {userName}, tu acceso completo incluye el programa de 30 días, la app móvil, el seguimiento de hábitos y el soporte de por vida.
        </p>
      </div>

      {/* Pricing Card */}
      <div className="w-full bg-white border-2 border-[#0E4A72] rounded-[24px] p-6 flex flex-col gap-5 shadow-md relative overflow-hidden">
        {/* Ribbon */}
        <div className="absolute top-0 right-0 bg-[#0E4A72] text-white text-[11.5px] font-extrabold px-4 py-1 rounded-bl-[14px] uppercase tracking-wider">
          70% OFF HOY
        </div>

        {/* Plan Header */}
        <div className="flex flex-col text-left pt-1">
          <span className="text-[12px] font-bold text-[#0E4A72] uppercase tracking-wide">
            Acceso Completo e Ilimitado • App Móvil
          </span>
          <h3
            className="text-[20px] font-extrabold text-[#1E293B]"
            style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
          >
            Programa 30 Días DolorCiao
          </h3>
        </div>

        {/* Price Display in ARS */}
        <div className="flex items-baseline gap-3 py-2 border-y border-slate-100">
          <span className="text-[17px] text-slate-400 line-through font-semibold">
            $25.990 ARS
          </span>
          <div className="flex items-baseline gap-1">
            <span
              className="text-[40px] font-black text-[#0E4A72]"
              style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
            >
              $7.797
            </span>
            <span className="text-[15px] font-extrabold text-slate-700">ARS</span>
          </div>
          <span className="ml-auto text-[11.5px] font-bold text-[#0E4A72] bg-[#EDF4F9] px-2.5 py-1 rounded-full border border-[#CBD5E1]">
            Pago único
          </span>
        </div>

        {/* Features Checklist */}
        <div className="flex flex-col gap-2.5 text-left text-[13.5px] text-slate-700">
          <div className="flex items-center gap-2">
            <span className="text-[#0E4A72] font-bold">✓</span>
            <span>Programa guiado de 30 días en video HD (10-15 min/día)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#0E4A72] font-bold">✓</span>
            <span>App móvil profesional para iOS y Android de por vida</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#0E4A72] font-bold mt-0.5">✓</span>
            <span>
              Test inicial y final fotográfico (Antes / Después){' '}
              <span className="text-[11.5px] text-slate-500 font-medium block sm:inline">
                (Opcional y 100% privado en tu celular, no compartes fotos con nadie)
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#0E4A72] font-bold">✓</span>
            <span>Test de Cierre del Día 30 para evaluar tu progreso</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#0E4A72] font-bold">✓</span>
            <span>Sistema de hábitos diarios, calendario visual y tablero métrico</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#0E4A72] font-bold">✓</span>
            <span>Garantía incondicional de satisfacción por 30 días</span>
          </div>
        </div>

        {/* Primary CTA (Green Button) */}
        <div className="w-full pt-2">
          <PrimaryButton
            id="btn-checkout-cta"
            variant="green"
            onClick={() => {
              if (onFinalAction) onFinalAction();
              window.location.href = 'https://dolorciaopago.myshopify.com/cart/46514408620129:1?checkout';
            }}
          >
            OBTENER MI PLAN DOLORCIAO
          </PrimaryButton>
        </div>

        {/* Security Badges */}
        <div className="flex justify-center items-center gap-4 text-[12px] text-slate-500 pt-1">
          <span className="flex items-center gap-1">🔒 Pago 100% Seguro</span>
          <span>•</span>
          <span className="flex items-center gap-1">⚡ Acceso Inmediato en tu Celular</span>
        </div>
      </div>

      {/* 30-Day Guarantee Box */}
      <div className="w-full bg-[#EDF4F9] border border-[#CBD5E1] rounded-[22px] p-6 sm:p-7 flex flex-col items-center text-center shadow-xs">
        <div className="w-full max-w-[240px] sm:max-w-[280px] mx-auto mb-4">
          <img
            src="/images/garantia-30-dias.png"
            alt="Garantía 30 Días DolorCiao"
            className="w-full h-auto object-contain drop-shadow-md mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="flex flex-col gap-3 max-w-md mx-auto text-center">
          <p className="text-[14px] sm:text-[15px] text-slate-700 leading-relaxed font-medium">
            La compra de este material es totalmente sin riesgo para vos.
            <br />
            Si no cumple con tus expectativas dentro de los primeros 30 días posteriores a la compra, te reembolsaremos el 100% del importe pagado, sin hacer preguntas.
          </p>
          <p className="text-[14px] sm:text-[15px] text-slate-800 font-semibold pt-1">
            Solo tenés que enviar un correo al soporte:
            <br />
            <a
              href="mailto:dolorciao00@gmail.com"
              className="text-[#0E4A72] font-extrabold underline hover:text-[#0A3552] text-[15px]"
            >
              dolorciao00@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="w-full flex flex-col gap-3 pt-2">
        <h3
          className="text-[19px] font-bold text-[#1E293B] text-center mb-1"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          Preguntas Frecuentes
        </h3>
        {faqs.map((faq, idx) => {
          const isOpen = !!openFaqs[idx];
          return (
            <div
              key={idx}
              className="w-full bg-[#0A436C] border border-[#0D4E7D] rounded-[16px] overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-bold text-white text-[14.5px] sm:text-[15.5px] leading-snug cursor-pointer hover:bg-[#0C4C7A] transition-colors gap-3"
              >
                <span>{faq.q}</span>
                <span className="shrink-0 text-white/90">
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </span>
              </button>
              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 text-[13px] sm:text-[13.5px] text-white/95 leading-relaxed pt-2 border-t border-white/10 font-normal">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Final CTA (Green Button) */}
      <div className="w-full pt-3">
        <PrimaryButton
          id="btn-bottom-final-cta"
          variant="green"
          onClick={onFinalAction}
        >
          OBTENER MI PLAN DOLORCIAO
        </PrimaryButton>
      </div>
    </div>
  );
};
