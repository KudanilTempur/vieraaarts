import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ className = "" }) {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "My Gallery", path: "/gallery" },
        { name: "Commission", path: "/commission" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className={`sticky top-0 z-50 w-full bg-[#D6EAFB] shadow-xs ${className}`}>
            <nav className="mx-auto flex h-[70px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-[6%]">

                {/* Logo */}
                <NavLink to="/" onClick={closeMenu}>
                    <img
                        src="/webdesign/logo.png"
                        alt="Vieararts"
                        className="w-[75px] sm:w-[85px] object-contain"
                    />
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 lg:gap-[45px]">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-sm lg:text-[15px] transition-colors ${isActive
                                    ? "font-bold text-[#16377D]"
                                    : "font-medium text-[#5BA8F0] hover:text-[#16377D]"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="md:hidden p-2 text-[#16377D] hover:text-[#3B82F6] focus:outline-none"
                    aria-label="Toggle Navigation Menu"
                >
                    {isOpen ? (
                        /* Close Icon (X) */
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        /* Hamburger Icon */
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

            </nav>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#D6EAFB] border-t border-[#BBD7EE] px-6 py-4 flex flex-col gap-4 shadow-lg transition-all duration-300">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `text-base py-1 transition-colors ${isActive
                                    ? "font-bold text-[#16377D]"
                                    : "font-medium text-[#5BA8F0] hover:text-[#16377D]"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </header>
    );
}