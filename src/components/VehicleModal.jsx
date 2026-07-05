import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import BookingForm from './BookingForm';

export default function VehicleModal({ vehicle, onClose }) {
  return (
    <AnimatePresence>
      {vehicle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[95] bg-dark/70 flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl my-8"
          >
            <button
              onClick={onClose}
              aria-label="Close booking form"
              className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-white text-dark flex items-center justify-center shadow-card-hover"
            >
              <FiX size={18} />
            </button>
            <BookingForm presetVehicle={vehicle.name} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
