import React, { useState } from 'react';
// import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
// import { FaRubleSign, FaRupeeSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  const { id,imagesrc,title ,description  } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteJob = async () => {
    if (window.confirm("Are you sure you want to delete it?")) {
     
    }
  };

  const handleEdit = () => {
    setIsModalOpen(true);
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
            onClick={deleteJob}
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

    </div>
  );
};

export default Card;
