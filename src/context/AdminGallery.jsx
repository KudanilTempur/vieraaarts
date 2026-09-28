import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function AdminGallery() {
    const { artworks, addArtwork, deleteArtwork } = useApp();

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Bust Up");
    const [imagePreview, setImagePreview] = useState(null);

    // 1. Fungsi mengubah file gambar menjadi string Base64
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // result berupa string Data URL (Base64)
            };
            reader.readAsDataURL(file);
        }
    };

    // 2. Fungsi simpan ke AppContext
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!imagePreview) return alert("Pilih file gambar terlebih dahulu!");

        addArtwork({
            title,
            category,
            src: imagePreview, // Simpan string gambar
        });

        // Reset form setelah berhasil
        setTitle("");
        setImagePreview(null);
        e.target.reset();
        alert("Artwork berhasil ditambahkan!");
    };

    return (
        <div className="p-6 max-w-4xl mx-auto font-sans">
            <h2 className="text-2xl font-bold text-[#16377D] mb-6">Kelola Gallery Artwork</h2>

            {/* Form Upload */}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-[#D0E2FF] space-y-4 mb-10">
                <h3 className="text-lg font-bold text-[#16377D]">Tambah Artwork Baru</h3>

                <div>
                    <label className="block text-sm font-semibold text-[#16377D] mb-1">Judul / Nama Artwork</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Contoh: Genshin Fanart"
                        className="w-full border border-gray-300 p-2.5 rounded-xl text-sm focus:outline-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-[#16377D] mb-1">Kategori</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border border-gray-300 p-2.5 rounded-xl text-sm focus:outline-blue-500"
                    >
                        <option value="Bust Up">Bust Up</option>
                        <option value="Half Body">Half Body</option>
                        <option value="Knee Up">Knee Up</option>
                        <option value="Full body">Full body</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-[#16377D] mb-1">Pilih File Gambar</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-[#EBF3FC] file:text-[#16377D] hover:file:bg-[#D0E2FF] cursor-pointer"
                        required
                    />
                </div>

                {/* Preview Gambar Sebelum Upload */}
                {imagePreview && (
                    <div className="mt-3">
                        <p className="text-xs font-semibold text-gray-500 mb-1">Preview Upload:</p>
                        <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-xl border border-gray-200" />
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-3 rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                    + Simpan ke Gallery
                </button>
            </form>

            {/* List Gambar yang Sudah Ada */}
            <h3 className="text-xl font-bold text-[#16377D] mb-4">Daftar Artwork Saat Ini ({artworks.length})</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {artworks.map((art) => (
                    <div key={art.id} className="bg-white border border-[#D0E2FF] rounded-xl p-3 flex flex-col justify-between">
                        <img src={art.src} alt={art.title} className="w-full aspect-[4/3] object-cover rounded-lg mb-2" />
                        <div>
                            <p className="font-bold text-sm text-[#16377D] truncate">{art.title || "Tanpa Judul"}</p>
                            <span className="inline-block text-xs bg-[#EBF3FC] text-[#16377D] px-2 py-0.5 rounded-md font-medium mt-1">
                                {art.category || "General"}
                            </span>
                        </div>
                        <button
                            onClick={() => deleteArtwork(art.id)}
                            className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                            Hapus
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}