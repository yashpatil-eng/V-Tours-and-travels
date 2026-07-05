import { collection, addDoc, serverTimestamp, doc, updateDoc, getDocs, query, orderBy, deleteDoc } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../firebase/firebase';

let bookingsCol = null;
if (isFirebaseConfigured) {
  bookingsCol = collection(db, 'bookings');
}

export async function addBooking(booking) {
  if (!isFirebaseConfigured) {
    throw new Error('Firebase is not configured for bookings.');
  }

  const docRef = await addDoc(bookingsCol, {
    ...booking,
    booking_time: serverTimestamp(),
    status: 'Pending',
  });

  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const bookingId = `VTT-${y}${m}${d}-${docRef.id.slice(0,6).toUpperCase()}`;

  await updateDoc(doc(db, 'bookings', docRef.id), { booking_id: bookingId });
  return { id: docRef.id, booking_id: bookingId };
}

export async function fetchBookings({ status, vehicle, name, phone, date } = {}) {
  if (!isFirebaseConfigured) {
    throw new Error('Firebase is not configured for bookings.');
  }

  const q = query(bookingsCol, orderBy('booking_time', 'desc'));
  const snap = await getDocs(q);
  const items = [];
  snap.forEach((d) => items.push({ id: d.id, ...d.data() }));

  return items.filter((b) => {
    if (status && b.status !== status) return false;
    if (vehicle && b.vehicle !== vehicle) return false;
    if (name && !b.name?.toLowerCase().includes(name.toLowerCase())) return false;
    if (phone && !b.phone?.includes(phone)) return false;
    if (date && b.journey_date !== date) return false;
    return true;
  });
}

export async function updateBookingStatus(id, status) {
  if (!isFirebaseConfigured) {
    throw new Error('Firebase is not configured for bookings.');
  }
  await updateDoc(doc(db, 'bookings', id), { status });
}

export async function deleteBooking(id) {
  if (!isFirebaseConfigured) {
    throw new Error('Firebase is not configured for bookings.');
  }
  await deleteDoc(doc(db, 'bookings', id));
}
