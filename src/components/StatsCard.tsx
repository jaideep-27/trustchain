import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import GlassCard from './GlassCard';

interface StatsCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value, icon: Icon, color }) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red':
        return 'from-red-400 to-red-600 text-red-600 dark:text-red-400';
      case 'teal':
        return 'from-teal-400 to-teal-600 text-teal-600 dark:text-teal-400';
      case 'blue':
        return 'from-blue-400 to-blue-600 text-blue-600 dark:text-blue-400';
      case 'green':
        return 'from-green-400 to-green-600 text-green-600 dark:text-green-400';
      default:
        return 'from-gray-400 to-gray-600 text-gray-600 dark:text-gray-400';
    }
  };

  const colorClasses = getColorClasses(color);

  return (
    <GlassCard className="p-6 hover:scale-105 transition-transform duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-full shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      
      <div className="font-poppins font-bold text-3xl mb-2 text-slate-800 dark:text-white">
        {value}
      </div>
      
      <div className="font-dm-sans text-sm text-slate-600 dark:text-slate-400 leading-tight font-medium">
        {label}
      </div>
    </GlassCard>
  );
};

export default StatsCard;