import React, { useState } from 'react'
import { useData } from '../context/DataContext';

function VehicleBookingForm() {
const [vehicelType, setVehicleType] = useState('');
const [pickup,setPickup] = useState('');
const [drop,setDrop] = useState('');
const [date,setDate] = useState('');
const [message, setMessage] = useState("");
const [passengers,setPassengers] = useState('');
const {addData,vehicles}=useData();

const handleSubmit = async (event) => {
    event.preventDefault();

    if (!vehicelType || !pickup || !drop || !date) {
      setMessage("Please fill in all fields.");
      return;
    }
   
    const newVehicle = {
        vehicleId: vehicelType,
        pickup_location: pickup,
        dropoff_location: drop,
        travel_date:date,
        no_passengers:passengers,
  }
    const response=await addData("vehicleBooking", newVehicle);
    console.log(response.data.message)
    setVehicleType("");
    setPickup("");
    setDrop("");
    setDate("");
    setPassengers("");
     
  };
  return (
    <div>
        <div>
            
        </div>
    <div className="flex justify-center py-5 m-20 items-center min-h-screen bg-gray-900 text-white  wow fadeInUp rounded-2xl shadow-2xl"
    data-wow-delay="0.1s"
    style={{
      backgroundImage: 'url("https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_auto/www.alpineascents.com/wp-content/uploads/2017/09/ladakh-trek-e1635267234139.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}>
      <div className="bg-gray-800  p-8 w-full max-w-lg rounded-lg shadow-md hover:scale-105 transition-transform ease-in-out delay-150" style={{ backgroundColor: 'rgba(31, 41, 55, 0.8)' }} >
        <h1 className="text-2xl font-bold mb-4 text-center">Book A Tour</h1>
        <h2 className="text-white text-2xl font-bold mb-4">BOOK VEHICLE</h2>
        <form className="space-y-4">
            <p>{message}</p>
          <div>
            <label className="text-white font-semibold block mb-1">Vehicle Type</label>
            <select className="w-full p-2 border rounded" onChange={(e) => setVehicleType(e.target.value)} required>
                {vehicles.map((data)=><option key={data.id} value={data.id}>{data.title}</option>)}
            </select>
          </div>
          <div>
            <label className="text-white font-semibold block mb-1">Pickup Location</label>
            <input type="text" className="w-full p-2 border rounded" value={pickup}
                    onChange={(e) => setPickup(e.target.value)} required />
          </div>
          <div>
            <label className="text-white font-semibold block mb-1">Drop Location</label>
            <input type="text" className="w-full p-2 border rounded" value={drop}
                    onChange={(e) => setDrop(e.target.value)} required />
          </div>
          <div>
            <label className="text-white font-semibold block mb-1">No. of Passengers</label>
            <input type="text" className="w-full p-2 border rounded" value={passengers}
                    onChange={(e) => setPassengers(e.target.value)} required />
          </div>
          <div>
            <label className="text-white font-semibold block mb-1">Booking Date</label>
            <input type="date" className="w-full p-2 border rounded" value={date}
                    onChange={(e) => setDate(e.target.value)} required />
          </div>
          <button type="submit" className="w-full bg-gray-900/5 border py-2 rounded border-white  hover:bg-white hover:text-black transition">
            Book Now
          </button>  </form>
      </div>
    </div>
    </div>
  )
}

export default VehicleBookingForm
