import React, { useState } from 'react';
import { BookOpen, Star, Trophy, Zap, ChevronRight, Play } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import ProgressBar from '../components/ProgressBar';

const EducationModule: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const modules = [
    {
      id: 'pump-dump',
      title: 'Pump & Dump Schemes',
      description: 'Learn to identify coordinated price manipulation tactics',
      difficulty: 'Easy',
      progress: 75,
      xp: 150,
      duration: '15 min',
      scenarios: 3
    },
    {
      id: 'phishing',
      title: 'Phishing & Social Engineering',
      description: 'Recognize fake platforms and social engineering attacks',
      difficulty: 'Medium',
      progress: 45,
      xp: 200,
      duration: '20 min',
      scenarios: 4
    },
    {
      id: 'insider-trading',
      title: 'Insider Trading Patterns',
      description: 'Detect suspicious pre-announcement trading activities',
      difficulty: 'Hard',
      progress: 20,
      xp: 300,
      duration: '25 min',
      scenarios: 5
    }
  ];

  const badges = [
    { name: 'Detective', icon: '🕵️', unlocked: true },
    { name: 'Fraud Buster', icon: '🛡️', unlocked: true },
    { name: 'Market Guardian', icon: '⚔️', unlocked: false },
    { name: 'Expert Analyst', icon: '🎯', unlocked: false }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-500 bg-green-100 dark:bg-green-900/30';
      case 'Medium': return 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30';
      case 'Hard': return 'text-red-500 bg-red-100 dark:bg-red-900/30';
      default: return 'text-gray-500 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-poppins font-bold text-3xl text-trustblue dark:text-white mb-2">
          Fraud Detection Academy
        </h1>
        <p className="font-dm-sans text-slate-600 dark:text-slate-300 font-medium">
          Master the art of fraud detection through interactive learning
        </p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <GlassCard className="p-6 text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mb-4 mx-auto">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div className="font-poppins font-bold text-2xl text-trustblue dark:text-white">
            12
          </div>
          <div className="text-slate-600 dark:text-slate-400">Cases Completed</div>
        </GlassCard>

        <GlassCard className="p-6 text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 mx-auto">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div className="font-poppins font-bold text-2xl text-trustblue dark:text-white">
            650
          </div>
          <div className="text-slate-600 dark:text-slate-400">XP Points</div>
        </GlassCard>

        <GlassCard className="p-6 text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mb-4 mx-auto">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div className="font-poppins font-bold text-2xl text-trustblue dark:text-white">
            2
          </div>
          <div className="text-slate-600 dark:text-slate-400">Badges Earned</div>
        </GlassCard>

        <GlassCard className="p-6 text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-4 mx-auto">
            <Star className="w-6 h-6 text-white" />
          </div>
          <div className="font-poppins font-bold text-2xl text-trustblue dark:text-white">
            87%
          </div>
          <div className="text-slate-600 dark:text-slate-400">Confidence Score</div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Learning Modules */}
        <div className="lg:col-span-2">
          <h2 className="font-poppins font-bold text-xl text-trustblue dark:text-white mb-6">
            Learning Modules
          </h2>
          
          <div className="space-y-4">
            {modules.map((module) => (
              <GlassCard key={module.id} className="p-6 hover:scale-[1.02] transition-transform duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-['Inter'] font-bold text-lg text-trustblue dark:text-white">
                        {module.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(module.difficulty)}`}>
                        {module.difficulty}
                      </span>
                    </div>
                    <p className="font-['Roboto'] text-slate-600 dark:text-slate-300 mb-3">
                      {module.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-1">
                        <span>Progress</span>
                        <span>{module.progress}%</span>
                      </div>
                      <ProgressBar progress={module.progress} />
                    </div>
                    
                    {/* Module Stats */}
                    <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
                      <span>⏱️ {module.duration}</span>
                      <span>🎯 {module.scenarios} scenarios</span>
                      <span>⚡ {module.xp} XP</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedModule(module.id)}
                    className="ml-4 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md"
                  >
                    <Play className="w-5 h-5 text-white ml-1" />
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Badges */}
          <GlassCard className="p-6">
            <h3 className="font-['Inter'] font-bold text-lg text-trustblue dark:text-white mb-4 flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
              Achievement Badges
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg text-center transition-all duration-200 ${
                    badge.unlocked
                      ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 border-yellow-300 dark:border-yellow-600'
                      : 'bg-slate-100 dark:bg-slate-700 opacity-60'
                  }`}
                >
                  <div className="text-2xl mb-1">{badge.icon}</div>
                  <div className={`text-xs font-medium ${
                    badge.unlocked ? 'text-yellow-700 dark:text-yellow-300' : 'text-slate-500'
                  }`}>
                    {badge.name}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Recent Activity */}
          <GlassCard className="p-6">
            <h3 className="font-['Inter'] font-bold text-lg text-trustblue dark:text-white mb-4">
              Recent Activity
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <div className="text-sm">
                  <div className="font-medium text-trustblue dark:text-white">
                    Completed: Pump & Dump #3
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    +50 XP
                  </div>
                </div>
                <div className="text-xs text-slate-500">2h ago</div>
              </div>
              
              <div className="flex items-center justify-between py-2">
                <div className="text-sm">
                  <div className="font-medium text-trustblue dark:text-white">
                    Badge Earned: Detective
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    First fraud detected!
                  </div>
                </div>
                <div className="text-xs text-slate-500">1d ago</div>
              </div>
              
              <div className="flex items-center justify-between py-2">
                <div className="text-sm">
                  <div className="font-medium text-trustblue dark:text-white">
                    Started: Phishing Module
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    In progress...
                  </div>
                </div>
                <div className="text-xs text-slate-500">2d ago</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Scenario Simulator Modal */}
      {selectedModule && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-['Inter'] font-bold text-2xl text-trustblue dark:text-white">
                Scenario Simulator
              </h3>
              <button
                onClick={() => setSelectedModule(null)}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              >
                ✕
              </button>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 mb-6">
              <h4 className="font-bold text-lg mb-4">Transaction Log Analysis</h4>
              <div className="font-mono text-sm space-y-2">
                <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded border-l-4 border-red-500">
                  <span className="text-red-600 dark:text-red-400">🚨 RED FLAG:</span> Multiple accounts buying simultaneously
                </div>
                <div>Wallet A: Buy 10,000 tokens @ $0.45</div>
                <div>Wallet B: Buy 12,000 tokens @ $0.45</div>
                <div>Wallet C: Buy 8,000 tokens @ $0.45</div>
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded border-l-4 border-yellow-500">
                  <span className="text-yellow-600 dark:text-yellow-400">⚠️ SUSPICIOUS:</span> All transactions within 30 seconds
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-4">What would you do?</h4>
              <div className="space-y-3">
                <button className="w-full p-3 text-left bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                  A) Flag as potential pump scheme
                </button>
                <button className="w-full p-3 text-left bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                  B) Monitor for additional suspicious activity
                </button>
                <button className="w-full p-3 text-left bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                  C) No action needed - normal trading
                </button>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setSelectedModule(null)}
                className="px-6 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all">
                Submit Answer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationModule;