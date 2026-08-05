import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#700619] hover:bg-[#52000F] text-white border-2 border-[#EBB638] flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer animate-in fade-in zoom-in-75 group"
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};

export default BackToTop;
