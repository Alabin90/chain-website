// app/page.tsx or pages/index.tsx (depending on your Next.js version)

"use client";

import Image from "next/image";
// import { FaSearch } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-green-900 text-white">
        <h1 className="text-xl font-bold">bookiverse</h1>
        <nav className="flex gap-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Browse Books</a>
          <a href="#" className="hover:underline">Bookstores</a>
          <a href="#" className="hover:underline">Sell Books</a>
        </nav>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search"
            className="rounded border-white px-2 py-1 text-white"
          />
          <button className="bg-white text-green-900 px-4 py-2 rounded">Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-8 py-16 bg-cover bg-center text-black" style={{ backgroundImage: 'url(/image/ban1.jpg)' }}>
        <div className=" bg-opacity-60 p-8 rounded-lg max-w-xl">
          <h2 className="text-4xl font-bold mb-4">Your Bookstore Beyond Borders</h2>
          <p className="mb-6">
            Buy, sell, and explore stories from independent bookstores and passionate sellers. One platform. Endless shelves.
          </p>
          <button className="bg-green-900 text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      </section>

      {/* Genres Section */}
     <section className="px-14 py-12">
  <h3 className="text-2xl font-semibold mb-6">Genres</h3>
  <div className="flex overflow-x-auto gap-10">
    {[
      { name: "Kids", image: "/image/boo.jpg" },
      { name: "Biography", image: "/image/bio.jpg" },
      { name: "Adventure", image: "/image/adv.jpg" },
      { name: "Science Fiction", image: "/image/act.jpg" },
      { name: "Christian", image: "/image/chr.jpg" },
      { name: "Educational", image: "/image/edu.png" },
      { name: "Romance", image: "/image/rom.jpg" },
    ].map((genre) => (
      <div
        key={genre.name}
        className="w-28 h-28 bg-center bg-cover rounded-lg flex items-center justify-center text-white font-semibold text-sm shadow-md"
        style={{ backgroundImage: `url(${genre.image})` }}
      >
        <div className="bg-transparent bg-opacity-10 px-2 py-1 rounded">
          {genre.name}
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Best Sellers Section */}
      <section className="bg-gray-100 px-12 py-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold">Best Sellers</h3>
          <a href="#" className="text-sm text-green-800">View All</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[
            { title: "All is Hidden", author: "Amara Isaac", price: "₦8,000" },
            { title: "He Is ALi", author: "Marcus Victor", price: "₦8,000" },
            { title: "Redeeming Love", author: "Francine Rivers", price: "₦8,000" },
            { title: "Brush of Wings", author: "Karen Kingsbury", price: "₦8,000" },
            { title: "Dream Count", author: "Chimamanda", price: "₦8,000" },
            { title: "Becoming", author: "Michelle Obama", price: "₦8,000" },
          ].map((book) => (
            <div key={book.title} className="bg-white text-gray-600 p-2 rounded shadow">
              <div className="h-40 w-full bg-gray-300 text-gray-600 mb-2" />
              <h4 className="font-semibold text-sm">{book.title}</h4>
              <p className="text-xs text-gray-600">{book.author}</p>
              <p className="text-sm font-medium">{book.price}</p>
            </div>
          ))}
        </div>
      </section>
        {/* Popular Now Section */}
      <section className="px-8 py-12">
        <h3 className="text-2xl font-semibold mb-6">Popular Now</h3>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Book Card */}
          <div className="flex flex-col md:flex-row bg-blue-100 p-4 rounded-lg flex-1">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <Image
                src="/image/books/faith.jpg"
                alt="Faith Simplified"
                width={200}
                height={300}
                className="rounded"
              />
            </div>
            <div className="md:ml-6 flex-1">
              <h4 className="text-xl font-bold mb-1">Faith Simplified: What...</h4>
              <p className="text-sm text-gray-700 mb-2">By Aaron Armstrong</p>
              <p className="text-yellow-600 font-semibold mb-2">₦8,000</p>
              <p className="text-xs text-gray-600 mb-4">
                The Christian faith has incredible life-changing power. And yet so many people—Christians included—know so little about it.
              </p>
              <button className="bg-green-900 text-white px-4 py-2 rounded">Buy Now</button>
            </div>
          </div>

          {/* Side Book */}
          <div className="hidden md:block w-1/3">
            <Image
              src="/image/books/wildcat.jpg"
              alt="Land of the Last Wildcat"
              width={300}
              height={300}
              className="rounded shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Author of the Week */}
      <section className="px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold">Author of the week</h3>
          <a href="#" className="text-sm text-green-800">View all books</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div className="md:col-span-2">
            <Image
              src="/image/mu.jpg"
              alt="Chimamanda Ngozi Adichie"
              width={100}
              height={200}
              className="rounded w-3xs "
            />
          </div>
          {[
            { title: "Americanah",  price: "₦8,000", image: "/image/boo.jpg" },
            { title: "Purple Hibiscus", price: "₦8,000" },
            { title: "The Visit", price: "₦8,000" },
            { title: "Dear Ijeawele", price: "₦8,000" },
            { title: "Dream Count", price: "₦8,000" },
            { title: "Zikora", price: "₦8,000" },
            { title: "The Shivering", price: "₦8,000" },
            { title: "Imitation", price: "₦8,000" },
          ].map((book, index) => (
            <div key={index} className="bg-white p-2 rounded shadow text-gray-600">
              <div className="h-40 w-full bg-gray-200 mb-2 rounded" />
              
              <h4 className="font-semibold text-sm">{book.title}</h4>
              <p className="text-sm font-medium">{book.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>

    
  );
}