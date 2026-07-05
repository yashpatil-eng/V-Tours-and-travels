import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatCounter from '../components/StatCounter';
import { BUSINESS, STATS } from '../constants/config';

const VALUES = [
  { title: 'Punctuality', text: 'We respect your time. Our drivers arrive early, not just on time.' },
  { title: 'Transparency', text: 'Upfront pricing with no last-minute surprises or hidden charges.' },
  { title: 'Safety First', text: 'Well maintained vehicles and verified drivers on every trip.' },
  { title: 'Customer Care', text: 'A dedicated team available round the clock for your queries.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Vrunda Tours & Travels, founded by Dipak R. Patil, offering premium taxi and tour services with a customer-first approach since 2012."
        path="/about"
      />
      <PageHero
        title="About Vrunda Tours & Travels"
        subtitle="Building trust, one journey at a time."
        image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-20 bg-white dark:bg-white/5">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1000&auto=format&fit=crop"
            alt="Comfortable travel interior"
            loading="lazy"
            className="rounded-2xl shadow-card-hover w-full h-[420px] object-cover"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-subheading mb-2">Our Story</p>
            <h2 className="section-heading mb-5">
              From a Single Car to a Trusted Travel Brand
            </h2>
            <p className="text-dark/70 dark:text-white/70 mb-4 leading-relaxed">
              {BUSINESS.name} was founded by <strong>{BUSINESS.ownerName}</strong> (also known as{' '}
              {BUSINESS.alsoKnownAs}) with a simple goal: make travel across Maharashtra safe,
              comfortable, and dependable for every kind of traveler. What started as a single car
              service for local families has grown into a full fleet covering outstation taxis,
              corporate travel, weddings, and pilgrimage tours.
            </p>
            <p className="text-dark/70 dark:text-white/70 mb-6 leading-relaxed">
              Today, thousands of customers trust us for airport transfers, group tours, and long
              distance travel — because we treat every trip, big or small, with the same care and
              attention to detail.
            </p>
            <ul className="space-y-3">
              {['Verified professional drivers', 'Transparent, upfront pricing', '24×7 booking and support', 'Well maintained, sanitized fleet'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-dark dark:text-white">
                  <FiCheckCircle className="text-success shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section
        className="py-20 relative bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative z-10 container-custom grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <StatCounter key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface dark:bg-dark">
        <div className="container-custom">
          <SectionHeader eyebrow="Our Values" title="What Drives Us Every Day" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-white/5 rounded-2xl p-6 shadow-card"
              >
                <h3 className="font-heading font-semibold text-lg mb-2 text-dark dark:text-white">{value.title}</h3>
                <p className="text-sm text-dark/60 dark:text-white/60">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
