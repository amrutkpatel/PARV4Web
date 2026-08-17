import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { ShieldAlert, Activity, Dna, Globe2, BookOpen, Search, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

// Import Pages
import Overview from './pages/Overview';
import Virology from './pages/Virology';
import Epidemiology from './pages/Epidemiology';
import Pathogenesis from './pages/Pathogenesis';
import Diagnostics from './pages/Diagnostics';
import Summary from './pages/Summary';

import { useSwipeable } from 'react-swipeable';
import { useNavigate, useLocation } from 'react-router-dom';

function AppContent() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('nav.overview'), icon: BookOpen },
    { path: '/virology', label: t('nav.virology'), icon: Dna },
    { path: '/epidemiology', label: t('nav.epidemiology'), icon: Globe2 },
    { path: '/pathogenesis', label: t('nav.pathogenesis'), icon: Activity },
    { path: '/diagnostics', label: t('nav.diagnostics'), icon: ShieldAlert },
    { path: '/summary', label: t('nav.summary'), icon: Search }
  ];

  useEffect(() => {
    // Automatically scroll the active tab head into view horizontally on mobile
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
      activeLink.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [location.pathname]);

  const handleSwipe = (direction) => {
    const currentIndex = navItems.findIndex(item => item.path === location.pathname);
    if (currentIndex === -1) return;

    if (direction === 'LEFT' && currentIndex < navItems.length - 1) {
      navigate(navItems[currentIndex + 1].path);
    } else if (direction === 'RIGHT' && currentIndex > 0) {
      navigate(navItems[currentIndex - 1].path);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('LEFT'),
    onSwipedRight: () => handleSwipe('RIGHT'),
    delta: 50, // minimum distance to trigger swipe
  });

  return (
    <div className="app-container" {...handlers}>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden p-4 fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur border-b border-white/10 flex justify-between items-center" style={{ display: 'none' }}>
        <span className="font-bold text-cyan-400">PARV4 DB</span>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-white">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      <nav className={`sidebar ${isSidebarOpen ? 'block' : 'hidden md:flex'}`}>
        <div className="sidebar-title">
          <Dna size={24} />
          PARV4 DB
        </div>
        <div style={{ padding: '0 1.5rem', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
          <button 
            onClick={toggleLanguage}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--accent-red)',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              color: 'white',
              fontWeight: '700',
              fontSize: '0.95rem',
              boxShadow: '0 4px 6px rgba(218, 49, 78, 0.25)',
              width: '100%',
              justifyContent: 'center',
              transition: 'transform 0.2s, background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-dark-red)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-red)'}
          >
            <Globe size={18} />
            {language === 'en' ? 'ગુજરાતી' : 'English'}
          </button>
        </div>
        <div className="nav-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink 
                key={item.path} 
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </nav>

      <main className="main-content">
        <div className="global-header" style={{ textAlign: 'center' }}>
          <h1 className="global-title" style={{ margin: 0 }}>Human Parvovirus 4 (PARV4)</h1>
        </div>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/virology" element={<Virology />} />
          <Route path="/epidemiology" element={<Epidemiology />} />
          <Route path="/pathogenesis" element={<Pathogenesis />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
