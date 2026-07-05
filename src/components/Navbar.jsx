import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhoneCall, FiMoon, FiSun } from 'react-icons/fi';
import { BUSINESS, CALL_LINK, NAV_LINKS } from '../constants/config';

export default function Navbar({ isDark, setIsDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-custom flex items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 font-heading font-bold text-xl">
          <span
            className={`transition-colors ${
              scrolled ? 'text-primary dark:text-white' : 'text-white'
            }`}
          >
            Vrunda <span className="text-accent">Tours</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-accent after:transition-all ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  } ${
                    scrolled ? 'text-dark dark:text-white' : 'text-white'
                  } ${isActive ? 'text-accent' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className={`p-2 rounded-full transition-colors ${
              scrolled ? 'text-dark dark:text-white hover:bg-surface dark:hover:bg-white/10' : 'text-white hover:bg-white/10'
            }`}
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <a href={CALL_LINK} className="btn-primary text-sm px-5 py-2.5">
            <FiPhoneCall /> {BUSINESS.phoneDisplay}
          </a>
        </div>

        <button
          className={`lg:hidden p-2 ${scrolled ? 'text-dark dark:text-white' : 'text-white'}`}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu size={26} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/60 z-50 lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white dark:bg-dark p-6 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-heading font-bold text-lg text-primary dark:text-white">Vrunda Tours</span>
                <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  <FiX size={24} className="text-dark dark:text-white" />
                </button>
              </div>
              <ul className="flex flex-col gap-5">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-lg font-medium ${isActive ? 'text-accent' : 'text-dark dark:text-white'}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="flex items-center gap-2 justify-center py-2 rounded-full border border-primary/30 text-dark dark:text-white"
                >
                  {isDark ? <FiSun /> : <FiMoon />} {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
                <a href={CALL_LINK} className="btn-primary justify-center">
                  <FiPhoneCall /> Call Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
