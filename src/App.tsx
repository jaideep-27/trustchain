import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import FraudDashboard from './pages/FraudDashboard';
import EducationModule from './pages/EducationModule';
import FraudEventDetail from './pages/FraudEventDetail';
import UserProfile from './pages/UserProfile';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/fraud-dashboard" element={<FraudDashboard />} />
            <Route path="/education" element={<EducationModule />} />
            <Route path="/fraud-event/:id" element={<FraudEventDetail />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;