import { useState, useRef, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Admin() {
    const {
        logout,
        commissionStatus,
        setCommissionStatus,
        artworks = [], // Default fallback array kosong
        addArtwork,
        deleteArtwork,
        commissionData = {}, // Default fallback object kosong
        updateCommissionCategory,
    } = useApp();

    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    // Form New Artwork State
    const [newTitle, setNewTitle] = useState("");
    const [newImage, setNewImage] = useState("");
    const [newRatio, setNewRatio] = useState("4:5");
    const [selectedFileName, setSelectedFileName] = useState("");

    // Form Price Edit State
    const [selectedCat, setSelectedCat] = useState("Bust Up");
    const [editIdr, setEditIdr] = useState("");
    const [editUsd, setEditUsd] = useState("");

    // Sinkronisasi data harga saat commissionData atau selectedCat berubah/selesai dimuat
    useEffect(() => {
        if (commissionData && commissionData[selectedCat]) {
            setEditIdr(commissionData[selectedCat].idr || "");
            setEditUsd(commissionData[selectedCat].usd || "");
        }
    }, [commissionData, selectedCat]);

    // Handler konversi file gambar ke Base64 dengan proteksi undefined
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];

        // Jika pengguna membatalkan pilihan file, reset state terkait
        if (!file) {
            setNewImage("");
            setSelectedFileName("");
            return;
        }

        setSelectedFileName(file.name);

        const reader = new FileReader();
        reader.onloadend = () => {
            setNewImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    // Handler Tambah Artwork Baru
    const handleAddArtwork = (e) => {
        e.preventDefault();
        if (!newTitle || !newImage) {
            alert("Harap isi judul dan pilih file gambar!");
            return;
        }

        const aspectMap = {
            "4:5": "4/5",
            "16:9": "16/9",
            "3:4": "3/4",
            "1:1": "1/1",
        };

        addArtwork({
            title: newTitle,
            image: newImage,
            ratio: newRatio,
            aspect: aspectMap[newRatio] || "4/5",
            name: selectedFileName || newTitle, // Fallback jika AppContext membaca .name
            fileName: selectedFileName || "artwork.jpg",
        });

        // Reset Form
        setNewTitle("");
        setNewImage("");
        setSelectedFileName("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    // Handler Update Harga Komisi
    const handleUpdatePrice = (e) => {
        e.preventDefault();
        updateCommissionCategory(selectedCat, editIdr, editUsd);
        alert("Harga berhasil diperbarui!");
    };

    // Handler Ganti Kategori Komisi
    const handleCategoryChange = (e) => {
        const cat = e.target.value;
        setSelectedCat(cat);
        setEditIdr(commissionData?.[cat]?.idr || "");
        setEditUsd(commissionData?.[cat]?.usd || "");
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-[#16377D]">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Header Admin */}
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-[#D0E2FF] gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-[#16377D]">
                            Admin Dashboard
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Kelola status komisi, daftar harga, dan galeri karya seni Anda.
                        </p>
                    </div>
                    <button
                        onClick={() => {
                            logout();
                            navigate("/");
                        }}
                        className="bg-red-500 hover:bg-red-600 active:scale-95 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                    >
                        <span>Logout</span>
                    </button>
                </header>

                {/* SECTION 1: Status Commission */}
                <section className="bg-white p-6 rounded-2xl border border-[#D0E2FF] shadow-xs hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h2 className="text-lg font-bold text-[#16377D]">
                                1. Pengaturan Status Commission
                            </h2>
                            <p className="text-xs text-gray-500 mt-0.5">
                                Mengatur apakah Anda sedang menerima pesanan komisi baru di halaman utama.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 bg-[#F0F6FF] p-2.5 rounded-xl border border-[#D0E2FF]">
                            <span className="text-xs font-semibold text-gray-600">Status:</span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${commissionStatus === "OPEN"
                                    ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
                                    : "bg-rose-100 text-rose-700 border border-rose-300"
                                    }`}
                            >
                                {commissionStatus}
                            </span>
                            <button
                                onClick={() =>
                                    setCommissionStatus(
                                        commissionStatus === "OPEN" ? "CLOSED" : "OPEN"
                                    )
                                }
                                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer shadow-xs active:scale-95"
                            >
                                Ubah ke {commissionStatus === "OPEN" ? "CLOSED" : "OPEN"}
                            </button>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: Kelola Harga Commission */}
                <section className="bg-white p-6 rounded-2xl border border-[#D0E2FF] shadow-xs hover:shadow-md transition-shadow">
                    <h2 className="text-lg font-bold text-[#16377D] mb-1">
                        2. Kelola Harga Commission
                    </h2>
                    <p className="text-xs text-gray-500 mb-5">
                        Perbarui patokan harga IDR dan USD berdasarkan kategori karya.
                    </p>

                    <form onSubmit={handleUpdatePrice} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
                        <div>
                            <label className="block text-xs font-bold mb-1.5 text-gray-700">
                                Kategori
                            </label>
                            <select
                                value={selectedCat}
                                onChange={handleCategoryChange}
                                className="w-full p-2.5 border border-gray-300 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                            >
                                {Object.keys(commissionData || {}).map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold mb-1.5 text-gray-700">
                                Harga IDR
                            </label>
                            <input
                                type="text"
                                value={editIdr}
                                onChange={(e) => setEditIdr(e.target.value)}
                                className="w-full p-2.5 border border-gray-300 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                                placeholder="Contoh: 150.000"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold mb-1.5 text-gray-700">
                                Harga USD
                            </label>
                            <input
                                type="text"
                                value={editUsd}
                                onChange={(e) => setEditUsd(e.target.value)}
                                className="w-full p-2.5 border border-gray-300 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                                placeholder="Contoh: $15"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold p-2.5 rounded-xl text-sm transition-all cursor-pointer shadow-xs active:scale-95"
                        >
                            Simpan Harga
                        </button>
                    </form>
                </section>

                {/* SECTION 3: Kelola Gallery Artworks */}
                <section className="bg-white p-6 rounded-2xl border border-[#D0E2FF] shadow-xs hover:shadow-md transition-shadow">
                    <h2 className="text-lg font-bold text-[#16377D] mb-1">
                        3. Kelola Gallery Artworks
                    </h2>
                    <p className="text-xs text-gray-500 mb-5">
                        Tambah gambar baru ke portofolio galeri atau hapus yang sudah ada.
                    </p>

                    {/* Form Tambah Artwork */}
                    <form
                        onSubmit={handleAddArtwork}
                        className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-200 mb-8 space-y-4"
                    >
                        <h3 className="text-sm font-bold text-gray-700">
                            + Form Tambah Artwork
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                            <div>
                                <label className="block text-xs font-bold mb-1.5 text-gray-700">
                                    Judul Artwork
                                </label>
                                <input
                                    type="text"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    className="w-full p-2.5 border border-gray-300 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                                    placeholder="Contoh: Artwork 1"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold mb-1.5 text-gray-700">
                                    Upload File Gambar
                                </label>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="w-full p-1.5 border border-gray-300 rounded-xl text-sm bg-white file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#EBF3FC] file:text-[#16377D] hover:file:bg-[#D0E2FF] cursor-pointer"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold mb-1.5 text-gray-700">
                                    Rasio Aspect
                                </label>
                                <select
                                    value={newRatio}
                                    onChange={(e) => setNewRatio(e.target.value)}
                                    className="w-full p-2.5 border border-gray-300 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                                >
                                    <option value="4:5">4:5</option>
                                    <option value="16:9">16:9</option>
                                    <option value="3:4">3:4</option>
                                    <option value="1:1">1:1</option>
                                </select>
                            </div>
                        </div>

                        {/* Preview Gambar */}
                        {newImage && (
                            <div className="flex items-center gap-3 pt-2 bg-white p-3 rounded-xl border border-gray-200">
                                <span className="text-xs font-bold text-gray-600">Preview:</span>
                                <img
                                    src={newImage}
                                    alt="Preview"
                                    className="w-16 h-16 object-cover rounded-lg border border-gray-300 shadow-xs"
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-sm transition-all cursor-pointer shadow-xs active:scale-98"
                        >
                            + Tambah Artwork
                        </button>
                    </form>

                    {/* Tabel Daftar Artwork */}
                    <div className="overflow-x-auto rounded-xl border border-gray-200">
                        <table className="w-full text-left text-sm border-collapse">
                            <thead>
                                <tr className="bg-[#F0F6FF] border-b border-gray-200 text-[#16377D]">
                                    <th className="p-3.5 font-bold">Preview</th>
                                    <th className="p-3.5 font-bold">Judul</th>
                                    <th className="p-3.5 font-bold">Rasio</th>
                                    <th className="p-3.5 font-bold text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {artworks && artworks.length > 0 ? (
                                    artworks.map((art) => (
                                        <tr key={art.id} className="hover:bg-gray-50/80 transition-colors">
                                            <td className="p-3.5">
                                                <img
                                                    src={art.image}
                                                    alt={art.title || art.name || "Artwork"}
                                                    className="w-12 h-12 object-cover rounded-lg border border-gray-200"
                                                />
                                            </td>
                                            <td className="p-3.5 font-semibold text-gray-800">
                                                {art.title || art.name || "Untitled"}
                                            </td>
                                            <td className="p-3.5 text-gray-600">
                                                <span className="bg-gray-100 px-2.5 py-1 rounded-md text-xs font-medium">
                                                    {art.ratio || "4:5"}
                                                </span>
                                            </td>
                                            <td className="p-3.5 text-right">
                                                <button
                                                    onClick={() => deleteArtwork(art.id)}
                                                    className="bg-red-50 hover:bg-red-100 text-red-600 font-semibold px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer border border-red-200"
                                                >
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center p-6 text-gray-400 text-sm">
                                            Belum ada artwork yang ditambahkan.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}