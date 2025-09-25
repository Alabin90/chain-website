// components/Footer.js
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f2efe9] text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand + Description */}
        <div>
        
          <h2 id="contact" className="text-2xl font-bold">RAYO WORLD UNIQUE SERVICES</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Experience luxury & exclusive collection of premium chains and elegant pendants — crafted to shine for every occasion.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            {/* <Link href="#" className="p-3 rounded-full bg-black text-white hover:bg-gray-700">
              <FaTiktok size={18} />
            </Link> */}
            <Link href="https://www.instagram.com/rayogoldjeweler?igsh=eDJ2ZWx0dTR4aGNj&utm_source=qr" className="p-3 rounded-full bg-black text-white hover:bg-gray-700">
              <FaInstagram size={18} />
            </Link>
            <Link href="https://www.facebook.com/share/15akyJhRXb/?mibextid=wwXIfr" className="p-3 rounded-full bg-black text-white hover:bg-gray-700">
              <FaFacebookF size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#product">Products</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="flex items-center gap-2 text-sm text-gray-600">
            {/* 📍 123 Beauty Lane, London, UK SW1A 1AA */}
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-600 mt-2">
            ☎️ +971 55 233 0359
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-600 mt-2">
            ⏰ Mon-Sat: 9AM - 7PM
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-500">
        © 2025 RAYO WORLD UNIQUE SERVICES. All rights reserved.
      </div>
    </footer>
  );
}
