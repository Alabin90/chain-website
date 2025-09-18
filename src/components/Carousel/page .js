"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/image/ped.jpeg", name: "" },
  { src: "/image/pen33.jpg", name: "" },
  { src: "/image/pe3.jpg", name: "" },
  { src: "/image/pe4.jpg", name: "" },
  { src: "/image/pe5.jpg", name: "" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change slide every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index].src}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[500px]" // adjust height as you need
          >
            <Image
              src={images[index].src}
              alt={images[index].name}
              fill
              className="object-contain bg-black" // show full image with background
            />
            <div className="absolute bottom-0 w-full bg-black/60 text-white text-center py-2 text-lg font-semibold">
              {images[index].name}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
