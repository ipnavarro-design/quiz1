import React from 'react';

interface JointIconProps {
  className?: string;
}

// 1. Shoulders / Hombros
export const ShouldersJointIcon: React.FC<JointIconProps> = ({ className = 'w-16 h-16' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-2xl bg-[#F4EFE6] overflow-hidden border border-[#E8E1D5] ${className}`}>
    <svg viewBox="0 0 80 80" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="40" cy="22" r="9" fill="#D6C7B2" stroke="#9A8873" strokeWidth="1.5" />
      {/* Neck */}
      <path d="M37 31H43V35H37V31Z" fill="#D6C7B2" />
      {/* Torso & Shoulders */}
      <path d="M22 42C23 37 32 35 40 35C48 35 57 37 58 42L60 62C55 64 25 64 20 62L22 42Z" fill="#C5D3C1" stroke="#7E9677" strokeWidth="1.5" />
      {/* Arms */}
      <path d="M21 42L16 60C16 63 19 65 21 62L25 45" fill="#D6C7B2" stroke="#9A8873" strokeWidth="1.2" />
      <path d="M59 42L64 60C64 63 61 65 59 62L55 45" fill="#D6C7B2" stroke="#9A8873" strokeWidth="1.2" />
      
      {/* Red Glowing Hotspot on Shoulder (like screenshot) */}
      <circle cx="56" cy="40" r="11" fill="#EF4444" fillOpacity="0.25" className="animate-pulse" />
      <circle cx="56" cy="40" r="7" fill="#DC2626" fillOpacity="0.75" />
      <circle cx="56" cy="40" r="3" fill="#FFFFFF" />
      {/* Radiating radar rings */}
      <circle cx="56" cy="40" r="14" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    </svg>
  </div>
);

// 2. Back / Espalda baja / Lumbar
export const BackJointIcon: React.FC<JointIconProps> = ({ className = 'w-16 h-16' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-2xl bg-[#F4EFE6] overflow-hidden border border-[#E8E1D5] ${className}`}>
    <svg viewBox="0 0 80 80" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head back view */}
      <circle cx="40" cy="20" r="9" fill="#D6C7B2" stroke="#9A8873" strokeWidth="1.5" />
      {/* Torso back view */}
      <path d="M24 38C26 34 32 32 40 32C48 32 54 34 56 38L54 62C48 64 32 64 26 62L24 38Z" fill="#C5D3C1" stroke="#7E9677" strokeWidth="1.5" />
      {/* Spine column line */}
      <path d="M40 33V58" stroke="#526E4B" strokeWidth="1.8" strokeDasharray="3 2" />
      {/* Shoulders back curve */}
      <path d="M28 40Q40 44 52 40" stroke="#7E9677" strokeWidth="1.2" fill="none" />

      {/* Red Glowing Hotspot on Lower Back / Lumbar */}
      <circle cx="40" cy="50" r="12" fill="#EF4444" fillOpacity="0.25" className="animate-pulse" />
      <circle cx="40" cy="50" r="7" fill="#DC2626" fillOpacity="0.8" />
      <circle cx="40" cy="50" r="3" fill="#FFFFFF" />
      <circle cx="40" cy="50" r="15" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    </svg>
  </div>
);

// 3. Neck / Cervicales
export const NeckJointIcon: React.FC<JointIconProps> = ({ className = 'w-16 h-16' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-2xl bg-[#F4EFE6] overflow-hidden border border-[#E8E1D5] ${className}`}>
    <svg viewBox="0 0 80 80" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head profile / back */}
      <circle cx="40" cy="22" r="10" fill="#D6C7B2" stroke="#9A8873" strokeWidth="1.5" />
      {/* Torso top */}
      <path d="M24 45C26 38 34 36 40 36C46 36 54 38 56 45L57 65H23L24 45Z" fill="#C5D3C1" stroke="#7E9677" strokeWidth="1.5" />
      
      {/* Red Glowing Hotspot on Neck */}
      <circle cx="40" cy="34" r="11" fill="#EF4444" fillOpacity="0.25" className="animate-pulse" />
      <circle cx="40" cy="34" r="6.5" fill="#DC2626" fillOpacity="0.8" />
      <circle cx="40" cy="34" r="2.5" fill="#FFFFFF" />
      <circle cx="40" cy="34" r="14" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    </svg>
  </div>
);

// 4. Elbows / Codos / Brazos
export const ElbowJointIcon: React.FC<JointIconProps> = ({ className = 'w-16 h-16' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-2xl bg-[#F4EFE6] overflow-hidden border border-[#E8E1D5] ${className}`}>
    <svg viewBox="0 0 80 80" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Torso subtle */}
      <path d="M38 35C45 35 55 37 57 44L56 66H36L38 35Z" fill="#C5D3C1" stroke="#7E9677" strokeWidth="1.2" />
      {/* Head */}
      <circle cx="46" cy="24" r="7" fill="#D6C7B2" stroke="#9A8873" strokeWidth="1.2" />
      {/* Bent Arm pointing up (like screenshot pose) */}
      <path d="M38 40L23 44L30 25C31 23 34 23 35 25L38 34" fill="#D6C7B2" stroke="#9A8873" strokeWidth="1.8" strokeLinejoin="round" />

      {/* Red Glowing Hotspot on Elbow Point */}
      <circle cx="23" cy="44" r="11" fill="#EF4444" fillOpacity="0.25" className="animate-pulse" />
      <circle cx="23" cy="44" r="6.5" fill="#DC2626" fillOpacity="0.8" />
      <circle cx="23" cy="44" r="2.5" fill="#FFFFFF" />
      <circle cx="23" cy="44" r="14" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    </svg>
  </div>
);

// 5. Knee / Rodillas
export const KneeJointIcon: React.FC<JointIconProps> = ({ className = 'w-16 h-16' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-2xl bg-[#F4EFE6] overflow-hidden border border-[#E8E1D5] ${className}`}>
    <svg viewBox="0 0 80 80" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Small avatar with one leg raised / bent (like screenshot pose) */}
      {/* Shorts */}
      <path d="M30 25H50L48 40H32L30 25Z" fill="#7E9677" stroke="#526E4B" strokeWidth="1.5" />
      {/* Standing leg */}
      <path d="M34 40V64H38V40" fill="#D6C7B2" stroke="#9A8873" strokeWidth="1.2" />
      {/* Bent raised leg */}
      <path d="M46 40L54 48L48 64H44L48 50L42 40" fill="#D6C7B2" stroke="#9A8873" strokeWidth="1.5" strokeLinejoin="round" />

      {/* Red Glowing Hotspot on Knee */}
      <circle cx="53" cy="48" r="11" fill="#EF4444" fillOpacity="0.25" className="animate-pulse" />
      <circle cx="53" cy="48" r="6.5" fill="#DC2626" fillOpacity="0.8" />
      <circle cx="53" cy="48" r="2.5" fill="#FFFFFF" />
      <circle cx="53" cy="48" r="14" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    </svg>
  </div>
);

// 6. Hips / Caderas / Glúteos
export const HipJointIcon: React.FC<JointIconProps> = ({ className = 'w-16 h-16' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-2xl bg-[#F4EFE6] overflow-hidden border border-[#E8E1D5] ${className}`}>
    <svg viewBox="0 0 80 80" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pelvis & upper thighs */}
      <path d="M26 24H54L58 44L48 64H44L48 44H32L36 64H32L22 44L26 24Z" fill="#C5D3C1" stroke="#7E9677" strokeWidth="1.5" />
      {/* Pelvic girdle line */}
      <path d="M28 32C34 36 46 36 52 32" stroke="#7E9677" strokeWidth="1.5" fill="none" />

      {/* Red Glowing Hotspot on Hip Socket */}
      <circle cx="31" cy="38" r="11" fill="#EF4444" fillOpacity="0.25" className="animate-pulse" />
      <circle cx="31" cy="38" r="6.5" fill="#DC2626" fillOpacity="0.8" />
      <circle cx="31" cy="38" r="2.5" fill="#FFFFFF" />
      <circle cx="31" cy="38" r="14" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    </svg>
  </div>
);

// 7. Ankle / Tobillos / Pies
export const AnkleJointIcon: React.FC<JointIconProps> = ({ className = 'w-16 h-16' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-2xl bg-[#F4EFE6] overflow-hidden border border-[#E8E1D5] ${className}`}>
    <svg viewBox="0 0 80 80" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Standing leg & ankle/foot */}
      <path d="M34 18H42L40 46L44 54L34 54L35 46L34 18Z" fill="#D6C7B2" stroke="#9A8873" strokeWidth="1.5" />
      {/* Foot */}
      <path d="M33 54L52 54C54 54 54 59 50 61L30 61C28 61 29 54 33 54Z" fill="#E8E1D5" stroke="#9A8873" strokeWidth="1.5" />

      {/* Red Glowing Hotspot on Ankle */}
      <circle cx="41" cy="53" r="11" fill="#EF4444" fillOpacity="0.25" className="animate-pulse" />
      <circle cx="41" cy="53" r="6.5" fill="#DC2626" fillOpacity="0.8" />
      <circle cx="41" cy="53" r="2.5" fill="#FFFFFF" />
      <circle cx="41" cy="53" r="14" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    </svg>
  </div>
);

// 8. None / Ninguna de las anteriores
export const NoneJointIcon: React.FC<JointIconProps> = ({ className = 'w-16 h-16' }) => (
  <div className={`relative flex items-center justify-center shrink-0 rounded-2xl bg-emerald-50 overflow-hidden border border-emerald-200 ${className}`}>
    <svg viewBox="0 0 80 80" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield */}
      <path d="M40 18L56 24V40C56 52 48 60 40 64C32 60 24 52 24 40V24L40 18Z" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" strokeLinejoin="round" />
      {/* Checkmark */}
      <path d="M32 40L38 46L48 34" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);
