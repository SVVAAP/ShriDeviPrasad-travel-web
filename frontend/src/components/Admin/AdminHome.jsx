import { useState, useEffect } from "react";
import axios from "axios";

const API_URL_BOOKINGS = "https://jobhunt4u.in/public_html/api/?endpoint=bookings"; // Get all bookings
const API_URL_VEHICLE_BOOKINGS = "https://jobhunt4u.in/public_html/api/?endpoint=vehicleBookings"; // Get all vehicle bookings
const API_URL_UPDATE = "https://jobhunt4u.in/public_html/api/?endpoint=updateBooking"; // Update status
const API_URL_DELETE = "https://jobhunt4u.in/public_html/api/?endpoint=deleteBooking"; // Delete booking

const Home = () => {
  const [packageBookings, setPackageBookings] = useState([]);
  const [vehicleBookings, setVehicleBookings] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch All Bookings
  const fetchData = async () => {
    try {
      const pkgRes = await axios.get(API_URL_BOOKINGS);
      const vehRes = await axios.get(API_URL_VEHICLE_BOOKINGS);
      setPackageBookings(pkgRes.data);
      setVehicleBookings(vehRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle Status Update (Approve, Disapprove, Done)
  const updateStatus = async (id, status) => {
    try {
      await axios.post(API_URL_UPDATE, { id, status });
      fetchData();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Handle Delete Booking
  const deleteBooking = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;
    try {
      await axios.post(API_URL_DELETE, { id });
      fetchData();
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  // Handle Share on WhatsApp
  const shareOnWhatsApp = (booking) => {
    const message = `📅 Booking Details:
- Name: ${booking.name}
- Date: ${booking.date || booking.travel_date}
- Passengers: ${booking.no_passengers}
- Status: ${booking.status || "Pending"}
    
View Details Now!`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Bookings Overview</h2>

      {/* Package Bookings Table */}
      <h3 className="text-lg font-semibold mb-2">📦 Package Bookings</h3>
      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Passengers</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {packageBookings.map((booking) => (
            <tr key={booking.id} className="text-center">
              <td className="border p-2">{booking.name}</td>
              <td className="border p-2">{booking.date}</td>
              <td className="border p-2">{booking.no_passengers}</td>
              <td className="border p-2">{booking.status || "Pending"}</td>
              <td className="border p-2 space-x-2">
                <button onClick={() => updateStatus(booking.id, "Approved")} className="bg-green-500 text-white px-2 py-1 rounded">✔ Approve</button>
                <button onClick={() => updateStatus(booking.id, "Disapproved")} className="bg-red-500 text-white px-2 py-1 rounded">✖ Disapprove</button>
                <button onClick={() => updateStatus(booking.id, "Done")} className="bg-blue-500 text-white px-2 py-1 rounded">✅ Done</button>
                <button onClick={() => deleteBooking(booking.id)} className="bg-gray-500 text-white px-2 py-1 rounded">🗑 Delete</button>
                <button onClick={() => shareOnWhatsApp(booking)} className="bg-green-600 text-white px-2 py-1 rounded">📲 Share</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Vehicle Bookings Table */}
      <h3 className="text-lg font-semibold mb-2">🚗 Vehicle Bookings</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Pickup</th>
            <th className="border p-2">Dropoff</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Passengers</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicleBookings.map((booking) => (
            <tr key={booking.id} className="text-center">
              <td className="border p-2">{booking.pickup_location}</td>
              <td className="border p-2">{booking.dropoff_location}</td>
              <td className="border p-2">{booking.travel_date}</td>
              <td className="border p-2">{booking.no_passengers}</td>
              <td className="border p-2">{booking.status || "Pending"}</td>
              <td className="border p-2 space-x-2">
                <button onClick={() => updateStatus(booking.id, "Approved")} className="bg-green-500 text-white px-2 py-1 rounded">✔ Approve</button>
                <button onClick={() => updateStatus(booking.id, "Disapproved")} className="bg-red-500 text-white px-2 py-1 rounded">✖ Disapprove</button>
                <button onClick={() => updateStatus(booking.id, "Done")} className="bg-blue-500 text-white px-2 py-1 rounded">✅ Done</button>
                <button onClick={() => deleteBooking(booking.id)} className="bg-gray-500 text-white px-2 py-1 rounded">🗑 Delete</button>
                <button onClick={() => shareOnWhatsApp(booking)} className="bg-green-600 text-white px-2 py-1 rounded">📲 Share</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
