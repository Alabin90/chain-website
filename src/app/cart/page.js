'use client';

import { useCart } from '@/context/CartContext/page';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const handleWhatsAppPayment = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2349161440379";
    const orderMessage = encodeURIComponent(
      `*Hello, I want to order:*\n\n${cart
        .map(({ product, quantity }) => 
          `• ${product.name} - ${quantity} × ₦${product.price.toFixed(2)}`
        )
        .join("\n")}\n\n*Total:* ₦${cartTotal.toFixed(2)}`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${orderMessage}`, "_blank");
   
  };

  if (cart.length === 0) {
    return <div className="p-8 text-center">Your cart is empty</div>;
    <div>
      
    </div>
  }

  return (
    
    <div className="container mx-auto p-8">
<Link href="/" className="text-gray-800 hover:text-green-600">
  <button className="btn btn-black">HOME</button>
</Link>
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="space-y-6">
        {cart.map(({ product, quantity }) => (
          <div key={product.slug} className="flex border-b pb-4">
            <Image
              src={product.image}
              alt={product.name}
              width={120}
              height={120}
              className="h-24 w-24 object-cover rounded"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>₦{product.price.toFixed(2)} × {quantity}</p>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  onClick={() => updateQuantity(product.slug, quantity - 1)}
                  className="px-2 py-1 border"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => updateQuantity(product.slug, quantity + 1)}
                  className="px-2 py-1 border"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(product.slug)}
                  className="text-red-500 ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-xl font-semibold">
        Total: ₦{cartTotal.toFixed(2)}
      </div>

      <button
        onClick={handleWhatsAppPayment}
        className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg"
      >
        Order via WhatsApp
      </button>
    </div>
  );
}
