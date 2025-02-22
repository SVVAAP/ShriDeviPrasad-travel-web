import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const DataContext = createContext();

// Backend API URL
const API_URL = "http://localhost:5000"; // Update with your backend URL

export const DataProvider = ({ children }) => {
    const [vehicles, setVehicles] = useState([]);
    const [services, setServices] = useState([]);
    const [packages, setPackages] = useState([]);

    // Fetch Vehicles
    useEffect(() => {
        fetch(`${API_URL}/vehicles`)
            .then((res) => res.json())
            .then((data) => setVehicles(data))
            .catch((err) => console.error("Error fetching vehicles:", err));
    }, []);

    // Fetch Services
    useEffect(() => {
        fetch(`${API_URL}/services`)
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.error("Error fetching services:", err));
    }, []);

    // Fetch Packages
    useEffect(() => {
        fetch(`${API_URL}/package`)
            .then((res) => res.json())
            .then((data) => setPackages(data))
            .catch((err) => console.error("Error fetching packages:", err));
    }, []);

    return (
        <DataContext.Provider value={{ vehicles, services, packages }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom Hook to use Context
export const useData = () => useContext(DataContext);
