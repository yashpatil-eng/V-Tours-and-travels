import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import { SERVICES, CALL_LINK } from '../constants/config';

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Airport pickup and drop, railway pickup, one way and round trip taxi, corporate travel, wedding travel, tour packages, pilgrimage tours and more."
        path="/services"
      />
      <PageHero
        title="Our Services"
        subtitle="Complete travel solutions for every occasion, near or far."
        image="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-20 bg-surface dark:bg-dark">
        <div className="container-custom">
          <SectionHeader
            eyebrow="What We Offer"
            title="13 Services, One Reliable Partner"
            description="Whichever kind of trip you're planning, we have a service designed for it."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            Not sure which service fits your trip?
          </h2>
          <p className="text-white/80 mb-7 max-w-lg mx-auto">
            Call us and our team will help you choose the right vehicle and package for your journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={CALL_LINK} className="btn-accent"><FiPhoneCall /> Call Now</a>
            <Link to="/contact" className="btn-outline">Book Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
