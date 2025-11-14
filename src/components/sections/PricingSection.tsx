import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { trackPricingView } from '../../utils/analytics';
import { useAuth } from '../../contexts/AuthContext';

const PricingSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isYearly, setIsYearly] = useState(false);
  
  // Calculate yearly price (34% discount = 66% of monthly * 12)
  const getPrice = (monthlyPrice: string) => {
    if (!isYearly) return monthlyPrice;
    const numericPrice = parseInt(monthlyPrice.replace('€', ''));
    const yearlyPrice = Math.round(numericPrice * 12 * 0.66);
    return `€${yearlyPrice}`;
  };
  
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4 leading-tight">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
          
          {/* Monthly/Yearly Toggle */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className={`text-sm font-medium ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
              {t('pricing.monthly')}
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isYearly ? 'bg-slate-900' : 'bg-slate-200'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  isYearly ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
              {t('pricing.yearly')}
            </span>
            {isYearly && (
              <span className="text-sm font-medium text-slate-900 bg-slate-100 px-3 py-1 rounded-full">
                {t('pricing.discount')}
              </span>
            )}
          </div>
          
          {/* Money Back Guarantee */}
          <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100 max-w-xl mx-auto">
            <p className="text-sm font-semibold text-slate-900 mb-1">
              {t('pricing.guarantee.title')}
            </p>
            <p className="text-xs text-slate-600">
              {t('pricing.guarantee.description')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t('pricing.plans', { returnObjects: true }).map((plan: any, index: number) => (
            <div key={index} className={`card p-8 ${plan.popular ? 'border-slate-900 border-2' : ''}`}>
              {plan.popular && (
                <div className="mb-4">
                  <span className="text-xs font-medium text-slate-900 bg-slate-100 px-3 py-1.5 rounded-full">
                    {t('pricing.mostPopular')}
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-semibold text-slate-900">{getPrice(plan.price)}</span>
                  <span className="text-slate-600">/{isYearly ? 'yr' : 'mo'}</span>
                </div>
                <p className="text-slate-600 mb-6">{plan.description}</p>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-sm font-medium text-slate-900">{plan.for}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="text-slate-600 text-sm">
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  trackPricingView(plan.name);
                  const packageName = plan.name.toLowerCase().replace(/\s+/g, '-');
                  if (!isAuthenticated) {
                    // Redirect to signup with package info
                    navigate(`/signup?package=${packageName}&billing=${isYearly ? 'yearly' : 'monthly'}`);
                  } else {
                    // If already authenticated, go directly to payment
                    navigate(`/payment?package=${packageName}&billing=${isYearly ? 'yearly' : 'monthly'}`);
                  }
                }}
                className={`w-full py-3 px-6 rounded-lg font-medium text-center ${
                  plan.popular 
                    ? 'button-primary' 
                    : 'button-secondary'
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
