import { motion } from 'framer-motion';
import { FiUsers, FiCheck } from 'react-icons/fi';
import { WHATSAPP_LINK } from '../constants/config';

export default function VehicleCard({ vehicle, index = 0, onBook }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-accent text-dark text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
          <FiUsers size={12} /> {vehicle.capacity}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl text-dark dark:text-white mb-1">{vehicle.name}</h3>
        <p className="text-xs text-primary dark:text-accent font-medium mb-4">{vehicle.idealFor}</p>
        <ul className="space-y-2 mb-6">
          {vehicle.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-dark/70 dark:text-white/70">
              <FiCheck className="text-success shrink-0" /> {feature}
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <button onClick={() => onBook?.(vehicle)} className="flex-1 btn-primary text-sm py-2.5">
            Book Now
          </button>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex-1 btn-outline !border-primary !text-primary dark:!border-white dark:!text-white text-sm py-2.5"
          >
            Enquire
          </a>
        </div>
      </div>
    </motion.div>
  );
}
