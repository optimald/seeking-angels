"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <div className="text-3xl">Seeking Angels</div>
          <div className="text-lg">Foundation</div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <Link href="/mission" className="hover:text-green-400 transition-colors">About Us</Link>
          <Link href="/calendar" className="hover:text-green-400 transition-colors">Events</Link>
          <Link href="/donation" className="hover:text-green-400 transition-colors">Help & Resources</Link>
          <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-blue-800 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-800 border-t border-blue-700">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <Link 
              href="/" 
              className="block py-2 hover:text-green-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/mission" 
              className="block py-2 hover:text-green-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/calendar" 
              className="block py-2 hover:text-green-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/donation" 
              className="block py-2 hover:text-green-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Help & Resources
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 hover:text-green-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
