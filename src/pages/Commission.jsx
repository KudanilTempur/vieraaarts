import { useState } from "react";

const commissionData = {
    "Bust Up": {
        idr: "Rp 70k",
        usd: "$15",
        artworks: ["/artworks/4_5-artwork-7.png"],
    },
    "Half Body": {
        idr: "Rp 90k",
        usd: "$20",
        artworks: ["/artworks/4_5-artwork-1.png"],
    },
    "Knee Up": {
        idr: "Rp 120k",
        usd: "$25",
        artworks: ["/artworks/4_5-artwork-2.png", "/artworks/4_5-artwork-3.png"],
    },
    "Full body": {
        idr: "Rp 150k",
        usd: "$35",
        artworks: ["/artworks/4_5-artwork-5.png", "/artworks/4_5-artwork-6.png"],
    },
};

export default function Commission() {
    const [activeTab, setActiveTab] = useState("Bust Up");
    const [selectedImgIndex, setSelectedImgIndex] = useState(0);

    const currentCategory = commissionData[activeTab];
    const activeImage = currentCategory.artworks[selectedImgIndex] || currentCategory.artworks[0];

    // Format pesan & link WhatsApp dinamis
    const waMessage = encodeURIComponent(
        `Halo! Saya ingin pesan commission kategori *${activeTab}* (${currentCategory.idr} / ${currentCategory.usd}).`
    );
    const waLink = `https://wa.me/6285179778270?text=${waMessage}`;

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSelectedImgIndex(0);
    };

    return (
        <div className="w-full min-h-screen bg-[#F4F8FA] flex flex-col items-center py-12 px-6 font-sans pt-20">

            {/* Header Title */}
            <div className="text-center max-w-2xl mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#16377D] mb-4">
                    Commission Rates & Terms
                </h1>
                <p className="text-lg md:text-xl text-[#16377D] leading-relaxed">
                    Welcome, and <span className="font-bold">thank you</span> for stopping by my little corner! Here's everything you <span className="font-bold">need to know</span> before we make something cute together
                </p>
            </div>

            {/* Rules Section */}
            <div className="w-full max-w-5xl flex flex-col items-center mb-20">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#16377D] mb-8">
                    Let's <span className="font-bold text-[#16377D]">read</span> before commissioning!
                </h2>

                <div className="w-full space-y-6">
                    {/* I Can / Cannot Draw */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Can Draw */}
                        <div className="bg-[#EBF3FC] border border-[#D0E2FF] rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-[#16377D] mb-4">
                                I <span className="text-[#16377D]">can</span> draw
                            </h3>
                            <ul className="space-y-2 text-[#16377D] font-medium">
                                <li className="flex items-center gap-2">
                                    <img src="/webdesign/check-circle.png" alt="check" className="w-5 h-5 object-contain" />
                                    SFW / NSFW
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src="/webdesign/check-circle.png" alt="check" className="w-5 h-5 object-contain" />
                                    LGBT / straight ships
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src="/webdesign/check-circle.png" alt="check" className="w-5 h-5 object-contain" />
                                    Male / female characters
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src="/webdesign/check-circle.png" alt="check" className="w-5 h-5 object-contain" />
                                    Nekomimi / slight mecha
                                </li>
                            </ul>
                        </div>

                        {/* Cannot Draw */}
                        <div className="bg-[#EBF3FC] border border-[#D0E2FF] rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-[#16377D] mb-4">
                                I <span className="text-[#16377D]">cannot</span> draw
                            </h3>
                            <ul className="space-y-2 text-[#16377D] font-medium">
                                <li className="flex items-center gap-2">
                                    <img src="/webdesign/x-circle.png" alt="cannot" className="w-5 h-5 object-contain" />
                                    Furry
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src="/webdesign/x-circle.png" alt="cannot" className="w-5 h-5 object-contain" />
                                    Heavy armor
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src="/webdesign/x-circle.png" alt="cannot" className="w-5 h-5 object-contain" />
                                    Elderly / baby characters
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Turnaround Time */}
                    <div className="bg-[#EBF3FC] border border-[#D0E2FF] rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-[#16377D] mb-2">Turnaround time</h3>
                        <p className="text-[#16377D] leading-relaxed font-medium">
                            1–7 days per piece, not counting queue time. I work about 4–5 hours a day, so thank you for your patience.
                        </p>
                    </div>

                    {/* Terms of Service */}
                    <div className="bg-[#EBF3FC] border border-[#D0E2FF] rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-[#16377D] mb-3">Terms of service</h3>
                        <ul className="list-disc list-inside space-y-1 text-[#16377D] font-medium">
                            <li>Payment is made after the lineart stage.</li>
                            <li>No refunds once payment is sent.</li>
                            <li>Finished pieces may be posted as samples — let me know if you'd like yours kept private.</li>
                            <li>Final high-res file is delivered by Gmail, not Drive.</li>
                        </ul>
                    </div>

                    {/* Extra Charges */}
                    <div className="bg-[#EBF3FC] border border-[#D0E2FF] rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-[#16377D] mb-4">Extra charges</h3>
                        <div className="space-y-2 text-[#16377D] font-medium">
                            <div className="flex justify-between">
                                <span>• Detailed character</span>
                                <span>+5% per detail</span>
                            </div>
                            <div className="flex justify-between">
                                <span>• Detailed background</span>
                                <span>+20% – 50%</span>
                            </div>
                            <div className="flex justify-between">
                                <span>• Commercial use</span>
                                <span>2x base price</span>
                            </div>
                            <div className="flex justify-between">
                                <span>• Extra revision</span>
                                <span>+10% each</span>
                            </div>
                            <div className="flex justify-between">
                                <span>• Extra character</span>
                                <span>+20% per character</span>
                            </div>
                            <div className="flex justify-between">
                                <span>• Difficult pose</span>
                                <span>+10%</span>
                            </div>
                            <div className="flex justify-between">
                                <span>• Rush commission</span>
                                <span>+20% per day skipped</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive Showcase Section */}
            <div className="w-full max-w-5xl flex flex-col items-center mb-24">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#16377D] mb-10">
                    All set for a <span className="font-bold text-[#16377D]">commission</span>?
                </h2>

                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                    {/* Main Image Preview */}
                    <div className="lg:col-span-6 aspect-5/4 bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex items-center justify-center">
                        <img
                            src={activeImage}
                            alt={activeTab}
                            className="w-full h-full object-cover"
                            onError={(e) => e.target.src = 'https://via.placeholder.com/400x500?text=Artwork+Preview'}
                        />
                    </div>

                    {/* Thumbnails Sidebar */}
                    <div className="lg:col-span-2 flex lg:flex-col gap-3 overflow-x-auto">
                        {Array.from({ length: 3 }).map((_, idx) => {
                            const artSrc = currentCategory.artworks[idx];
                            return (
                                <button
                                    key={idx}
                                    onClick={() => artSrc && setSelectedImgIndex(idx)}
                                    className={`w-20 lg:w-full aspect-5/4 bg-gray-300 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${selectedImgIndex === idx && artSrc ? "border-[#1D4ED8]" : "border-transparent opacity-80"
                                        }`}
                                >
                                    {artSrc ? (
                                        <img src={artSrc} alt="thumbnail" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-gray-300" />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Detail & Tabs Box */}
                    <div className="lg:col-span-4 bg-white border border-[#D0E2FF] rounded-2xl p-6 flex flex-col justify-between h-full min-h-[420px]">
                        <div>
                            {/* Tabs Navbar */}
                            <div className="flex justify-between items-center bg-[#F0F6FF] p-1 rounded-xl mb-6 text-xs font-semibold">
                                {Object.keys(commissionData).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => handleTabChange(tab)}
                                        className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${activeTab === tab
                                            ? "bg-[#3B82F6] text-white shadow-sm"
                                            : "text-[#16377D] hover:text-gray-900"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Pricing Info */}
                            <div className="mb-6">
                                <div className="text-2xl font-extrabold text-[#16377D]">{currentCategory.idr}</div>
                                <div className="text-lg font-bold text-[#16377D]">{currentCategory.usd}</div>
                            </div>

                            {/* Payment Info */}
                            <div className="text-sm text-[#16377D] font-medium space-y-1 mb-8">
                                <div>Payment :</div>
                                <div className="pl-3">- Paypal</div>
                                <div className="pl-3">- Gopay</div>
                                <div className="pl-3">- BCA</div>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-bold py-3 rounded-xl text-center transition-colors shadow-sm block"
                        >
                            Order via Whatsapp
                        </a>
                    </div>

                </div>
            </div>

            {/* Alternative Contact Section */}
            <div className="w-full max-w-5xl flex flex-col mb-12 relative">
                <div className="w-full max-w-5xl z-10">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#16377D] mb-6">
                        do not have <span className="font-bold text-[#16377D]">whatsapp</span>?
                    </h3>

                    <div className="w-full md:w-72 bg-[#EBF3FC] border border-[#D0E2FF] rounded-2xl p-6">
                        <h4 className="text-base font-bold text-[#16377D] mb-4">Contact me on</h4>
                        <div className="space-y-3 font-semibold text-[#16377D]">
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://x.com/Vieer430"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-9 h-9 rounded-full bg-white border border-[#D0E2FF] flex items-center justify-center hover:scale-105 transition-transform shadow-sm"
                                >
                                    <img src="/webdesign/X-logo.png" alt="X" className="w-7 h-7 object-contain" />
                                </a>
                                <a
                                    href="https://x.com/Vieer430"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>Vieer430</span>
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://discord.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src="/webdesign/discord-logo.png" alt="Discord" className="w-7 h-7 object-contain" />
                                </a>
                                <a
                                    href="https://discord.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>Vieer_a</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Doodle Accent - Pindah posisi ke kanan */}
                <img
                    src="/webdesign/hero-images-2.png"
                    alt="Doodle"
                    className="absolute bottom-0 right-4 md:right-12 w-28 md:w-36 object-contain pointer-events-none animate-bounce z-0"
                    style={{ animationDuration: '4s' }}
                />
            </div>

        </div>
    );
}