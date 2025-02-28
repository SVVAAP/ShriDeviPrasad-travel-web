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
    <div className="flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-blue-600 p-8 w-full max-w-md rounded-lg shadow-md">
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
          <button type="submit" className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-800">BOOK</button>
        </form>
      </div>
    </div>
  )
}

export default VehicleBookingForm
