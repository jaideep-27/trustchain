import React from 'react';
import { User, Award, TrendingUp, Shield, BookOpen, Zap } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import ProgressBar from '../components/ProgressBar';

const UserProfile: React.FC = () => {
  const userStats = {
    username: 'CryptoDetective',
    trustScore: 87,
    level: 'Expert Analyst',
    casesCompleted: 24,
    redFlagsIdentified: 156,
    xpPoints: 2450,
    streakDays: 12,
    accuracy: 94.7
  };

  const achievements = [
    { 
      id: 1, 
      name: 'First Detection', 
      description: 'Successfully identified your first fraud case', 
      icon: '🎯', 
      unlocked: true,
      date: '2024-01-10'
    },
    { 
      id: 2, 
      name: 'Detective Badge', 
      description: 'Completed 10 fraud detection cases', 
      icon: '🕵️', 
      unlocked: true,
      date: '2024-01-12'
    },
    { 
      id: 3, 
      name: 'Fraud Buster', 
      description: 'Identified 50+ suspicious activities', 
      icon: '🛡️', 
      unlocked: true,
      date: '2024-01-14'
    },
    { 
      id: 4, 
      name: 'Market Guardian', 
      description: 'Maintained 90%+ accuracy for 30 days', 
      icon: '⚔️', 
      unlocked: false,
      date: null
    },
    { 
      id: 5, 
      name: 'Perfect Streak', 
      description: 'Achieved 20-day learning streak', 
      icon: '🔥', 
      unlocked: false,
      date: null
    },
    { 
      id: 6, 
      name: 'Expert Analyst', 
      description: 'Reach Level 10 and 95% accuracy', 
      icon: '💎', 
      unlocked: false,
      date: null
    }
  ];

  const recentActivity = [
    {
      type: 'case_completed',
      title: 'Completed Insider Trading Case #47',
      xp: 150,
      timestamp: '2 hours ago'
    },
    {
      type: 'achievement',
      title: 'Earned "Fraud Buster" badge',
      xp: 200,
      timestamp: '1 day ago'
    },
    {
      type: 'detection',
      title: 'Successfully flagged pump & dump scheme',
      xp: 100,
      timestamp: '2 days ago'
    },
    {
      type: 'learning',
      title: 'Started Advanced Phishing Module',
      xp: 0,
      timestamp: '3 days ago'
    }
  ];

  const skillProgress = [
    { skill: 'Pump & Dump Detection', level: 85 },
    { skill: 'Insider Trading Analysis', level: 72 },
    { skill: 'Phishing Recognition', level: 91 },
    { skill: 'Market Manipulation', level: 68 },
    { skill: 'Social Engineering', level: 79 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-['Inter'] font-bold text-3xl text-trustblue dark:text-white mb-2">
          User Profile
        </h1>
        <p className="font-['Roboto'] text-slate-600 dark:text-slate-300">
          Track your progress and achievements in fraud detection
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Card */}
          <GlassCard className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full shadow-lg">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="font-['Inter'] font-bold text-2xl text-trustblue dark:text-white">
                    {userStats.username}
                  </h2>
                  <p className="text-teal-500 font-medium">{userStats.level}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-slate-600 dark:text-slate-400">
                    <span>Level 8</span>
                    <span>•</span>
                    <span>{userStats.streakDays} day streak</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-poppins font-bold text-3xl text-trustblue dark:text-white">
                  {userStats.trustScore}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Trust Score</div>
                <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full mt-2">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"
                    style={{ width: `${userStats.trustScore}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="font-['Space_Grotesk'] font-bold text-2xl text-slate-800 dark:text-white">
                  {userStats.casesCompleted}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Cases Completed</div>
              </div>
              
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="font-['Space_Grotesk'] font-bold text-2xl text-red-500">
                  {userStats.redFlagsIdentified}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Red Flags Found</div>
              </div>
              
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="font-['Space_Grotesk'] font-bold text-2xl text-yellow-500">
                  {userStats.xpPoints}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">XP Points</div>
              </div>
              
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="font-['Space_Grotesk'] font-bold text-2xl text-green-500">
                  {userStats.accuracy}%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Accuracy</div>
              </div>
            </div>
          </GlassCard>

          {/* Skill Progress */}
          <GlassCard className="p-6">
            <h3 className="font-['Inter'] font-bold text-xl text-trustblue dark:text-white mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-teal-500" />
              Skill Progress
            </h3>
            
            <div className="space-y-6">
              {skillProgress.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-trustblue dark:text-white">{skill.skill}</span>
                    <span className="text-slate-600 dark:text-slate-400">{skill.level}%</span>
                  </div>
                  <ProgressBar progress={skill.level} />
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Achievements */}
          <GlassCard className="p-6">
            <h3 className="font-['Inter'] font-bold text-xl text-trustblue dark:text-white mb-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-yellow-500" />
              Achievements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    achievement.unlocked
                      ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-300 dark:border-yellow-600'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 opacity-60'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h4 className={`font-semibold ${
                        achievement.unlocked 
                          ? 'text-yellow-800 dark:text-yellow-200' 
                          : 'text-slate-600 dark:text-slate-400'
                      }`}>
                        {achievement.name}
                      </h4>
                      <p className={`text-sm ${
                        achievement.unlocked 
                          ? 'text-yellow-700 dark:text-yellow-300' 
                          : 'text-slate-500 dark:text-slate-500'
                      }`}>
                        {achievement.description}
                      </p>
                      {achievement.unlocked && achievement.date && (
                        <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                          Unlocked on {achievement.date}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress to Next Level */}
          <GlassCard className="p-6">
            <h3 className="font-['Inter'] font-bold text-lg text-trustblue dark:text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-500" />
              Level Progress
            </h3>
            
            <div className="text-center mb-4">
              <div className="font-['Space_Grotesk'] font-bold text-2xl text-trustblue dark:text-white">
                Level 8
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                550 XP to Level 9
              </div>
            </div>
            
            <ProgressBar progress={75} />
            
            <div className="mt-4 text-center">
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Next: <span className="font-semibold text-teal-500">Market Expert</span>
              </div>
            </div>
          </GlassCard>

          {/* Recent Activity */}
          <GlassCard className="p-6">
            <h3 className="font-['Inter'] font-bold text-lg text-trustblue dark:text-white mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
              Recent Activity
            </h3>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 py-2">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                    activity.type === 'case_completed' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                    activity.type === 'achievement' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' :
                    activity.type === 'detection' ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' :
                    'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  }`}>
                    {activity.type === 'case_completed' ? '✓' :
                     activity.type === 'achievement' ? '🏆' :
                     activity.type === 'detection' ? '⚠️' : '📚'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-trustblue dark:text-white">
                      {activity.title}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                      <span>{activity.timestamp}</span>
                      {activity.xp > 0 && (
                        <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                          +{activity.xp} XP
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Quick Stats */}
          <GlassCard className="p-6">
            <h3 className="font-['Inter'] font-bold text-lg text-trustblue dark:text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-500" />
              This Week
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400">Cases Reviewed</span>
                <span className="font-semibold text-trustblue dark:text-white">8</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400">Flags Identified</span>
                <span className="font-semibold text-red-500">23</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400">XP Earned</span>
                <span className="font-semibold text-yellow-500">450</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400">Streak Days</span>
                <span className="font-semibold text-teal-500">{userStats.streakDays}</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;