import React from 'react';

interface PrimaryButtonProps {
  id?: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
  variant?: 'blue' | 'green';
  className?: string;
  href?: string;
  target?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  id = 'cta-primary-button',
  onClick,
  children,
  disabled = false,
  type = 'button',
  variant = 'blue',
  className = '',
  href,
  target,
}) => {
  const colorStyles =
    variant === 'green'
      ? 'bg-[#16A34A] hover:bg-[#15803D] active:bg-[#14532D] text-white border-[#0E9542]'
      : 'bg-[#0E4A72] hover:bg-[#0A3959] active:bg-[#072B44] text-white border-[#0A3959]';

  const baseClasses = `w-full font-bold text-[15px] sm:text-[16px] rounded-[16px] border py-[12px] px-[16px] min-h-[50px] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm tracking-[0.05em] uppercase text-center no-underline ${colorStyles} ${
    disabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : 'hover:shadow-md hover:scale-[1.005]'
  } ${className}`;

  if (href) {
    return (
      <a
        id={id}
        href={href}
        target={target || '_blank'}
        rel="noopener noreferrer"
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            return;
          }
          if (onClick) onClick();
        }}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
};


