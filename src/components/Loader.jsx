import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center gap-4"
    >
      <div className="w-14 h-14 border-4 border-white/20 border-t-accent rounded-full animate-spin" />
      <p className="text-white font-heading font-semibold tracking-wide">Vrunda Tours & Travels</p>
    </motion.div>
  );
}
