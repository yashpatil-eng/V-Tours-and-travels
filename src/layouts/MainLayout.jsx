import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import ScrollToTopButton from '../components/ScrollToTopButton';
import useScrollTop from '../hooks/useScrollTop';

export default function MainLayout({ isDark, setIsDark }) {
  useScrollTop();

  return (
    <div className="min-h-screen flex flex-col bg-surface dark:bg-dark transition-colors duration-300">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
      <ScrollToTopButton />
    </div>
  );
}
