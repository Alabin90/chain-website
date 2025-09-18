'use client'
import { useCart } from '@/context/CartContext/page';
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { cartCount } = useCart();

  useEffect(() => {
    if (typeof window === 'undefined') return
    const closeDropdown = (event) => {
      const dropdown = document.getElementById('women-dropdown')
      if (dropdown && !dropdown.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', closeDropdown)
    return () => document.removeEventListener('mousedown', closeDropdown)
  }, [])

  // Navigation links (no cart icon here anymore)
  const navContent = (isMobile = false) => (
    <>
      <Link href="/" className="text-gray-800 hover:text-green-600" onClick={() => isMobile && setIsSidebarOpen(false)}>HOME</Link>

      <div id="women-dropdown" className="relative">
        <Link href="#pen" className="text-gray-800 hover:text-green-600" onClick={() => isMobile && setIsSidebarOpen(false)}>PENDANT</Link>
      </div>

      <Link href="/about" className="text-gray-800 hover:text-green-600" onClick={() => isMobile && setIsSidebarOpen(false)}>ABOUT</Link>
      <Link href="#contact" className="text-gray-800 hover:text-green-600" onClick={() => isMobile && setIsSidebarOpen(false)}>CONTACT</Link>


      {/* Account Icon */}
      <button aria-label="Account" className="text-gray-800 hover:text-green-600 transition">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </button>
    </>
  );

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Hamburger menu (mobile only) */}
            <button className="md:hidden text-gray-800 hover:text-green-600" onClick={() => setIsSidebarOpen(true)}>☰</button>
            <Image 
  src="/image/logo.png" 
  alt="Diamond Pendant" 
  width={30} 
  height={30} // ✅ not 500
  className="w-8 h-8"
  priority
/>
            <Link href="/" className="text-xl font-bold text-gray-800">RWUS</Link>
          </div>

          {/* Desktop Nav + Cart */}
          <div className="hidden md:flex items-center space-x-6">
            {navContent(false)}
            <Link href="/cart" className="relative">
              <svg className="w-6 h-6 text-gray-800 hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100-4 2 2 0 000 4zm-3.414 2.09A1 1 0 1015.414 15.414a1 1 0 00-1.414-1.414l-.707-.707z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Cart (top bar only) */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <svg className="w-6 h-6 text-gray-800 hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100-4 2 2 0 000 4zm-3.414 2.09A1 1 0 1015.414 15.414a1 1 0 00-1.414-1.414l-.707-.707z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* Sidebar (links only) */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsSidebarOpen(false)} className="text-gray-800 hover:text-red-500 text-xl">✕</button>
        </div>
        <nav className="flex flex-col p-4 space-y-3">
          {navContent(true)}
        </nav>
      </div>
    </>
  );
}
