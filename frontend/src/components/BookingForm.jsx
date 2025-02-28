import React, { useState } from 'react';
import { useData } from '../context/DataContext';

function BookingForm() {
    const [vehicleType, setVehicleType] = useState('');
    const [pickup, setPickup] = useState('');
    const [drop, setDrop] = useState('');
    const [date, setDate] = useState('');
    const [passengers, setPassengers] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const { addData, vehicles } = useData();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!vehicleType || !pickup || !drop || !date || !name || !email || !phone) {
            setMessage("Please fill in all required fields.");
            return;
        }
        
        const newBooking = {
            name,
            email,
            phone,
            vehicleId: vehicleType,
            pickup_location: pickup,
            dropoff_location: drop,
            travel_date: date,
            no_passengers: passengers,
        };
        
        try {
            const response = await addData("vehicleBooking", newBooking);
            console.log(response.data.message);
            setName('');
            setEmail('');
            setPhone('');
            setVehicleType('');
            setPickup('');
            setDrop('');
            setDate('');
            setPassengers('');
            setMessage("Booking successful!");
        } catch (error) {
            setMessage("An error occurred while booking. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center bg-gray-100 p-4">
            <div className="bg-red-600 p-8 w-full max-w-md rounded-lg shadow-md">
                <h2 className="text-white text-2xl font-bold mb-4">BOOK TAXI</h2>
                {message && <p className="text-white font-semibold mb-4">{message}</p>}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-white font-semibold block mb-1">Your Name (required)</label>
                        <input type="text" className="w-full p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                        <label className="text-white font-semibold block mb-1">Your Email (required)</label>
                        <input type="email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label className="text-white font-semibold block mb-1">Phone Number (required)</label>
                        <input type="tel" className="w-full p-2 border rounded" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div>
                        <label className="text-white font-semibold block mb-1">Pickup Location</label>
                        <input type="text" className="w-full p-2 border rounded" value={pickup} onChange={(e) => setPickup(e.target.value)} required />
                    </div>
                    <div>
                        <label className="text-white font-semibold block mb-1">Drop-off Location</label>
                        <input type="text" className="w-full p-2 border rounded" value={drop} onChange={(e) => setDrop(e.target.value)} required />
                    </div>
                    <div>
                        <label className="text-white font-semibold block mb-1">Date</label>
                        <input type="date" className="w-full p-2 border rounded" value={date} onChange={(e) => setDate(e.target.value)} required />
                    </div>
                    <div>
                        <label className="text-white font-semibold block mb-1">Number Of Passengers</label>
                        <input type="number" className="w-full p-2 border rounded" value={passengers} onChange={(e) => setPassengers(e.target.value)} required />
                    </div>
                    <div>
                        <label className="text-white font-semibold block mb-1">Choose Vehicle</label>
                        <select className="w-full p-2 border rounded" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} required>
                            <option value="">Select Vehicle</option>
                            {vehicles?.map((vehicle) => (
                                <option key={vehicle.id} value={vehicle.id}>{vehicle.name}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-800">SEND</button>
                </form>
            </div>
        </div>
    );
}

export default BookingForm;
