import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminNavbar from "../../components/Admin/Navbar";
import Loader from "../../components/Admin/Loader";
import Footer from "../../components/Admin/Footer";

export default function Admin() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <AdminNavbar />
      <div className="flex-1 overflow-auto p-4 bg-gray-100">
        {loading ? <Loader /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
}
