// components/ProductCard.js
"use client";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import ProductModal from '@/components/ProductModal/page'; 
const ProductCard = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Safely get images: fallback to [product.image] or empty array
  const imageList = Array.isArray(product.images)
    ? product.images
    : product.image
    ? [product.image]
    : [];

  return (
    <div className="flex-none w-64 mx-3 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden group">
  {/* Sale Tag */}
  {product.sale && (
    <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded z-10">
      SALE
    </span>
  )}

  {/* Main Image */}
  <div onClick={() => setIsOpen(true)}>
    <Image
      src={product.image || '/placeholder.jpg'}
      alt={product.name || 'Product'}
      width={256}
      height={192}
      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
    />
  </div>

  {/* Thumbnail Images */}
  <div className="flex justify-center space-x-1 mt-2 px-2 pb-2">
    {imageList.slice(0, 4).map((imgSrc, index) => (
      <div key={index} onClick={() => setIsOpen(true)}>
        <Image
          src={imgSrc || '/placeholder.jpg'}
          alt={`${product.name || 'Product'} view ${index + 1}`}
          width={48}
          height={48}
          className="w-12 h-12 object-cover border border-gray-200 rounded cursor-pointer hover:border-green-500 transition"
        />
      </div>
    ))}
  </div>

  {/* Product Details */}
  <div className="p-4">
    {/* <Link href={`/product/${product.slug}`}> */}
      <h5 className="text-lg font-bold text-gray-900 hover:text-green-600 cursor-pointer line-clamp-2">
        {product.name || 'Unnamed Product'}
      </h5>
    {/* </Link> */}
    <p className="text-gray-700 text-sm mt-1">{product.description || ''}</p>
    <p className="text-xl font-semibold text-gray-900 mt-1">
      ₦{(product.price || 0).toFixed(2)}
    </p>
    {product.oldPrice && (
      <p className="text-gray-500 line-through text-sm">
        ₦{product.oldPrice.toFixed(2)}
      </p>
    )}
  </div>

  {/* Modal */}
  {isOpen && <ProductModal product={product} onClose={() => setIsOpen(false)} />}
</div>
  );
};

export default ProductCard;