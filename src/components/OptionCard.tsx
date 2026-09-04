import React, { useState } from 'react';

interface OptionCardProps {
  id: string;
  leftSlot?: React.ReactNode;
  children: React.ReactNode;
  onSelect: () => void;
  disabled?: boolean;
}

export const OptionCard: React.FC<OptionCardProps> = ({
  id,
  leftSlot,
  children,
  onSelect,
  disabled = false,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (disabled || isSelected) return;
    setIsSelected(true);
    // Give 180ms visual feedback before navigating
    setTimeout(() => {
      onSelect();
    }, 180);
  };

  return (
    <button
      id={id}
      type="button"
      onClick={handleClick}
      disabled={disabled || isSelected}
      className={`w-full flex items-center gap-3.5 p-4 rounded-[16px] text-left transition-all duration-200 cursor-pointer select-none bg-white ${
        isSelected
          ? 'border-2 border-[#0E4A72] ring-1 ring-[#0E4A72] bg-[#EDF4F9] scale-[1.01] shadow-sm'
          : 'border border-[#CBD5E1] hover:border-[#0E4A72] hover:bg-[#F4F8FB] hover:scale-[1.01] hover:shadow-xs active:border-[#0E4A72]'
      }`}
    >
      {leftSlot && <div className="shrink-0">{leftSlot}</div>}
      <div className={`flex-1 text-[15.5px] sm:text-[16px] leading-snug ${isSelected ? 'font-semibold text-[#0E4A72]' : 'font-normal text-[#1E293B]'}`}>
        {children}
      </div>
    </button>
  );
};

// Radio Variant for Screen 6
interface OptionCardRadioProps {
  id: string;
  children: React.ReactNode;
  onSelect: () => void;
  disabled?: boolean;
}

export const OptionCardRadio: React.FC<OptionCardRadioProps> = ({
  id,
  children,
  onSelect,
  disabled = false,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (disabled || isSelected) return;
    setIsSelected(true);
    setTimeout(() => {
      onSelect();
    }, 180);
  };

  return (
    <button
      id={id}
      type="button"
      onClick={handleClick}
      disabled={disabled || isSelected}
      className={`w-full flex items-center gap-3.5 p-4 rounded-[16px] text-left transition-all duration-200 cursor-pointer select-none bg-white ${
        isSelected
          ? 'border-2 border-[#0E4A72] ring-1 ring-[#0E4A72] bg-[#EDF4F9] scale-[1.01] shadow-sm'
          : 'border border-[#CBD5E1] hover:border-[#0E4A72] hover:bg-[#F4F8FB] hover:scale-[1.01] hover:shadow-xs active:border-[#0E4A72]'
      }`}
    >
      {/* Empty Radio Circle */}
      <div className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center bg-white ${isSelected ? 'border-[#0E4A72]' : 'border-[#94A3B8]'}`}>
        {isSelected && <div className="w-3 h-3 rounded-full bg-[#0E4A72]" />}
      </div>
      <div className={`flex-1 text-[15.5px] sm:text-[16px] leading-snug ${isSelected ? 'font-semibold text-[#0E4A72]' : 'font-normal text-[#1E293B]'}`}>
        {children}
      </div>
    </button>
  );
};

