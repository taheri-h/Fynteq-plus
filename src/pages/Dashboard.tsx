import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../contexts/AuthContext';
import StarterDashboard from '../components/dashboard/StarterDashboard';
import ProDashboard from '../components/dashboard/ProDashboard';
import ScaleDashboard from '../components/dashboard/ScaleDashboard';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  const [paymentData, setPaymentData] = useState<any>(null);
  const [connectedProviders, setConnectedProviders] = useState<string[]>([]);
  const [packageType, setPackageType] = useState<string>('');

  useEffect(() => {
    // Get package from URL params, payment data, or user data
    const urlPackage = searchParams.get('package');
    const stored = sessionStorage.getItem('paymentData');
    
    if (stored) {
      const data = JSON.parse(stored);
      setPaymentData(data);
      setPackageType(data.package || 'starter');
    } else if (urlPackage) {
      setPackageType(urlPackage);
    } else {
      // Try to get from localStorage (user's subscription)
      const userPackage = localStorage.getItem('userPackage');
      if (userPackage) {
        setPackageType(userPackage);
      } else {
        // Default to starter if nothing found
        setPackageType('starter');
      }
    }
  }, [navigate, searchParams]);

  const providers = [
    { id: 'stripe', name: 'Stripe', logo: '/images/brands/stripe-logo-AQEyPRPODaTM3Ern.png.avif' },
    { id: 'paypal', name: 'PayPal', logo: '/images/brands/pngimg.com---paypal_png7-mePvDEDJbQCke023.png.avif' },
    { id: 'shopify', name: 'Shopify', logo: null }
  ];

  const handleConnectProvider = async (providerId: string) => {
    // Here you would integrate with OAuth for Stripe/PayPal
    // For now, we'll simulate the connection
    
    // Simulate OAuth flow
    const confirmed = window.confirm(`Connect your ${providers.find(p => p.id === providerId)?.name} account?`);
    
    if (confirmed) {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setConnectedProviders([...connectedProviders, providerId]);
      
      alert(`${providers.find(p => p.id === providerId)?.name} account connected successfully!`);
    }
  };

  const planName = packageType?.charAt(0).toUpperCase() + packageType?.slice(1) || 'Dashboard';

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{planName} Dashboard | Fynteq Pulse</title>
        <meta name="description" content={`Monitor your Stripe & PayPal payments with Fynteq Pulse ${planName} dashboard. Track payment health, alerts, and analytics.`} />
        <link rel="canonical" href="https://fynteq.com/dashboard" />
      </Helmet>
      {/* Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
              <p className="text-slate-600 text-sm mt-1">Connect your payment providers to start monitoring</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-500 uppercase tracking-wide">Plan</div>
              <div className="font-semibold text-slate-900 mt-1">{planName}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Connect Providers Section */}
        {connectedProviders.length === 0 ? (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Connect Payment Providers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {providers.map((provider) => {
                const isConnected = connectedProviders.includes(provider.id);
                
                return (
                  <div
                    key={provider.id}
                    className={`card p-6 text-center ${
                      isConnected
                        ? 'border-slate-900 border-2'
                        : ''
                    }`}
                  >
                    <div className="mb-4">
                      {provider.logo ? (
                        <img
                          src={provider.logo}
                          alt={provider.name}
                          className={`h-10 w-auto mx-auto mb-3 transition-all ${
                            isConnected ? 'opacity-100 grayscale-0' : 'opacity-60 grayscale'
                          }`}
                        />
                      ) : (
                        <div className="h-10 w-10 bg-slate-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <span className="text-sm font-medium text-slate-600">{provider.name.charAt(0)}</span>
                        </div>
                      )}
                      <h3 className="font-semibold text-slate-900 mb-1">{provider.name}</h3>
                      {isConnected && (
                        <span className="text-xs text-slate-600 font-medium">Connected</span>
                      )}
                    </div>

                    {!isConnected ? (
                      <button
                        onClick={() => handleConnectProvider(provider.id)}
                        className="w-full py-2.5 px-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors text-sm"
                      >
                        Connect
                      </button>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Active</span>
                        </div>
                        <button
                          onClick={() => setConnectedProviders(connectedProviders.filter(p => p !== provider.id))}
                          className="text-slate-400 hover:text-slate-600 text-xs"
                        >
                          Disconnect
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <>
            {/* Show appropriate dashboard based on plan */}
            {packageType === 'starter' && <StarterDashboard />}
            {packageType === 'pro' && <ProDashboard />}
            {packageType === 'scale' && <ScaleDashboard />}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

