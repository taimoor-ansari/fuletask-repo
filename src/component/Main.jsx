function Main() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            PSO⛽
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            We provide high-quality fuel solutions with speed, safety, and
            reliability. Our mission is to power your journey efficiently.
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Learn More
          </button>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="src/component/images.webp"
            alt="Fuel Pump"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Main;
