import React from 'react'

function Form() {
  return (
    <>
     <div className="flex justify-center items-center align-middle  bg-gray-100">
        <div className=''>
      <div className="bg-red-600 p-8 w-full max-w-md rounded-lg shadow-md">
        <h2 className="text-white text-2xl font-bold mb-4">BOOK TAXI</h2>
        <form className="space-y-4">
          <div>
            <label className="text-white font-semibold block mb-1">Your Name (required)</label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="text-white font-semibold block mb-1">Your Email (required)</label>
            <input type="email" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="text-white font-semibold block mb-1">Phone Number (required)</label>
            <input type="tel" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="text-white font-semibold block mb-1">Select Tour</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="text-white font-semibold block mb-1">Date</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="text-white font-semibold block mb-1">Number Of Passengers</label>
            <input type="number" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="text-white font-semibold block mb-1">Choose Vehicle</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-800">SEND</button>
        </form>
      </div>
      </div>
    </div>
    </>
  )
}

export default Form
