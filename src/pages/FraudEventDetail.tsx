import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, ExternalLink, Clock, Hash, Zap, BookOpen } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const FraudEventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const eventData = {
    'TRUST-001': {
      title: 'Suspicious Insider Trading Flagged',
      description: 'Pre-announcement trading pattern detected with unusual volume spike',
      status: 'flagged',
      riskLevel: 'high',
      timestamp: '2024-01-15 14:23:17 UTC',
      blockchainHash: '0x8b27f1a9c2d4e5f6789abcdef12345670c90e',
      confidence: 94.7,
      affectedTokens: ['ACME', 'TECH'],
      transactionCount: 47,
      volumeIncrease: '340%',
      aiExplanation: 'This cluster of trades is unusual because multiple accounts executed coordinated purchases of ACME tokens exactly 2.5 hours before the official partnership announcement. The trading pattern shows synchronized behavior across 12 wallet addresses, with volume spiking 340% above the 30-day average. The timing and coordination strongly suggest non-public information was used.',
      similarCases: 3,
      actionsTaken: [
        'Flagged for regulatory review',
        'Added to watchlist monitoring',
        'Blockchain record created',
        'Educational case study generated'
      ]
    }
  };

  const event = eventData[id as keyof typeof eventData];

  if (!event) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-trustblue dark:text-white">Event Not Found</h1>
          <Link to="/fraud-dashboard" className="text-teal-500 hover:text-teal-600 mt-4 inline-block">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
      {/* Header */}
      <div className="mb-8">
        <Link 
          to="/fraud-dashboard"
          className="inline-flex items-center text-trustblue dark:text-teal-400 hover:text-blue-700 dark:hover:text-teal-300 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>
        
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-['Inter'] font-bold text-3xl text-trustblue dark:text-white mb-2">
              {event.title}
            </h1>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
                {event.status.toUpperCase()}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(event.riskLevel)}`}>
                {event.riskLevel.toUpperCase()} RISK
              </span>
              <span className="text-slate-600 dark:text-slate-400 text-sm flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {event.timestamp}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="font-['Space_Grotesk'] font-bold text-2xl text-trustblue dark:text-white">
                {event.confidence}%
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Confidence</div>
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* AI Explanation */}
          <GlassCard className="p-6">
            <h2 className="font-['Inter'] font-bold text-xl text-trustblue dark:text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-500" />
              AI Analysis
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <p className="font-['Roboto'] text-slate-700 dark:text-slate-300 leading-relaxed">
                {event.aiExplanation}
              </p>
            </div>
          </GlassCard>

          {/* Transaction Details */}
          <GlassCard className="p-6">
            <h3 className="font-['Inter'] font-bold text-lg text-trustblue dark:text-white mb-4">
              Transaction Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Affected Tokens</span>
                    <span className="font-semibold text-trustblue dark:text-white">
                      {event.affectedTokens.join(', ')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Transaction Count</span>
                    <span className="font-semibold text-trustblue dark:text-white">
                      {event.transactionCount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Volume Increase</span>
                    <span className="font-semibold text-red-500">
                      +{event.volumeIncrease}
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Event ID</span>
                    <span className="font-mono text-trustblue dark:text-white">
                      {id}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Similar Cases</span>
                    <span className="font-semibold text-trustblue dark:text-white">
                      {event.similarCases}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Blockchain Record */}
          <GlassCard className="p-6">
            <h3 className="font-['Inter'] font-bold text-lg text-trustblue dark:text-white mb-4 flex items-center">
              <Hash className="w-5 h-5 mr-2 text-teal-500" />
              Blockchain Record
            </h3>
            
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-600 dark:text-slate-400">Transaction Hash</span>
                <button className="text-teal-500 hover:text-teal-600 flex items-center text-sm">
                  View on Explorer
                  <ExternalLink className="w-3 h-3 ml-1" />
                </button>
              </div>
              <div className="font-mono text-sm bg-white dark:bg-slate-700 p-3 rounded border break-all">
                {event.blockchainHash}
              </div>
              <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                Recorded on Polygon Mumbai Testnet for transparency and immutable audit trail
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Actions Taken */}
          <GlassCard className="p-6">
            <h3 className="font-['Inter'] font-bold text-lg text-trustblue dark:text-white mb-4">
              Actions Taken
            </h3>
            
            <div className="space-y-3">
              {event.actionsTaken.map((action, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-sm text-slate-600 dark:text-slate-300">{action}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Quick Actions */}
          <GlassCard className="p-6">
            <h3 className="font-['Inter'] font-bold text-lg text-trustblue dark:text-white mb-4">
              Quick Actions
            </h3>
            
            <div className="space-y-3">
              <Link
                to="/education"
                className="flex items-center justify-center w-full p-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Learn from this Case
              </Link>
              
              <button className="flex items-center justify-center w-full p-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                Export Report
              </button>
              
              <button className="flex items-center justify-center w-full p-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                Share Analysis
              </button>
            </div>
          </GlassCard>

          {/* Related Events */}
          <GlassCard className="p-6">
            <h3 className="font-['Inter'] font-bold text-lg text-trustblue dark:text-white mb-4">
              Related Events
            </h3>
            
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="font-jetbrains text-sm text-trustblue dark:text-white font-semibold">
                  TRUST-002
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Similar pattern detected 3 days ago
                </div>
              </div>
              
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="font-mono text-sm text-trustblue dark:text-white font-semibold">
                  TRUST-003
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Same wallet cluster involved
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default FraudEventDetail;