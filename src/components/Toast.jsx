import { AnimatePresence, motion } from 'framer-motion';
import { FiCheckCircle, FiAlertCircle, FiX } from 'react-icons/fi';

export default function Toast({ toast, onClose }) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -30, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -30, x: '-50%' }}
          className={`fixed top-24 left-1/2 z-[110] px-5 py-4 rounded-xl shadow-card-hover flex items-center gap-3 max-w-sm w-[90%] ${
            toast.type === 'success' ? 'bg-success text-white' : 'bg-red-600 text-white'
          }`}
        >
          {toast.type === 'success' ? <FiCheckCircle size={20} /> : <FiAlertCircle size={20} />}
          <p className="text-sm flex-1">{toast.message}</p>
          <button onClick={onClose} aria-label="Dismiss notification">
            <FiX size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
