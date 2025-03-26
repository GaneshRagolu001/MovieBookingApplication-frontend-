import React, { useState } from "react";
import { profile } from "../assets/images";

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    function handleShowMenu() {
        setShowMenu((prev) => !prev);
    }

    return (
        <header className="h-20 w-full flex items-center px-4 md:px-8  shadow-md">
            {/* Logo */}
            <div className="w-20 h-20 flex items-center">
                <img src="cinelogo.png" alt="logo" className="w-full h-full object-cover" />
            </div>

            {/* Mobile Menu Button */}
            <button className="sm:hidden md:hidden ml-auto text-xl" onClick={handleShowMenu}>
                ☰
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden sm:flex md:flex w-full justify-end items-center gap-6">
                <ul className="flex gap-6 text-[1.1rem]">
                    <li className="hover:text-yellow-400 cursor-pointer">Home</li>
                    <li className="hover:text-yellow-400 cursor-pointer">Movies</li>
                    <li className="hover:text-yellow-400 cursor-pointer">Theaters</li>
                    <li className="hover:text-yellow-400 cursor-pointer">Bookings</li>
                    <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
                </ul>
                <button className="cursor-pointer"><img src={profile} alt="profile" className="h-10 w-10 rounded-full" /></button>
            </nav>

            {/* Mobile Dropdown Menu */}
            {showMenu && (
                <div className="absolute top-20 left-0 w-full bg-gray-800 sm:hidden md:hidden flex flex-col text-center py-4 z-10">
                    <ul className="flex flex-col gap-4 text-[1.1rem]">
                        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Movies</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Theaters</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Bookings</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
