// app/about/page.tsx  (if you're using Next.js App Router)
// OR pages/about.tsx   (if you're on Pages Router)

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-white min-h-screen">
      {/* Top Nav HOME Button */}
      <div className="p-6">
        <Link href="/" className="text-gray-800 hover:text-green-600">
          <button className="btn btn-black">HOME</button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-72">
        <Image
          src="/image/ped.jpeg" // <-- replace with your gold chain banner
          alt="Luxury Gold Chains"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            About Us
          </h1>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Crafting Elegance in Gold
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At <span className="font-semibold">Bubbles</span>, we believe
              jewelry is more than just an accessory — it’s a statement of
              identity, class, and timeless beauty. Every chain and pendant we
              design is carefully crafted from high-quality karat gold,
              delivering durability and elegance that lasts a lifetime.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Whether you’re looking for a bold pendant chain to showcase your
              style, or a subtle piece to carry meaning, our collections are
              made to shine with you in every moment.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition">
              <Link href="/" className="text-white">
                Shop Now
              </Link>
            </button>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-100 md:h-[400px]">
            <Image
              src="/image/bana.jpg" // <-- replace with chain/pendant image
              alt="Gold Chain Close-up"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Mission / Vision Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Promise
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We’re committed to delivering premium jewelry that blends tradition
            with modern design. Every piece is polished with precision,
            reflecting the passion we have for excellence and the trust our
            customers place in us.
          </p>
        </div>
      </div>
    </section>
  );
}
