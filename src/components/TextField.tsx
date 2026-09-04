import React from 'react';

interface TextFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required = false,
}) => {
  return (
    <div className="w-full flex flex-col text-left">
      <label htmlFor={id} className="text-[12px] font-semibold text-[#1A1A1A]/70 uppercase tracking-[0.08em] mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={`w-full h-[56px] px-4 rounded-[16px] text-[16px] text-[#1A1A1A] bg-white border transition-all duration-200 outline-none placeholder:text-[#1A1A1A]/35 ${
          error
            ? 'border-[#DC2626] focus:border-[#DC2626] bg-red-50/20'
            : 'border-[#1A1A1A]/20 focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A] hover:border-[#1A1A1A]/40'
        }`}
      />
      {error && (
        <span className="text-[12px] text-[#DC2626] font-medium mt-1 tracking-wide">
          {error}
        </span>
      )}
    </div>
  );
};

