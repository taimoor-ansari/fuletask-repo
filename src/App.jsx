import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import FuleSection from "./component/FuleSection";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |<Link to="/shop">Shop</Link> |
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Header />
      <Main />
      <FuleSection />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
