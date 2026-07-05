import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../constants/config';

// Initialize EmailJS client if public key is present
try {
  if (EMAILJS_CONFIG.publicKey && !EMAILJS_CONFIG.publicKey.includes('your')) {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    // small log to help debugging during dev
    // eslint-disable-next-line no-console
    console.info('EmailJS initialized');
  }
} catch (e) {
  // eslint-disable-next-line no-console
  console.warn('EmailJS init failed', e);
}

export function isEmailConfigured() {
  return (
    EMAILJS_CONFIG.serviceId &&
    EMAILJS_CONFIG.templateId &&
    EMAILJS_CONFIG.publicKey &&
    !EMAILJS_CONFIG.serviceId.includes('your') &&
    !EMAILJS_CONFIG.templateId.includes('your') &&
    !EMAILJS_CONFIG.publicKey.includes('your')
  );
}

export async function sendEmail(templateId, variables) {
  if (!isEmailConfigured()) {
    // do not attempt to send when configuration is missing
    // eslint-disable-next-line no-console
    console.warn('EmailJS not configured, skipping send');
    return null;
  }

  // Use the provided templateId or fall back to config
  const tpl = templateId || EMAILJS_CONFIG.templateId;
  // eslint-disable-next-line no-console
  console.info('Sending EmailJS email', { service: EMAILJS_CONFIG.serviceId, template: tpl });
  return emailjs.send(EMAILJS_CONFIG.serviceId, tpl, variables, EMAILJS_CONFIG.publicKey);
}
