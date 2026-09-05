import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Check, CheckCircle2, Shield, Smartphone, Video, Camera, Calendar, Award, Droplets, Activity, Clock, Sliders, Dumbbell, TrendingUp, Sparkles } from 'lucide-react';
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
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
  });
  const [selectedPhase, setSelectedPhase] = useState<1 | 2 | 3>(1);
  const [showAllDays, setShowAllDays] = useState(false);

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

  // Compute dynamic user target pain area
  const getTargetPainArea = () => {
    if (respuestas.pregunta1) {
      const p1 = respuestas.pregunta1.toLowerCase();
      if (p1.includes('lumbar')) return 'tu zona lumbar y espalda baja';
      if (p1.includes('cervical')) return 'tu zona cervical y cuello';
      if (p1.includes('pierna')) return 'el nervio ciático y piernas';
      if (p1.includes('hormigueo')) return 'tu columna vertebral y raíces nerviosas';
      return respuestas.pregunta1;
    }
    return 'tu zona lumbar y columna';
  };

  const targetPainAreaText = getTargetPainArea();

  // Section 1: Comparison table
  const comparisons = [
    {
      metric: 'Intensidad del Dolor',
      before: '8.5 / 10 (Dolor diario constante)',
      after: '1.0 / 10 (Alivio y desinflamación)',
    },
    {
      metric: 'Movilidad de Columna',
      before: 'Rigidez y punzadas al agacharte',
      after: 'Rango libre de movimiento',
    },
    {
      metric: 'Calidad de Sueño',
      before: 'Despertares nocturnos por dolor',
      after: '7-8h de descanso continuo',
    },
    {
      metric: 'Independencia Funcional',
      before: 'Miedo al movimiento y a cargar peso',
      after: 'Confianza en trabajo y vida diaria',
    },
  ];

  // Section 2: Real 30-day program calendar
  const allCalendarDays = [
    { day: 1, emoji: '🧭', title: 'Cadera y Flexores de Cadera', focus: 'Descompresión inicial y pelvis', phase: 1 },
    { day: 2, emoji: '🌊', title: 'Espalda e Isquiotibiales', focus: 'Liberación de cadena posterior', phase: 1 },
    { day: 3, emoji: '🦶', title: 'Tobillos y Glúteos', focus: 'Base articular y soporte', phase: 1 },
    { day: 4, emoji: '⚡', title: 'Full-Body A', focus: 'Activación y descompresión global', phase: 1 },
    { day: 5, emoji: '🦅', title: 'Hombros y Cadena Posterior', focus: 'Apertura torácica y postura', phase: 1 },
    { day: 6, emoji: '🌿', title: 'Cuello y Columna', focus: 'Descompresión cervical y eje', phase: 1 },
    { day: 7, emoji: '🔥', title: 'Full-Body B', focus: 'Control motor y descarga', phase: 1 },
    { day: 8, emoji: '🌱', title: 'Cadera y Flexores de Cadera', focus: 'Amplitud de movimiento profundo', phase: 1 },
    { day: 9, emoji: '🧘', title: 'Espalda e Isquiotibiales', focus: 'Descompresión discal sostenida', phase: 1 },
    { day: 10, emoji: '🛡️', title: 'Tobillos y Glúteos', focus: 'Blindaje de la base pélvica', phase: 1 },

    { day: 11, emoji: '🎯', title: 'Full-Body A', focus: 'Fuerza postural y estabilidad', phase: 2 },
    { day: 12, emoji: '✨', title: 'Hombros y Cadena Posterior', focus: 'Alineación escapular segura', phase: 2 },
    { day: 13, emoji: '🕊️', title: 'Cuello y Columna', focus: 'Flexibilidad axial progresiva', phase: 2 },
    { day: 14, emoji: '⭐', title: 'Full-Body B', focus: 'Coordinación articular fluida', phase: 2 },
    { day: 15, emoji: '🚀', title: 'Cadera y Flexores de Cadera', focus: 'Desbloqueo de psoas y cadera', phase: 2 },
    { day: 16, emoji: '💎', title: 'Espalda e Isquiotibiales', focus: 'Rango amplio sin pellizcos', phase: 2 },
    { day: 17, emoji: '💪', title: 'Tobillos y Glúteos', focus: 'Sostén lumbo-pélvico activo', phase: 2 },
    { day: 18, emoji: '🌈', title: 'Full-Body A', focus: 'Estabilidad funcional continua', phase: 2 },
    { day: 19, emoji: '🕊️', title: 'Hombros y Cadena Posterior', focus: 'Descarga de trapecios y dorsales', phase: 2 },
    { day: 20, emoji: '🌿', title: 'Cuello y Columna', focus: 'Restauración del eje espinal', phase: 2 },

    { day: 21, emoji: '🌟', title: 'Full-Body B', focus: 'Consolidación del movimiento', phase: 3 },
    { day: 22, emoji: '🔥', title: 'Cadera y Flexores de Cadera', focus: 'Blindaje articular avanzado', phase: 3 },
    { day: 23, emoji: '🎯', title: 'Espalda e Isquiotibiales', focus: 'Resistencia muscular segura', phase: 3 },
    { day: 24, emoji: '🌱', title: 'Tobillos y Glúteos', focus: 'Firmeza postural y apoyo', phase: 3 },
    { day: 25, emoji: '💫', title: 'Full-Body A', focus: 'Autonomía y fluidez diaria', phase: 3 },
    { day: 26, emoji: '⚡', title: 'Hombros y Cadena Posterior', focus: 'Fortalecimiento de la espalda', phase: 3 },
    { day: 27, emoji: '🌸', title: 'Cuello y Columna', focus: 'Elasticidad y bienestar vertebral', phase: 3 },
    { day: 28, emoji: '🛡️', title: 'Full-Body B', focus: 'Faja lumbo-abdominal blindada', phase: 3 },
    { day: 29, emoji: '🏆', title: 'Cadera y Flexores de Cadera', focus: 'Máxima amplitud sin molestias', phase: 3 },
    { day: 30, emoji: '👑', title: 'Rutina Final / Test de Cierre', focus: 'Evaluación final y certificación', phase: 3 },
  ];

  const displayedDays = showAllDays
    ? allCalendarDays
    : allCalendarDays.filter((d) => d.phase === selectedPhase);

  // Section 3: Casos Clínicos Reales con imágenes reales y estrellas oscilantes
  const testimonials = [
    {
      id: 'test-1',
      name: 'Dr. Roberto Méndez',
      age: '54 años',
      condition: 'Crisis recurrentes de columna',
      quote:
        'Pensé que por mi edad era normal vivir con dolor. Hace 4 meses que no tengo una sola crisis de espalda y puedo dormir como un bebe!!!',
      rating: 5.0,
      image: '/images/testimonio-roberto.jpg',
    },
    {
      id: 'test-2',
      name: 'Mariana Gomez',
      age: '42 años',
      condition: 'Rigidez lumbar por trabajo de escritorio',
      quote:
        'Sentarme a trabajar 8 horas era una tortura, intentaba crujirme mi espalda como si eso me "aliviara". Las microrutinas de descompresión me devolvieron la tranquilidad. Ya no amanezco rígida ni necesito inyecciones.',
      rating: 4.5,
      image: '/images/testimonio-mariana.png',
    },
    {
      id: 'test-3',
      name: 'Gustavo Paez',
      age: '61 años',
      condition: '3 años con dolor y ciática',
      quote:
        'Llevaba 3 años tomando antiinflamatorios a diario y temía la operación. Con 20 minutos al día de estos movimientos, en la segunda semana el hormigueo en la pierna desapareció por completo. Volví a jugar con mis nietos sin miedo. Por cierto, la App muy intuitiva',
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

  // Section 5: FAQs
  const faqs: { q: string; a: React.ReactNode }[] = [
    {
      q: '¿Cómo voy a lograr resultados si el programa es online a través de la App?',
      a: (
        <p>
          Que el programa sea a través de nuestra App no determina si habrá resultados o no. Lo determinante es si existe un{' '}
          <strong className="font-bold text-white">plan claro, personalizado y medible</strong>, o si se trata de contenido genérico sin acompañamiento real. En{' '}
          <strong className="font-bold text-white">DolorCiao</strong> no entrás a “ver videos sueltos”, sino a seguir un proceso paso a paso de 30 días, calibrado según tu contexto de dolor y evaluado con tests fotográficos y de cierre.
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
      q: 'Si ya probé kinesiología, masajes o inyecciones, ¿por qué DolorCiao funcionará?',
      a: (
        <div className="space-y-3">
          <p>
            Muchos métodos habituales (calor, ultrasonido, fármacos, masajes o bloqueos) buscan únicamente{' '}
            <strong className="font-bold text-white">apagar el dolor momentáneamente</strong>, pero no solucionan la falta de movilidad en la cadera ni descomprimen las vértebras. Al volver a la rutina diaria, la molestia reaparece.
          </p>
          <p>
            <strong className="font-bold text-white">DolorCiao</strong> restaura la mecánica articular de raíz a través de micro-movimientos de descompresión y un sistema de hábitos de 24 horas, logrando un alivio duradero que no depende de fármacos ni de sesiones eternas.
          </p>
        </div>
      ),
    },
    {
      q: '¿Qué pasa si en 30 días no siento alivio ni resultados?',
      a: (
        <div className="space-y-2">
          <p>
            Tenés una <strong className="font-bold text-white">Garantía Incondicional de 30 Días</strong> respaldada al 100%.
          </p>
          <p>
            Si en los 30 días no ves una mejoría real en tu movilidad y disminución de dolor, nos escribís un mensaje y te{' '}
            <strong className="font-bold text-white">reembolsamos el 100% de tus $7.797 ARS de inmediato</strong>, sin preguntas incómodas ni trámites.
          </p>
        </div>
      ),
    },
    {
      q: '¿Es seguro si tengo hernia de disco (L4-L5, L5-S1) o ciática?',
      a: (
        <p>
          Sí, el método fue creado teniendo como eje central a personas con protusiones discales, pinzamientos de ciática y lumbalgia mecánica. Todos los ejercicios son de bajo impacto y cero carga axial, protegiendo tus discos intervertebrales en todo momento.
        </p>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-10 pb-12">
      {/* Header progress */}
      <div className="w-full">
        <Eyebrow percentage={100} line1="Plan calibrado con éxito" />
        <ProgressBar progress={100} />
      </div>

      {/* ========================================================================= */}
      {/* 1. PLAN CALIBRADO & COMPARACIÓN ANTES VS META                             */}
      {/* ========================================================================= */}
      <section className="w-full flex flex-col gap-6">
        <div className="w-full text-center space-y-2">
          {/* Maintained in GREEN as requested */}
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

        {/* Comparison Table / Cards (Fondo azul y mini títulos blancos) */}
        <div className="w-full bg-[#0E4A72] border border-[#0A3756] rounded-[22px] p-5 sm:p-6 flex flex-col gap-4 shadow-md">
          <div className="grid grid-cols-2 gap-3 pb-2 border-b border-white/20 text-center text-[12px] font-extrabold uppercase tracking-wider">
            <div className="text-red-200 bg-red-950/60 py-1.5 rounded-lg border border-red-400/40">
              Estado Actual
            </div>
            <div className="text-emerald-200 bg-emerald-950/60 py-1.5 rounded-lg border border-emerald-400/40">
              Tu Meta con DolorCiao
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            {comparisons.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1.5 pb-3 border-b border-white/15 last:border-0 last:pb-0">
                <span className="text-[13px] font-bold text-white">
                  {item.metric}
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2.5 rounded-[12px] bg-white/95 text-red-950 font-medium text-[12.5px] leading-snug shadow-xs">
                    ❌ {item.before}
                  </div>
                  <div className="p-2.5 rounded-[12px] bg-emerald-50 text-emerald-950 font-semibold text-[12.5px] leading-snug shadow-xs">
                    ✅ {item.after}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button in GREEN as requested */}
        <div className="w-full pt-1">
          <PrimaryButton
            id="btn-plan-ready-scroll"
            variant="green"
            onClick={scrollToCheckout}
          >
            Ver plan completo de 30 días y comenzar →
          </PrimaryButton>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-t border-slate-200 my-1" />

      {/* ========================================================================= */}
      {/* 2. ¿CÓMO FUNCIONA EL PLAN? CALENDARIO REAL DE 30 DÍAS & 3 FASES           */}
      {/* ========================================================================= */}
      <section className="w-full flex flex-col gap-6">
        <div className="w-full text-center space-y-2">
          <div className="inline-block bg-[#EDF4F9] text-[#0E4A72] border border-[#CBD5E1] text-[12.5px] font-bold px-3.5 py-1 rounded-full">
            Metodología Científica de 3 Fases (30 Días)
          </div>
          <h2
            id="calendar-title"
            className="text-[23px] sm:text-[27px] font-bold text-[#1E293B] leading-tight"
            style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
          >
            ¿Cómo funciona el plan{' '}
            <span className="text-[#0E4A72] font-extrabold">DolorCiao</span>?
          </h2>
          <p className="text-[14px] text-slate-600 max-w-sm mx-auto">
            30 días de progresión guiada en video (10 a 15 min/día) sin requerir flexibilidad previa ni equipamiento.
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="w-full grid grid-cols-3 gap-1.5 bg-slate-100 p-1.5 rounded-[16px]">
          <button
            type="button"
            onClick={() => {
              setSelectedPhase(1);
              setShowAllDays(false);
            }}
            className={`py-2 px-1 text-[11px] sm:text-[12.5px] font-bold rounded-[12px] transition-all cursor-pointer text-center leading-tight ${
              selectedPhase === 1 && !showAllDays
                ? 'bg-[#0E4A72] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Fase 1 (Días 1-10)
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedPhase(2);
              setShowAllDays(false);
            }}
            className={`py-2 px-1 text-[11px] sm:text-[12.5px] font-bold rounded-[12px] transition-all cursor-pointer text-center leading-tight ${
              selectedPhase === 2 && !showAllDays
                ? 'bg-[#0E4A72] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Fase 2 (Días 11-20)
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedPhase(3);
              setShowAllDays(false);
            }}
            className={`py-2 px-1 text-[11px] sm:text-[12.5px] font-bold rounded-[12px] transition-all cursor-pointer text-center leading-tight ${
              selectedPhase === 3 && !showAllDays
                ? 'bg-[#0E4A72] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Fase 3 (Días 21-30)
          </button>
        </div>

        {/* Phase Description Box */}
        <div className="w-full bg-[#EDF4F9] border border-[#CBD5E1] rounded-[16px] p-4 flex items-center gap-3.5">
          <span className="text-[26px]">
            {selectedPhase === 1 ? '🧭' : selectedPhase === 2 ? '🎯' : '👑'}
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-[#0E4A72] text-[14px]">
              {selectedPhase === 1
                ? 'Fase 1: Descompresión y Adaptación Funcional (Días 1 al 10)'
                : selectedPhase === 2
                ? 'Fase 2: Rango Articular y Cadena Posterior (Días 11 al 20)'
                : 'Fase 3: Blindaje Lumbar, Fuerza y Test de Cierre (Días 21 al 30)'}
            </span>
            <span className="text-[12.5px] text-slate-600 mt-0.5 leading-snug">
              {selectedPhase === 1
                ? 'Desinflama las raíces nerviosas y libera la compresión discal con apertura de cadera y movilidad suave.'
                : selectedPhase === 2
                ? 'Recupera la movilidad de columna, isquiotibiales y hombros, desbloqueando el rango sin dolor.'
                : 'Activa la faja protectora abdominal y culmina en el Día 30 con tu Test de Cierre para validar tu cambio.'}
            </span>
          </div>
        </div>

        {/* Daily Schedule List */}
        <div className="w-full bg-white border border-[#CBD5E1] rounded-[22px] p-4 sm:p-5 flex flex-col gap-2.5 shadow-sm">
          <div className="flex items-center justify-between pb-1 border-b border-slate-100">
            <span className="text-[12px] font-bold uppercase text-slate-500 tracking-wider">
              {showAllDays ? 'Calendario Completo de 30 Días' : `Rutinas de Fase ${selectedPhase} (10-15 min/día)`}
            </span>
            <button
              type="button"
              onClick={() => setShowAllDays((prev) => !prev)}
              className="text-[11.5px] font-bold text-[#0E4A72] hover:underline cursor-pointer"
            >
              {showAllDays ? 'Ver por fases' : 'Ver los 30 días'}
            </button>
          </div>

          <div className="flex flex-col gap-2 max-h-[420px] overflow-y-auto pr-1">
            {displayedDays.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between p-3 rounded-[12px] bg-slate-50 border border-slate-200/80 hover:bg-[#EDF4F9]/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-[#0E4A72] text-white text-[12.5px] font-bold flex items-center justify-center shrink-0 shadow-2xs">
                    D{item.day}
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-[13.5px] font-bold text-slate-800 flex items-center gap-1.5">
                      <span>{item.emoji}</span>
                      <span>{item.title}</span>
                    </span>
                    <span className="text-[11.5px] text-[#0E4A72] font-semibold">
                      {item.focus}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200 shrink-0">
                  ⏱️ 10-15m
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-t border-slate-200 my-1" />

      {/* ========================================================================= */}
      {/* 3. TESTIMONIOS Y CASOS DE ÉXITO                                           */}
      {/* ========================================================================= */}
      <section className="w-full flex flex-col gap-5">
        <div className="w-full text-center space-y-1.5">
          <div className="inline-block bg-[#EDF4F9] text-[#0E4A72] border border-[#CBD5E1] text-[12px] font-bold px-3 py-0.5 rounded-full">
            Casos Clínicos Reales
          </div>
          <h3
            id="testimonials-title"
            className="text-[21px] sm:text-[25px] font-bold text-[#1E293B] leading-tight"
            style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
          >
            Personas que ya dijeron adiós a su dolor con{' '}
            <span className="text-[#0E4A72] font-extrabold">DolorCiao</span>
          </h3>
          <p className="text-[13px] text-slate-500 max-w-sm mx-auto">
            Historias comprobadas de pacientes con hernias, ciática y contracturas crónicas:
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
                Condición: {t.condition}
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
      {/* 4. ENTREGABLES OFICIALES (ESTILO MINIMALISTA CON CELULARES)               */}
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
          <div className="flex flex-col justify-center gap-7 sm:gap-9 pl-1 sm:pl-4">
            {/* Punto 3 */}
            <div className="flex flex-col items-start text-left gap-2 sm:gap-2.5">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#75B597] text-white flex items-center justify-center shadow-xs shrink-0">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-bold text-[#1E293B] text-[14.5px] sm:text-[17px] leading-snug">
                Resultados visibles en tu primer mes
              </span>
            </div>

            {/* Punto 4 */}
            <div className="flex flex-col items-start text-left gap-2 sm:gap-2.5">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#75B597] text-white flex items-center justify-center shadow-xs shrink-0">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-bold text-[#1E293B] text-[14.5px] sm:text-[17px] leading-snug">
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
      {/* 5. OFERTA FINAL, CHECKOUT, PRECIO EN ARS & GARANTÍA                        */}
      {/* ========================================================================= */}
      <section className="w-full flex flex-col gap-6" id="pricing-section">
        {/* Offer Title */}
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
            {userName}, tu membresía incluye el programa de 30 días, la app móvil, el seguimiento fotográfico (opcional y privado para vos) y el sistema de hábitos de por vida.
          </p>
        </div>

        {/* Pricing Card with Navy Blue border and solid Green CTA */}
        <div
          id="pricing-card"
          className="w-full bg-white border-2 border-[#0E4A72] rounded-[24px] p-6 flex flex-col gap-5 shadow-lg relative overflow-hidden text-left"
        >
          {/* Blue Ribbon */}
          <div className="absolute top-0 right-0 bg-[#0E4A72] text-white text-[11px] font-extrabold px-3.5 py-1 rounded-bl-[14px] uppercase tracking-wider">
            70% OFF HOY
          </div>

          {/* Plan Header */}
          <div className="flex flex-col pt-1">
            <span className="text-[12px] font-bold text-[#0E4A72] uppercase tracking-wider">
              Acceso Completo • App Móvil Incluida
            </span>
            <h3
              className="text-[21px] font-extrabold text-[#1E293B]"
              style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
            >
              Programa 30 Días DolorCiao
            </h3>
          </div>

          {/* Countdown Timer INSIDE the pricing quadrant */}
          <div className="w-full bg-red-50 border border-red-200 rounded-[14px] p-3 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="text-[17px] animate-pulse">⏰</span>
              <span className="text-[12.5px] sm:text-[13px] font-bold text-red-700">
                Descuento especial expira en:
              </span>
            </div>
            <span className="text-[15px] sm:text-[16px] font-extrabold text-red-700 font-mono tracking-wider bg-white px-2.5 py-0.5 rounded-md border border-red-200">
              {formattedTime}
            </span>
          </div>

          {/* Price Display in Argentine Pesos (ARS) as requested */}
          <div className="flex items-baseline gap-3 py-2 border-y border-slate-100">
            <span className="text-[17px] text-slate-400 line-through font-semibold">
              $25.990 ARS
            </span>
            <div className="flex items-baseline gap-1">
              <span
                className="text-[38px] sm:text-[42px] font-black text-[#0E4A72]"
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

          {/* Features Checklist */}
          <div className="flex flex-col gap-2.5 text-[13.5px] text-slate-700">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#0E4A72] shrink-0 stroke-[2.5]" />
              <span>Programa guiado de 30 días en video HD (10-15 min/día)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#0E4A72] shrink-0 stroke-[2.5]" />
              <span>Calibrado para {targetPainAreaText}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#0E4A72] shrink-0 stroke-[2.5]" />
              <span>App móvil profesional para iOS y Android de por vida</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#0E4A72] shrink-0 stroke-[2.5] mt-0.5" />
              <span>
                Test fotográfico inicial y final (Día 1 vs Día 30){' '}
                <span className="text-[12px] text-slate-500 font-medium block sm:inline">
                  (Opcional y 100% privado en tu celular, no compartes fotos con nadie)
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
              <span>Calendario visual de rachas y tablero de progreso métrico</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#0E4A72] shrink-0 stroke-[2.5]" />
              <span>Garantía incondicional de satisfacción por 30 días</span>
            </div>
          </div>

          {/* Green CTA Button as requested */}
          <div className="w-full pt-2">
            <PrimaryButton
              id="btn-checkout-cta"
              variant="green"
              href={CHECKOUT_SHOPIFY_URL}
              target="_blank"
              onClick={handleCheckout}
            >
              OBTENER MI PLAN DOLORCIAO
            </PrimaryButton>
          </div>

          {/* Security Badges */}
          <div className="flex justify-center items-center gap-3 text-[11.5px] text-slate-500 pt-1">
            <span>🔒 Pago 100% Seguro</span>
            <span>•</span>
            <span>⚡ Acceso Inmediato en tu Celular</span>
          </div>
        </div>

        {/* 30-Day Guarantee Box con imagen en grande arriba y texto exacto */}
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

        {/* FAQ Accordion */}
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

        {/* Final Bottom Green CTA */}
        <div className="w-full pt-2">
          <PrimaryButton
            id="btn-bottom-final-cta"
            variant="green"
            href={CHECKOUT_SHOPIFY_URL}
            target="_blank"
            onClick={handleCheckout}
          >
            OBTENER MI PLAN DOLORCIAO
          </PrimaryButton>
        </div>
      </section>
    </div>
  );
};
