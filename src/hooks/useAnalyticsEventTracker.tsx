import ReactGA from 'react-ga';

export function useAnalyticsEventTracker(category = 'Blog category') {
  const eventTracker = (action = 'test action', label = 'test label') => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
}
