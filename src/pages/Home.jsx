import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiPhoneCall, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';
import VehicleCard from '../components/VehicleCard';
import ServiceCard from '../components/ServiceCard';
import StatCounter from '../components/StatCounter';
import TestimonialCarousel from '../components/TestimonialCarousel';
import VehicleModal from '../components/VehicleModal';
import { useState } from 'react';
import {
  BUSINESS,
  CALL_LINK,
  WHATSAPP_LINK,
  FEATURES,
  FLEET,
  SERVICES,
  STATS,
  GALLERY,
} from '../constants/config';

export default function Home() {
  const [activeVehicle, setActiveVehicle] = useState(null);

  return (
    <>
      <SEO
        title="Premium Taxi & Tour Booking"
        description="Book premium taxis, tour packages, airport transfers and outstation cabs with Vrunda Tours & Travels. 24x7 service, professional drivers, transparent pricing."
        path="/"
      />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/car2.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative z-10 container-custom pt-28 pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent font-semibold tracking-wide uppercase mb-4"
          >
            Welcome to {BUSINESS.name}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight"
          >
            Travel in Comfort, <span className="text-accent">Arrive with a Smile</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-white/80 max-w-xl text-lg"
          >
            Premium outstation taxis, airport transfers, corporate travel and curated tour packages —
            available 24×7 with professional, verified drivers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a href={CALL_LINK} className="btn-accent">
              <FiPhoneCall /> Call Now
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-outline">
              <FaWhatsapp /> WhatsApp
            </a>
            <Link to="/contact" className="btn-outline">
              Book Now
            </Link>
            <Link to="/about" className="text-white font-medium flex items-center gap-1 hover:text-accent transition-colors px-2 py-3">
              Learn More <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-surface dark:bg-dark">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Why Travel With Us"
            title="Built Around Your Comfort and Safety"
            description="Every trip with Vrunda Tours & Travels is designed to be safe, comfortable, and dependable."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <FeatureCard key={feature.id} index={i} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="py-20 bg-white dark:bg-white/5">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src=".jpeg"
              alt="Vrunda Tours fleet vehicle"
              loading="lazy"
              className="rounded-2xl shadow-card-hover w-full h-[420px] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-subheading mb-2">About {BUSINESS.name}</p>
            <h2 className="section-heading mb-5">
              A Trusted Name in Travel Since {BUSINESS.yearFounded}
            </h2>
            <p className="text-dark/70 dark:text-white/70 mb-4 leading-relaxed">
              Founded by <strong>{BUSINESS.ownerName}</strong>, {BUSINESS.name} has grown from a single
              vehicle to a full fleet serving families, corporates, and pilgrims across Maharashtra and
              beyond. We combine local road knowledge with a customer-first mindset to make every
              journey comfortable, punctual, and worry-free.
            </p>
            <p className="text-dark/70 dark:text-white/70 mb-6 leading-relaxed">
              Whether it&apos;s an early morning airport run, a multi-day pilgrimage tour, or a full fleet
              for a wedding, our team plans every detail so you can simply enjoy the ride.
            </p>
            <Link to="/about" className="btn-primary">
              More About Us <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FLEET PREVIEW */}
      <section className="py-20 bg-surface dark:bg-dark">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Fleet"
            title="A Vehicle for Every Journey"
            description="From solo business trips to large group tours, we have the right vehicle ready."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLEET.map((vehicle, i) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} onBook={setActiveVehicle} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/fleet" className="btn-primary">
              View Full Fleet <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        className="py-20 bg-cover bg-fixed bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1920&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative z-10 container-custom grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <StatCounter key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-white dark:bg-white/5">
        <div className="container-custom">
          <SectionHeader
            eyebrow="What We Offer"
            title="Complete Travel Solutions"
            description="From daily commutes to destination weddings, we cover every kind of travel need."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {SERVICES.slice(0, 8).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              View All Services <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-surface dark:bg-dark">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Customers Say"
            description="Real feedback from real travelers who trusted us with their journey."
          />
          <TestimonialCarousel />
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 bg-white dark:bg-white/5">
        <div className="container-custom">
          <SectionHeader eyebrow="Gallery" title="Moments From the Road" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {GALLERY.slice(0, 8).map((img) => (
              <img
                key={img.id}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="rounded-xl aspect-square object-cover hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-primary">
              View Full Gallery <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Plan Your Next Trip?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Call us, message us on WhatsApp, or fill out the booking form — we&apos;ll take care of the rest.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={CALL_LINK} className="btn-accent"><FiPhoneCall /> Call Now</a>
            <Link to="/contact" className="btn-outline">Book Now</Link>
          </div>
        </div>
      </section>

      <VehicleModal vehicle={activeVehicle} onClose={() => setActiveVehicle(null)} />
    </>
  );
}
