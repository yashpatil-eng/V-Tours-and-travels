import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { BUSINESS } from '../constants/config';

const SECTIONS = [
  {
    title: '1. Information We Collect',
    body: 'When you book a ride or contact us through our website, we collect information you provide directly, such as your name, phone number, email address, pickup and drop locations, and travel dates. We do not collect information beyond what is necessary to process your booking.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'Your information is used solely to confirm bookings, coordinate driver assignment, communicate trip details, and respond to inquiries. We may also use your contact details to follow up on service quality or share offers, which you may opt out of at any time.',
  },
  {
    title: '3. Information Sharing',
    body: 'We do not sell, rent, or trade your personal information to third parties. Information may be shared with assigned drivers only to the extent necessary to complete your booking, such as your name, phone number, and pickup location.',
  },
  {
    title: '4. Data Security',
    body: 'We take reasonable measures to protect the information you share with us from unauthorized access, alteration, or disclosure. However, no method of electronic storage or transmission is completely secure.',
  },
  {
    title: '5. Cookies and Website Usage',
    body: 'Our website may use basic analytics to understand visitor traffic and improve user experience. This data is aggregated and does not personally identify you.',
  },
  {
    title: '6. Your Rights',
    body: 'You may request access to, correction of, or deletion of your personal information at any time by contacting us using the details below.',
  },
  {
    title: '7. Changes to This Policy',
    body: 'We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.',
  },
  {
    title: '8. Contact Us',
    body: `If you have questions about this privacy policy, please contact us at ${BUSINESS.email} or call ${BUSINESS.phoneDisplay}.`,
  },
];

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read the privacy policy of Vrunda Tours & Travels to understand how we collect, use, and protect your personal information."
        path="/privacy-policy"
      />
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop"
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
