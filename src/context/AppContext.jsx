import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [artworks, setArtworks] = useState([]);
    const [commissionStatus, setCommissionStatus] = useState("OPEN");

    // Status Login Admin
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem("isAdmin") === "true";
    });

    // 1. Ambil data gambar dari Supabase saat web dimuat
    useEffect(() => {
        fetchArtworks();
    }, []);

    const fetchArtworks = async () => {
        const { data, error } = await supabase
            .from("artworks")
            .select("*")
            .order("id", { ascending: false });

        if (error) {
            console.error("Gagal mengambil data:", error.message);
        } else {
            setArtworks(data || []);
        }
    };

    // 2. Fungsi Login (Ganti "admin123" sesuai password yang kamu mau)
    const login = (password) => {
        if (password === "admin123") {
            setIsAuthenticated(true);
            localStorage.setItem("isAdmin", "true");
            return true;
        }
        return false;
    };

    // 3. Fungsi Logout
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAdmin");
    };

    // 4. Fungsi Tambah Artwork ke Supabase
    const addArtwork = async ({ title, ratio, file }) => {
        try {
            const fileName = `${Date.now()}_${file.name}`;
            const { error: uploadError } = await supabase.storage
                .from("gallery")
                .upload(fileName, file);

            if (uploadError) throw uploadError;

            const { data: publicUrlData } = supabase.storage
                .from("gallery")
                .getPublicUrl(fileName);

            const imageUrl = publicUrlData.publicUrl;

            const { data, error: dbError } = await supabase
                .from("artworks")
                .insert([{ title, ratio, image: imageUrl }])
                .select();

            if (dbError) throw dbError;

            if (data) {
                setArtworks((prev) => [data[0], ...prev]);
            }
        } catch (error) {
            alert("Gagal mengunggah artwork: " + error.message);
        }
    };

    // 5. Fungsi Hapus Artwork dari Supabase
    const deleteArtwork = async (id) => {
        const { error } = await supabase.from("artworks").delete().eq("id", id);
        if (!error) {
            setArtworks((prev) => prev.filter((art) => art.id !== id));
        } else {
            alert("Gagal menghapus artwork: " + error.message);
        }
    };

    return (
        <AppContext.Provider
            value={{
                artworks,
                addArtwork,
                deleteArtwork,
                commissionStatus,
                setCommissionStatus,
                isAuthenticated,
                login,
                logout,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useApp = () => useContext(AppContext);