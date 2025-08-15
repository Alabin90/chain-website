"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar/page";
import Products from "@/components/Products/page";
import Footer from "@/components/Footer/page";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Hero Carousel */}
          <div className="flex-shrink-0 h-160 w-auto md:w-1/2 relative overflow-hidden rounded-lg shadow-2xl border border-yellow-200">
            <div className="carousel">
              <div className="carousel-track">
                <Image src="/image/pe5.jpg" alt="Luxury Chain" width={800} height={500} />
                <Image src="/image/han1.jpg" alt="Gold Chain" width={800} height={500} />
                <Image src="/image/pen88.jpg" alt="Diamond Pendant" width={800} height={500} />
                <Image src="/image/banc.jpg" alt="Diamond Pendant" width={800} height={500} />

              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-wide">
              Welcome to Our Jewelry Store
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Discover our exclusive collection of premium chains and elegant pendants — crafted to shine for every occasion.
            </p>
            <button  className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
        <div id="pen"></div>
          <Products />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
