import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  // Clamp progress between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="w-full relative py-2">
      {/* Track */}
      <div 
        className="w-full h-2 rounded-full relative"
        style={{
          background: 'linear-gradient(to right, #DC2626, #E07A2B, #38BDF8, #0E4A72)',
        }}
      >
        {/* Indicator Circle */}
        <div
          id="progress-indicator-circle"
          className="absolute top-1/2 w-[21px] h-[21px] rounded-full bg-white transition-all duration-350 ease-out shadow-sm pointer-events-none"
          style={{
            left: `${clampedProgress}%`,
            transform: 'translate(-50%, -50%)',
            border: '4px solid #0E4A72',
          }}
        />
      </div>
    </div>
  );
};
