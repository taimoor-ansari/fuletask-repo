function Header() {
  return (
    <header className="w-full bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold tracking-wide">PSO ⛽</div>

        <ul className="flex items-center gap-8 text-lg">
          <li className="cursor-pointer hover:text-green-200 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-green-200 transition">
            Shop
          </li>
          <li className="cursor-pointer hover:text-green-200 transition">
            Career
          </li>
          <li className="cursor-pointer hover:text-green-200 transition">
            About Us
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
