import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <nav className="bg-blue-600 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-8 justify-end">
          <Link to="/" className="font-bold text-lg hover:text-blue-100">
            Home
          </Link>
          <Link to="/shop" className="font-bold text-lg hover:text-blue-100">
            Shop
          </Link>
          <Link to="/about" className="font-bold text-lg hover:text-blue-100">
            About
          </Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
