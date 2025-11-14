import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CookieConsent: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setShowConsent(true);
    }
    // Ensure English language
    i18n.changeLanguage('en');
  }, [i18n]);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-slate-600">
              {t('cookies.message', 'We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.')}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm text-slate-600 hover:text-slate-800 transition-colors"
            >
              {t('cookies.decline', 'Decline')}
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('cookies.accept', 'Accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
