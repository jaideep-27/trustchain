import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Users, Database, ArrowRight, Zap, BookOpen, Star, Lock, Globe, Brain } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-900 dark:to-cyan-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-300/10 to-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Hero Section with Staggered Animations */}
        <div className="flex justify-center mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center max-w-5xl">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 lg:col-span-2 flex justify-center lg:justify-start animate-slide-in-left">
            <img 
              src="/Gemini_Generated_Image_rejj62rejj62rejj.png" 
              alt="TrustChain AI Fraud Detection" 
              className="w-full max-w-xs h-auto rounded-2xl transition-all duration-500 hover:scale-105 animate-bounce-gentle"
            />
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 lg:col-span-3 text-center lg:text-left animate-slide-in-right">
            <h1 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-600 dark:from-white dark:via-cyan-200 dark:to-blue-300 bg-clip-text text-transparent">
                Trust
              </span>
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                Chain
              </span>
            </h1>
            
            <p className="font-sans text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-3 leading-relaxed animate-slide-up animate-delay-200">
              Next-Generation AI-Powered Fraud Detection
            </p>
            
            <p className="font-sans text-base text-gray-500 dark:text-gray-400 mb-8 animate-slide-up animate-delay-300">
              Protect your investments with cutting-edge machine learning algorithms that detect suspicious trading patterns in real-time
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-8 animate-scale-in animate-delay-400">
              <Link
                to="/education"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-sans font-semibold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 btn-primary hover-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-2xl shadow-cyan-500/25"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center text-white">
                  <BookOpen className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Start Learning
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
              
              <Link
                to="/fraud-dashboard"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-sans font-semibold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 glass-enhanced hover-glow"
              >
                <div className="relative flex items-center text-gray-900 dark:text-white">
                  <Zap className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Live Detection
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </div>
          </div>
          </div>
        </div>

        {/* Enhanced Stats Cards with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Shield, value: '127', label: 'Fraud Flags Today', color: 'from-red-400 to-red-600', delay: 'animate-delay-100' },
            { icon: Users, value: '2.4K', label: 'Active Users', color: 'from-cyan-400 to-cyan-600', delay: 'animate-delay-200' },
            { icon: Database, value: '15.7K', label: 'Blockchain Records', color: 'from-blue-400 to-blue-600', delay: 'animate-delay-300' },
            { icon: TrendingUp, value: '99.2%', label: 'Accuracy Rate', color: 'from-green-400 to-green-600', delay: 'animate-delay-400' }
          ].map((stat, index) => (
            <div key={index} className={`group relative animate-slide-up ${stat.delay}`}>
              <div className="absolute inset-0 glass-enhanced rounded-3xl shadow-2xl shadow-black/5 dark:shadow-black/20 group-hover:shadow-xl transition-all duration-500"></div>
              <div className="relative p-8 text-center transform group-hover:scale-105 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl shadow-lg mb-6 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 animate-glow`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-sans font-bold text-4xl mb-2 text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {stat.value}
                </div>
                <div className="font-sans text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Brain,
              title: 'AI-Powered Detection',
              description: 'Advanced machine learning algorithms analyze trading patterns to identify sophisticated fraud schemes with unprecedented accuracy.',
              gradient: 'from-purple-400 to-pink-600',
              delay: 'animate-delay-100'
            },
            {
              icon: BookOpen,
              title: 'Interactive Learning',
              description: 'Gamified education modules teach you to recognize fraud patterns through real-world scenarios and case studies.',
              gradient: 'from-cyan-400 to-blue-600',
              delay: 'animate-delay-200'
            },
            {
              icon: Lock,
              title: 'Blockchain Security',
              description: 'All fraud detections are immutably recorded on blockchain for complete transparency and audit trails.',
              gradient: 'from-green-400 to-teal-600',
              delay: 'animate-delay-300'
            }
          ].map((feature, index) => (
            <div key={index} className={`group relative animate-slide-up ${feature.delay}`}>
              <div className="absolute inset-0 glass-enhanced rounded-3xl shadow-2xl shadow-black/5 dark:shadow-black/20 group-hover:shadow-xl transition-all duration-500"></div>
              <div className="relative p-8 text-center transform group-hover:scale-105 transition-all duration-500">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl shadow-lg mb-6 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 animate-glow`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-sans font-bold text-2xl text-gray-900 dark:text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="text-center animate-fade-in animate-delay-600">
          <div className="inline-flex items-center space-x-8 p-6 glass-enhanced rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="flex items-center space-x-2 group">
              <Star className="w-5 h-5 text-yellow-500 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-sans font-semibold text-gray-900 dark:text-white">4.9/5 Rating</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center space-x-2 group">
              <Globe className="w-5 h-5 text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-sans font-semibold text-gray-900 dark:text-white">50+ Countries</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center space-x-2 group">
              <Shield className="w-5 h-5 text-green-500 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-sans font-semibold text-gray-900 dark:text-white">Bank-Grade Security</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;