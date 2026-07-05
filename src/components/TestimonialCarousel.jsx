import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';
import { TESTIMONIALS } from '../constants/config';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="!pb-12"
    >
      {TESTIMONIALS.map((t) => (
        <SwiperSlide key={t.id}>
          <div className="bg-white dark:bg-white/5 rounded-2xl p-6 shadow-card h-full flex flex-col">
            <div className="flex gap-1 text-accent mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <FiStar key={i} fill="currentColor" size={16} />
              ))}
            </div>
            <p className="text-sm text-dark/70 dark:text-white/70 flex-1 mb-4 leading-relaxed">
              &ldquo;{t.text}&rdquo;
            </p>
            <div>
              <p className="font-heading font-semibold text-dark dark:text-white">{t.name}</p>
              <p className="text-xs text-primary dark:text-accent">{t.location}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
