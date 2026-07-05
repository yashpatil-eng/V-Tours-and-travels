import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { WHATSAPP_LINK, CALL_LINK } from '../constants/config';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3">
      <a
        href={CALL_LINK}
        aria-label="Call us now"
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-card-hover hover:scale-110 transition-transform animate-float"
      >
        <FiPhoneCall size={24} />
      </a>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-card-hover hover:scale-110 transition-transform"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
