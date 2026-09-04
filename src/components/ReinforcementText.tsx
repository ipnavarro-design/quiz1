import React from 'react';

interface ReinforcementTextProps {
  children: React.ReactNode;
}

export const ReinforcementText: React.FC<ReinforcementTextProps> = ({ children }) => {
  return (
    <p 
      className="text-[15px] sm:text-[16px] font-semibold text-[#0E4A72] text-center tracking-normal mt-2.5"
      style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
    >
      {children}
    </p>
  );
};
