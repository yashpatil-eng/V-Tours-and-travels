import { useEffect, useState } from 'react';
import RequireAuth from '../components/RequireAuth';
import BookingCard from '../components/BookingCard';
import { fetchBookings, updateBookingStatus, deleteBooking } from '../services/bookings';
import { sendEmail } from '../services/emailService';
import { ToastContainer, toast } from 'react-toastify';

function DashboardInner() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const items = await fetchBookings();
    setBookings(items);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const handleAccept = async (b) => {
    await updateBookingStatus(b.id, 'Accepted');
    try {
      const tpl = import.meta.env.VITE_EMAILJS_TEMPLATE_CUSTOMER_CONFIRM || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      await sendEmail(tpl, {
        name: b.name,
        booking_id: b.booking_id,
        vehicle: b.vehicle,
        journey_date: b.journey_date,
        pickup: b.pickup,
        drop: b.drop,
        status: 'Accepted',
        email: b.email,
      });
    } catch (err) {
      console.error(err);
    }
    toast.success('Booking accepted');
    load();
  };

  const handleReject = async (b) => {
    await updateBookingStatus(b.id, 'Rejected');
    try {
      const tpl = import.meta.env.VITE_EMAILJS_TEMPLATE_CUSTOMER_REJECT || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      await sendEmail(tpl, {
        name: b.name,
        booking_id: b.booking_id,
        status: 'Rejected',
        email: b.email,
      });
    } catch (err) {
      console.error(err);
    }
    toast.info('Booking rejected');
    load();
  };

  const handleDelete = async (b) => {
    if (!confirm('Delete booking?')) return;
    await deleteBooking(b.id);
    toast.success('Booking deleted');
    load();
  };

  return (
    <div className="p-6">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      {loading ? <div>Loading...</div> : (
        <div className="grid gap-4">
          {bookings.map((b) => (
            <BookingCard key={b.id} booking={b} onAccept={handleAccept} onReject={handleReject} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <RequireAuth>
      <DashboardInner />
    </RequireAuth>
  );
}
