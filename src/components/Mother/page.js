// app/page.tsx
"use client";
import Image from "next/image";

export default function Home() {
  const images = [
    { src: "/image/ped.jpeg", karat: "18K", name: "Classic Diamond Pendant", desc: "A timeless diamond pendant crafted in 18k gold for everyday elegance." },
    { src: "/image/pen33.jpg", karat: "24K", name: "Royal Cross Gold Pendant", desc: "Bold and meaningful, a royal cross pendant designed in pure karat gold." },
    { src: "/image/pe3.jpg", karat: "18K", name: "Heart of Gold Pendant", desc: "Romantic and stylish — a heart-shaped gold pendant that speaks love." },
    { src: "/image/pe4.jpg", karat: "22K", name: "Cuban Link Pendant", desc: "Strong and sleek — a Cuban link pendant made for bold statements." },
    { src: "/image/pe5.jpg", karat: "18K", name: "Vintage Medallion Pendant", desc: "Inspired by heritage, this medallion pendant blends tradition and luxury." },
    { src: "/image/bana.jpg", karat: "20K", name: "Golden Sunburst Pendant", desc: "Radiating charm and power — the Sunburst pendant shines with brilliance." },
  ];
  // const images = [
  //   { src: "/image/kar1.jpeg", karat: "18K", name: "Rope Chain", desc: "Classic twisted rope-style bracelet." },
  //   { src: "/image/kar2.jpeg", karat: "22K", name: "Cuban Link", desc: "Bold and timeless Cuban gold chain." },
  //   { src: "/image/kar3.jpeg", karat: "18K", name: "  ", desc: "Strong square links with sleek design." },
  //   { src: "/image/kar4.jpeg", karat: "21K", name: "Figaro Chain", desc: "Patterned links with elegant spacing." },
  //   { src: "/image/kar5.jpeg", karat: "20K", name: "Snake Chain", desc: "Smooth, flexible, and shiny finish." },
  //   { src: "/image/kar6.jpeg", karat: "18K", name: "Rolo Chain", desc: "Round interlocking links, casual look." },
  //   { src: "/image/kar7.jpeg", karat: "22K", name: "Anchor Chain", desc: "Nautical style, durable everyday wear." },
  //   { src: "/image/kar8.jpeg", karat: "18K", name: "Foxtail Chain", desc: "Dense, woven design for luxury vibe." },
  //   { src: "/image/kar9.jpeg", karat: "21K", name: "Byzantine Chain", desc: "Intricate and regal craftsmanship." },
  //   { src: "/image/kar10.jpeg", karat: "22K", name: "Wheat Chain", desc: "Braided design, flexible and strong." },
  //   { src: "/image/kar11.jpeg", karat: "18K", name: "Herringbone Chain", desc: "Flat, smooth links with shimmer." },
  // ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Two copies of the list for seamless looping */}
      <div className="animate-horizontal-scroll flex flex-row flex-nowrap">
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg group flex-shrink-0 mr-6"
          >
            <Image
              src={image.src}
              alt={image.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay text on LEFT side */}
            <div className="absolute top-0 left-0 h-full w-1/2 bg-black/30 text-yellow-500 flex flex-col justify-center px-3 text-sm">
              <p className="font-bold">{image.karat} {image.name}</p>
              <p className="text-xs">{image.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes horizontal-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-horizontal-scroll {
          animation: horizontal-scroll 50s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
