'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { useCart } from '@/context/CartContext/page';

export default function ProductModal({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // Get addToCart from context

  const imageList = Array.isArray(product.images) && product.images.length > 0
    ? product.images
    : [product.image].filter(Boolean);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose(); // Close modal after adding
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative max-h-screen w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <IoMdClose size={28} />
        </button>

        <div className="flex flex-col lg:flex-row gap-6 pt-6">
          {/* Images */}
          <div className="lg:w-1/2">
            <Image
              src={product.image || '/placeholder.jpg'}
              alt={product.name}
              width={400}
              height={400}
              className="h-64 w-full object-cover rounded-md"
            />
            <div className="mt-3 flex space-x-2 overflow-x-auto pb-2">
              {imageList.slice(0, 4).map((img, idx) => (
                <Image
                  key={idx}
                  src={img || '/placeholder.jpg'}
                  alt={`View ${idx + 1}`}
                  width={80}
                  height={80}
                  className="h-20 w-20 object-cover border border-gray-200 rounded"
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-gray-700">{product.description}</p>

            <p className="mt-2 text-xl font-semibold text-gray-900">
              ₦{product.price?.toFixed(2)}
            </p>

            {/* Quantity */}
            <div className="mt-4">
              <label className="text-sm font-medium text-gray-600">QUANTITY</label>
              <div className="mt-1 flex items-center space-x-4">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="rounded border px-3 py-1 hover:bg-gray-50"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="rounded border px-3 py-1 hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full rounded border py-3 text-gray-700 hover:bg-gray-50"
            >
              ADD TO CART - ₦{(product.price * quantity).toFixed(2)}
            </button>
            <button className="mt-2 w-full rounded bg-black py-3 text-white hover:bg-gray-800">
              BUY IT NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}