import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const DataContext = createContext();

// Backend API URL (Update with your actual domain)
const API_URL = "/apis/?endpoint="; // Vite will use proxy for backend requests

export const DataProvider = ({ children }) => {
    const [vehicles, setVehicles] = useState([]);
    const [services, setServices] = useState([]);
    const [packages, setPackages] = useState([]);
    const [siteContent, setSiteContent] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch function
    const fetchData = async (endpoint, setState) => {
        try {
            const response = await fetch(`${API_URL}${endpoint}`);
            const data = await response.json();
            setState(data);
        } catch (err) {
            console.error(`Error fetching ${endpoint}:`, err);
            setError(`Failed to load ${endpoint}`);
        }
    };

    // Initial Fetch
    useEffect(() => {
        Promise.all([
            fetchData("vehicles", setVehicles),
            fetchData("services", setServices),
            fetchData("package", setPackages),
            fetchData("site_content", setSiteContent)
        ]).finally(() => setLoading(false));
    }, []);

    // Refresh function
    const refreshData = () => {
        setLoading(true);
        setError(null);
        Promise.all([
            fetchData("vehicles", setVehicles),
            fetchData("services", setServices),
            fetchData("package", setPackages),
            fetchData("site_content", setSiteContent)
        ]).finally(() => setLoading(false));
    };

    return (
        <DataContext.Provider value={{
            vehicles, services, packages, siteContent, setSiteContent, loading, error, refreshData
        }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom Hook to use Context
export const useData = () => useContext(DataContext);
