import React from 'react';
import StarterDashboard from './StarterDashboard';
import IntegrationsSection from './IntegrationsSection';
import DashboardMetricsCards from './DashboardMetricsCards';

const ProDashboard: React.FC = () => {
  // Mock subscription data
  const mrr = 12450;
  const renewalSuccessRate = 94.5;
  const activeSubscribers = 342;
  const cancellations = 8;
  const atRiskCustomers = 12;
  const upcomingExpirations = 23;

  const renewalPredictions = [
    { day: 'Mon', predicted: 3, actual: 2 },
    { day: 'Tue', predicted: 4, actual: 3 },
    { day: 'Wed', predicted: 5, actual: 4 },
    { day: 'Thu', predicted: 3, actual: 2 },
    { day: 'Fri', predicted: 4, actual: 3 },
    { day: 'Sat', predicted: 2, actual: 1 },
    { day: 'Sun', predicted: 3, actual: 2 },
  ];

  const chargebacks = [
    { status: 'new', count: 2 },
    { status: 'evidence', count: 1 },
    { status: 'won', count: 8 },
    { status: 'lost', count: 1 },
  ];

  return (
    <div className="space-y-8">
      {/* Key Metrics Cards */}
      <DashboardMetricsCards />
      
      <StarterDashboard />

      {/* Subscription Renewal Health */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-6">Subscription Renewal Health</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-sm text-slate-600 mb-1">Upcoming Renewals</div>
            <div className="text-2xl font-bold text-slate-900">45</div>
            <div className="text-xs text-slate-500 mt-1">Next 7 days</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-sm text-slate-600 mb-1">Failed Renewals</div>
            <div className="text-2xl font-bold text-slate-900">8</div>
            <div className="text-xs text-slate-500 mt-1">Last 7 days</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-sm text-slate-600 mb-1">At-Risk Customers</div>
            <div className="text-2xl font-bold text-slate-900">{atRiskCustomers}</div>
            <div className="text-xs text-slate-500 mt-1">Requires attention</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-sm text-slate-600 mb-1">Card Expirations</div>
            <div className="text-2xl font-bold text-slate-900">{upcomingExpirations}</div>
            <div className="text-xs text-slate-500 mt-1">Next 30 days</div>
          </div>
        </div>
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div className="text-sm font-medium text-slate-900 mb-2">Smart Dunning Suggestions</div>
          <div className="text-xs text-slate-600">Retry 8 failed renewals with updated payment methods. Contact 12 at-risk customers before next billing cycle.</div>
        </div>
      </div>

      {/* Renewal Failure Prediction */}
      <div className="card p-6">
        <h3 className="text-base font-semibold text-slate-900 mb-4">Renewal Failure Prediction (AI)</h3>
        <div className="mb-4">
          <div className="text-sm text-slate-600 mb-2">Predicted failures in next 7 days</div>
          <div className="text-2xl font-bold text-slate-900">24 customers</div>
        </div>
        <div className="h-32 flex items-end justify-between gap-1">
          {renewalPredictions.map((day, index) => {
            const maxValue = Math.max(...renewalPredictions.map(d => Math.max(d.predicted, d.actual)));
            const predictedHeight = (day.predicted / maxValue) * 100;
            const actualHeight = (day.actual / maxValue) * 100;
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center justify-end gap-1">
                <div className="w-full flex items-end justify-center gap-0.5">
                  <div 
                    className="w-1/2 bg-slate-300 rounded-t"
                    style={{ height: `${predictedHeight}%`, minHeight: '2px' }}
                    title={`Predicted: ${day.predicted}`}
                  />
                  <div 
                    className="w-1/2 bg-slate-900 rounded-t"
                    style={{ height: `${actualHeight}%`, minHeight: '2px' }}
                    title={`Actual: ${day.actual}`}
                  />
                </div>
                <span className="text-xs text-slate-500 mt-2">{day.day}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate-300 rounded"></div>
            <span>Predicted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate-900 rounded"></div>
            <span>Actual</span>
          </div>
        </div>
      </div>

      {/* Subscription KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-base font-semibold text-slate-900 mb-4">Subscription KPIs</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">MRR</span>
              <span className="text-xl font-bold text-slate-900">${mrr.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Renewal Success Rate</span>
              <span className="text-lg font-semibold text-slate-900">{renewalSuccessRate}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Active Subscribers</span>
              <span className="text-lg font-semibold text-slate-900">{activeSubscribers}</span>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Cancellations</span>
                <span className="text-lg font-semibold text-slate-900">{cancellations}</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">This month</div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-base font-semibold text-slate-900 mb-4">Chargeback Watch</h3>
          <div className="space-y-3 mb-4">
            {chargebacks.map((cb, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-slate-600 capitalize">{cb.status}</span>
                <span className="text-base font-semibold text-slate-900">{cb.count}</span>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-600">Win Rate</span>
              <span className="text-lg font-bold text-slate-900">88.9%</span>
            </div>
            <div className="text-xs text-slate-500">2 evidence due in 3 days</div>
          </div>
        </div>
      </div>

      {/* Checkout Deep Dive */}
      <div className="card p-6">
        <h3 className="text-base font-semibold text-slate-900 mb-4">Checkout Deep Dive</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-sm text-slate-600 mb-3">Browser Performance</div>
            <div className="space-y-2">
              {['Chrome', 'Safari', 'Firefox', 'Edge'].map((browser, index) => {
                const rates = [96.5, 94.2, 93.8, 95.1];
                return (
                  <div key={index}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600">{browser}</span>
                      <span className="font-medium text-slate-900">{rates[index]}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-900" style={{ width: `${rates[index]}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="text-sm text-slate-600 mb-3">Top Decline Reasons</div>
            <div className="space-y-2">
              {[
                { reason: 'Insufficient funds', count: 8 },
                { reason: 'Card expired', count: 5 },
                { reason: 'Invalid card', count: 3 },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-xs text-slate-600">{item.reason}</span>
                  <span className="text-sm font-medium text-slate-900">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Agent Full Mode */}
      <div className="card p-6">
        <h3 className="text-base font-semibold text-slate-900 mb-4">AI Payment Agent (Full Mode)</h3>
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-sm font-medium text-slate-900 mb-2">Recommended Retry Logic</div>
            <div className="text-xs text-slate-600">Enable automatic retry for 8 failed renewals. Suggested: Retry after 3 days with updated payment method.</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-sm font-medium text-slate-900 mb-2">Settings to Fix Renewal Failures</div>
            <div className="text-xs text-slate-600">Update dunning settings: Enable email notifications 7 days before card expiry. Set up automatic card update flow.</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-sm font-medium text-slate-900 mb-2">Decline Code Explanation</div>
            <div className="text-xs text-slate-600">"insufficient_funds" (8 occurrences): Customer's bank account lacks sufficient funds. Recommend retry after 2-3 days.</div>
          </div>
        </div>
      </div>

      {/* Integrations */}
      <IntegrationsSection plan="pro" />
    </div>
  );
};

export default ProDashboard;

