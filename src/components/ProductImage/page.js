// components/ProductImageSlider.js
"use client";
import Image from 'next/image';

const ProductImageSlider = ({ images }) => {
  return (
    <div>
      {/* Main Image */}
      <div className="mb-4">
        <Image
          src={images[0]}
          alt="Product"
          width={400}
          height={400}
          className="w-full h-auto object-cover rounded"
        />
      </div>

      {/* Thumbnail Previews */}
      <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
        {images.map((image, index) => (
          <div key={index} className="relative w-16 h-16 overflow-hidden rounded">
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-200 transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;