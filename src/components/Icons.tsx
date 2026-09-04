import React from 'react';

// Anatomical Icon 1: Lumbar region (lower back pain hotspot)
export const LumbarIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-neutral-100 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Torso outline back view */}
      <path d="M20 12C24 16 40 16 44 12C46 22 47 34 45 52C39 54 25 54 19 52C17 34 18 22 20 12Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
      {/* Spine column */}
      <path d="M32 14V48" stroke="#6B7280" strokeWidth="2" strokeDasharray="2 2" />
      {/* Lumbar Glow */}
      <circle cx="32" cy="38" r="10" fill="#DC2626" fillOpacity="0.3" />
      <circle cx="32" cy="38" r="6" fill="#DC2626" fillOpacity="0.75" />
      <circle cx="32" cy="38" r="3" fill="#FFFFFF" />
      {/* Indicator rays */}
      <path d="M24 38H18M46 38H40M32 30V24M32 46V52" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

// Anatomical Icon 2: Cervical region (neck pain hotspot)
export const CervicalIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-neutral-100 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head and neck/upper torso */}
      <circle cx="32" cy="18" r="10" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
      <path d="M28 28H36V34L44 38V52H20V38L28 34V28Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
      {/* Cervical Spine */}
      <path d="M32 28V38" stroke="#6B7280" strokeWidth="2" strokeDasharray="2 2" />
      {/* Cervical Glow */}
      <circle cx="32" cy="31" r="9" fill="#DC2626" fillOpacity="0.3" />
      <circle cx="32" cy="31" r="5" fill="#DC2626" fillOpacity="0.8" />
      <circle cx="32" cy="31" r="2.5" fill="#FFFFFF" />
      {/* Rays */}
      <path d="M23 31H17M47 31H41" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

// Anatomical Icon 3: Sciatic nerve radiating down leg
export const SciaticLegIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-neutral-100 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pelvis & Legs back view */}
      <path d="M22 16H42L44 26L40 56H34L32 30L30 56H24L20 26L22 16Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
      {/* Sciatic Nerve radiation line */}
      <path d="M32 20C32 20 37 24 37 32C37 38 35 46 36 54" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
      {/* Glow hotspot on glute/lumbar & radiation */}
      <circle cx="34" cy="22" r="6" fill="#DC2626" fillOpacity="0.8" />
      <circle cx="34" cy="22" r="2.5" fill="#FFFFFF" />
      {/* Radiation waves down the leg */}
      <path d="M41 33C43 35 43 38 41 40" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M39 45C41 47 41 50 39 52" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

// Anatomical Icon 4: Spine with tingling / numbness sensation
export const TinglingSpineIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-neutral-100 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Torso outline */}
      <path d="M22 14C26 17 38 17 42 14C44 24 45 36 43 52C38 54 26 54 21 52C19 36 20 24 22 14Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
      {/* Spine column */}
      <path d="M32 16V50" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="3 3" />
      {/* Electric tingling sparks / numbness ripples */}
      <path d="M27 24L24 26M37 24L40 26" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M25 34L21 35M39 34L43 35" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M26 44L23 46M38 44L41 46" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="32" cy="34" r="5" fill="#DC2626" fillOpacity="0.75" />
      <circle cx="32" cy="34" r="2" fill="#FFFFFF" />
    </svg>
  </div>
);

// Clinical document icon with checkmark for Question 4
export const ClinicalDocIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 ${className}`}>
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 15l2 2 4-4" stroke="#16A34A" strokeWidth="2.5" />
      <line x1="8" y1="10" x2="10" y2="10" />
    </svg>
  </div>
);

// Specific Impact Icons for Screen 5 (75% Progress):
// 1. Tengo dificultad para trabajar
export const WorkImpactIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-orange-50/80 border border-orange-200/60 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Desk and Laptop */}
      <rect x="12" y="38" width="40" height="4" rx="1.5" fill="#9CA3AF" />
      <path d="M22 24H42V35H22V24Z" fill="#E5E7EB" stroke="#4B5563" strokeWidth="1.5" />
      <line x1="20" y1="35" x2="44" y2="35" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 27H36" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
      {/* Sitting person figure clutching lower back */}
      <circle cx="20" cy="16" r="4" fill="#F97316" />
      <path d="M16 28C16 22 22 22 22 28L18 36" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
      {/* Lightning pain mark at back */}
      <path d="M12 24L15 28L13 32" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

// 2. Tengo dificultad para dormir
export const SleepImpactIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-indigo-50/80 border border-indigo-200/60 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bed frame & Mattress */}
      <rect x="12" y="34" width="40" height="12" rx="2.5" fill="#E0E7FF" stroke="#6366F1" strokeWidth="1.5" />
      {/* Pillow */}
      <rect x="14" y="28" width="12" height="7" rx="2" fill="#FFFFFF" stroke="#818CF8" strokeWidth="1.2" />
      {/* Bed headboard */}
      <rect x="10" y="24" width="4" height="22" rx="1.5" fill="#4F46E5" />
      {/* Moon & Insomnia alert */}
      <path d="M42 12C40 16 42 21 46 23C44 24 41 24 38 22C36 19 36 15 39 12C40 11.5 41 11.7 42 12Z" fill="#F59E0B" />
      {/* Discomfort wavy lines above pillow */}
      <path d="M28 18C30 16 32 20 34 18M30 23C32 21 34 25 36 23" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

// 3. No puedo hacer actividad física
export const ActivityImpactIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-emerald-50/80 border border-emerald-200/60 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Running figure outline */}
      <circle cx="34" cy="14" r="4" fill="#10B981" />
      <path d="M32 20L28 28L36 32L34 46" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 28L20 34" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 22L42 26L46 36" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Stop / Restrictive red diagonal ban sign */}
      <circle cx="34" cy="32" r="15" stroke="#DC2626" strokeWidth="2.5" fill="none" />
      <line x1="23" y1="21" x2="45" y2="43" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </div>
);

// 4. Afecta mi ánimo y mi energía
export const MoodEnergyIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-amber-50/80 border border-amber-200/60 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Battery outline */}
      <rect x="14" y="24" width="32" height="18" rx="3.5" fill="#FFFFFF" stroke="#D97706" strokeWidth="1.8" />
      <path d="M46 29C47.5 29 48 30 48 31V35C48 36 47.5 37 46 37" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" />
      {/* Drained low energy red bar */}
      <rect x="17" y="27" width="8" height="12" rx="1.5" fill="#DC2626" />
      {/* Fatigue / sad mood cloud and droplets */}
      <circle cx="36" cy="14" r="5" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.2" />
      <circle cx="34" cy="13" r="0.8" fill="#451A03" />
      <circle cx="38" cy="13" r="0.8" fill="#451A03" />
      <path d="M34 16C35 15 37 15 38 16" stroke="#451A03" strokeWidth="1" strokeLinecap="round" />
      {/* Empty dashes */}
      <line x1="28" y1="33" x2="32" y2="33" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="36" y1="33" x2="40" y2="33" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

// 5. Afecta casi toda mi rutina
export const RoutineImpactIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-purple-50/80 border border-purple-200/60 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Clock / Calendar Routine Wheel */}
      <circle cx="32" cy="32" r="18" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="1.8" />
      {/* Clock hands */}
      <line x1="32" y1="32" x2="32" y2="21" stroke="#4C1D95" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="32" x2="40" y2="32" stroke="#4C1D95" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="32" r="2" fill="#7C3AED" />
      {/* Routine disrupted dots/flags */}
      <circle cx="32" cy="14" r="2.5" fill="#DC2626" />
      <circle cx="50" cy="32" r="2.5" fill="#DC2626" />
      <circle cx="32" cy="50" r="2.5" fill="#DC2626" />
      <circle cx="14" cy="32" r="2.5" fill="#DC2626" />
    </svg>
  </div>
);

// 6. No puedo jugar con mi hijo
export const PlayWithChildImpactIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-rose-50/80 border border-rose-200/60 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Adult trying to bend with lumbar pain */}
      <circle cx="20" cy="16" r="3.8" fill="#E11D48" />
      <path d="M16 28C16 22 22 21 24 26L20 38" stroke="#BE123C" strokeWidth="2.2" strokeLinecap="round" />
      {/* Lumbar pain flash */}
      <path d="M13 23L17 26L14 30" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Small child figure */}
      <circle cx="44" cy="28" r="3" fill="#FB7185" />
      <path d="M44 32V42M40 36L44 34L48 36M41 46L44 42L47 46" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Toy ball / play block */}
      <circle cx="34" cy="46" r="4.5" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.2" />
      <path d="M31.5 46H36.5M34 43.5V48.5" stroke="#E11D48" strokeWidth="1" strokeLinecap="round" />
    </svg>
  </div>
);

// Gender Icons:
// 1. Mujer
export const WomanIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-[#FDF2F4] border border-[#FCE7F3] overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Woman avatar silhouette */}
      {/* Hair back */}
      <path d="M22 28C20 36 21 44 24 47C25 43 25 38 25 34" stroke="#9D174D" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M42 28C44 36 43 44 40 47C39 43 39 38 39 34" stroke="#9D174D" strokeWidth="2.5" strokeLinecap="round" />
      {/* Shoulders & Neck */}
      <path d="M18 54C18 46 24 42 32 42C40 42 46 46 46 54" fill="#FCE7F3" stroke="#DB2777" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M28 36V43H36V36" fill="#FDF2F8" stroke="#DB2777" strokeWidth="1.5" />
      {/* Head */}
      <circle cx="32" cy="26" r="10" fill="#FDF2F8" stroke="#DB2777" strokeWidth="1.8" />
      {/* Hair front / hairstyle */}
      <path d="M22 26C22 18 26 14 32 14C38 14 42 18 42 26C39 21 34 20 32 20C30 20 25 21 22 26Z" fill="#BE185D" />
      {/* Small medical/wellness cross badge */}
      <circle cx="48" cy="16" r="5" fill="#DB2777" />
      <path d="M48 13.5V18.5M45.5 16H50.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

// 2. Hombre
export const ManIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Man avatar silhouette */}
      {/* Shoulders & Neck */}
      <path d="M16 54C16 45 23 41 32 41C41 41 48 45 48 54" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M28 35V42H36V35" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5" />
      {/* Head */}
      <circle cx="32" cy="25" r="10" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.8" />
      {/* Hair short masculine cut */}
      <path d="M22 24C22 17 26 14 32 14C38 14 42 17 42 24C39 20 36 19 32 19C28 19 25 20 22 24Z" fill="#1D4ED8" />
      {/* Small medical/wellness cross badge */}
      <circle cx="48" cy="16" r="5" fill="#2563EB" />
      <path d="M48 13.5V18.5M45.5 16H50.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

export const HerniaDiscIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-red-50/70 border border-red-200/60 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top vertebra */}
      <rect x="18" y="10" width="28" height="11" rx="3.5" fill="#E5E7EB" stroke="#6B7280" strokeWidth="1.5" />
      {/* Intervertebral Disc */}
      <rect x="22" y="23" width="20" height="8" rx="2.5" fill="#D1D5DB" stroke="#4B5563" strokeWidth="1.5" />
      {/* Herniated nucleus pulposus extrusion pressing nerve */}
      <path d="M38 24C44 24 49 26 49 28C49 30 44 32 38 32" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
      <circle cx="46" cy="27" r="2.5" fill="#FEF2F2" />
      {/* Nerve root compression line */}
      <path d="M52 14V42" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <path d="M47 25L52 27" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
      {/* Bottom vertebra */}
      <rect x="18" y="33" width="28" height="11" rx="3.5" fill="#E5E7EB" stroke="#6B7280" strokeWidth="1.5" />
    </svg>
  </div>
);

// 2. Inflamación del nervio ciático
export const SciaticInflammationIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-blue-50/70 border border-blue-200/60 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pelvis & spine branch */}
      <path d="M22 14H42L45 28L38 52H32L30 32L28 52H22L19 28L22 14Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.2" />
      {/* Inflamed sciatic pathway */}
      <path d="M32 18C32 24 38 28 39 36C40 44 38 50 39 56" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
      {/* Inflammation flash pulses */}
      <circle cx="36" cy="26" r="6" fill="#DC2626" fillOpacity="0.4" />
      <circle cx="36" cy="26" r="3" fill="#DC2626" />
      <path d="M43 35L47 37M41 43L45 45" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

// 3. Protrusión discal
export const DiscProtrusionIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-amber-50/70 border border-amber-200/60 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Upper Vertebra */}
      <rect x="18" y="11" width="28" height="10" rx="3" fill="#E5E7EB" stroke="#6B7280" strokeWidth="1.5" />
      {/* Protruding Disc bulge (wider bulge on right side) */}
      <path d="M20 23C20 23 42 21 47 25C49 27 48 29 46 31C42 33 20 31 20 31Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
      <circle cx="44" cy="27" r="3" fill="#DC2626" fillOpacity="0.8" />
      {/* Lower Vertebra */}
      <rect x="18" y="33" width="28" height="10" rx="3" fill="#E5E7EB" stroke="#6B7280" strokeWidth="1.5" />
      {/* Gentle bulge indicator */}
      <path d="M51 24C53 26 53 28 51 30" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

// 4. Solo sospecha de un problema en la columna
export const SpineSuspectIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-emerald-50/70 border border-emerald-200/60 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Spine column vertebrae */}
      <rect x="22" y="10" width="12" height="6" rx="1.5" fill="#E5E7EB" stroke="#6B7280" strokeWidth="1.2" />
      <rect x="22" y="18" width="12" height="6" rx="1.5" fill="#E5E7EB" stroke="#6B7280" strokeWidth="1.2" />
      <rect x="22" y="26" width="12" height="6" rx="1.5" fill="#E5E7EB" stroke="#6B7280" strokeWidth="1.2" />
      <rect x="22" y="34" width="12" height="6" rx="1.5" fill="#E5E7EB" stroke="#6B7280" strokeWidth="1.2" />
      <rect x="22" y="42" width="12" height="6" rx="1.5" fill="#E5E7EB" stroke="#6B7280" strokeWidth="1.2" />
      {/* Clinical Magnifying Glass focusing on spine */}
      <circle cx="40" cy="30" r="10" fill="#FFFFFF" fillOpacity="0.8" stroke="#059669" strokeWidth="2" />
      <path d="M47 37L54 44" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
      {/* Subtle question mark inside lens */}
      <text x="36.5" y="34.5" fontSize="12" fontWeight="bold" fill="#059669" fontFamily="sans-serif">?</text>
    </svg>
  </div>
);

// 5. Nunca me hice estudios
export const NoStudiesIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-neutral-100 border border-neutral-200 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Diagnostic clipboard / MRI chart */}
      <rect x="18" y="12" width="28" height="38" rx="4" fill="#FFFFFF" stroke="#6B7280" strokeWidth="1.5" />
      <path d="M26 10H38V14H26V10Z" fill="#9CA3AF" rx="1" />
      {/* Blank scan area with placeholder lines */}
      <line x1="24" y1="22" x2="40" y2="22" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="28" x2="36" y2="28" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="34" x2="32" y2="34" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
      {/* Negative / Not performed indicator badge */}
      <circle cx="38" cy="38" r="7" fill="#6B7280" />
      <line x1="34" y1="34" x2="42" y2="42" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="34" x2="34" y2="42" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

// Method / Treatment Icons for Previous Methods Screen:
// 1. Kinesiólogo / Fisioterapeuta
export const PhysioIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-sky-50/80 border border-sky-200/60 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Physical therapy table & mobilization posture */}
      <rect x="12" y="42" width="40" height="4" rx="1" fill="#94A3B8" />
      <line x1="18" y1="46" x2="18" y2="54" stroke="#64748B" strokeWidth="2" />
      <line x1="46" y1="46" x2="46" y2="54" stroke="#64748B" strokeWidth="2" />
      {/* Patient lying prone */}
      <circle cx="18" cy="36" r="3.5" fill="#0284C7" />
      <path d="M22 38H38C38 38 41 40 45 42" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
      {/* Therapist hands applying therapeutic spinal mobilization */}
      <path d="M30 20L31 34M35 20L34 34" stroke="#0369A1" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M26 22H39" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
      {/* Rehabilitation arrows */}
      <path d="M42 26C45 28 45 32 42 34" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

// 2. Quiropraxia
export const ChiroIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-teal-50/80 border border-teal-200/60 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Spine column vertebrae alignment */}
      <rect x="25" y="12" width="14" height="6" rx="2" fill="#E2E8F0" stroke="#0F766E" strokeWidth="1.2" />
      <rect x="25" y="20" width="14" height="6" rx="2" fill="#E2E8F0" stroke="#0F766E" strokeWidth="1.2" />
      <rect x="27" y="28" width="14" height="6" rx="2" fill="#CCFBF1" stroke="#0D9488" strokeWidth="1.5" />
      <rect x="25" y="36" width="14" height="6" rx="2" fill="#E2E8F0" stroke="#0F766E" strokeWidth="1.2" />
      <rect x="25" y="44" width="14" height="6" rx="2" fill="#E2E8F0" stroke="#0F766E" strokeWidth="1.2" />
      {/* Dynamic adjustment force arrows */}
      <path d="M17 31L23 31M21 28L24 31L21 34" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M47 31L41 31M43 28L40 31L43 34" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

// 3. Yoga / Pilates / Gimnasio
export const YogaGymIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-emerald-50/80 border border-emerald-200/60 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Yoga mat */}
      <rect x="12" y="48" width="40" height="3" rx="1.5" fill="#A7F3D0" stroke="#059669" strokeWidth="1" />
      {/* Person in yoga / stretch / core posture */}
      <circle cx="32" cy="17" r="4" fill="#059669" />
      <path d="M32 23V34L22 46M32 34L42 46" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Arms stretched outward in balance */}
      <path d="M18 24L32 27L46 24" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Balance/flexibility arcs */}
      <path d="M22 18C26 14 38 14 42 18" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

// 4. Masajes / Calor / Punción seca
export const MassageDryNeedleIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-amber-50/80 border border-amber-200/60 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hot therapy stones / massage pressure */}
      <ellipse cx="28" cy="38" rx="12" ry="6" fill="#78350F" />
      <ellipse cx="30" cy="32" rx="9" ry="4.5" fill="#92400E" />
      <ellipse cx="32" cy="27" rx="6" ry="3.5" fill="#B45309" />
      {/* Dry needle / acupuncture pin */}
      <path d="M46 12L39 26" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
      <circle cx="48" cy="9" r="2" fill="#D97706" />
      {/* Thermal heat vapor waves */}
      <path d="M20 22C19 19 21 16 20 13M25 20C24 17 26 14 25 11" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

// 5. Natación
export const SwimmingIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-blue-50/80 border border-blue-200/60 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Swimmer head and breathing position */}
      <circle cx="24" cy="22" r="4" fill="#2563EB" />
      {/* Swimming stroke body line */}
      <path d="M28 24L38 27L48 24" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 26L42 34" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" />
      {/* Water pool waves */}
      <path d="M12 36C16 33 20 39 24 36C28 33 32 39 36 36C40 33 44 39 48 36C50 34.5 52 36 54 36" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 44C16 41 20 47 24 44C28 41 32 47 36 44C40 41 44 47 48 44C50 42.5 52 44 54 44" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

// 6. Analgésicos / Pastillas
export const PainkillersIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-purple-50/80 border border-purple-200/60 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Capsule pill angled */}
      <path d="M20 22C16 26 16 32 20 36L28 44C32 48 38 48 42 44C46 40 46 34 42 30L34 22C30 18 24 18 20 22Z" fill="#F3E8FF" stroke="#7E22CE" strokeWidth="1.8" />
      {/* Capsule half divider & colored half */}
      <path d="M24 26L38 40" stroke="#7E22CE" strokeWidth="1.8" />
      <path d="M24 26C20 30 20 36 24 40L31 33L24 26Z" fill="#9333EA" />
      {/* Round tablet pill */}
      <circle cx="44" cy="20" r="7" fill="#EDE9FE" stroke="#6B21A8" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="48" y2="20" stroke="#6B21A8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

// 7. Reposo / Evitar el movimiento
export const RestImmobilityIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bed/Sofa rest structure */}
      <rect x="14" y="36" width="36" height="10" rx="3" fill="#E2E8F0" stroke="#475569" strokeWidth="1.5" />
      <rect x="16" y="30" width="10" height="7" rx="2" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.2" />
      {/* Person sleeping/resting */}
      <circle cx="21" cy="33.5" r="2.5" fill="#475569" />
      <path d="M24 35H44" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
      {/* Pause / No movement symbol */}
      <circle cx="44" cy="18" r="8" fill="#FFFFFF" stroke="#DC2626" strokeWidth="1.5" />
      <rect x="41" y="14" width="2" height="8" rx="0.8" fill="#DC2626" />
      <rect x="45" y="14" width="2" height="8" rx="0.8" fill="#DC2626" />
    </svg>
  </div>
);

// 8. Ninguno de los anteriores
export const NoneMethodsIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-neutral-100 border border-neutral-200 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Neutral Shield / Circle with slash */}
      <circle cx="32" cy="32" r="16" fill="#FFFFFF" stroke="#6B7280" strokeWidth="1.8" />
      <line x1="22" y1="22" x2="42" y2="42" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 32H38" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

// Age Range Icons:
// 1. 18 a 26 años
export const AgeRange18to26Icon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-emerald-50/90 border border-emerald-200/70 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="20" r="7" fill="#D1FAE5" stroke="#059669" strokeWidth="1.8" />
      {/* Dynamic youthful energetic posture */}
      <path d="M20 50C20 42 25 38 32 38C39 38 44 42 44 50" fill="#ECFDF5" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      {/* Energy spark badge */}
      <circle cx="48" cy="18" r="6" fill="#10B981" />
      <path d="M48 14.5L49.2 17.2L52 18L49.2 18.8L48 21.5L46.8 18.8L44 18L46.8 17.2L48 14.5Z" fill="#FFFFFF" />
    </svg>
  </div>
);

// 2. 27 a 38 años
export const AgeRange27to38Icon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-blue-50/90 border border-blue-200/70 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="20" r="7" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.8" />
      {/* Active adult posture */}
      <path d="M19 50C19 41 24 37 32 37C40 37 45 41 45 50" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      {/* Balanced pulse badge */}
      <circle cx="48" cy="18" r="6" fill="#3B82F6" />
      <path d="M44.5 18H46.5L47.5 15.5L49 20.5L50 18H51.5" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

// 3. 39 a 50 años
export const AgeRange39to50Icon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-amber-50/90 border border-amber-200/70 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="20" r="7" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" />
      {/* Mature adult posture */}
      <path d="M19 50C19 41 24 37 32 37C40 37 45 41 45 50" fill="#FFFBEB" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
      {/* Posture alignment shield */}
      <circle cx="48" cy="18" r="6" fill="#F59E0B" />
      <path d="M48 14.5L51.5 16V18.5C51.5 20.5 48 22 48 22C48 22 44.5 20.5 44.5 18.5V16L48 14.5Z" fill="#FFFFFF" />
    </svg>
  </div>
);

// 4. Más de 50 años
export const AgeRangeOver50Icon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-purple-50/90 border border-purple-200/70 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="20" r="7" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.8" />
      {/* Golden maturity posture */}
      <path d="M19 50C19 41 24 37 32 37C40 37 45 41 45 50" fill="#FAF5FF" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      {/* Star / Golden health badge */}
      <circle cx="48" cy="18" r="6" fill="#8B5CF6" />
      <path d="M48 14.5V21.5M44.5 18H51.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

// New Clinical Diagnosis Icons:
// 1. ACV / Accidente Cerebrovascular previo
export const AcvIcon: React.FC<{ className?: string }> = ({ className = 'w-11 h-11' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-red-50/90 border border-red-200/70 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Brain / Neurological contour */}
      <path d="M32 16C26 16 21 20 21 26C21 28.5 22 30.7 23.5 32.5C21.5 34.5 20.5 37.5 21 40.5C21.8 45 25.5 48 30 48H32M32 16C38 16 43 20 43 26C43 28.5 42 30.7 40.5 32.5C42.5 34.5 43.5 37.5 43 40.5C42.2 45 38.5 48 34 48H32" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
      {/* Vascular pulse highlight */}
      <path d="M26 32H30L32 25L35 37L37 32H41" stroke="#B91C1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

// 2. Enfermedad Autoinmune
export const AutoimmuneIcon: React.FC<{ className?: string }> = ({ className = 'w-11 h-11' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-indigo-50/90 border border-indigo-200/70 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Immune Shield with cell interaction */}
      <path d="M32 14L44 19V31C44 40 38.5 47.5 32 50C25.5 47.5 20 40 20 31V19L32 14Z" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="2" strokeLinejoin="round" />
      {/* Cross / Immune defense symbol */}
      <path d="M32 24V38M25 31H39" stroke="#4338CA" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  </div>
);

// 3. Espondilitis Anquilosante
export const AnkylosingSpondylitisIcon: React.FC<{ className?: string }> = ({ className = 'w-11 h-11' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-amber-50/90 border border-amber-200/70 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rigid / bamboo spine representation */}
      <rect x="25" y="16" width="14" height="6" rx="2" fill="#FDE68A" stroke="#D97706" strokeWidth="1.6" />
      <rect x="25" y="24" width="14" height="6" rx="2" fill="#FDE68A" stroke="#D97706" strokeWidth="1.6" />
      <rect x="25" y="32" width="14" height="6" rx="2" fill="#FDE68A" stroke="#D97706" strokeWidth="1.6" />
      <rect x="25" y="40" width="14" height="6" rx="2" fill="#FDE68A" stroke="#D97706" strokeWidth="1.6" />
      {/* Fusion bridge markers */}
      <path d="M23 20V42M41 20V42" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  </div>
);

// 4. Artritis Enteropática (Enfermedad de Crohn o Colitis Ulcerosa)
export const EnteropathicArthritisIcon: React.FC<{ className?: string }> = ({ className = 'w-11 h-11' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-rose-50/90 border border-rose-200/70 overflow-hidden ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gastrointestinal & joint connective icon */}
      <path d="M23 22C23 18 27 16 32 16C37 16 41 18 41 22C41 26 37 28 32 28C27 28 23 30 23 34C23 38 27 40 32 40C37 40 41 42 41 46" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
      {/* Articular inflammation dots */}
      <circle cx="21" cy="46" r="3.5" fill="#FDA4AF" stroke="#BE123C" strokeWidth="1.5" />
      <circle cx="43" cy="22" r="3.5" fill="#FDA4AF" stroke="#BE123C" strokeWidth="1.5" />
    </svg>
  </div>
);


