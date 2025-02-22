import { Navigate, Outlet } from "react-router-dom";

export default function AdminProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAdminAuthenticated");

  return isAuthenticated ? children || <Outlet /> : <Navigate to="/admin/login" />;
}
