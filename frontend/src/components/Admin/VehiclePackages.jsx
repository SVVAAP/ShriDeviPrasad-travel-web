import { useState } from "react";
import Card from "./Card2";
import { useData } from "../../context/DataContext";

const UploadVehicle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const { vehicles,addData } = useData();
  const [isOpen, setIsOpen] = useState(false);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !description || !image) {
      setMessage("Please fill in all fields.");
      return;
    }

    const newVehicle = {
      title: title,
      description: description,
      imagesrc: image
  }
    await addData("vehicles", newVehicle);
      //setMessage(response.data.message);
      setTitle("");
      setDescription("");
      setImage(null);
  
  };

  return (
    <>
      <div className=" flex justify-between p-2 px-10">
        <h1 className="text-2xl font-extrabold font-sans">Vehicle Details</h1>
        <div className="flex items-center align-middle rounded-2xl ring-sky-500 ring-1 ">
          <i class="fa-solid fa-plus px-2 text-sky-500"></i>
          <button
            className="bg-sky-500 text-white px-4 py-2 rounded-2xl"
            onClick={() => {
              setIsOpen(!isOpen);
            }}>
            Add Vehicle
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {vehicles && vehicles.map((data, i) => <Card key={i} data={data} />)}
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-5 py-3 border-b border-gray-200">
              <h5 className="text-lg font-medium">Upload Vehicle</h5>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}

            <div className="p-6">
              {message && <p className="text-red-500 mb-4">{message}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block font-medium">Title</label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium">Description</label>
                  <textarea
                    className="w-full border p-2 rounded"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required></textarea>
                </div>
                <div className="mb-4">
                  <label className="block font-medium">Image</label>
                  <input type="file" accept="image/*" onChange={handleImageChange} required />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}>
                    Cancel
                  </button>
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadVehicle;
