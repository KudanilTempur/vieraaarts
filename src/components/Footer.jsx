import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full bg-[#EBF3FC] border-t border-[#D0E2FF] py-8 px-6 mt-auto">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Branding & Logo */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <img
                        src="/webdesign/logo.png"
                        alt="Mrvieen Illustration"
                        className="h-8 object-contain mb-1"
                    />
                    <p className="text-xs text-[#16377D] font-medium opacity-80">
                        Anime & Character Illustrator
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex items-center gap-6 text-sm font-semibold text-[#16377D]">
                    <Link to="/" className="hover:opacity-75 transition-opacity">
                        Home
                    </Link>
                    <Link to="/gallery" className="hover:opacity-75 transition-opacity">
                        My Gallery
                    </Link>
                    <Link to="/commission" className="hover:opacity-75 transition-opacity">
                        Commission
                    </Link>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://x.com/Vieer430"
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-full bg-white border border-[#D0E2FF] flex items-center justify-center hover:scale-105 transition-transform shadow-sm"
                    >
                        <img src="/webdesign/X-logo.png" alt="X" className="w-4 h-4 object-contain" />
                    </a>
                    <a
                        href="https://discord.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-full bg-white border border-[#D0E2FF] flex items-center justify-center hover:scale-105 transition-transform shadow-sm"
                    >
                        <img src="/webdesign/discord-logo.png" alt="Discord" className="w-4 h-4 object-contain" />
                    </a>
                </div>

            </div>

            {/* Copyright Line */}
            <div className="max-w-5xl mx-auto mt-6 pt-6 border-t border-[#D0E2FF]/60 text-center text-xs text-[#16377D] font-medium opacity-70">
                © {new Date().getFullYear()} Mrvieera Illustration. All rights reserved.
            </div>
        </footer>
    );
}