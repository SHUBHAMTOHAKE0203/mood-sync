'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Signika } from "next/font/google";

// Load Work Sans font with Next.js
const workSans = Signika({ subsets: ["latin"], weight: ["400", "600"] });
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-black text-white p-1 z-50 sticky top-0 w-full ${workSans.className}`}>
      <div className="bg-black text-white p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img alt="moodsync-logo" src="logo.png" className="h-10" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">About</a></li>
            <li><a href="#" className="text-white">Create Your Playlist</a></li>
            <li>
              <a 
                href="/login" 
                className="bg-green-500 text-black py-2 px-4 rounded-lg hover:bg-green-600 transition"
              >
                Log in
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-4 mt-4">
            <li><a href="#" className="text-white block">Home</a></li>
            <li><a href="#" className="text-white block">About</a></li>
            <li><a href="#" className="text-white block">Create Your Playlist</a></li>
            <li>
              <a 
                href="/login" 
                className="bg-green-500 text-black py-2 px-4 rounded-lg hover:bg-green-600 transition block"
              >
                Log in
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
