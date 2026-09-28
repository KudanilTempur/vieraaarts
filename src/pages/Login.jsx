import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Login() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login, isAuthenticated } = useApp();
    const navigate = useNavigate();

    // Otomatis pindah ke /admin jika status terautentikasi aktif
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/admin");
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(password);
        if (!success) {
            setError("Password salah!");
        }
    };

    return (
        <div className="min-h-screen pt-28 pb-10 flex items-center justify-center px-4 bg-[#F2F9FD]">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md border border-[#D0E2FF] w-full max-w-md">
                <h1 className="text-2xl font-bold text-[#16377D] mb-6 text-center">Admin Login</h1>
                {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-[#16377D] mb-2">Password Admin</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border border-[#D0E2FF] rounded-lg focus:outline-none focus:border-[#3B82F6]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#3B82F6] text-white font-bold py-2.5 rounded-lg hover:bg-[#2563EB] transition-colors"
                >
                    Login
                </button>
            </form>
        </div>
    );
}