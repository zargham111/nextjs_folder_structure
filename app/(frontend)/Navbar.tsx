"use client"; // Enables client-side interactivity (for mobile menu toggle)
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu toggle

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-background text-foreground border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-4">
        
        {/* Logo / Brand Name */}
        <Link href="/" className="text-lg font-bold tracking-wide">
          Company Name
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-blue-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-500 transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-gray-200 dark:border-gray-700">
          <ul className="py-4 space-y-4 text-center text-sm font-medium">
            <li>
              <Link href="/" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
