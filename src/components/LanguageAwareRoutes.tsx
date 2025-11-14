import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../utils/routing';

// Import all page components
import Home from '../pages/Home';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import Cookies from '../pages/Cookies';
import Refund from '../pages/Refund';
import Security from '../pages/Security';
import StarterForm from '../pages/StarterForm';
import GrowthForm from '../pages/GrowthForm';
import ScaleForm from '../pages/ScaleForm';
import Imprint from '../pages/Imprint';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import CaseStudies from '../pages/CaseStudies';
import CaseStudyDetail from '../pages/CaseStudyDetail';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Payment from '../pages/Payment';
import Dashboard from '../pages/Dashboard';
import Setup from '../pages/Setup';
import SetupForm from '../pages/SetupForm';
import SetupPayment from '../pages/SetupPayment';
import SetupStatus from '../pages/SetupStatus';
import SetupDashboard from '../pages/SetupDashboard';
import AdminDashboard from '../pages/AdminDashboard';
import ProtectedRoute from './ProtectedRoute';

// Main routes component
const LanguageAwareRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PRIVACY} element={<Privacy />} />
      <Route path={ROUTES.TERMS} element={<Terms />} />
      <Route path={ROUTES.COOKIES} element={<Cookies />} />
      <Route path={ROUTES.REFUND} element={<Refund />} />
      <Route path={ROUTES.SECURITY} element={<Security />} />
      <Route path={ROUTES.STARTER_FORM} element={<StarterForm />} />
      <Route path={ROUTES.GROWTH_FORM} element={<GrowthForm />} />
      <Route path={ROUTES.SCALE_FORM} element={<ScaleForm />} />
      <Route path={ROUTES.IMPRINT} element={<Imprint />} />
      <Route path={ROUTES.BLOG} element={<Blog />} />
      <Route path={ROUTES.BLOG_POST} element={<BlogPost />} />
      <Route path={ROUTES.CASE_STUDIES} element={<CaseStudies />} />
      <Route path={ROUTES.CASE_STUDY_DETAIL} element={<CaseStudyDetail />} />
      <Route path={ROUTES.SIGNUP} element={<Signup />} />
      <Route path={ROUTES.SIGNIN} element={<Signin />} />
      <Route 
        path={ROUTES.PAYMENT} 
        element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        } 
      />
      <Route 
        path={ROUTES.DASHBOARD} 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route path={ROUTES.SETUP} element={<Setup />} />
      <Route 
        path="/setup-form/:packageName" 
        element={
          <ProtectedRoute>
            <SetupForm />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/setup-payment/:packageName" 
        element={
          <ProtectedRoute>
            <SetupPayment />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/setup-status/:packageName" 
        element={
          <ProtectedRoute>
            <SetupStatus />
          </ProtectedRoute>
        } 
      />
      <Route 
        path={ROUTES.SETUP_DASHBOARD} 
        element={
          <ProtectedRoute>
            <SetupDashboard />
          </ProtectedRoute>
        } 
      />
      <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashboard />} />
    </Routes>
  );
};

export default LanguageAwareRoutes;
