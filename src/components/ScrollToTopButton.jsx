import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 left-5 z-40 w-11 h-11 rounded-full bg-dark/80 dark:bg-white/10 text-white flex items-center justify-center shadow-card hover:bg-dark transition-colors"
    >
      <FiArrowUp size={18} />
    </button>
  );
}
