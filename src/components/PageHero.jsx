import { motion } from 'framer-motion';

export default function PageHero({ title, subtitle, image }) {
  return (
    <section
      className="relative h-[45vh] min-h-[320px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl sm:text-5xl font-bold text-white"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-white/80 max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
