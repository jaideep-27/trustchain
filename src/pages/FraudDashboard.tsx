import React, { useState } from 'react';
import { AlertTriangle, TrendingUp, Eye, ExternalLink } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import FraudEventCard from '../components/FraudEventCard';
import { Link } from 'react-router-dom';

const FraudDashboard: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');

  const fraudEvents = [
    {
      id: 'TRUST-001',
      title: 'Suspicious coordinated buy activity',
      description: 'Multiple accounts executing synchronized purchases',
      status: 'flagged',
      timestamp: '2 minutes ago',
      riskLevel: 'high',
      blockchainHash: '0x8b27f1a9c2d4e5f6789abcdef12345670c90e'
    },
    {
      id: 'TRUST-002',
      title: 'Unusual trading volume spike',
      description: 'Volume increased 340% in 15 minutes',
      status: 'verified',
      timestamp: '14 minutes ago',
      riskLevel: 'medium',
      blockchainHash: '0x7a26e0b8c1d3e4f5689abcdef12345679b8fc'
    },
    {
      id: 'TRUST-003',
      title: 'Potential insider trading detected',
      description: 'Pre-announcement trading pattern identified',
      status: 'flagged',
      timestamp: '28 minutes ago',
      riskLevel: 'high',
      blockchainHash: '0x6925d9a7b0c2e3f4578abcdef12345680a7ed'
    }
  ];

  const chartData = [
    { time: '00:00', value: 23 },
    { time: '04:00', value: 18 },
    { time: '08:00', value: 45 },
    { time: '12:00', value: 67 },
    { time: '16:00', value: 89 },
    { time: '20:00', value: 34 },
    { time: '24:00', value: 45 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-poppins font-bold text-3xl text-trustblue dark:text-white mb-2">
          Fraud Detection Dashboard
        </h1>
        <p className="font-dm-sans text-slate-600 dark:text-slate-300 font-medium">
          Real-time monitoring of suspicious trading activities
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Panel - Fraud Feed */}
        <div className="lg:col-span-2 space-y-6">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-poppins font-bold text-xl text-trustblue dark:text-white flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                Real-time Fraud Feed
              </h2>
              <div className="flex space-x-2">
                {['1h', '24h', '7d'].map((timeframe) => (
                  <button
                    key={timeframe}
                    onClick={() => setSelectedTimeframe(timeframe)}
                    className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                      selectedTimeframe === timeframe
                        ? 'bg-trustblue dark:bg-teal-600 text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600'
                    }`}
                  >
                    {timeframe}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              {fraudEvents.map((event) => (
                <FraudEventCard key={event.id} event={event} />
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Link
                to="/fraud-event/TRUST-001"
                className="inline-flex items-center text-trustblue hover:text-blue-700 dark:text-teal-400 dark:hover:text-teal-300 font-medium transition-colors"
              >
                View All Events
                <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </GlassCard>
        </div>

        {/* Right Panel - Visualization */}
        <div className="space-y-6">
          <GlassCard className="p-6">
            <h3 className="font-poppins font-bold text-lg text-trustblue dark:text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-teal-500" />
              Trading Pattern Analysis
            </h3>
            
            {/* Simple Chart Visualization */}
            <div className="relative h-48 mb-4">
              <svg className="w-full h-full">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" className="text-teal-400" stopColor="currentColor" stopOpacity="0.8"/>
                    <stop offset="100%" className="text-teal-400" stopColor="currentColor" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>
                
                {/* Chart Line */}
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-teal-400"
                  points={chartData.map((point, index) => 
                    `${(index / (chartData.length - 1)) * 100},${100 - (point.value / 100) * 80}`
                  ).join(' ')}
                  vectorEffect="non-scaling-stroke"
                />
                
                {/* Chart Area */}
                <polygon
                  fill="url(#chartGradient)"
                  points={`0,100 ${chartData.map((point, index) => 
                    `${(index / (chartData.length - 1)) * 100},${100 - (point.value / 100) * 80}`
                  ).join(' ')} 100,100`}
                />
                
                {/* Data Points */}
                {chartData.map((point, index) => (
                  <circle
                    key={index}
                    cx={(index / (chartData.length - 1)) * 100}
                    cy={100 - (point.value / 100) * 80}
                    r="3"
                    className="fill-teal-400"
                  />
                ))}
              </svg>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="font-['Space_Grotesk'] font-semibold text-lg text-red-500">
                  {fraudEvents.length}
                </div>
                <div className="text-slate-600 dark:text-slate-400">Active Flags</div>
              </div>
              <div className="text-center">
                <div className="font-['Space_Grotesk'] font-semibold text-lg text-green-500">
                  94.7%
                </div>
                <div className="text-slate-600 dark:text-slate-400">Accuracy</div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="font-['Inter'] font-bold text-lg text-trustblue dark:text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 mr-2 text-blue-500" />
              Quick Actions
            </h3>
            
            <div className="space-y-3">
              <Link
                to="/education"
                className="block w-full p-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-center font-medium"
              >
                Learn from Cases
              </Link>
              
              <button className="block w-full p-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-center font-medium">
                Export Report
              </button>
              
              <button className="block w-full p-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-center font-medium">
                Set Alerts
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default FraudDashboard;