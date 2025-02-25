import { useState, useEffect } from "react";
import axios from "axios";

const API_URL_PACKAGE = "https://jobhunt4u.in/public_html/api/?endpoint=booking";
const API_URL_VEHICLE = "https://jobhunt4u.in/public_html/api/?endpoint=vehicleBooking";
const API_URL_PACKAGES = "https://jobhunt4u.in/public_html/api/?endpoint=packages";
const API_URL_VEHICLES = "https://jobhunt4u.in/public_html/api/?endpoint=vehicles";

const TourBooking = () => {
  const [activeTab, setActiveTab] = useState("package");
  const [packages, setPackages] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  // Package Booking Form Data
  const [packageBooking, setPackageBooking] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    booking_date: "",
    booking_time: "",
    package_id: "",
    vehicle_id: "",
    no_passengers: "",
  });

  // Vehicle Booking Form Data
  const [vehicleBooking, setVehicleBooking] = useState({
    pickup_location: "",
    dropoff_location: "",
    vehicleId: "",
    no_passengers: "",
    travel_date: "",
  });

  // Fetch Packages and Vehicles
  useEffect(() => {
    axios.get(API_URL_PACKAGES).then((res) => setPackages(res.data));
    axios.get(API_URL_VEHICLES).then((res) => setVehicles(res.data));
  }, []);

  // Handle Package Booking Submission
  const handlePackageSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL_PACKAGE, packageBooking);
      alert("Package booked successfully!");
      setPackageBooking({ name: "", email: "", phone: "", date: "", booking_date: "", booking_time: "", package_id: "", vehicle_id: "", no_passengers: "" });
    } catch (error) {
      console.error("Error booking package:", error);
      alert("Failed to book package.");
    }
  };

  // Handle Vehicle Booking Submission
  const handleVehicleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL_VEHICLE, vehicleBooking);
      alert("Vehicle booked successfully!");
      setVehicleBooking({ pickup_location: "", dropoff_location: "", vehicleId: "", no_passengers: "", travel_date: "" });
    } catch (error) {
      console.error("Error booking vehicle:", error);
      alert("Failed to book vehicle.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      {/* Navbar */}
      <div className="flex mb-6">
        <button onClick={() => setActiveTab("package")} className={`w-1/2 p-2 text-center ${activeTab === "package" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>Package Booking</button>
        <button onClick={() => setActiveTab("vehicle")} className={`w-1/2 p-2 text-center ${activeTab === "vehicle" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>Vehicle Booking</button>
      </div>

      {/* Package Booking Form */}
      {activeTab === "package" && (
        <form onSubmit={handlePackageSubmit} className="space-y-4">
          <h2 className="text-lg font-bold">Package Booking</h2>
          <input type="text" placeholder="Full Name" className="w-full p-2 border" value={packageBooking.name} onChange={(e) => setPackageBooking({ ...packageBooking, name: e.target.value })} required />
          <input type="email" placeholder="Email" className="w-full p-2 border" value={packageBooking.email} onChange={(e) => setPackageBooking({ ...packageBooking, email: e.target.value })} required />
          <input type="text" placeholder="Phone Number" className="w-full p-2 border" value={packageBooking.phone} onChange={(e) => setPackageBooking({ ...packageBooking, phone: e.target.value })} required />
          <input type="date" placeholder="Travel Date" className="w-full p-2 border" value={packageBooking.date} onChange={(e) => setPackageBooking({ ...packageBooking, date: e.target.value })} required />
          <input type="date" placeholder="Booking Date" className="w-full p-2 border" value={packageBooking.booking_date} onChange={(e) => setPackageBooking({ ...packageBooking, booking_date: e.target.value })} required />
          <input type="time" placeholder="Booking Time" className="w-full p-2 border" value={packageBooking.booking_time} onChange={(e) => setPackageBooking({ ...packageBooking, booking_time: e.target.value })} required />
          <select className="w-full p-2 border" value={packageBooking.package_id} onChange={(e) => setPackageBooking({ ...packageBooking, package_id: e.target.value })} required>
            <option value="">Select Package</option>
            {packages.map((pkg) => <option key={pkg.id} value={pkg.id}>{pkg.name}</option>)}
          </select>
          <select className="w-full p-2 border" value={packageBooking.vehicle_id} onChange={(e) => setPackageBooking({ ...packageBooking, vehicle_id: e.target.value })} required>
            <option value="">Select Vehicle</option>
            {vehicles.map((vehicle) => <option key={vehicle.id} value={vehicle.id}>{vehicle.name}</option>)}
          </select>
          <input type="number" placeholder="Number of Passengers" className="w-full p-2 border" value={packageBooking.no_passengers} onChange={(e) => setPackageBooking({ ...packageBooking, no_passengers: e.target.value })} required />
          <button type="submit" className="w-full p-2 bg-green-500 text-white">Book Package</button>
        </form>
      )}

      {/* Vehicle Booking Form */}
      {activeTab === "vehicle" && (
        <form onSubmit={handleVehicleSubmit} className="space-y-4">
          <h2 className="text-lg font-bold">Vehicle Booking</h2>
          <input type="text" placeholder="Pickup Location" className="w-full p-2 border" value={vehicleBooking.pickup_location} onChange={(e) => setVehicleBooking({ ...vehicleBooking, pickup_location: e.target.value })} required />
          <input type="text" placeholder="Dropoff Location" className="w-full p-2 border" value={vehicleBooking.dropoff_location} onChange={(e) => setVehicleBooking({ ...vehicleBooking, dropoff_location: e.target.value })} required />
          <select className="w-full p-2 border" value={vehicleBooking.vehicleId} onChange={(e) => setVehicleBooking({ ...vehicleBooking, vehicleId: e.target.value })} required>
            <option value="">Select Vehicle</option>
            {vehicles.map((vehicle) => <option key={vehicle.id} value={vehicle.id}>{vehicle.name}</option>)}
          </select>
          <input type="number" placeholder="Number of Passengers" className="w-full p-2 border" value={vehicleBooking.no_passengers} onChange={(e) => setVehicleBooking({ ...vehicleBooking, no_passengers: e.target.value })} required />
          <input type="date" placeholder="Travel Date" className="w-full p-2 border" value={vehicleBooking.travel_date} onChange={(e) => setVehicleBooking({ ...vehicleBooking, travel_date: e.target.value })} required />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white">Book Vehicle</button>
        </form>
      )}
    </div>
  );
};

export default TourBooking;
