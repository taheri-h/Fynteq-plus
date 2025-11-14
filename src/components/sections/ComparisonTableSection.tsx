import React from 'react';

const ComparisonTableSection: React.FC = () => {
  const features = [
    { name: 'Payment Health Score', starter: true, pro: true, scale: true },
    { name: 'Failed Payment Alerts', starter: true, pro: true, scale: true },
    { name: 'Checkout Monitoring', starter: 'Basic', pro: 'Advanced', scale: 'Advanced' },
    { name: 'Subscription Health', starter: false, pro: true, scale: true },
    { name: 'Renewal Predictions', starter: false, pro: true, scale: true },
    { name: 'Chargeback Monitoring', starter: false, pro: true, scale: true },
    { name: 'AI Fix Suggestions', starter: 'Limited', pro: 'Full', scale: 'Full' },
    { name: 'Multi-Account Monitoring', starter: false, pro: false, scale: true },
    { name: 'Vendor/KYC Monitoring', starter: false, pro: false, scale: true },
    { name: 'Slack Alerts', starter: false, pro: false, scale: true },
    { name: 'Daily Digest Report', starter: false, pro: false, scale: true },
    { name: 'CRM Sync Alerts', starter: false, pro: false, scale: true },
  ];

  const renderCell = (value: boolean | string) => {
    if (value === true) {
      return (
        <svg className="w-5 h-5 text-slate-900 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      );
    } else if (value === false) {
      return (
        <span className="text-slate-300 text-lg">-</span>
      );
    } else {
      return <span className="text-sm text-slate-600 font-medium">{value}</span>;
    }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4 leading-tight">
            Feature Comparison
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Compare plans to find the right fit for your business
          </p>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-900">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-900">Pro</th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-900">Scale</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={index}
                    className={`border-b border-slate-50 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                    } hover:bg-slate-50 transition-colors`}
                  >
                    <td className="py-4 px-6 text-slate-900 font-medium">{feature.name}</td>
                    <td className="py-4 px-6 text-center">{renderCell(feature.starter)}</td>
                    <td className="py-4 px-6 text-center">{renderCell(feature.pro)}</td>
                    <td className="py-4 px-6 text-center">{renderCell(feature.scale)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;

