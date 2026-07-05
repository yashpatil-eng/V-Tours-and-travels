import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiPhoneCall } from 'react-icons/fi';
import SEO from '../components/SEO';
import { CALL_LINK } from '../constants/config';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <section className="min-h-[80vh] flex items-center justify-center bg-surface dark:bg-dark px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <p className="font-heading text-8xl font-bold text-primary dark:text-accent mb-4">404</p>
          <h1 className="font-heading text-2xl font-bold text-dark dark:text-white mb-3">
            Looks Like You&apos;ve Taken a Wrong Turn
          </h1>
          <p className="text-dark/60 dark:text-white/60 mb-8">
            The page you're looking for doesn't exist. Let's get you back on the road.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-primary"><FiHome /> Back to Home</Link>
            <a href={CALL_LINK} className="btn-outline !border-primary !text-primary dark:!border-white dark:!text-white">
              <FiPhoneCall /> Call Us
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
