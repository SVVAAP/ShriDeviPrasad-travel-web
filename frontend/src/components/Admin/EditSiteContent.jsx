import { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [content, setContent] = useState({
    title: "",
    description: "",
    about_image: "",
    services: [],
    destination: { image: "", place_name: "" },
    contact: { address: "", phone: "", email: "" },
    hero_image: "",
  });

  useEffect(() => {
    axios.get("/api/content").then((res) => setContent(res.data));
  }, []);

  const handleChange = (section, key, value) => {
    setContent((prev) => ({
      ...prev,
      [section]: { ...prev[section], [key]: value },
    }));
  };

  const handleServiceChange = (index, key, value) => {
    const updatedServices = [...content.services];
    updatedServices[index][key] = value;
    setContent((prev) => ({ ...prev, services: updatedServices }));
  };

  const addService = () => {
    setContent((prev) => ({
      ...prev,
      services: [...prev.services, { title: "", description: "", icon: "" }],
    }));
  };

  const removeService = (index) => {
    setContent((prev) => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async () => {
    await axios.put("/api/content", content);
    alert("Content Updated Successfully");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Edit Website Content</h1>

      {/* General Info */}
      <div className="mb-4">
        <label className="block font-semibold">Title:</label>
        <input type="text" className="w-full border p-2" value={content.title} onChange={(e) => handleChange("title", "", e.target.value)} />
      </div>
      
      <div className="mb-4">
        <label className="block font-semibold">Description:</label>
        <textarea className="w-full border p-2" value={content.description} onChange={(e) => handleChange("description", "", e.target.value)}></textarea>
      </div>
      
      <div className="mb-4">
        <label className="block font-semibold">About Image URL:</label>
        <input type="text" className="w-full border p-2" value={content.about_image} onChange={(e) => handleChange("about_image", "", e.target.value)} />
      </div>

      {/* Services */}
      <h2 className="text-lg font-bold mt-6">Services</h2>
      {content.services.map((service, index) => (
        <div key={index} className="p-2 border mb-2">
          <input type="text" className="w-full border p-2 mb-2" placeholder="Title" value={service.title} onChange={(e) => handleServiceChange(index, "title", e.target.value)} />
          <textarea className="w-full border p-2 mb-2" placeholder="Description" value={service.description} onChange={(e) => handleServiceChange(index, "description", e.target.value)}></textarea>
          <input type="text" className="w-full border p-2 mb-2" placeholder="Icon URL" value={service.icon} onChange={(e) => handleServiceChange(index, "icon", e.target.value)} />
          <button className="bg-red-500 text-white px-3 py-1" onClick={() => removeService(index)}>Remove</button>
        </div>
      ))}
      <button className="bg-blue-500 text-white px-4 py-2" onClick={addService}>Add Service</button>

      {/* Destination */}
      <h2 className="text-lg font-bold mt-6">Destination</h2>
      <input type="text" className="w-full border p-2 mb-2" placeholder="Image URL" value={content.destination.image} onChange={(e) => handleChange("destination", "image", e.target.value)} />
      <input type="text" className="w-full border p-2 mb-2" placeholder="Place Name" value={content.destination.place_name} onChange={(e) => handleChange("destination", "place_name", e.target.value)} />

      {/* Contact Us */}
      <h2 className="text-lg font-bold mt-6">Contact Us</h2>
      <input type="text" className="w-full border p-2 mb-2" placeholder="Address" value={content.contact.address} onChange={(e) => handleChange("contact", "address", e.target.value)} />
      <input type="text" className="w-full border p-2 mb-2" placeholder="Phone Number" value={content.contact.phone} onChange={(e) => handleChange("contact", "phone", e.target.value)} />
      <input type="email" className="w-full border p-2 mb-2" placeholder="Email" value={content.contact.email} onChange={(e) => handleChange("contact", "email", e.target.value)} />

      {/* Hero Section Image */}
      <h2 className="text-lg font-bold mt-6">Hero Section</h2>
      <input type="text" className="w-full border p-2 mb-2" placeholder="Hero Image URL" value={content.hero_image} onChange={(e) => handleChange("hero_image", "", e.target.value)} />

      {/* Save Button */}
      <button className="bg-green-500 text-white px-4 py-2 mt-4" onClick={handleSubmit}>Save Changes</button>
    </div>
  );
};

export default AdminDashboard;
