import { useState, useEffect } from "react";
import axios from "axios";
import { useData } from "../../context/DataContext";

// API Endpoints
const API_URL = "/api/?endpoint=site_content";
const UPLOAD_URL = "/api/upload.php"; // New API for image upload

const AdminDashboard = () => {
  const { siteContent, setSiteContent } = useData(); // Using Context API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setSiteContent(res.data[0]); // Load first row from API into context
        }
      })
      .catch((err) => {
        console.error("Error fetching content:", err);
        setError("Failed to load content");
      })
      .finally(() => setLoading(false));
  }, [setSiteContent]);

  const handleChange = (key, value) => {
    setSiteContent((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleFileUpload = async (e, key) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(UPLOAD_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        const imageUrl = res.data.image_url; // Image URL from response
        handleChange(key, imageUrl);
      } else {
        alert("Image upload failed!");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image");
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.put(API_URL, siteContent, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Content Updated Successfully");
    } catch (error) {
      console.error("Error updating content:", error);
      alert("Failed to update content");
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Edit Website Content</h1>

      <div className="mb-4">
        <label className="block font-semibold">About:</label>
        <textarea
          className="w-full border p-2 h-32"
          value={siteContent?.about || ""}
          onChange={(e) => handleChange("about", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">About Image:</label>
        <input
          type="file"
          className="w-full border p-2"
          accept="image/*"
          onChange={(e) => handleFileUpload(e, "about_image")}
        />
        {siteContent?.about_image && (
          <img
            src={siteContent.about_image}
            alt="About Preview"
            className="w-32 h-32 mt-2 object-cover"
          />
        )}
      </div>

      <h2 className="text-lg font-bold mt-6">Hero Section</h2>
      <input
        type="file"
        className="w-full border p-2 mb-2"
        accept="image/*"
        onChange={(e) => handleFileUpload(e, "hero_image")}
      />
      {siteContent?.hero_image && (
        <img
          src={siteContent.hero_image}
          alt="Hero Preview"
          className="w-32 h-32 mt-2 object-cover"
        />
      )}

      <h2 className="text-lg font-bold mt-6">Destination</h2>
      <input
        type="file"
        className="w-full border p-2 mb-2"
        accept="image/*"
        onChange={(e) => handleFileUpload(e, "destination_img_url")}
      />
      {siteContent?.destination_img_url && (
        <img
          src={siteContent.destination_img_url}
          alt="Destination Preview"
          className="w-32 h-32 mt-2 object-cover"
        />
      )}
      <input
        type="text"
        className="w-full border p-2 mb-2"
        placeholder="Place Name"
        value={siteContent?.destination_name || ""}
        onChange={(e) => handleChange("destination_name", e.target.value)}
      />

      <h2 className="text-lg font-bold mt-6">Contact Us</h2>
      <input
        type="text"
        className="w-full border p-2 mb-2"
        placeholder="Address"
        value={siteContent?.address || ""}
        onChange={(e) => handleChange("address", e.target.value)}
      />
      <input
        type="text"
        className="w-full border p-2 mb-2"
        placeholder="Phone Number"
        value={siteContent?.phone || ""}
        onChange={(e) => handleChange("phone", e.target.value)}
      />
      <input
        type="email"
        className="w-full border p-2 mb-2"
        placeholder="Email"
        value={siteContent?.email || ""}
        onChange={(e) => handleChange("email", e.target.value)}
      />

      <button
        className="bg-green-500 text-white px-4 py-2 mt-4"
        onClick={handleSubmit}
      >
        Save Changes
      </button>
    </div>
  );
};

export default AdminDashboard;
