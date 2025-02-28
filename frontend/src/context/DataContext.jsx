import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const DataContext = createContext();

// Backend API URL (Update with your actual domain)
const API_URL = "/apis/?endpoint="; // Vite will use proxy for backend requests
const UPLOAD_URL = "/api/upload.php"; // New API for image upload

export const DataProvider = ({ children }) => {
    const [vehicles, setVehicles] = useState([]);
    const [services, setServices] = useState([]);
    const [packages, setPackages] = useState([]);
    const [siteContent, setSiteContent] = useState({});
    const [vehicleBooking, setVehicleBooking] = useState([]);
    const [booking, setBooking] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch function
    const fetchData = async (endpoint, setState) => {
        try {
            const response = await fetch(`${API_URL}${endpoint}`);
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || "Error fetching data");
            setState(data);
        } catch (err) {
            console.error(`Error fetching ${endpoint}:`, err);
            setError(`Failed to load ${endpoint}`);
        }
    };

    // Initial Fetch
    useEffect(() => {
        refreshData();
    }, []);

    // Refresh function
    const refreshData = () => {
        setLoading(true);
        setError(null);
        Promise.all([
            fetchData("vehicles", setVehicles),
            fetchData("services", setServices),
            fetchData("package", setPackages),
            fetchData("site_content", setSiteContent),
            fetchData("vehicleBooking", setVehicleBooking),
            fetchData("booking", setBooking)
        ]).finally(() => setLoading(false));
    };

    // Add new data
    const addData = async (endpoint, newData) => {
        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newData),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || "Failed to add data");
            refreshData(); // Refresh data after adding
            return result;
        } catch (err) {
            console.error(`Error adding ${endpoint}:`, err);
            setError(`Failed to add ${endpoint}`);
        }
    };

    const handleFileUpload = async (e, key, handleChange) => {
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

      const uploadImage = async (file) => {
        if (!file) return null;
      
        const formData = new FormData();
        formData.append("image", file);
      
        try {
          const res = await axios.post(UPLOAD_URL, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
      
          if (res.data.success) {
            return res.data.image_url; // Return image URL from response
          } else {
            throw new Error("Image upload failed!");
          }
        } catch (error) {
          console.error("Error uploading image:", error);
          throw new Error("Failed to upload image");
        }
      };

    // Update existing data
    const updateData = async (endpoint, id, updatedData) => {
        try {
            const response = await fetch(`${API_URL}${endpoint}&id=${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedData),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || "Failed to update data");
            refreshData(); // Refresh data after updating
            return result;
        } catch (err) {
            console.error(`Error updating ${endpoint}:`, err);
            setError(`Failed to update ${endpoint}`);
        }
    };

    // Delete data
    const deleteData = async (endpoint, id) => {
        try {
            const response = await fetch(`${API_URL}${endpoint}&id=${id}`, {
                method: "DELETE",
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || "Failed to delete data");
            refreshData(); // Refresh data after deletion
            return result;
        } catch (err) {
            console.error(`Error deleting ${endpoint}:`, err);
            setError(`Failed to delete ${endpoint}`);
        }
    };

    return (
        <DataContext.Provider value={{
            vehicles, services, packages, siteContent, setSiteContent, loading, error, refreshData, vehicleBooking, booking,
            addData, updateData, deleteData ,handleFileUpload,uploadImage
        }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom Hook to use Context
export const useData = () => useContext(DataContext);
