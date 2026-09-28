import { Navigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function ProtectedRoute({ children }) {
    const { isAuthenticated } = useApp();

    // Jika belum login, lempar ke /login menggunakan komponen <Navigate />
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Jika sudah login, tampilkan halaman anak (Admin)
    return children;
}