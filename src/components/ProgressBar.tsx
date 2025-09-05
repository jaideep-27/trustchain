import React from 'react';

interface ProgressBarProps {
  progress: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, className = '' }) => {
  return (
    <div className={`w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden ${className}`}>
      <div
        className="shimmer h-2 rounded-full transition-all duration-1000 ease-out hover:shadow-lg hover:shadow-teal-500/30"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;