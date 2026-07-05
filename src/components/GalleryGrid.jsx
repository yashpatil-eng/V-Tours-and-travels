import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function GalleryGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1)),
    [images.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1)),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <motion.button
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
            onClick={() => setActiveIndex(index)}
            className="relative aspect-square overflow-hidden rounded-xl group"
            aria-label={`View ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-dark/90 flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close lightbox"
              className="absolute top-5 right-5 text-white p-2 hover:bg-white/10 rounded-full"
            >
              <FiX size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              className="absolute left-3 sm:left-8 text-white p-2 hover:bg-white/10 rounded-full"
            >
              <FiChevronLeft size={30} />
            </button>
            <motion.img
              key={images[activeIndex].id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="max-h-[80vh] max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-3 sm:right-8 text-white p-2 hover:bg-white/10 rounded-full"
            >
              <FiChevronRight size={30} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
