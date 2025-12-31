'use client';

import { useEffect } from 'react';

export default function FontLoader() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.cdnfonts.com/css/general-sans';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Cleanup: remove the link when component unmounts (optional)
      document.head.removeChild(link);
    };
  }, []);

  return null;
}

