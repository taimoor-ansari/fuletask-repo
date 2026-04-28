export default function Filters({
  selectedCategory,
  setSelectedCategory,
  priceFilter,
  setPriceFilter,
}) {
  const categories = ["all", "electronics", "clothing", "books"];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Filters</h2>

      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-gray-700">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mr-3 w-4 h-4"
              />
              <span className="text-gray-700 capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-gray-700">Price Range</h3>
        <div className="mb-2">
          <input
            type="range"
            min="0"
            max="100"
            value={priceFilter}
            onChange={(e) => setPriceFilter(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <p className="text-gray-600">Up to ${priceFilter}</p>
      </div>
    </div>
  );
}
