// pages/products.js
"use client";
import React, { useRef } from "react";
import ProductCard from "@/components/ProductCard/page";
import Mother from "@/components/Mother/page";


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
      name: "Rope Chain (18K)",
      image: "/image/kar1.jpeg",
      slug: "rope-chain-18k",
      description: "Classic twisted rope-style bracelet.",
      price: 450000,
      oldPrice: 470000,
      sale: true,
      colors: ["#FFD700", "#D2B48C", "#FFA500"],
    },
    {
      id: 2,
      name: "Cuban Link (22K)",
      image: "/image/kar2.jpeg",
      slug: "cuban-link-22k",
      description: "Bold and timeless Cuban gold chain.",
      price: 600000,
      sale: false,
      colors: ["#FFD700", "#8B4513", "#D2B48C"],
    },
    {
      id: 3,
      name: "Square Link (18K)",
      image: "/image/kar3.jpeg",
      slug: "square-link-18k",
      description: "Strong square links with sleek design.",
      price: 217000,
      
      sale: true,
      colors: ["#FFC0CB", "#FFD700", "#FFA07A"],
    },
    {
      id: 4,
      name: "Figaro Chain (21K)",
      image: "/image/kar4.jpeg",
      slug: "figaro-chain-21k",
      description: "Patterned links with elegant spacing.",
      price: 370000,
      sale: false,
      colors: ["#FFD700", "#D2B48C", "#A0522D"],
    },
    {
      id: 5,
      name: "Snake Chain (20K)",
      image: "/image/kar5.jpeg",
      slug: "snake-chain-20k",
      description: "Smooth, flexible, and shiny finish.",
      price: 360000,
      oldPrice: 380000,
      sale: true,
      colors: ["#8B4513", "#FFD700", "#D2B48C"],
    },
    {
      id: 6,
      name: "Rolo Chain (18K)",
      image: "/image/kar6.jpeg",
      slug: "rolo-chain-18k",
      description: "Round interlocking links, casual look.",
      price: 390000,
      sale: false,
      colors: ["#FFD700", "#E6E6FA", "#B0E0E6"],
    },
    {
      id: 7,
      name: "Teddy Bear Pendant(22K)",
      image: "/image/kar7.jpeg",
      slug: "anchor-chain-22k",
      description: "Nautical style, durable everyday wear.",
      price: 395000,
      sale: false,
      colors: ["#FFD700", "#8B4513", "#D2B48C"],
    },
    {
      id: 8,
      name: "Dollar Pendant (18K)",
      image: "/image/kar8.jpeg",
      slug: "foxtail-chain-18k",
      description: "Dense, woven design for luxury vibe.",
      price: 285000,
     
      sale: true,
      colors: ["#FFD700", "#D2B48C", "#FFA500"],
    },
    {
      id: 9,
      name: "3tones Ball bracelet (21K)",
      image: "/image/kar9.jpeg",
      slug: "byzantine-chain-21k",
      description: "Intricate and regal craftsmanship.",
      price: 410000,
      sale: false,
      colors: ["#FFD700", "#D2B48C", "#A0522D"],
    },
    {
      id: 10,
      name: "Wheat Chain (22K)",
      image: "/image/kar10.jpeg",
      slug: "wheat-chain-22k",
      description: "Braided design, flexible and strong.",
      price: 511500,
      sale: false,
      colors: ["#FFD700", "#8B4513", "#D2B48C"],
    },
    {
      id: 11,
      name: "Ball bracelet(18K)",
      image: "/image/kar11.jpeg",
      slug: "herringbone-chain-18k",
      description: "Flat, smooth links with shimmer.",
      price: 345000,
     
      sale: true,
      colors: ["#FFD700", "#E6E6FA", "#B0E0E6"],
    },
  ];
  


  const products2= [
  
    {
      id: 3,
      name: "Curb Chain (20K)",
      image: "/image/bo.jpg",
      slug: "curb-chain-20k",
      description: "Flat interlocking links for a smooth modern look.",
      price: 385000,
      sale: false,
      colors: ["#FFD700", "#FFA500", "#D2B48C"],
    },
    {
      id: 4,
      name: "Pendant Chain (21K)",
      image: "/image/dui.jpg",
      slug: "pendant-chain-21k",
      description: "Strong chain paired with a detailed pendant.",
      price: 395000,
      oldPrice: 410000,
      sale: true,
      colors: ["#FFD700", "#D2B48C", "#A0522D"],
    },
    {
      id: 5,
      name: "Rope Chain (18K)",
      image: "/image/no.jpg",
      slug: "rope-chain-18k",
      description: "Twisted rope design for bold everyday wear.",
      price: 455000,
      sale: false,
      colors: ["#FFD700", "#E6E6FA", "#B0E0E6"],
    },
    {
      id: 6,
      name: "Cuban Link (24K)",
      image: "/image/we.jpg",
      slug: "cuban-link-24k",
      description: "Heavy Cuban link chain crafted in pure 24k gold.",
      price: 410000,
      sale: false,
      colors: ["#FFD700", "#8B4513", "#D2B48C"],
    },
    {
      id: 7,
      name: "Foxtail Chain (22K)",
      image: "/image/go.jpg",
      slug: "foxtail-chain-22k",
      description: "Dense woven links with a luxury vibe.",
      price: 405000,
      sale: true,
      colors: ["#FFD700", "#D2B48C", "#FFA500"],
    },
    {
      id: 8,
      name: "Rolo Chain (18K)",
      image: "/image/tk.jpg",
      slug: "rolo-chain-18k",
      description: "Round interlocking links, casual and stylish.",
      price: 550000,
      sale: false,
      colors: ["#FFD700", "#E6E6FA", "#B0E0E6"],
    },
    {
      id: 9,
      name: "Figaro Chain  (21K)",
      image: "/image/nof.jpg",
      slug: "byzantine-chain-21k",
      description: "Intricate handcrafted design with royal feel.",
      price: 420000,
      sale: false,
      colors: ["#FFD700", "#D2B48C", "#A0522D"],
    },
    {
      id: 1,
      name: "Figaro Chain (18K)",
      image: "/image/fix.jpg",
      slug: "figaro-chain-18k",
      description: "Classic Figaro chain with alternating link pattern.",
      price: 370000,
      oldPrice: 390000,
      sale: true,
      colors: ["#FFD700", "#D2B48C", "#A0522D"],
    },
    {
      id: 2,
      name: "Box Chain (22K)",
      image: "/image/bon.jpg",
      slug: "box-chain-22k",
      description: "Solid box-style links, sleek and durable.",
      price: 400000,
      sale: false,
      colors: ["#FFD700", "#8B4513", "#D2B48C"],
    },
    {
      id: 10,
      name: "Snake Chain (20K)",
      image: "/image/fjd.jpg",
      slug: "snake-chain-20k",
      description: "Smooth flexible chain with glossy shine.",
      price: 380000,
      oldPrice: 395000,
      sale: true,
      colors: ["#8B4513", "#FFD700", "#D2B48C"],
    },
  ];

  const products3 = [
    {
      id: 1,
      name: "Textured Beaded Bracelet (18K)",
      image: "/image/2t.jpeg",
      slug: "textured-beaded-bracelet-18k",
      description: "Elegant beaded design with textured finish.",
      price: 589000, // 24g * 52.5 * 1.75
      sale: true,
      colors: ["#FFD700", "#D2B48C", "#FFA500"],
    },
    {
      id: 2,
      name: "Figaro Chain Necklace (22K)",
      image: "/image/fi.jpeg",
      slug: "figaro-chain-necklace-22k",
      description: "Classic Figaro link style in rich 22K gold.",
      price: 1080000, 
      sale: false,
      colors: ["#FFD700", "#8B4513", "#D2B48C"],
    },
    {
      id: 3,
      name: "Key Pendant (21K)",
      image: "/image/key pendant.jpeg",
      slug: "key-pendant-21k",
      description: "Symbolic key charm with polished finish.",
      price: 450000, // 3.0g * 61 * 1.75
      
      sale: true,
      colors: ["#FFD700", "#D2B48C", "#FFA500"],
    },
    {
      id: 4,
      name: "Infinity Necklace (22K)",
      image: "/image/inf.jpeg",
      slug: "infinity-necklace-22k",
      description: "Modern infinity symbol, perfect for gifting.",
      price: 585000, // 3.9g * 64 * 1.75
      sale: false,
      colors: ["#FFD700", "#E6E6FA", "#B0E0E6"],
    },
    {
      id: 5,
      name: "Tiny Stud Earrings (18K)",
      image: "/image/stud.jpeg",
      slug: "tiny-stud-earrings-18k",
      description: "Minimalist studs, everyday elegance.",
      price: 120000, // 0.8g * 52.5 * 1.75
      sale: false,
      colors: ["#FFD700", "#D2B48C", "#FFA500"],
    },
    {
      id: 6,
      name: "Pearl Drop Earrings (21K)",
      image: "/image/eer.jpeg",
      slug: "pearl-drop-earrings-21k",
      description: "Sleek drop design with pearl accent.",
      price: 315000, // 2.1g * 61 * 1.75
      sale: true,
      colors: ["#FFD700", "#E6E6FA", "#B0E0E6"],
    },
    {
      id: 7,
      name: "Heart Pendant (22K)",
      image: "/image/hes.jpeg",
      slug: "heart-pendant-22k",
      description: "Romantic heart charm with engraved details.",
      price: 450000, // 3.0g * 64 * 1.75
      sale: false,
      colors: ["#FFD700", "#8B4513", "#D2B48C"],
    },
   
  ];



  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Explore Our Bracelets
      </h1>

      <Mother/>
      <br/>
      <br/>

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
