import React, { useState } from 'react';

interface IntegrationsSectionProps {
  plan: 'starter' | 'pro' | 'scale';
}

const IntegrationsSection: React.FC<IntegrationsSectionProps> = ({ plan }) => {
  const [connectedIntegrations, setConnectedIntegrations] = useState<string[]>([]);

  // Define available integrations based on plan
  const allIntegrations = [
    { 
      id: 'email', 
      name: 'Email', 
      description: 'Receive alerts via email',
      available: true, // Available for all plans
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      id: 'slack', 
      name: 'Slack', 
      description: 'Send alerts to Slack channels',
      available: plan === 'scale', // Only Scale plan
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 5.042a2.528 2.528 0 0 1-2.52-2.52A2.528 2.528 0 0 1 18.956 0a2.528 2.528 0 0 1 2.523 2.522v2.52h-2.523zM18.956 6.313a2.528 2.528 0 0 1 2.523 2.521 2.528 2.528 0 0 1-2.523 2.521h-6.313A2.528 2.528 0 0 1 10.12 8.834a2.528 2.528 0 0 1 2.523-2.521h6.313zM13.478 18.956a2.528 2.528 0 0 1 2.521 2.523 2.528 2.528 0 0 1-2.521 2.52 2.527 2.527 0 0 1-2.522-2.52v-2.523h2.522zM12.207 18.956a2.528 2.528 0 0 1-2.523-2.523 2.528 2.528 0 0 1 2.523-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313a2.528 2.528 0 0 1-2.521 2.523 2.528 2.528 0 0 1-2.523-2.523v-6.313z"/>
        </svg>
      )
    },
    { 
      id: 'telegram', 
      name: 'Telegram', 
      description: 'Get instant notifications on Telegram',
      available: true, // Available for all plans
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    },
    { 
      id: 'salesforce', 
      name: 'Salesforce', 
      description: 'Sync alerts and data with Salesforce',
      available: plan === 'scale', // Only Scale plan
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.682 2.428L0 5.66v12.745h5.814l.682-3.18h-3.18V5.66L.682 2.428zm22.245 0L24 5.66v12.745h-5.814l-.682-3.18h3.18V5.66L22.927 2.428zM8.182 2.428L9.05 5.66v12.745H3.136l-.682-3.18h3.18V5.66L8.182 2.428zm7.636 0L16.686 5.66v12.745h-5.814l-.682-3.18h3.18V5.66L15.818 2.428z"/>
        </svg>
      )
    },
  ];

  const handleConnect = async (integrationId: string) => {
    const integration = allIntegrations.find(i => i.id === integrationId);
    if (!integration) return;

    const confirmed = window.confirm(`Connect ${integration.name}?`);
    if (confirmed) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setConnectedIntegrations([...connectedIntegrations, integrationId]);
    }
  };

  const handleDisconnect = (integrationId: string) => {
    setConnectedIntegrations(connectedIntegrations.filter(id => id !== integrationId));
  };

  return (
    <div className="card p-6">
      <h3 className="text-base font-semibold text-slate-900 mb-4">Integrations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {allIntegrations.map((integration) => {
          const isConnected = connectedIntegrations.includes(integration.id);
          const isAvailable = integration.available;

          return (
            <div
              key={integration.id}
              className={`p-4 border rounded-xl transition-all ${
                isConnected
                  ? 'bg-white border-slate-900 border-2'
                  : isAvailable
                  ? 'bg-white border-slate-100 hover:border-slate-200'
                  : 'bg-slate-50 border-slate-100 opacity-60'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`${isAvailable ? 'text-slate-900' : 'text-slate-400'}`}>
                  {integration.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-slate-900">{integration.name}</div>
                  {!isAvailable && (
                    <div className="text-xs text-slate-500 mt-0.5">Scale plan only</div>
                  )}
                </div>
              </div>
              <div className="text-xs text-slate-600 mb-3">{integration.description}</div>
              
              {isAvailable ? (
                !isConnected ? (
                  <button
                    onClick={() => handleConnect(integration.id)}
                    className="w-full py-2 px-3 bg-slate-900 text-white rounded-lg text-xs font-medium hover:bg-slate-800 transition-colors"
                  >
                    Connect
                  </button>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
                      <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Connected</span>
                    </div>
                    <button
                      onClick={() => handleDisconnect(integration.id)}
                      className="text-slate-400 hover:text-slate-600 text-xs w-full"
                    >
                      Disconnect
                    </button>
                  </div>
                )
              ) : (
                <div className="w-full py-2 px-3 bg-slate-100 text-slate-400 rounded-lg text-xs font-medium text-center cursor-not-allowed">
                  Upgrade Required
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IntegrationsSection;

