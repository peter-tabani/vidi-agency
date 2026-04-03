'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Minimum display time to ensure smooth transition
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-950 transition-opacity duration-500">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
          Vidi Agency
        </h1>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 tracking-widest uppercase animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
