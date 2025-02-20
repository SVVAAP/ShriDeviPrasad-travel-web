import { NavLink } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <div className="space-x-4">
          <NavLink to="/admin" end className={({ isActive }) => isActive ? "underline" : ""}>Home</NavLink>
          <NavLink to="/admin/packages" className={({ isActive }) => isActive ? "underline" : ""}>Packages</NavLink>
          <NavLink to="/admin/vehicles" className={({ isActive }) => isActive ? "underline" : ""}>Vehicles</NavLink>
          <button 
            onClick={() => {
              localStorage.removeItem("isAdminAuthenticated");
              window.location.href = "/admin/login"; // Use window.location to fully clear session
            }} 
            className="ml-4 bg-red-500 px-3 py-1 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
