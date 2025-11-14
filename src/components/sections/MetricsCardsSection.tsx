import React from 'react';

const MetricsCardsSection: React.FC = () => {
  // Mock data for charts
  const renewalFailureData = [8, 10, 9, 12, 11, 13, 12.4];
  const checkoutData = [
    { label: 'Desktop', value: 92 },
    { label: 'Mobile', value: 78 },
    { label: 'Safari', value: 67, warning: true },
  ];
  const failedPaymentsData = [3, 5, 4, 6, 3, 4, 2];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 - Renewal Failure Rate */}
          <div className="card p-5">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-sm font-semibold text-slate-900" style={{ fontSize: '14px' }}>7-Day Renewal Failure Rate</h3>
              <svg className="w-5 h-5 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="flex items-end justify-between">
              <div className="flex-1">
                <div className="text-slate-900 mb-1.5" style={{ fontSize: '28px', fontWeight: '700' }}>12.4%</div>
                <div className="text-slate-500 leading-relaxed" style={{ fontSize: '12px' }}>
                  Renewals failed last week
                  <br />
                  Pulse identified 7 high-risk customers
                </div>
              </div>
              {/* Mini line chart */}
              <div className="ml-4 w-20 h-9 flex items-end">
                <svg width="80" height="35" className="overflow-visible">
                  <polyline
                    points={renewalFailureData.map((val, i) => `${i * 12},${35 - (val * 2.5)}`).join(' ')}
                    fill="none"
                    stroke="#d1d5db"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 - Checkout Success Rate */}
          <div className="card p-5">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-sm font-semibold text-slate-900" style={{ fontSize: '14px' }}>Checkout Conversion (Device)</h3>
              <svg className="w-5 h-5 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex items-end justify-between">
              <div className="flex-1">
                <div className="space-y-1.5 mb-2">
                  {checkoutData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-slate-600" style={{ fontSize: '12px' }}>{item.label}:</span>
                      <span className="text-slate-900 font-semibold" style={{ fontSize: '13px' }}>
                        {item.value}%
                        {item.warning && (
                          <span className="ml-1">⚠️</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-slate-500" style={{ fontSize: '12px' }}>Mobile checkout issues detected</div>
              </div>
              {/* Mini bar chart */}
              <div className="ml-4 w-16 h-9 flex items-end justify-end gap-1">
                {checkoutData.map((item, index) => {
                  const height = (item.value / 100) * 35;
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center justify-end">
                      <div
                        className={`w-full rounded-t ${item.warning ? 'bg-slate-300' : 'bg-slate-900'}`}
                        style={{ height: `${height}px`, minHeight: '2px' }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Card 3 - Failed Payments */}
          <div className="card p-5">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-sm font-semibold text-slate-900" style={{ fontSize: '14px' }}>Failed Payments - Last 7 Days</h3>
              <svg className="w-5 h-5 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex items-end justify-between">
              <div className="flex-1">
                <div className="text-slate-900 mb-1.5" style={{ fontSize: '28px', fontWeight: '700' }}>27</div>
                <div className="text-slate-500" style={{ fontSize: '12px' }}>$340 estimated revenue at risk</div>
              </div>
              {/* Mini sparkline */}
              <div className="ml-4 w-20 h-9 flex items-end">
                <svg width="80" height="35" className="overflow-visible">
                  <polyline
                    points={failedPaymentsData.map((val, i) => `${i * 12},${35 - (val * 5)}`).join(' ')}
                    fill="none"
                    stroke="#d1d5db"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsCardsSection;

