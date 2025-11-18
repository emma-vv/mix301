import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' for immediate scroll without animation
    });
    
    // Also scroll the root element if it's the scroll container
    const root = document.getElementById('root');
    if (root) {
      root.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname]);

  return null;
}

