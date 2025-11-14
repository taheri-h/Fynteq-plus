import React, { createContext, useContext } from 'react';
import i18n from '../i18n';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  isGerman: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Ensure i18n is set to English
  React.useEffect(() => {
    i18n.changeLanguage('en');
  }, []);

  // Set language (always English)
  const setLanguage = (newLanguage: string) => {
    // Only allow English
    if (newLanguage === 'en') {
      i18n.changeLanguage('en');
    }
  };

  const language = 'en';
  const isGerman = false;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isGerman }}>
      {children}
    </LanguageContext.Provider>
  );
};
