import { useState } from "react";
import ProductGrid from "../component/ProductGrid";
import Filters from "../component/Filters";
import SearchBar from "../component/SearchBar";
import Sort from "../component/Sort";

export default function Shop() {
  const [products] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "https://via.placeholder.com/200",
      category: "electronics",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Product 2",
      price: 39.99,
      image: "https://via.placeholder.com/200",
      category: "clothing",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Product 3",
      price: 49.99,
      image: "https://via.placeholder.com/200",
      category: "electronics",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Product 4",
      price: 19.99,
      image: "https://via.placeholder.com/200",
      category: "clothing",
      rating: 3.9,
    },
    {
      id: 5,
      name: "Product 5",
      price: 59.99,
      image: "https://via.placeholder.com/200",
      category: "books",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Product 6",
      price: 24.99,
      image: "https://via.placeholder.com/200",
      category: "books",
      rating: 4.3,
    },
    {
      id: 7,
      name: "Product 7",
      price: 34.99,
      image: "https://via.placeholder.com/200",
      category: "electronics",
      rating: 4.7,
    },
    {
      id: 8,
      name: "Product 8",
      price: 44.99,
      image: "https://via.placeholder.com/200",
      category: "clothing",
      rating: 4.1,
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceFilter, setPriceFilter] = useState(100);
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesPrice = product.price <= priceFilter;
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Shop</h1>

        <SearchBar search={search} setSearch={setSearch} />

        <div className="flex gap-8 mt-8">
          <div className="w-64">
            <Filters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceFilter={priceFilter}
              setPriceFilter={setPriceFilter}
            />
          </div>

          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Found {filteredProducts.length} products
              </p>
              <Sort sortBy={sortBy} setSortBy={setSortBy} />
            </div>

            <ProductGrid products={displayedProducts} />

            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded ${
                      currentPage === page
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
