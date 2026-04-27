function Footer() {
  return (
    <footer className="w-full bg-green-700 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold">Fuel Pump ⛽</h2>
          <p className="text-sm text-green-100 mt-2">
            Providing high-quality fuel services with trust, speed, and
            reliability.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-green-100">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Career</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-green-100 text-sm">Email: support@fuelpump.com</p>
          <p className="text-green-100 text-sm">Phone: +92 300 1234567</p>
          <p className="text-green-100 text-sm">Location: Pakistan</p>
        </div>
      </div>

      <div className="text-center py-4 border-t border-green-500 text-green-100 text-sm">
        © {new Date().getFullYear()} Fuel Pump. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
