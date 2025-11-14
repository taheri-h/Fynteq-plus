import React from 'react';
import { useTranslation } from 'react-i18next';

const ResponsibilitySection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-12 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{t('responsibility.moneyBack.title')}</h3>
            <p className="text-slate-600 text-sm">{t('responsibility.moneyBack.description')}</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{t('responsibility.fullResponsibility.title')}</h3>
            <p className="text-slate-600 text-sm">{t('responsibility.fullResponsibility.description')}</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{t('responsibility.ongoingSupport.title')}</h3>
            <p className="text-slate-600 text-sm">{t('responsibility.ongoingSupport.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsibilitySection;
