import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold tracking-wide">PSO ⛽</div>

        <ul className="flex items-center gap-8 text-lg">
          <li className="cursor-pointer hover:text-green-200 transition">
            <Link to="/"> Home </Link>
          </li>
          <li className="cursor-pointer hover:text-green-200 transition">
            <Link to="/shop"> Shop </Link>
          </li>
          <li className="cursor-pointer hover:text-green-200 transition">
            <Link to="/career"> Career </Link>
          </li>
          <li className="cursor-pointer hover:text-green-200 transition">
            <Link to="/about"> About Us </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
