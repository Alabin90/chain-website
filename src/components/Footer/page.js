// components/Footer.js
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#f2efe9] text-center md">
      {/* Newsletter Section */}
      <div className="py-12 border-b border-gray-300">
        <h2 id='contact' className="text-xl md:text-2xl font-light tracking-wide uppercase">
          Our Newsletter For Updates
        </h2>
        <p className="text-gray-600 mt-2">
          Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
        </p>
        <div className="flex justify-center mt-6">
         
          <button className="bg-black text-white px-6 py-3 font-semibold">
            FACEBOOK
          </button> 
          <br/>
          🧑🏻‍💻
          <button className="bg-black text-white px-6 py-3 font-semibold">
            INSTAGRAM
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-8 max-w-6xl mx-auto">
        {/* Help & Support */}
        <div>
          <h3 className="font-semibold mb-3">HELP & SUPPORT</h3>
          <ul className="space-y-2 text-gray-600">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Intellectual Property Rights</li>
            <li>Track your order</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="font-semibold mb-3">GET IN TOUCH</h3>
          <div className="flex items-center gap-2 text-gray-600">
            <span>✉️</span>
            <a href="yayi_rukayat@yahoo.com" className="hover:underline">
              EMAIL US
            </a>
          </div>
          <h4 className="mt-4 font-semibold">FOLLOW US</h4>
          <p className="mt-2 text-gray-600">📌 Pinterest</p>
        </div>

        {/* We Accept */}
        <div>
           {/* <div className="grid  gap-4">
  <Image src="/image/pay.jpg" alt="Amex" width={60} height={40} className="h-10 w-auto" />
  <Image src="/image/master.jpg" alt="MasterCard" width={60} height={40} className="h-10 w-auto" />
  <Image src="/image/pal.jpg" alt="PayPal" width={60} height={40} className="h-10 w-auto" />
  <Image src="/image/visa.jpg" alt="Visa" width={60} height={40} className="h-10 w-auto" />
  <Image src="/image/str.jpg" alt="Stripe" width={60} height={40} className="h-10 w-auto" />
</div> */}

           
           
          </div>
      </div>

      {/* Bottom */}
      <div className="text-center py-4 text-sm text-gray-500 border-t border-gray-300">
        © 2025 RAYO WORLD UNIQUE SERVICES. 
      </div>
    </footer>
  );
}
