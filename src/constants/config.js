/**
 * =============================================================
 * SITE CONFIGURATION FILE
 * =============================================================
 * This is the ONLY file the business owner needs to edit to
 * update phone numbers, email, fleet, services, gallery images,
 * or testimonials. No other component should hardcode this data.
 * =============================================================
 */

export const BUSINESS = {
  name: 'Vrunda Tours & Travels',
  ownerName: 'Dipak R. Patil',
  alsoKnownAs: 'Vishal Patil',
  tagline: 'Your Trusted Travel Partner, Every Mile of the Way',
  phone: '+918693035814',
  phoneDisplay: '+91 86930 35814',
  email: 'deepakpatil78367@gmail.com',
  whatsappNumber: '918693035814',
  whatsappMessage: 'Hello Vrunda Tours and Travels, I would like to book a vehicle.',
  address: 'Maharashtra, India',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59978.02!2d73.7898!3d19.9975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzUxLjAiTiA3M8KwNDcnMjMuMyJF!5e0!3m2!1sen!2sin!4v1700000000000',
  yearFounded: 2012,
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
};

export const CALL_LINK = `tel:${BUSINESS.phone}`;
export const WHATSAPP_LINK = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(
  BUSINESS.whatsappMessage
)}`;
export const EMAIL_LINK = `mailto:${BUSINESS.email}`;

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

export const STATS = [
  { id: 'years', label: 'Years of Experience', value: 13, suffix: '+' },
  { id: 'customers', label: 'Happy Customers', value: 25000, suffix: '+' },
  { id: 'vehicles', label: 'Fleet Vehicles', value: 40, suffix: '+' },
  { id: 'cities', label: 'Cities Covered', value: 120, suffix: '+' },
];

export const FEATURES = [
  { id: 'support', title: '24×7 Service', description: 'Round the clock booking and support, every single day of the year.', icon: 'clock' },
  { id: 'drivers', title: 'Professional Drivers', description: 'Verified, experienced and courteous drivers for a safe ride.', icon: 'user' },
  { id: 'safety', title: 'Safe Journey', description: 'GPS tracked vehicles and well maintained fleet for a secure trip.', icon: 'shield' },
  { id: 'pricing', title: 'Affordable Pricing', description: 'Transparent, upfront fares with zero hidden charges.', icon: 'tag' },
  { id: 'clean', title: 'Sanitized Vehicles', description: 'Every vehicle is deep cleaned and sanitized before each trip.', icon: 'spray' },
  { id: 'comfort', title: 'Comfortable Ride', description: 'Spacious, air-conditioned cabins for a relaxed journey.', icon: 'seat' },
];

export const FLEET = [
  {
    id: '4-seater',
    name: '4 Seater Sedan',
    capacity: '4 Passengers',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1200&auto=format&fit=crop',
    features: ['Air Conditioning', '2 Medium Bags', 'Music System', 'Ideal for Small Families'],
    idealFor: 'Outstation trips, airport transfers, and city rides',
  },
  {
    id: '6-seater',
    name: '6 Seater SUV',
    capacity: '6 Passengers',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
    features: ['Air Conditioning', 'Extra Legroom', '4 Large Bags', 'Push-back Seats'],
    idealFor: 'Family trips and group sightseeing',
  },
  {
    id: '7-seater',
    name: '7 Seater Innova / Similar',
    capacity: '7 Passengers',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop',
    features: ['Premium Interiors', 'Captain Seats', '5 Large Bags', 'Charging Ports'],
    idealFor: 'Corporate travel and long tours',
  },
  {
    id: '20-seater',
    name: '20 Seater Mini Bus',
    capacity: '20 Passengers',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    features: ['Air Conditioning', 'Reclining Seats', 'PA System', 'Luggage Carrier'],
    idealFor: 'Group tours, weddings, and corporate events',
  },
];

export const SERVICES = [
  { id: 'airport-pickup', title: 'Airport Pickup', description: 'On-time pickup from any airport with live flight tracking so we are always ready when you land.', icon: 'plane-arrival' },
  { id: 'airport-drop', title: 'Airport Drop', description: 'Stress-free drop to the airport with buffer time built into every schedule.', icon: 'plane-departure' },
  { id: 'railway-pickup', title: 'Railway Pickup', description: 'Reliable pickup from railway stations, day or night.', icon: 'train' },
  { id: 'one-way', title: 'One Way Trip', description: 'Pay only for a one way outstation drop with no return charges.', icon: 'route' },
  { id: 'round-trip', title: 'Round Trip', description: 'Comfortable round trips with a dedicated driver for your entire journey.', icon: 'refresh' },
  { id: 'corporate', title: 'Corporate Travel', description: 'Reliable employee transport and business travel solutions for companies.', icon: 'briefcase' },
  { id: 'wedding', title: 'Wedding Travel', description: 'Decorated vehicles and coordinated fleets for wedding functions and guest transport.', icon: 'heart' },
  { id: 'tour-packages', title: 'Tour Packages', description: 'Curated multi-day tour packages covering popular destinations across India.', icon: 'map' },
  { id: 'pilgrimage', title: 'Pilgrimage Tours', description: 'Comfortable travel to pilgrimage and temple destinations with flexible halts.', icon: 'landmark' },
  { id: 'family-tours', title: 'Family Tours', description: 'Spacious, safe vehicles designed for relaxed family vacations.', icon: 'users' },
  { id: 'group-tours', title: 'Group Tours', description: 'Mini buses and multiple vehicle coordination for large groups.', icon: 'user-group' },
  { id: 'sightseeing', title: 'Local Sightseeing', description: 'Half-day and full-day local sightseeing packages with an experienced local driver.', icon: 'camera' },
  { id: 'outstation', title: 'Outstation Taxi', description: 'Safe, comfortable outstation taxi service to any city, any distance.', icon: 'car' },
];

export const GALLERY = [
  { id: 'g1', src: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1000&auto=format&fit=crop', alt: 'Scenic mountain highway road trip' },
  { id: 'g2', src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop', alt: 'Family enjoying a road trip' },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop', alt: 'Scenic countryside travel view' },
  { id: 'g4', src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop', alt: 'Luxury sedan car exterior' },
  { id: 'g5', src: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1000&auto=format&fit=crop', alt: 'SUV parked on scenic route' },
  { id: 'g6', src: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1000&auto=format&fit=crop', alt: 'Comfortable car interior' },
  { id: 'g7', src: 'https://images.unsplash.com/photo-1473625247510-8ceb1760488f?q=80&w=1000&auto=format&fit=crop', alt: 'Group tour bus travel' },
  { id: 'g8', src: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=1000&auto=format&fit=crop', alt: 'Temple pilgrimage destination' },
  { id: 'g9', src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1000&auto=format&fit=crop', alt: 'Beautiful travel landscape' },
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Ramesh Joshi',
    location: 'Pune',
    rating: 5,
    text: 'Booked an outstation cab for a family trip to Mahabaleshwar. The car was spotless and the driver was extremely polite and safe. Highly recommend Vrunda Tours!',
  },
  {
    id: 't2',
    name: 'Sneha Kulkarni',
    location: 'Nashik',
    rating: 5,
    text: 'Used their airport pickup service twice now. Both times the driver was waiting on time with a name board. Very professional service.',
  },
  {
    id: 't3',
    name: 'Amit Deshmukh',
    location: 'Mumbai',
    rating: 5,
    text: 'We booked the 20 seater bus for a company offsite. Coordination was smooth and pricing was transparent from the start.',
  },
  {
    id: 't4',
    name: 'Priya Shah',
    location: 'Nagpur',
    rating: 4,
    text: 'Great experience for our pilgrimage tour. The driver knew all the local routes and stops. Will book again for our next trip.',
  },
  {
    id: 't5',
    name: 'Vikram Rao',
    location: 'Aurangabad',
    rating: 5,
    text: 'Wedding travel coordination for 6 vehicles was handled flawlessly. Every car arrived on time and clean. Thank you Vrunda team!',
  },
];

export const FAQS = [
  { id: 'f1', question: 'How do I book a cab with Vrunda Tours & Travels?', answer: 'You can book instantly by calling us, messaging on WhatsApp, sending an email, or filling out the booking form on our website. We confirm every booking within minutes.' },
  { id: 'f2', question: 'What vehicles are available for booking?', answer: 'We offer 4 seater sedans, 6 seater SUVs, 7 seater Innova-type vehicles, and 20 seater mini buses to suit trips of any group size.' },
  { id: 'f3', question: 'Do you provide outstation one-way trips?', answer: 'Yes, we offer both one-way and round-trip outstation taxi services with transparent, upfront pricing and no hidden charges.' },
  { id: 'f4', question: 'Are your drivers verified and experienced?', answer: 'All our drivers are background verified, licensed professionals with years of driving experience on both city and highway routes.' },
  { id: 'f5', question: 'Can I book a vehicle for a wedding or corporate event?', answer: 'Absolutely. We specialize in coordinating multiple vehicles for weddings and corporate events, including decorated cars on request.' },
  { id: 'f6', question: 'What payment methods do you accept?', answer: 'We accept cash, UPI, and major payment apps. Payment details are shared and confirmed at the time of booking.' },
  { id: 'f7', question: 'Is the vehicle sanitized before every trip?', answer: 'Yes, every vehicle in our fleet is deep cleaned and sanitized before each and every trip for your safety and comfort.' },
  { id: 'f8', question: 'Do you offer tour packages to pilgrimage destinations?', answer: 'Yes, we offer curated pilgrimage tour packages with flexible halts, experienced drivers, and comfortable vehicles.' },
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Fleet', path: '/fleet' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];
