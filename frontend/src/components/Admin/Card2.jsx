import React, { useState } from 'react';
// import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
// import { FaRubleSign, FaRupeeSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const Card = ({ data }) => {
  const { id,imagesrc,title ,description  } = data;
  const [isOpen, setIsOpen] = useState(false);
  const {deleteData} = useData();
  const [message, setMessage] = useState("");
  const [etitle, setETitle] = useState(title);
  const [edescription, setEDescription] = useState(description);
  const [eimage, setEImage] = useState(null);


  const deleteJob = async (index) => {
    if (window.confirm("Are you sure you want to delete it?")) {
      await deleteData("vehicles", index);
    }
  };
  

  const handleEdit = () => {
    setIsOpen(true);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title || !description || !eimage) {
      setMessage("Please fill in all fields.");
      return;
    }
  }

  const handleImageChange = (event) => {
    setEImage(event.target.files[0]);
  };
  // const handleModalClose = () => {
  //   setIsModalOpen(false);
  // };

  // const handleModalSave = () => {
  //   setIsModalOpen(false);
  //   // Optionally, trigger re-render or refetch jobs
  // };

  return (
    <div>
     
      <section className="card bg-slate-300 relative rounded">
        <div className="absolute top-2 right-2 z-10 flex space-x-4">
          <button
            onClick={handleEdit}
            className="text-white bg-sky-500 p-2 rounded hover:bg-blue-600"
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            onClick={()=>{deleteJob(id);}}
            className="text-white bg-red-500 p-2 rounded hover:bg-red-600"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <Link to={`/singlejob/${id}`} className="flex gap-4 flex-col sm:flex-row items-start">
          <img src={imagesrc} alt={title} className="w-16 h-16 mb-4" />
          <div className="card-details">
            {/* <h4 className="text-primary mb-1">{companyName}</h4> */}
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-base text-primary/70 ">{description.slice(0, 33) + "...Read More"}</p>
          </div>
        </Link>
      
        {/* <div className="flex justify-around">
          <button
            className="bg-sky-600 hover:bg-sky-900 px-3 py-1 rounded text-white"
            onClick={() => handleApprove(id,jobTitle,uid)}
          >
            Approve
          </button>
          <button
            className="bg-red-600 hover:bg-red-900 px-3 py-1 rounded text-white"
            onClick={() => handleDecline(id,jobTitle,uid)}
          >
            Decline
          </button>
        </div> */}
      </section>
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
                    onChange={(e) => setETitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium">Description</label>
                  <textarea
                    className="w-full border p-2 rounded"
                    value={description}
                    onChange={(e) => setEDescription(e.target.value)}
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
    </div>
  );
};

export default Card;
