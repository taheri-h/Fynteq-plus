import React from 'react';
import { useTranslation } from 'react-i18next';

const MetricsSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="section-spacing bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            {t('metrics.title')}
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('metrics.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-slate-300 text-sm">{t('metrics.integrations')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">Rapid</div>
            <div className="text-slate-300 text-sm">{t('metrics.uptime')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">Mon-Fri</div>
            <div className="text-slate-300 text-sm">{t('metrics.support')}</div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center lg:text-left">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('metrics.security.title')}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t('metrics.security.description')}
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('metrics.setup.title')}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t('metrics.setup.description')}
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('metrics.dedicated.title')}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t('metrics.dedicated.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
