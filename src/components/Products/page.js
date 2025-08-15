// pages/products.js
"use client";
import React, { useRef } from "react";
import ProductCard from "@/components/ProductCard/page";

export default function ProductsPage() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null); // new ref for third row if needed

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

   const products = [
    {
      id: 1,
      name: "Women's Halloween Ring Bracelet All-in-One Chain",
      image: "/image/ped.jpeg",
      slug: "women-halloween-ring-bracelet",
      description: "Spooky and stylish for Halloween vibes.",
      price: 21425.87,
      oldPrice: 25000.00,
      sale: true,
      colors: ['#FFC0CB', '#8B4513', '#D2B48C', '#FFA07A'],
    },
    {
      id: 2,
      name: "Unisex Vintage Natural Stone N Bracelet",
      slug: "unisex-vintage-natural-stone-bracelet",
      image: "/image/pe2.jpg",
      description: "Timeless design with earthy tones.",
      price: 19909.67,
      sale: false,
      colors: ['#FFD700', '#8B4513', '#D2B48C'],
    },
    {
      id: 3,
      name: "Bohemian Colorful Beaded Layered Bracelet",
      slug: "bohemian-colorful-beaded-bracelet",
      image: "/image/pe3.jpg",
      description: "Vibrant and fun layered look.",
      price: 19894.36,
      oldPrice: 22000.00,
      sale: true,
      colors: ['#FFC0CB', '#8B4513', '#D2B48C', '#FFA07A', '#FFD700'],
    },
    {
      id: 4,
      name: "Individually Adjustable Cuban Buckle Multilayer Bracelet",
      slug: "cuban-buckle-multilayer-bracelet",
      image: "/image/pe4.jpg",
      description: "Bold and trendy with a secure buckle.",
      price: 42867.06,
      sale: false,
      colors: ['#FFC0CB', '#8B4513', '#D2B48C'],
    },
    {
      id: 5,
      name: "Vintage Flower Pattern Leather Cord Bracelet",
      slug: "vintage-flower-leather-cord-bracelet",
      image: "/image/pe5.jpg",
      description: "Classic vintage leather style.",
      price: 22957.38,
      sale: true,
      colors: ['#8B4513', '#D2B48C', '#A0522D'],
    },
    {
      id: 6,
      name: "Ethereal Essence Multi-Stone Bracelet",
      slug: "ethereal-essence-multi-stone-bracelet",
      image: "/image/bana.jpg",
      description: "Delicate stones for a mystical vibe.",
      price: 18623.2,
      sale: false,
      colors: ['#FFC0CB', '#E6E6FA', '#B0E0E6'],
    },
  ];

  const products2 = [
    {
      id: 1,
      name: "Women's Halloween Ring Bracelet All-in-One Chain",
      slug: "women-halloween-ring-bracelet",
      image: "/image/hab.jpg",
      description: "Spooky and stylish for Halloween vibes.",
      price: 21425.87,
      oldPrice: 25000.00,
      sale: true,
      colors: ['#FFC0CB', '#8B4513', '#D2B48C', '#FFA07A'],
    },
    {
      id: 2,
      name: "Unisex Vintage Natural Stone N Bracelet",
      slug: "unisex-vintage-natural-stone-bracelet",
      image: "/image/han1.jpg",
      description: "Timeless design with earthy tones.",
      price: 19909.67,
      sale: false,
      colors: ['#FFD700', '#8B4513', '#D2B48C'],
    },
    {
      id: 3,
      name: "Bohemian Colorful Beaded Layered Bracelet",
      slug: "bohemian-colorful-beaded-bracelet",
      image: "/image/han40.jpg",
      description: "Vibrant and fun layered look.",
      price: 19894.36,
      oldPrice: 22000.00,
      sale: true,
      colors: ['#FFC0CB', '#8B4513', '#D2B48C', '#FFA07A', '#FFD700'],
    },
    {
      id: 4,
      name: "Individually Adjustable Cuban Buckle Multilayer Bracelet",
      slug: "cuban-buckle-multilayer-bracelet",
      image: "/image/han9.jpg",
      description: "Bold and trendy with a secure buckle.",
      price: 42867.06,
      sale: false,
      colors: ['#FFC0CB', '#8B4513', '#D2B48C'],
    },
    {
      id: 5,
      name: "Vintage Flower Pattern Leather Cord Bracelet",
      slug: "vintage-flower-leather-cord-bracelet",
      image: "/image/han6.jpg",
      description: "Classic vintage leather style.",
      price: 22957.38,
      sale: true,
      colors: ['#8B4513', '#D2B48C', '#A0522D'],
    },
    {
      id: 6,
      name: "Ethereal Essence Multi-Stone Bracelet",
      slug: "ethereal-essence-multi-stone-bracelet",
      image: "/image/han44.jpg",
      description: "Delicate stones for a mystical vibe.",
      price: 18623.2,
      sale: false,
      colors: ['#FFC0CB', '#E6E6FA', '#B0E0E6'],
    },
      {
      id: 7,
      name: "Ethereal Essence Multi-Stone Bracelet",
      slug: "ethereal-essence-multi-stone-bracelet",
      image: "/image/hand3.jpg",
      description: "Delicate stones for a mystical vibe.",
      price: 18623.2,
      sale: true,
      colors: ['#FFC0CB', '#E6E6FA', '#B0E0E6'],
    },
  ];
  const products3 = [
    {
      id: 6,
      name: "Ethereal Essence Multi-Stone Bracelet",
      slug: "ethereal-essence-multi-stone-bracelet",
      image: "/image/ne1.jpg",
      description: "Delicate stones for a mystical vibe.",
      price: 18623.2,
      sale: false,
      colors: ["#FFC0CB", "#E6E6FA", "#B0E0E6"],
    },
       {
      id: 4,
      name: "Individually Adjustable Cuban Buckle Multilayer Bracelet",
      slug: "cuban-buckle-multilayer-bracelet",
      image: "/image/ne2.jpg",
      description: "Bold and trendy with a secure buckle.",
      price: 42867.06,
      sale: false,
      colors: ['#FFC0CB', '#8B4513', '#D2B48C'],
    },
    {
      id: 5,
      name: "Vintage Flower Pattern Leather Cord Bracelet",
      slug: "vintage-flower-leather-cord-bracelet",
      image: "/image/ne3.jpg",
      description: "Classic vintage leather style.",
      price: 22957.38,
      sale: true,
      colors: ['#8B4513', '#D2B48C', '#A0522D'],
    },
    {
      id: 6,
      name: "Ethereal Essence Multi-Stone Bracelet",
      slug: "ethereal-essence-multi-stone-bracelet",
      image: "/image/p00.jpg",
      description: "Delicate stones for a mystical vibe.",
      price: 18623.2,
      sale: false,
      colors: ['#FFC0CB', '#E6E6FA', '#B0E0E6'],
    },
     {
      id: 7,
      name: " Multi-Stone Bracelet",
      slug: "ethereal-essence-multi-stone-bracelet",
      image: "/image/pen33.jpg",
      description: "Delicate stones for a mystical vibe.",
      price: 18623.2,
      sale: false,
      colors: ['#FFC0CB', '#E6E6FA', '#B0E0E6'],
    },
    {
      id: 8,
      name: " Stone Bracelet",
      slug: "ethereal-essence-multi-stone-bracelet",
      image: "/image/han4.jpg",
      description: "Delicate stones for a mystical vibe.",
      price: 18623.2,
      sale: false,
      colors: ['#FFC0CB', '#E6E6FA', '#B0E0E6'],
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Explore Our Bracelets
      </h1>

      {/* Row 1 */}
      <h2 className="text-2xl font-semibold mb-4">PENDANCES </h2>
      <div className="relative mb-10">
        <button
          onClick={() => scrollLeft(scrollRef1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          aria-label="Scroll left"
        >
          ◀
        </button>
        <div
          ref={scrollRef1}
          className="flex space-x-6 overflow-x-auto pb-6 snap-x scrollbar-hide px-2"
        >
          {products.map((product) => (
            <div key={product.id} className="snap-start flex-shrink-0 w-64">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <button
          onClick={() => scrollRight(scrollRef1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          aria-label="Scroll right"
        >
          ▶
        </button>
      </div>

      {/* Row 2 */}
      <h2 className="text-2xl font-semibold mb-4"> Classic karat chain</h2>
      <div className="relative mb-10">
        <button
          onClick={() => scrollLeft(scrollRef2)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          aria-label="Scroll left"
        >
          ◀
        </button>
        <div
          ref={scrollRef2}
          className="flex space-x-6 overflow-x-auto pb-6 snap-x scrollbar-hide px-2"
        >
          {products2.map((product) => (
            <div key={product.id} className="snap-start flex-shrink-0 w-64">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <button
          onClick={() => scrollRight(scrollRef2)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          aria-label="Scroll right"
        >
          ▶
        </button>
      </div>

      {/* Row 3 */}
      <h2 className="text-2xl font-semibold mb-4">Mystical & Elegant</h2>
      <div className="relative">
        <button
          onClick={() => scrollLeft(scrollRef3)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          aria-label="Scroll left"
        >
          ◀
        </button>
        <div
          ref={scrollRef3}
          className="flex space-x-6 overflow-x-auto pb-6 snap-x scrollbar-hide px-2"
        >
          {products3.map((product) => (
            <div key={product.id} className="snap-start flex-shrink-0 w-64">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <button
          onClick={() => scrollRight(scrollRef3)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          aria-label="Scroll right"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
