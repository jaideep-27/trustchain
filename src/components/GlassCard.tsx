import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick }) => {
  return (
    <div
      className={`
        backdrop-blur-sm bg-white/90 dark:bg-slate-800/90 
        rounded-2xl border border-slate-200/50 dark:border-slate-600/50
        shadow-lg hover:shadow-xl transition-all duration-300
        ${onClick ? 'cursor-pointer hover:scale-[1.02]' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;