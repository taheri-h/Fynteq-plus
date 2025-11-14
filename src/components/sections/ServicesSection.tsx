import React from 'react';
import { useTranslation } from 'react-i18next';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 leading-tight">
            {t('services.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t('services.features', { returnObjects: true }).map((feature: any, index: number) => (
            <div key={index} className="card p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{feature.description}</p>
              {feature.items && (
                <ul className="space-y-2">
                  {feature.items.map((item: string, itemIndex: number) => (
                    <li key={itemIndex} className="text-sm text-slate-600">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            {t('services.integrations.list', { returnObjects: true }).map((integration: string, index: number) => (
              <span key={index}>{integration}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
