import React, { useState } from "react";

export default function Shop() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample product data
  const allProducts = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "/product1.jpg",
      category: "electronics",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      image: "/product2.jpg",
      category: "clothing",
      rating: 4.0,
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
      image: "/product3.jpg",
      category: "electronics",
      rating: 5.0,
    },
    // ...more products
  ];

  const productsPerPage = 12;

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePriceFilter = (min, max) => {
    setPriceRange([min, max]);
    setCurrentPage(1);
  };

  const handleSearch = (searchTerm) => {
    // Implement search logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900">Our Shop</h1>
          <p className="text-gray-600 mt-2">
            Browse our amazing collection of products
          </p>
        </div>
      </header>

      {/* Hero/Banner */}
      <section className="relative h-64 bg-gray-200 overflow-hidden">
        <img
          src="/banner.jpg"
          alt="Shop Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Exclusive Collection
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Main Shop Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Filters & Search Sidebar */}
          <aside className="w-64 shrink-0">
            <div className="bg-white rounded-lg shadow p-6">
              {/* Search Box */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search products..."
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Filter */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleCategoryFilter("all")}
                      className={`w-full text-left px-4 py-2 rounded-lg ${
                        selectedCategory === "all"
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      All Products
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleCategoryFilter("electronics")}
                      className={`w-full text-left px-4 py-2 rounded-lg ${
                        selectedCategory === "electronics"
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Electronics
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleCategoryFilter("clothing")}
                      className={`w-full text-left px-4 py-2 rounded-lg ${
                        selectedCategory === "clothing"
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Clothing
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleCategoryFilter("accessories")}
                      className={`w-full text-left px-4 py-2 rounded-lg ${
                        selectedCategory === "accessories"
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Accessories
                    </button>
                  </li>
                </ul>
              </div>

              {/* Price Filter */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Price Range
                </h3>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  onChange={(e) => handlePriceFilter(0, e.target.value)}
                  className="w-full"
                />
                <p className="text-gray-700 mt-2">
                  ${priceRange[0]} - ${priceRange[1]}
                </p>
              </div>

              {/* Reset Button */}
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg">
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Products Section */}
          <main className="flex-1">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Products
              </h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Sort By: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Top Rated</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {allProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="relative h-48 bg-gray-200 overflow-hidden group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <button className="absolute inset-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <span className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
                        Add to Cart
                      </span>
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex text-yellow-400">
                        <span>★★★★☆</span>
                      </div>
                      <span className="text-sm text-gray-600">
                        ({product.rating})
                      </span>
                    </div>
                    <p className="text-xl font-bold text-blue-600">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mb-8">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {[1, 2, 3, 4, 5].map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    currentPage === pageNum
                      ? "bg-blue-600 text-white"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                Next
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">About Us</h4>
              <p className="text-sm">
                Your trusted online shopping destination for quality products
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#shipping" className="hover:text-white transition">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#returns" className="hover:text-white transition">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
              <p className="text-sm mb-2">Email: info@shop.com</p>
              <p className="text-sm">Phone: 1-800-SHOP</p>
            </div>

            {/* Newsletter Section */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg w-full text-gray-900 focus:outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg text-white font-semibold transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 My Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
