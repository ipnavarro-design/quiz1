import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Check, Shield, Smartphone, Calendar, Activity, TrendingUp, Sparkles, Library, Dumbbell, Moon } from 'lucide-react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { PrimaryButton } from '../components/PrimaryButton';
import { QuizResponses } from '../types';

interface ScreenUnifiedFinalPlanProps {
  onFinalAction: () => void;
  respuestas: QuizResponses;
}

export const ScreenUnifiedFinalPlan: React.FC<ScreenUnifiedFinalPlanProps> = ({
  onFinalAction,
  respuestas,
}) => {
  // Countdown Timer (15 mins = 900s)
  const [timeLeft, setTimeLeft] = useState(899);
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Track Meta Pixel Lead event when reaching the final results plan screen
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead');
    }
  }, []);

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

  const CHECKOUT_SHOPIFY_URL = 'https://dolorciaopago.myshopify.com/cart/46514408620129:1?checkout';

  const handleCheckout = () => {
    if (onFinalAction) {
      onFinalAction();
    }
    const opened = window.open(CHECKOUT_SHOPIFY_URL, '_blank', 'noopener,noreferrer');
    if (!opened) {
      window.location.href = CHECKOUT_SHOPIFY_URL;
    }
  };

  const scrollToCheckout = () => {
    const el = document.getElementById('pricing-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleCheckout();
    }
  };

  // Compute dynamic user target area
  const getTargetPainArea = () => {
    if (respuestas.pregunta1) {
      const p1 = respuestas.pregunta1.toLowerCase();
      if (p1.includes('lumbar')) return 'tu zona lumbar y espalda baja';
      if (p1.includes('cervical')) return 'tu zona cervical y cuello';
      if (p1.includes('dorsal')) return 'tu zona dorsal y espalda media';
      if (p1.includes('pierna')) return 'tus piernas y caderas';
      if (p1.includes('hormigueo')) return 'tu columna vertebral y postura';
      if (p1.includes('toda la espalda')) return 'toda tu espalda y columna';
      return respuestas.pregunta1;
    }
    return 'tu zona lumbar y espalda';
  };

  const targetPainAreaText = getTargetPainArea();

  const renderPricingCard = (cardId: string) => (
    <div
      id={cardId}
      className="w-full bg-white border-2 border-[#0E4A72] rounded-[24px] p-5 sm:p-6 flex flex-col gap-4 shadow-lg relative overflow-hidden text-left"
    >
      {/* Red Ribbon / Badge for Discount in RED */}
      <div className="absolute top-0 right-0 bg-[#DC2626] text-white text-[11px] font-extrabold px-3 py-1 rounded-bl-[14px] uppercase tracking-wider shadow-xs">
        70% OFF HOY
      </div>

      {/* Plan Header */}
      <div className="flex flex-col pt-1">
        <span className="text-[12px] font-bold text-[#0E4A72] uppercase tracking-wider">
          Acceso Completo • App Móvil Incluida
        </span>
        <h3
          className="text-[21px] sm:text-[23px] font-extrabold text-[#1E293B]"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          Programa 30 Días DolorCiao
        </h3>
        <span className="text-[12px] text-slate-500 mt-0.5">
          Guía en video paso a paso para hacer desde tu celular o computadora
        </span>
      </div>

      {/* Countdown Timer Inside the Card */}
      <div className="w-full bg-red-50 border border-red-200 rounded-[14px] p-3 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-2">
          <span className="text-[16px] animate-pulse">⏰</span>
          <span className="text-[12px] sm:text-[13px] font-bold text-red-700">
            Descuento especial expira en:
          </span>
        </div>
        <span className="text-[15px] sm:text-[16px] font-extrabold text-red-700 font-mono tracking-wider bg-white px-2.5 py-0.5 rounded-md border border-red-200">
          {formattedTime}
        </span>
      </div>

      {/* Price Display in Argentine Pesos (ARS) */}
      <div className="flex flex-col gap-1.5 py-2 border-y border-slate-100">
        <div className="flex items-baseline gap-3 flex-wrap">
          <span className="text-[16px] text-slate-400 line-through font-semibold">
            $25.990 ARS
          </span>
          <div className="flex items-baseline gap-1">
            <span
              className="text-[36px] sm:text-[40px] font-black text-[#0E4A72]"
              style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
            >
              $7.797
            </span>
            <span className="text-[15px] font-extrabold text-slate-700">ARS</span>
          </div>
          <span className="ml-auto text-[11px] font-bold text-[#0E4A72] bg-[#EDF4F9] px-2.5 py-1 rounded-full border border-[#CBD5E1]">
            Pago único
          </span>
        </div>
        <div className="inline-block bg-[#DC2626] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md self-start shadow-2xs">
          Ahorrás $18.193 ARS hoy (70% OFF)
        </div>
      </div>

      {/* Features Checklist */}
      <div className="flex flex-col gap-2.5 text-[13px] sm:text-[13.5px] text-slate-700">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-[#0E4A72] shrink-0 stroke-[2.5]" />
          <span>Programa guiado de 30 días en video HD (10-15 min/día)</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-[#0E4A72] shrink-0 stroke-[2.5]" />
          <span>Biblioteca con más de 70 ejercicios de movilidad</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-[#0E4A72] shrink-0 stroke-[2.5]" />
          <span className="font-semibold text-slate-900">
            Calibrado para reducir el dolor de espalda ({targetPainAreaText})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-[#0E4A72] shrink-0 stroke-[2.5]" />
          <span>App móvil profesional para iOS y Android de por vida</span>
        </div>
        <div className="flex items-start gap-2">
          <Check className="w-4 h-4 text-[#0E4A72] shrink-0 stroke-[2.5] mt-0.5" />
          <span>
            Test fotográfico inicial y final (Día 1 vs Día 30){' '}
            <span className="text-[11.5px] text-slate-500 font-medium block sm:inline">
              (Opcional y 100% privado en tu celular)
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-[#0E4A72] shrink-0 stroke-[2.5]" />
          <span>Test de Cierre del Día 30 para comprobar tu autonomía</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-[#0E4A72] shrink-0 stroke-[2.5]" />
          <span>Sistema de hábitos diarios (agua, sueño y pausas activas)</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-[#0E4A72] shrink-0 stroke-[2.5]" />
          <span>Calendario visual de rachas y tablero de progreso</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-[#0E4A72] shrink-0 stroke-[2.5]" />
          <span>Garantía incondicional de satisfacción por 30 días</span>
        </div>
      </div>

      {/* Green CTA Button */}
      <div className="w-full pt-2">
        <PrimaryButton
          id={`btn-checkout-${cardId}`}
          variant="green"
          href={CHECKOUT_SHOPIFY_URL}
          target="_blank"
          onClick={handleCheckout}
        >
          OBTENER MI PLAN PERSONALIZADO
        </PrimaryButton>
      </div>

      {/* Security Badges */}
      <div className="flex justify-center items-center gap-3 text-[11.5px] text-slate-500 pt-1">
        <span>🔒 Pago 100% Seguro</span>
        <span>•</span>
        <span>⚡ Acceso Inmediato en tu Celular</span>
      </div>
    </div>
  );

  // Testimonios
  const testimonials = [
    {
      id: 'test-1',
      name: 'Dr. Roberto Méndez',
      age: '54 años',
      condition: 'Rigidez y molestia recurrente de espalda',
      quote:
        'Pensé que por mi edad era normal vivir con rigidez. Hace meses que siento la espalda liviana y puedo descansar como un bebé.',
      rating: 5.0,
      image: '/images/testimonio-roberto.jpg',
    },
    {
      id: 'test-2',
      name: 'Mariana Gomez',
      age: '42 años',
      condition: 'Tensión postural por trabajo de escritorio',
      quote:
        'Sentarme a trabajar 8 horas me dejaba la espalda tiesa. Las microrutinas de movilidad me devolvieron la soltura. Ya no amanezco rígida y siento mi postura mucho más erguida.',
      rating: 4.5,
      image: '/images/testimonio-mariana.png',
    },
    {
      id: 'test-3',
      name: 'Gustavo Paez',
      age: '61 años',
      condition: 'Años con rigidez y falta de movilidad',
      quote:
        'Llevaba años sintiéndome limitado y pesado. Con solo 10-15 minutos al día de estos movimientos, en la segunda semana la pesadez en la pierna y espalda desapareció por completo. Volví a jugar con mis nietos con total libertad. Por cierto, la App es súper intuitiva.',
      rating: 5.0,
      image: '/images/testimonio-gustavo.webp',
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center text-amber-400 text-[14px] gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          if (rating >= star) {
            return <span key={star}>★</span>;
          } else if (rating >= star - 0.5) {
            return (
              <span key={star} className="relative inline-block text-slate-200">
                ★
                <span className="absolute left-0 top-0 overflow-hidden w-1/2 text-amber-400">
                  ★
                </span>
              </span>
            );
          } else {
            return <span key={star} className="text-slate-200">★</span>;
          }
        })}
        <span className="text-slate-600 font-bold text-[11.5px] ml-1">{rating.toFixed(1)}</span>
      </div>
    );
  };

  // FAQs
  const faqs: { q: string; a: React.ReactNode }[] = [
    {
      q: '¿Cómo voy a lograr resultados si el programa es online a través de la App?',
      a: (
        <p>
          Que el programa sea a través de nuestra App no determina si habrá resultados o no. Lo determinante es si existe un{' '}
          <strong className="font-bold text-white">plan claro, personalizado y medible</strong>, o si se trata de contenido genérico sin acompañamiento real. En{' '}
          <strong className="font-bold text-white">DolorCiao</strong> no entrás a “ver videos sueltos”, sino a seguir un proceso paso a paso de 30 días, calibrado según tus objetivos de movilidad y evaluado con tests de progreso.
        </p>
      ),
    },
    {
      q: '¿Qué pasa si no tengo mucho tiempo para dedicarle?',
      a: (
        <p>
          Las rutinas duran únicamente entre <strong className="font-bold text-white">10 y 15 minutos por día</strong>. Están diseñadas específicamente para personas ocupadas que trabajan sentadas o con horarios demandantes. Podés hacerlas al levantarte, a media tarde o antes de dormir directamente desde tu celular.
        </p>
      ),
    },
    {
      q: 'Si ya probé masajes o soluciones temporales, ¿por qué DolorCiao funcionará?',
      a: (
        <div className="space-y-3">
          <p>
            Muchos métodos tradicionales solo buscan una sensación de alivio momentáneo, pero no entrenan la movilidad de la cadera ni la flexibilidad de la columna. Al volver a pasar horas sentado, la tensión reaparece.
          </p>
          <p>
            <strong className="font-bold text-white">DolorCiao</strong> trabaja la causa real: reeduca el movimiento articular a través de micro-rutinas diarias y hábitos saludables, logrando un bienestar duradero y una postura erguida natural.
          </p>
        </div>
      ),
    },
    {
      q: '¿Qué pasa si en 30 días no veo resultados?',
      a: (
        <div className="space-y-2">
          <p>
            Tenés una <strong className="font-bold text-white">Garantía Incondicional de 30 Días</strong> respaldada al 100%.
          </p>
          <p>
            Si en los 30 días no ves una mejoría real en tu movilidad y bienestar, nos escribís un mensaje y te{' '}
            <strong className="font-bold text-white">reembolsamos el 100% de tus $7.797 ARS de inmediato</strong>, sin preguntas incómodas ni trámites.
          </p>
        </div>
      ),
    },
    {
      q: '¿Es seguro si suelo tener mucha rigidez o molestias en la espalda?',
      a: (
        <p>
          Sí, el programa está diseñado especialmente para personas que experimentan rigidez, sobrecarga lumbar o pesadez por pasar mucho tiempo sentadas. Todos los movimientos son de bajo impacto, progresivos y sin cargas pesadas, protegiendo tus articulaciones en todo momento.
        </p>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-10 pb-12 relative">
      {/* Sticky Countdown Timer Header - Permanece fijo en la parte superior al escrollear */}
      <div className="sticky top-0 z-50 -mx-4 sm:-mx-6 -mt-4 sm:-mt-6 mb-1 bg-[#0E4A72] text-white px-4 py-2.5 shadow-md flex items-center justify-between border-b border-white/20 rounded-t-[22px] backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="text-[15px] animate-pulse">⏰</span>
          <span className="text-[12px] sm:text-[13px] font-bold text-white leading-tight">
            Descuento especial expira en:
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#DC2626] text-white text-[10.5px] sm:text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
            70% OFF
          </span>
          <span className="text-[14px] sm:text-[15px] font-extrabold text-red-600 font-mono tracking-wider bg-white px-2 py-0.5 rounded-md border border-red-200 shadow-2xs">
            {formattedTime}
          </span>
        </div>
      </div>

      {/* Header progress */}
      <div className="w-full">
        <Eyebrow percentage={100} line1="Plan calibrado con éxito" />
        <ProgressBar progress={100} />
      </div>

      {/* ========================================================================= */}
      {/* 1. PRIMER PANTALLAZO (ESTILO REFERENCIA CON AHORA / TU OBJETIVO & ESTADOS)  */}
      {/* ========================================================================= */}
      <section className="w-full flex flex-col gap-5">
        <div className="w-full text-center space-y-2">
          <div className="inline-block bg-[#16A34A] text-white text-[13px] font-bold px-3.5 py-1 rounded-full shadow-sm">
            🎉 ¡Plan Calibrado y Listo!
          </div>

          <h2
            id="plan-ready-title"
            className="text-[23px] sm:text-[28px] font-bold text-[#1E293B] leading-tight"
            style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
          >
            {userName}, tu programa personalizado{' '}
            <span className="text-[#0E4A72] font-extrabold">DolorCiao</span> está listo
          </h2>

          <p className="text-[14px] text-slate-600 max-w-sm mx-auto">
            Mirá la transformación proyectada para los próximos 30 días:
          </p>

          {respuestas.zonasDolorMovimiento &&
            respuestas.zonasDolorMovimiento.length > 0 &&
            !respuestas.zonasDolorMovimiento.includes('ninguna') && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#EDF4F9] border border-[#CBD5E1] text-[12px] text-[#0E4A72] text-left mx-auto">
                <Shield className="w-4 h-4 text-[#0E4A72] shrink-0" />
                <span>
                  <strong>Calibración de protección activada:</strong> Rutinas adaptadas para{' '}
                  {respuestas.zonasDolorMovimiento.join(', ')}.
                </span>
              </div>
            )}
        </div>

        {/* Tarjeta Superior: Comparación Postural con toggle Ahora / Tu objetivo */}
        <div className="w-full bg-[#F5F4F0] border border-[#E2E8F0] rounded-[24px] p-4 sm:p-5 flex flex-col items-center gap-4 shadow-xs">
          {/* Pill Toggle Centrado */}
          <div className="bg-white/95 backdrop-blur-xs px-6 py-1.5 rounded-full shadow-xs border border-slate-200/80 flex items-center justify-center gap-5 sm:gap-6">
            <span className="text-[14px] sm:text-[15px] font-semibold text-slate-800">
              Ahora
            </span>
            <span className="text-slate-300 font-light text-[13px]">|</span>
            <span className="text-[14px] sm:text-[15px] font-semibold text-slate-800">
              Tu objetivo
            </span>
          </div>

          {/* Imagen de Transformación Postural */}
          <div className="w-full flex items-center justify-center py-1">
            <img
              src="/images/posture_goal_comparison.jpg?v=2"
              alt="Ahora vs Tu objetivo con DolorCiao"
              className="w-full max-w-[390px] h-auto object-contain rounded-[18px] drop-shadow-xs"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Tarjeta Inferior: Cuadrante de Estados con Reducir el dolor de espalda */}
        <div className="w-full bg-white border border-[#CBD5E1] rounded-[22px] p-4 sm:p-5 shadow-xs">
          {/* Fila añadida: Reducir el dolor de espalda */}
          <div className="flex items-center gap-3 pb-3 mb-3.5 border-b border-slate-100 text-left">
            <div className="w-8 h-8 rounded-full bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
              <Activity className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Objetivo principal
              </span>
              <span className="text-[14px] sm:text-[15px] font-extrabold text-[#0E4A72]">
                Reducir el dolor de espalda
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-left">
            {/* Estado 1: Nivel de rigidez */}
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#EDF4F9] text-[#0E4A72] flex items-center justify-center shrink-0 mt-0.5">
                <Activity className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] sm:text-[14px] font-bold text-[#1E293B] leading-tight">
                  Nivel de rigidez
                </span>
                <span className="text-[11.5px] sm:text-[12px] text-slate-500 mt-0.5 leading-snug">
                  8.5/10 → 1.0/10 (Ágil)
                </span>
              </div>
            </div>

            {/* Estado 2: Movilidad articular */}
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#EDF4F9] text-[#0E4A72] flex items-center justify-center shrink-0 mt-0.5">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] sm:text-[14px] font-bold text-[#1E293B] leading-tight">
                  Movilidad articular
                </span>
                <span className="text-[11.5px] sm:text-[12px] text-slate-500 mt-0.5 leading-snug">
                  Rango libre y flexible
                </span>
              </div>
            </div>

            {/* Estado 3: Calidad de descanso */}
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#EDF4F9] text-[#0E4A72] flex items-center justify-center shrink-0 mt-0.5">
                <Moon className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] sm:text-[14px] font-bold text-[#1E293B] leading-tight">
                  Calidad de descanso
                </span>
                <span className="text-[11.5px] sm:text-[12px] text-slate-500 mt-0.5 leading-snug">
                  7-8h de sueño continuo
                </span>
              </div>
            </div>

            {/* Estado 4: Confianza corporal */}
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#EDF4F9] text-[#0E4A72] flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] sm:text-[14px] font-bold text-[#1E293B] leading-tight">
                  Confianza corporal
                </span>
                <span className="text-[11.5px] sm:text-[12px] text-slate-500 mt-0.5 leading-snug">
                  Soltura total al moverte
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 1er Cuadrante de Precio COMPLETO (debajo del cuadrante de estados) */}
        <div className="w-full pt-1">
          {renderPricingCard('pricing-card-top')}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-t border-slate-200 my-1" />

      {/* ========================================================================= */}
      {/* 2. ENTREGABLES OFICIALES (ESTILO MINIMALISTA CON CELULARES)               */}
      {/* ========================================================================= */}
      <section className="w-full flex flex-col gap-6 sm:gap-8 py-2" id="deliverables-section">
        {/* Header estilo screenshot con resaltado celeste */}
        <div className="w-full text-center">
          <h2
            id="deliverables-title"
            className="text-[25px] sm:text-[30px] font-extrabold text-[#1E293B] tracking-tight inline-block"
            style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
          >
            <span className="bg-[#BAE6FD] px-3.5 py-1 rounded-sm text-[#0F172A]">
              Lo que vas a recibir:
            </span>
          </h2>
        </div>

        {/* BLOQUE 1: RUTINAS & ENTRENAMIENTO */}
        <div className="w-full grid grid-cols-[1.15fr_0.85fr] sm:grid-cols-2 items-center gap-2 sm:gap-6 py-2">
          {/* Columna Izquierda: Puntos clave sin descripciones */}
          <div className="flex flex-col justify-center gap-6 sm:gap-8 pl-1 sm:pl-4">
            {/* Punto 1 */}
            <div className="flex flex-col items-start text-left gap-2 sm:gap-2.5">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#75B597] text-white flex items-center justify-center shadow-xs shrink-0">
                <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-bold text-[#1E293B] text-[14px] sm:text-[16.5px] leading-snug">
                Programa de ejercicios personalizado
              </span>
            </div>

            {/* Punto 2 */}
            <div className="flex flex-col items-start text-left gap-2 sm:gap-2.5">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#75B597] text-white flex items-center justify-center shadow-xs shrink-0">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-bold text-[#1E293B] text-[14px] sm:text-[16.5px] leading-snug">
                Plan guiado paso a paso fácil de seguir
              </span>
            </div>

            {/* Punto 3: App Móvil */}
            <div className="flex flex-col items-start text-left gap-2 sm:gap-2.5">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#75B597] text-white flex items-center justify-center shadow-xs shrink-0">
                <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-bold text-[#1E293B] text-[14px] sm:text-[16.5px] leading-snug">
                App Móvil para iOS y Android de fácil uso
              </span>
            </div>
          </div>

          {/* Columna Derecha: Celular 1 (Rutinas) */}
          <div className="flex items-center justify-center pr-1 sm:pr-4">
            <img
              src="/images/app-rutinas.png"
              alt="Programa de ejercicios en la app"
              className="max-h-[250px] sm:max-h-[300px] w-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.14)] transition-transform duration-300 hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* BLOQUE 2: PROGRESO & HÁBITOS */}
        <div className="w-full grid grid-cols-[1.15fr_0.85fr] sm:grid-cols-2 items-center gap-2 sm:gap-6 py-2">
          {/* Columna Izquierda: Puntos clave sin descripciones */}
          <div className="flex flex-col justify-center gap-6 sm:gap-8 pl-1 sm:pl-4">
            {/* Punto 4: Biblioteca de Ejercicios */}
            <div className="flex flex-col items-start text-left gap-2 sm:gap-2.5">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#75B597] text-white flex items-center justify-center shadow-xs shrink-0">
                <Library className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-bold text-[#1E293B] text-[14px] sm:text-[16.5px] leading-snug">
                Biblioteca con más de 70 ejercicios de movilidad
              </span>
            </div>

            {/* Punto 5 */}
            <div className="flex flex-col items-start text-left gap-2 sm:gap-2.5">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#75B597] text-white flex items-center justify-center shadow-xs shrink-0">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-bold text-[#1E293B] text-[14px] sm:text-[16.5px] leading-snug">
                Resultados visibles en tu primer mes
              </span>
            </div>

            {/* Punto 6 */}
            <div className="flex flex-col items-start text-left gap-2 sm:gap-2.5">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#75B597] text-white flex items-center justify-center shadow-xs shrink-0">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-bold text-[#1E293B] text-[14px] sm:text-[16.5px] leading-snug">
                Control de hábitos y análisis de progreso
              </span>
            </div>
          </div>

          {/* Columna Derecha: Celular 2 (Hábitos) */}
          <div className="flex items-center justify-center pr-1 sm:pr-4">
            <img
              src="/images/app-habitos.png"
              alt="Control de hábitos en la app"
              className="max-h-[250px] sm:max-h-[300px] w-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.14)] transition-transform duration-300 hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-t border-slate-200 my-1" />

      {/* ========================================================================= */}
      {/* 3. PREGUNTAS FRECUENTES (FAQ ACCORDION)                                   */}
      {/* ========================================================================= */}
      <section className="w-full flex flex-col gap-4">
        <h3
          className="text-[20px] font-bold text-[#1E293B] text-center"
          style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
        >
          Preguntas Frecuentes
        </h3>
        <div className="flex flex-col gap-3">
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
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-bold text-white text-[14px] sm:text-[15px] leading-snug cursor-pointer hover:bg-[#0C4C7A] transition-colors gap-3"
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
      </section>

      {/* Divider */}
      <div className="w-full border-t border-slate-200 my-1" />

      {/* ========================================================================= */}
      {/* 4. TESTIMONIOS                                                            */}
      {/* ========================================================================= */}
      <section className="w-full flex flex-col gap-5" id="testimonials-section">
        <div className="w-full text-center space-y-1.5">
          <div className="inline-block bg-[#EDF4F9] text-[#0E4A72] border border-[#CBD5E1] text-[12px] font-bold px-3 py-0.5 rounded-full">
            Historias y Casos Reales
          </div>
          <h3
            id="testimonials-title"
            className="text-[21px] sm:text-[25px] font-bold text-[#1E293B] leading-tight"
            style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
          >
            Personas que ya transformaron su bienestar con{' '}
            <span className="text-[#0E4A72] font-extrabold">DolorCiao</span>
          </h3>
          <p className="text-[13px] text-slate-500 max-w-sm mx-auto">
            Historias reales de personas que recuperaron su flexibilidad y postura diaria:
          </p>
        </div>

        <div className="flex flex-col gap-3.5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-full bg-white border border-[#CBD5E1] rounded-[18px] p-4 sm:p-5 flex flex-col gap-2.5 shadow-xs text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 sm:w-13 sm:h-13 rounded-full object-cover border border-[#CBD5E1] shadow-2xs shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-[#1E293B] text-[14.5px] leading-tight">
                      {t.name}
                    </h4>
                    <span className="text-[11.5px] text-slate-500">{t.age}</span>
                  </div>
                </div>
                {renderStars(t.rating)}
              </div>
              <div className="inline-block bg-slate-100 text-[#0E4A72] text-[11.5px] font-bold px-2.5 py-0.5 rounded-md self-start border border-slate-200">
                {t.condition}
              </div>
              <p className="text-[13px] text-slate-700 leading-relaxed italic bg-slate-50 p-3 rounded-[12px] border border-slate-200/60">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-t border-slate-200 my-1" />

      {/* ========================================================================= */}
      {/* 5. SEGUNDO CUADRANTE DE PRECIO COMPLETO (JUSTO ARRIBA DE LA GARANTÍA)     */}
      {/* ========================================================================= */}
      <section className="w-full flex flex-col gap-4" id="pricing-bottom-section">
        {renderPricingCard('pricing-card-bottom')}
      </section>

      {/* ========================================================================= */}
      {/* 7. GARANTÍA A LO ÚLTIMO DE TODO (COMO FUE SOLICITADO)                     */}
      {/* ========================================================================= */}
      <section className="w-full pt-2" id="guarantee-final-section">
        <div className="w-full bg-[#EDF4F9] border border-[#CBD5E1] rounded-[22px] p-6 sm:p-7 flex flex-col items-center text-center shadow-xs">
          {/* Imagen de la garantía en grande arriba del texto */}
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
      </section>
    </div>
  );
};

