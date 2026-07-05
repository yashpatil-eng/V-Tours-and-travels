import { FiPhone, FiTrash2 } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function BookingCard({ booking, onAccept, onReject, onDelete }) {
  const phone = booking.phone?.replace(/[^0-9]/g, '');
  const callLink = phone ? `tel:+${phone}` : '#';
  const waLink = phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent(`Hello ${booking.name}, regarding your booking ${booking.booking_id}`)}`
    : '#';

  return (
    <div className="p-4 border rounded-md bg-white">
      <div className="flex justify-between">
        <div>
          <div className="text-sm text-muted">{booking.booking_id || booking.id}</div>
          <h3 className="font-bold">{booking.name}</h3>
          <div className="text-sm">{booking.phone} · {booking.email}</div>
        </div>
        <div className="text-right">
          <div className="mb-2">Status: <span className="font-semibold">{booking.status}</span></div>
          <div className="flex gap-2">
            <a href={callLink} className="btn-outline"><FiPhone /></a>
            <a href={waLink} target="_blank" rel="noreferrer" className="btn-outline"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <div className="mt-3 text-sm">
        <div>Pickup: {booking.pickup}</div>
        <div>Drop: {booking.drop}</div>
        <div>Journey: {booking.journey_date} Return: {booking.return_date || '—'}</div>
        <div>Vehicle: {booking.vehicle} · Passengers: {booking.passengers}</div>
        {booking.message && <div className="mt-2">Message: {booking.message}</div>}
      </div>
      <div className="mt-3 flex gap-2">
        <button onClick={() => onAccept(booking)} className="btn-accent">Accept</button>
        <button onClick={() => onReject(booking)} className="btn-ghost">Reject</button>
        <button onClick={() => onDelete(booking)} className="btn-danger ml-auto"><FiTrash2 /></button>
      </div>
    </div>
  );
}
