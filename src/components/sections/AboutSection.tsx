import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="section-spacing bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 leading-tight">
              {t('about.title')}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {t('about.subtitle')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-slate-900 mb-2">{t('about.experience.title')}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t('about.experience.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-slate-900 mb-2">{t('about.approach.title')}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t('about.approach.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-slate-900 mb-2">{t('about.security.title')}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t('about.security.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">{t('about.stats.integrations.title')}</h4>
                    <p className="text-slate-600 text-sm">{t('about.stats.integrations.subtitle')}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">{t('about.stats.uptime.title')}</h4>
                    <p className="text-slate-600 text-sm">{t('about.stats.uptime.subtitle')}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">{t('about.stats.support.title')}</h4>
                    <p className="text-slate-600 text-sm">{t('about.stats.support.subtitle')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
