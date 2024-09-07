import { useEffect } from 'react';

const DesktopOnly = ({ children }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {  
        window.location.href = '/mobile-not-supported';
      }
    };

    handleResize(); // چک کردن در اولین بار لود
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{children}</>;
};

export default DesktopOnly;