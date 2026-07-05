import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import BookingForm from '../components/BookingForm';
import { BUSINESS, CALL_LINK, EMAIL_LINK, WHATSAPP_LINK } from '../constants/config';

const CONTACT_ITEMS = [
  { icon: FiPhone, label: 'Call Us', value: BUSINESS.phoneDisplay, href: CALL_LINK },
  { icon: FaWhatsapp, label: 'WhatsApp', value: BUSINESS.phoneDisplay, href: WHATSAPP_LINK },
  { icon: FiMail, label: 'Email Us', value: BUSINESS.email, href: EMAIL_LINK },
  { icon: FiMapPin, label: 'Location', value: BUSINESS.address, href: null },
  { icon: FiClock, label: 'Working Hours', value: 'Open 24 hours, 7 days a week', href: null },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Vrunda Tours & Travels via call, WhatsApp, email, or our booking form. Available 24x7 for your travel needs."
        path="/contact"
      />
      <PageHero
        title="Contact Us"
        subtitle="We're just a call, message, or click away."
        image="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-20 bg-white dark:bg-white/5">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 bg-surface dark:bg-white/5 rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-shadow">
                  <div className="w-11 h-11 rounded-full bg-primary/10 text-primary dark:text-accent flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-dark/50 dark:text-white/50 mb-0.5">{item.label}</p>
                    <p className="font-medium text-dark dark:text-white break-words">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            <div className="rounded-2xl overflow-hidden shadow-card h-64">
              <iframe
                title="Vrunda Tours & Travels location map"
                src={BUSINESS.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
