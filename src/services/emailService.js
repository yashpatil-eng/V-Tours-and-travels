import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../constants/config';

export async function sendEmail(templateId, variables) {
  if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.publicKey || !EMAILJS_CONFIG.templateId) {
    console.warn('EmailJS not configured, skipping send');
    return null;
  }

  return emailjs.send(EMAILJS_CONFIG.serviceId, templateId || EMAILJS_CONFIG.templateId, variables, EMAILJS_CONFIG.publicKey);
}
