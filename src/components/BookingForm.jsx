import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import { EMAILJS_CONFIG, FLEET, CALL_LINK, WHATSAPP_LINK } from '../constants/config';
import Toast from './Toast';

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  pickup: '',
  drop: '',
  journeyDate: '',
  returnDate: '',
  vehicle: FLEET[0].name,
  passengers: '',
  message: '',
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Full name is required';
  if (!/^[+]?[\d\s-]{10,14}$/.test(form.phone.trim())) errors.phone = 'Enter a valid phone number';
  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) errors.email = 'Enter a valid email address';
  if (!form.pickup.trim()) errors.pickup = 'Pickup location is required';
  if (!form.drop.trim()) errors.drop = 'Drop location is required';
  if (!form.journeyDate) errors.journeyDate = 'Journey date is required';
  if (form.passengers && (Number(form.passengers) <= 0 || Number(form.passengers) > 60))
    errors.passengers = 'Enter a valid number of passengers';
  return errors;
}

export default function BookingForm({ presetVehicle }) {
  const [form, setForm] = useState({
    ...INITIAL_FORM,
    vehicle: presetVehicle || INITIAL_FORM.vehicle,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);

    try {
      const configured =
        EMAILJS_CONFIG.serviceId &&
        EMAILJS_CONFIG.templateId &&
        EMAILJS_CONFIG.publicKey &&
        !EMAILJS_CONFIG.serviceId.includes('your') &&
        !EMAILJS_CONFIG.templateId.includes('your') &&
        !EMAILJS_CONFIG.publicKey.includes('your');

      if (configured) {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          {
            from_name: form.name,
            phone: form.phone,
            email: form.email,
            pickup: form.pickup,
            drop: form.drop,
            journey_date: form.journeyDate,
            return_date: form.returnDate,
            vehicle: form.vehicle,
            passengers: form.passengers,
            message: form.message,
          },
          EMAILJS_CONFIG.publicKey
        );
        setToast({ type: 'success', message: 'Booking request sent! We will contact you shortly.' });
      } else {
        // EmailJS not configured (placeholder values detected) — simulate success for dev,
        // but show a helpful message prompting users to call or WhatsApp.
        await new Promise((resolve) => setTimeout(resolve, 800));
        setToast({
          type: 'success',
          message: `Booking saved. Email service not configured — please call or WhatsApp us: ${CALL_LINK} / ${WHATSAPP_LINK}`,
        });
      }
      setForm(INITIAL_FORM);
    } catch (err) {
      console.error('EmailJS send error:', err);
      setToast({ type: 'error', message: 'Something went wrong sending email. Please call or WhatsApp us directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border bg-white dark:bg-white/5 text-dark dark:text-white placeholder:text-dark/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
      errors[field] ? 'border-red-500' : 'border-dark/10 dark:border-white/10'
    }`;

  return (
    <>
      <Toast toast={toast} onClose={() => setToast(null)} />
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        noValidate
        className="bg-white dark:bg-white/5 rounded-2xl shadow-card p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        <div className="sm:col-span-2">
          <h3 className="font-heading text-2xl font-bold text-dark dark:text-white mb-1">Book Your Ride</h3>
          <p className="text-sm text-dark/60 dark:text-white/60">Fill the form and we will confirm your booking within minutes.</p>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-dark dark:text-white">Name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} className={inputClass('name')} placeholder="Your full name" />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1.5 text-dark dark:text-white">Phone</label>
          <input id="phone" name="phone" value={form.phone} onChange={handleChange} className={inputClass('phone')} placeholder="+91 98765 43210" />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-dark dark:text-white">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass('email')} placeholder="you@example.com" />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="pickup" className="block text-sm font-medium mb-1.5 text-dark dark:text-white">Pickup Location</label>
          <input id="pickup" name="pickup" value={form.pickup} onChange={handleChange} className={inputClass('pickup')} placeholder="e.g. Pune Railway Station" />
          {errors.pickup && <p className="text-xs text-red-500 mt-1">{errors.pickup}</p>}
        </div>

        <div>
          <label htmlFor="drop" className="block text-sm font-medium mb-1.5 text-dark dark:text-white">Drop Location</label>
          <input id="drop" name="drop" value={form.drop} onChange={handleChange} className={inputClass('drop')} placeholder="e.g. Mahabaleshwar" />
          {errors.drop && <p className="text-xs text-red-500 mt-1">{errors.drop}</p>}
        </div>

        <div>
          <label htmlFor="journeyDate" className="block text-sm font-medium mb-1.5 text-dark dark:text-white">Journey Date</label>
          <input id="journeyDate" type="date" name="journeyDate" value={form.journeyDate} onChange={handleChange} className={inputClass('journeyDate')} />
          {errors.journeyDate && <p className="text-xs text-red-500 mt-1">{errors.journeyDate}</p>}
        </div>

        <div>
          <label htmlFor="returnDate" className="block text-sm font-medium mb-1.5 text-dark dark:text-white">Return Date (optional)</label>
          <input id="returnDate" type="date" name="returnDate" value={form.returnDate} onChange={handleChange} className={inputClass('returnDate')} />
        </div>

        <div>
          <label htmlFor="vehicle" className="block text-sm font-medium mb-1.5 text-dark dark:text-white">Vehicle</label>
          <select id="vehicle" name="vehicle" value={form.vehicle} onChange={handleChange} className={inputClass('vehicle')}>
            {FLEET.map((v) => (
              <option key={v.id} value={v.name}>{v.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="passengers" className="block text-sm font-medium mb-1.5 text-dark dark:text-white">Passengers</label>
          <input id="passengers" type="number" min="1" max="60" name="passengers" value={form.passengers} onChange={handleChange} className={inputClass('passengers')} placeholder="Number of passengers" />
          {errors.passengers && <p className="text-xs text-red-500 mt-1">{errors.passengers}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-dark dark:text-white">Message (optional)</label>
          <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} className={inputClass('message')} placeholder="Any additional requirements..." />
        </div>

        <div className="sm:col-span-2">
          <button type="submit" disabled={submitting} className="btn-accent w-full sm:w-auto disabled:opacity-60">
            {submitting ? 'Sending...' : (<><FiSend /> Send Booking Request</>)}
          </button>
        </div>
      </motion.form>
    </>
  );
}
