import React, { useState } from 'react';
import ProDashboard from './ProDashboard';
import IntegrationsSection from './IntegrationsSection';
import DashboardMetricsCards from './DashboardMetricsCards';

const ScaleDashboard: React.FC = () => {
  const [selectedAccount, setSelectedAccount] = useState('all');

  const accounts = [
    { id: 'all', name: 'All Accounts', health: 89 },
    { id: 'brand-a', name: 'Brand A', health: 92 },
    { id: 'brand-b', name: 'Brand B', health: 87 },
    { id: 'region-1', name: 'Region 1', health: 91 },
  ];

  const vendors = [
    { name: 'Vendor 1', payoutStatus: 'scheduled', kycStatus: 'complete' },
    { name: 'Vendor 2', payoutStatus: 'stuck', kycStatus: 'missing' },
    { name: 'Vendor 3', payoutStatus: 'delayed', kycStatus: 'restricted' },
  ];

  const kycBreakdown = {
    missing: 7,
    restricted: 2,
    highRisk: 1,
  };

  const payoutData = [
    { day: 'Mon', completed: 45, delayed: 2 },
    { day: 'Tue', completed: 52, delayed: 1 },
    { day: 'Wed', completed: 48, delayed: 3 },
    { day: 'Thu', completed: 51, delayed: 1 },
    { day: 'Fri', completed: 55, delayed: 2 },
    { day: 'Sat', completed: 47, delayed: 1 },
    { day: 'Sun', completed: 44, delayed: 2 },
  ];

  return (
    <div className="space-y-8">
      <ProDashboard />

      {/* Multi-Account Dashboard */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-6">Multi-Account Dashboard</h2>
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {accounts.map((account) => (
              <button
                key={account.id}
                onClick={() => setSelectedAccount(account.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedAccount === account.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-50 text-slate-900 border border-slate-100 hover:border-slate-200'
                }`}
              >
                {account.name}
                <span className="ml-2 text-xs opacity-75">({account.health})</span>
              </button>
            ))}
          </div>
        </div>
        {selectedAccount === 'all' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-sm text-slate-600 mb-1">Combined Health</div>
              <div className="text-2xl font-bold text-slate-900">89</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-sm text-slate-600 mb-1">Total Accounts</div>
              <div className="text-2xl font-bold text-slate-900">4</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-sm text-slate-600 mb-1">Active Alerts</div>
              <div className="text-2xl font-bold text-slate-900">6</div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-sm text-slate-600 mb-2">Viewing: {accounts.find(a => a.id === selectedAccount)?.name}</div>
            <div className="text-base text-slate-900">Health Score: {accounts.find(a => a.id === selectedAccount)?.health}</div>
          </div>
        )}
      </div>

      {/* Marketplace / Vendor Monitoring */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-6">Marketplace / Vendor Monitoring</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-4">Vendor Payout Health</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Scheduled</span>
                <span className="text-base font-semibold text-slate-900">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Stuck/Delayed</span>
                <span className="text-base font-semibold text-slate-900">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Missing KYC</span>
                <span className="text-base font-semibold text-slate-900">{kycBreakdown.missing}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Restricted</span>
                <span className="text-base font-semibold text-slate-900">{kycBreakdown.restricted}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                <span className="text-sm text-slate-600">Failed Transfers</span>
                <span className="text-base font-semibold text-slate-900">1</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-4">KYC Breakdown</h3>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Missing Proof</span>
                <span className="text-base font-semibold text-slate-900">{kycBreakdown.missing} vendors</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Restricted</span>
                <span className="text-base font-semibold text-slate-900">{kycBreakdown.restricted}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">High-Risk</span>
                <span className="text-base font-semibold text-slate-900">{kycBreakdown.highRisk}</span>
              </div>
            </div>
            <button className="w-full py-2 px-4 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors">
              View in Stripe Connect
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Recent Vendor Issues</h3>
          <div className="space-y-2">
            {vendors.map((vendor, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                  <div className="text-sm font-medium text-slate-900">{vendor.name}</div>
                  <div className="text-xs text-slate-500 mt-1">
                    Payout: {vendor.payoutStatus} • KYC: {vendor.kycStatus}
                  </div>
                </div>
                {vendor.payoutStatus === 'stuck' && (
                  <span className="text-xs text-slate-600 bg-slate-200 px-2 py-1 rounded">Action Required</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payout Analytics */}
      <div className="card p-6">
        <h3 className="text-base font-semibold text-slate-900 mb-4">Payout Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-sm text-slate-600 mb-1">Payouts Completed</div>
            <div className="text-2xl font-bold text-slate-900">342</div>
            <div className="text-xs text-slate-500 mt-1">Last 7 days</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-sm text-slate-600 mb-1">Payout Delays</div>
            <div className="text-2xl font-bold text-slate-900">12</div>
            <div className="text-xs text-slate-500 mt-1">Avg 2.3 days</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-sm text-slate-600 mb-1">KYC Hold Times</div>
            <div className="text-2xl font-bold text-slate-900">4.2</div>
            <div className="text-xs text-slate-500 mt-1">Days average</div>
          </div>
        </div>
        <div className="h-32 flex items-end justify-between gap-1">
          {payoutData.map((day, index) => {
            const maxValue = Math.max(...payoutData.map(d => d.completed + d.delayed));
            const completedHeight = (day.completed / maxValue) * 100;
            const delayedHeight = (day.delayed / maxValue) * 100;
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center justify-end gap-0.5">
                <div className="w-full flex flex-col-reverse gap-0.5">
                  <div 
                    className="w-full bg-slate-900 rounded-t"
                    style={{ height: `${completedHeight}%`, minHeight: '2px' }}
                  />
                  <div 
                    className="w-full bg-slate-300 rounded-t"
                    style={{ height: `${delayedHeight}%`, minHeight: delayedHeight > 0 ? '2px' : '0' }}
                  />
                </div>
                <span className="text-xs text-slate-500 mt-2">{day.day}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate-900 rounded"></div>
            <span>Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate-300 rounded"></div>
            <span>Delayed</span>
          </div>
        </div>
      </div>

      {/* Daily Digest Report */}
      <div className="card p-6">
        <h3 className="text-base font-semibold text-slate-900 mb-4">Daily Digest Report</h3>
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div className="text-xs text-slate-600 mb-3">Yesterday's Summary</div>
          <div className="space-y-2 text-xs text-slate-900">
            <div>• 52 payments processed</div>
            <div>• 1 dispute received</div>
            <div>• 3 checkout issues</div>
            <div>• 8 renewals completed</div>
            <div>• 2 payouts delayed</div>
          </div>
        </div>
      </div>

      {/* CRM Alerts */}
      <div className="card p-6">
        <h3 className="text-base font-semibold text-slate-900 mb-4">CRM Alerts (Optional)</h3>
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-sm font-medium text-slate-900 mb-1">Stripe ↔ Salesforce Sync</div>
            <div className="text-xs text-slate-600">2 failed invoice syncs detected. Check field mapping configuration.</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-sm font-medium text-slate-900 mb-1">Subscription Mismatch</div>
            <div className="text-xs text-slate-600">5 subscriptions not synced to CRM. Run manual sync.</div>
          </div>
        </div>
      </div>

      {/* Integrations */}
      <IntegrationsSection plan="scale" />
    </div>
  );
};

export default ScaleDashboard;

