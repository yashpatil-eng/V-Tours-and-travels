import { motion } from 'framer-motion';
import {
  FaPlaneArrival,
  FaPlaneDeparture,
  FaTrain,
  FaRoute,
  FaSyncAlt,
  FaBriefcase,
  FaHeart,
  FaMapMarkedAlt,
  FaLandmark,
  FaUsers,
  FaUserFriends,
  FaCamera,
  FaCar,
} from 'react-icons/fa';

const ICONS = {
  'plane-arrival': FaPlaneArrival,
  'plane-departure': FaPlaneDeparture,
  train: FaTrain,
  route: FaRoute,
  refresh: FaSyncAlt,
  briefcase: FaBriefcase,
  heart: FaHeart,
  map: FaMapMarkedAlt,
  landmark: FaLandmark,
  users: FaUsers,
  'user-group': FaUserFriends,
  camera: FaCamera,
  car: FaCar,
};

export default function ServiceCard({ service, index = 0 }) {
  const Icon = ICONS[service.icon] || FaCar;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.07 }}
      className="bg-white dark:bg-white/5 rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center mb-4">
        <Icon size={22} />
      </div>
      <h3 className="font-heading font-semibold text-base mb-2 text-dark dark:text-white">{service.title}</h3>
      <p className="text-sm text-dark/60 dark:text-white/60">{service.description}</p>
    </motion.div>
  );
}
