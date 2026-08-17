import React, { createContext, useState, useContext } from 'react';
import { en } from '../locales/en';
import { gu } from '../locales/gu';

const LanguageContext = createContext();

const locales = { en, gu };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (path) => {
    const keys = path.split('.');
    let current = locales[language];
    for (let key of keys) {
      if (current[key] === undefined) {
        return path; // Fallback to key if not found
      }
      current = current[key];
    }
    return current;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'gu' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
