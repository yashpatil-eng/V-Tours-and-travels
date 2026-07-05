import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? 'text-center max-w-2xl mx-auto' : ''}`}
    >
      {eyebrow && <p className="section-subheading mb-2">{eyebrow}</p>}
      <h2 className="section-heading">{title}</h2>
      {description && <p className="mt-4 text-dark/60 dark:text-white/60">{description}</p>}
    </motion.div>
  );
}
