import { motion } from 'framer-motion';
import {
  FiClock,
  FiUser,
  FiShield,
  FiTag,
  FiWind,
  FiHeart,
} from 'react-icons/fi';

const ICONS = {
  clock: FiClock,
  user: FiUser,
  shield: FiShield,
  tag: FiTag,
  spray: FiWind,
  seat: FiHeart,
};

export default function FeatureCard({ title, description, icon, index = 0 }) {
  const Icon = ICONS[icon] || FiShield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white dark:bg-white/5 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary dark:text-accent flex items-center justify-center mb-4">
        <Icon size={22} />
      </div>
      <h3 className="font-heading font-semibold text-lg mb-2 text-dark dark:text-white">{title}</h3>
      <p className="text-sm text-dark/60 dark:text-white/60">{description}</p>
    </motion.div>
  );
}
