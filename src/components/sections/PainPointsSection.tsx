import React from 'react';
import { useTranslation } from 'react-i18next';

const PainPointsSection: React.FC = () => {
  const { t } = useTranslation();
  
  const statistics = t('painPoints.statistics', { returnObjects: true }) as Array<{stat: string, description: string}>;
  const consequences = t('painPoints.ifNotMonitoring.consequences', { returnObjects: true }) as string[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 leading-tight tracking-tight">
            {t('painPoints.title')}
          </h2>
          <p className="text-base text-slate-500">
            {t('painPoints.subtitle')}
          </p>
        </div>

        {/* Statistics - Minimal List */}
        <div className="space-y-6 mb-20">
          {statistics.map((stat: any, index: number) => (
            <div key={index} className="flex items-baseline gap-6">
              <div className="text-3xl font-semibold text-slate-900 min-w-[120px]">{stat.stat}</div>
              <p className="text-base text-slate-600 flex-1">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* If Not Monitoring */}
        <div className="mb-20">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">
            {t('painPoints.ifNotMonitoring.title')}
          </h3>
          <div className="space-y-3">
            {consequences.map((consequence: string, index: number) => (
              <p key={index} className="text-base text-slate-600">{consequence}</p>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div>
          <p className="text-lg text-slate-900 font-medium">{t('painPoints.conclusion')}</p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
