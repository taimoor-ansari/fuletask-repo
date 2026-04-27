function FuelSection() {
  return (
    <section className="w-full bg-gray-100 py-12">
      <h2 className="text-center text-3xl font-bold mb-10">Fuel Types ⛽</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <img
            src="src/component/petrol.jpg"
            alt="Petrol"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-bold">Petrol</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Petrol is commonly used in cars and bikes for smooth performance
              and quick ignition.
            </p>
            <p className="mt-3 text-green-600 font-bold text-lg">
              Rs. 280 / Liter
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <img
            src="src/component/diesel.jpg"
            alt="Diesel"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-bold">Diesel</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Diesel is efficient for heavy vehicles like trucks and buses,
              offering better mileage.
            </p>

            <p className="mt-3 text-green-600 font-bold text-lg">
              Rs. 295 / Liter
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <img
            src="src/component/High.jpg"
            alt="High Octane"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-bold">High Octane</h3>
            <p className="text-gray-600 mt-2 text-sm">
              High octane fuel is premium fuel used in high-performance and
              luxury vehicles.
            </p>
            <p className="mt-3 text-green-600 font-bold text-lg">
              Rs. 340 / Liter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FuelSection;
