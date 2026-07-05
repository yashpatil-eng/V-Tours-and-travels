import { useState } from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import VehicleCard from '../components/VehicleCard';
import VehicleModal from '../components/VehicleModal';
import { FLEET } from '../constants/config';

export default function Fleet() {
  const [activeVehicle, setActiveVehicle] = useState(null);

  return (
    <>
      <SEO
        title="Our Fleet"
        description="Explore Vrunda Tours & Travels' fleet: 4 seater sedans, 6 seater SUVs, 7 seater Innova-type vehicles, and 20 seater mini buses for any group size."
        path="/fleet"
      />
      <PageHero
        title="Our Fleet"
        subtitle="Modern, well maintained vehicles for every kind of journey."
        image="/images/bus4.jpeg"
      />

      <section className="py-20 bg-surface dark:bg-dark">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Choose Your Ride"
            title="A Vehicle for Every Group Size"
            description="All vehicles are sanitized, GPS tracked, and driven by verified professional drivers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLEET.map((vehicle, i) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} onBook={setActiveVehicle} />
            ))}
          </div>
        </div>
      </section>

      <VehicleModal vehicle={activeVehicle} onClose={() => setActiveVehicle(null)} />
    </>
  );
}
