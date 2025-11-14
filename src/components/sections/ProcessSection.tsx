import React from 'react';
import { useTranslation } from 'react-i18next';

const ProcessSection: React.FC = () => {
  const { t } = useTranslation();
  const steps = t('process.steps', { returnObjects: true }) as Array<{
    number: string;
    title: string;
    description: string;
    items?: string[];
  }>;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4 leading-tight">
            {t('process.title')}
          </h2>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 hover:border-slate-200 transition-all h-full flex flex-col relative overflow-hidden group">
                  {/* Minimal hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50/0 via-slate-50/0 to-slate-50/0 group-hover:from-slate-50/50 group-hover:via-slate-50/30 group-hover:to-slate-50/0 transition-all duration-300 pointer-events-none" />
                  
                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="mb-4">
                      <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center text-sm font-semibold inline-flex">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      {step.items && (
                        <ul className="space-y-1.5">
                          {step.items.map((item: string, itemIndex: number) => (
                            <li key={itemIndex} className="text-xs text-slate-500">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Arrow connector - desktop only, positioned between cards */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-sm">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-slate-600">{t('process.noDevelopers')}</p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
