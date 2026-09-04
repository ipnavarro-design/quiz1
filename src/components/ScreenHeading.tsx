import React from 'react';

interface ScreenHeadingProps {
  as?: 'h1' | 'h2';
  children: React.ReactNode;
  id?: string;
}

export const ScreenHeading: React.FC<ScreenHeadingProps> = ({
  as: Component = 'h2',
  children,
  id,
}) => {
  return (
    <Component
      id={id}
      className="text-[22px] sm:text-[24px] font-bold leading-[1.25] text-center text-[#1E293B] tracking-normal"
      style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
    >
      {children}
    </Component>
  );
};
