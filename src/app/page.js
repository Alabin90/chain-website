"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar/page";
import Products from "@/components/Products/page";
import Type from "@/components/Type/page";
import Footer from "@/components/Footer/page";

const images = [
  { src: "/image/pe5.jpg", alt: "Luxury Chain" },
  { src: "/image/han1.jpg", alt: "Gold Chain" },
  { src: "/image/pen88.jpg", alt: "Diamond Pendant" },
  { src: "/image/banc.jpg", alt: "Bracelet Collection" },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Carousel + Overlay Text */}
      <section className="relative w-full h-[600px] overflow-hidden">
        {/* Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index].src}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Overlay Text */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl text-yellow-500 font-bold mb-6 leading-snug tracking-tight">
              Welcome to Our Jewelry Store
            </h1>
            <p className="text-yellow-400 mb-8 text-lg max-w-md mx-auto">
              Discover our exclusive collection of premium chains and elegant
              pendants — crafted to shine for every occasion.
            </p>
            <button className="bg-yellow-500 text-white px-7 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">
              Shop Now
            </button>
      <Type/>

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
