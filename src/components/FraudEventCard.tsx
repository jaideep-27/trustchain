import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Clock, Hash, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface FraudEvent {
  id: string;
  title: string;
  description: string;
  status: 'flagged' | 'verified' | 'resolved';
  timestamp: string;
  riskLevel: 'low' | 'medium' | 'high';
  blockchainHash: string;
}

interface FraudEventCardProps {
  event: FraudEvent;
}

const FraudEventCard: React.FC<FraudEventCardProps> = ({ event }) => {
  const [showHash, setShowHash] = useState(false);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'text-red-500 bg-red-100 dark:bg-red-900/30';
      case 'medium': return 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30';
      case 'low': return 'text-green-500 bg-green-100 dark:bg-green-900/30';
      default: return 'text-gray-500 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'flagged': return 'text-red-500 bg-red-100 dark:bg-red-900/30';
      case 'verified': return 'text-green-500 bg-green-100 dark:bg-green-900/30';
      case 'resolved': return 'text-blue-500 bg-blue-100 dark:bg-blue-900/30';
      default: return 'text-gray-500 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-800/70 rounded-lg p-4 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-colors shadow-sm">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-lg">
            <AlertTriangle className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="font-jetbrains text-sm font-semibold text-trustblue dark:text-teal-400">
              {event.id}
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                {event.status.toUpperCase()}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(event.riskLevel)}`}>
                {event.riskLevel.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center text-slate-600 dark:text-slate-300 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          {event.timestamp}
        </div>
      </div>
      
      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
        {event.title}
      </h4>
      
      <p className="text-slate-700 dark:text-slate-200 text-sm mb-4">
        {event.description}
      </p>
      
      <div className="flex items-center justify-between">
        <button
          onClick={() => setShowHash(!showHash)}
          className="flex items-center text-teal-500 hover:text-teal-600 text-sm transition-colors"
        >
          <Hash className="w-4 h-4 mr-1" />
          Blockchain Hash
          {showHash ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
        </button>
        
        <Link
          to={`/fraud-event/${event.id}`}
          className="flex items-center text-trustblue hover:text-blue-700 dark:text-teal-400 dark:hover:text-teal-300 text-sm font-medium transition-colors"
        >
          View Details
          <ExternalLink className="w-3 h-3 ml-1" />
        </Link>
      </div>
      
      {showHash && (
        <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg border">
          <div className="font-mono text-xs text-slate-600 dark:text-slate-400 break-all">
            {event.blockchainHash}
          </div>
          <button className="text-teal-500 hover:text-teal-600 text-xs mt-2 flex items-center">
            View on Polygon Mumbai
            <ExternalLink className="w-3 h-3 ml-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FraudEventCard;