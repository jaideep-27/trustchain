import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Home, AlertTriangle, BookOpen, User, Moon, Sun } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/fraud-dashboard', icon: AlertTriangle, label: 'Detection' },
    { path: '/education', icon: BookOpen, label: 'Education' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div className="bg-white/10 dark:bg-black/10 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-full shadow-2xl shadow-black/10 dark:shadow-black/30">
        <div className="flex items-center justify-between px-10 py-2.5">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="font-inter font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              TrustChain
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center space-x-2 px-3 py-1.5 rounded-full transition-all duration-300 group ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>
                  )}
                  <div className="relative flex items-center space-x-2">
                    <Icon className="w-3.5 h-3.5" />
                    <span className="font-medium text-sm">{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="relative p-2 rounded-full bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
            {darkMode ? (
              <Sun className="w-4 h-4 text-yellow-500 relative z-10" />
            ) : (
              <Moon className="w-4 h-4 text-gray-700 relative z-10" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;