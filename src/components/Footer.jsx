import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import { BUSINESS, CALL_LINK, EMAIL_LINK, NAV_LINKS, SERVICES } from '../constants/config';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading font-bold text-xl mb-3">
            Vrunda <span className="text-accent">Tours</span>
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            {BUSINESS.tagline}. Premium taxi, tour and travel services with a modern fleet and
            professional drivers, available 24×7.
          </p>
          <div className="flex gap-3">
            <a href={BUSINESS.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-dark transition-colors">
              <FiFacebook size={16} />
            </a>
            <a href={BUSINESS.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-dark transition-colors">
              <FiInstagram size={16} />
            </a>
            <a href={BUSINESS.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-dark transition-colors">
              <FiYoutube size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-white/70 hover:text-accent transition-colors text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Our Services</h4>
          <ul className="space-y-2">
            {SERVICES.slice(0, 6).map((service) => (
              <li key={service.id} className="text-white/70 text-sm">
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <FiMapPin className="shrink-0 mt-1 text-accent" /> {BUSINESS.address}
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="shrink-0 text-accent" />
              <a href={CALL_LINK} className="hover:text-accent">{BUSINESS.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="shrink-0 text-accent" />
              <a href={EMAIL_LINK} className="hover:text-accent break-all">{BUSINESS.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/50">
        <p>© {year} Vrunda Tours & Travels. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-accent">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
