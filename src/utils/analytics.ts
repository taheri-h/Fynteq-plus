import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-HTS08BJ4HG';

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID, {
    testMode: process.env.NODE_ENV === 'test',
  });
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  ReactGA.event({
    action,
    category,
    label,
    value,
  });
};

// Track specific business events
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', 'Button', `${buttonName} - ${location}`);
};

export const trackFormSubmit = (formName: string) => {
  trackEvent('submit', 'Form', formName);
};

export const trackConsultationClick = (source: string) => {
  trackEvent('click', 'Consultation', source);
};

export const trackPricingView = (packageName: string) => {
  trackEvent('view', 'Pricing', packageName);
};

export const trackBlogPostView = (postTitle: string) => {
  trackEvent('view', 'Blog', postTitle);
};

export const trackCaseStudyView = (studyTitle: string) => {
  trackEvent('view', 'Case Study', studyTitle);
};
