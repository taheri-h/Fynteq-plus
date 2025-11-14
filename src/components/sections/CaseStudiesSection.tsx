import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CaseStudiesSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="case-studies" className="section-spacing bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/30 via-transparent to-slate-50/30"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-slate-900 mb-6 text-balance">
            {t('caseStudies.title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-balance">
            {t('caseStudies.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/case-studies/fitness-coach-subscription-billing-success" className="card p-8 hover-lift relative overflow-hidden block">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="mb-6">
              <div className="flex items-center space-x-1 mb-3">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <div className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                {t('caseStudies.featured.fitness.coachType')}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{t('caseStudies.featured.fitness.title')}</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
{t('caseStudies.featured.fitness.testimonial')}
            </p>
            
            {/* Visual Metrics */}
            <div className="bg-green-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">$8,500</div>
                  <div className="text-xs text-green-700">{t('caseStudies.featured.fitness.metrics.monthlyRevenue')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-xs text-green-700">{t('caseStudies.featured.fitness.metrics.successRate')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">3</div>
                  <div className="text-xs text-green-700">{t('caseStudies.featured.fitness.metrics.daysSetup')}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 mt-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                JM
              </div>
              <div>
                <h4 className="font-medium text-slate-900">{t('caseStudies.featured.fitness.customer.name')}</h4>
                <p className="text-slate-500 text-sm">{t('caseStudies.featured.fitness.customer.title')}</p>
              </div>
            </div>
          </Link>

          <Link to="/case-studies/ecommerce-multicurrency-expansion-success" className="card p-8 hover-lift relative overflow-hidden block">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="mb-6">
              <div className="flex items-center space-x-1 mb-3">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                {t('caseStudies.featured.ecommerce.businessType')}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{t('caseStudies.featured.ecommerce.title')}</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
{t('caseStudies.featured.ecommerce.testimonial')}
            </p>
            
            {/* Visual Metrics */}
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">340%</div>
                  <div className="text-xs text-blue-700">{t('caseStudies.featured.ecommerce.metrics.growth')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">45%</div>
                  <div className="text-xs text-blue-700">{t('caseStudies.featured.ecommerce.metrics.lessAbandonment')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">25</div>
                  <div className="text-xs text-blue-700">{t('caseStudies.featured.ecommerce.metrics.countries')}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 mt-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                DR
              </div>
              <div>
                <h4 className="font-medium text-slate-900">{t('caseStudies.featured.ecommerce.customer.name')}</h4>
                <p className="text-slate-500 text-sm">{t('caseStudies.featured.ecommerce.customer.title')}</p>
              </div>
            </div>
          </Link>

          <Link to="/case-studies/saas-startup-revenue-scaling-success" className="card p-8 hover-lift relative overflow-hidden block">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="mb-6">
              <div className="flex items-center space-x-1 mb-3">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <div className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                {t('caseStudies.featured.saas.businessType')}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{t('caseStudies.featured.saas.title')}</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
{t('caseStudies.featured.saas.testimonial')}
            </p>
            
            {/* Visual Metrics */}
            <div className="bg-purple-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">$28K</div>
                  <div className="text-xs text-purple-700">{t('caseStudies.featured.saas.metrics.monthlyRevenue')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">1,300%</div>
                  <div className="text-xs text-purple-700">{t('caseStudies.featured.saas.metrics.growth')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">6</div>
                  <div className="text-xs text-purple-700">{t('caseStudies.featured.saas.metrics.months')}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 mt-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                AC
              </div>
              <div>
                <h4 className="font-medium text-slate-900">{t('caseStudies.featured.saas.customer.name')}</h4>
                <p className="text-slate-500 text-sm">{t('caseStudies.featured.saas.customer.title')}</p>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {t('caseStudies.cta.title')}
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              {t('caseStudies.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/fynteq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                {t('hero.freeConsultation')}
              </a>
              <Link to="/case-studies" className="button-secondary">
                {t('caseStudies.viewAll')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;