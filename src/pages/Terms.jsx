import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { BUSINESS } from '../constants/config';

const SECTIONS = [
  {
    title: '1. Booking and Confirmation',
    body: 'All bookings made through our website, phone, WhatsApp, or email are subject to vehicle availability. A booking is considered confirmed only after we send explicit confirmation via call, message, or email.',
  },
  {
    title: '2. Fares and Payment',
    body: 'Fares quoted at the time of booking are based on the pickup, drop location, vehicle type, and travel dates provided. Additional charges may apply for route changes, extra waiting time, toll, or parking, and will be communicated in advance wherever possible.',
  },
  {
    title: '3. Cancellations',
    body: 'Cancellations made well in advance of the scheduled pickup time will generally be free of charge. Cancellations made close to the pickup time may be subject to a cancellation fee to cover driver allocation costs.',
  },
  {
    title: '4. Customer Responsibilities',
    body: 'Customers are expected to provide accurate pickup and drop details and be ready at the agreed time. Vrunda Tours & Travels is not responsible for delays caused by incorrect information provided by the customer.',
  },
  {
    title: '5. Vehicle and Driver Conduct',
    body: 'We ensure all vehicles are maintained and drivers are verified and trained. Customers experiencing any issue during a trip should contact us immediately for resolution.',
  },
  {
    title: '6. Luggage and Belongings',
    body: 'Customers are responsible for their personal belongings during the trip. Please check the vehicle before disembarking to ensure nothing is left behind.',
  },
  {
    title: '7. Liability',
    body: 'While we take every precaution to ensure a safe journey, Vrunda Tours & Travels shall not be held liable for delays or losses due to circumstances beyond our control, including but not limited to weather, traffic, or road conditions.',
  },
  {
    title: '8. Changes to These Terms',
    body: 'We reserve the right to update these terms and conditions at any time. Continued use of our services after changes constitutes acceptance of the updated terms.',
  },
  {
    title: '9. Contact Us',
    body: `For any questions regarding these terms, please reach out to us at ${BUSINESS.email} or call ${BUSINESS.phoneDisplay}.`,
  },
];

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Read the terms and conditions for booking and using services from Vrunda Tours & Travels."
        path="/terms-and-conditions"
      />
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read carefully before booking a trip with us."
        image="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-20 bg-white dark:bg-white/5">
        <div className="container-custom max-w-3xl">
          <p className="text-sm text-dark/50 dark:text-white/50 mb-8">Last updated: January 2026</p>
          <div className="space-y-8">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading font-semibold text-xl text-dark dark:text-white mb-2">{section.title}</h2>
                <p className="text-dark/70 dark:text-white/70 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
