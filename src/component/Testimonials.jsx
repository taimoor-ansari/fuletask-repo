function Testimonials() {
  return (
    <section className="w-full bg-white py-16">
      <h2 className="text-center text-3xl font-bold mb-12">
        What Our Customers Say 💬
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <p className="text-gray-600 italic">
            "Fuel quality is amazing! My car runs smoother than ever. Highly
            recommended."
          </p>
          <h4 className="mt-4 font-bold text-green-700">— Ali Khan</h4>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <p className="text-gray-600 italic">
            "Best fuel station in the city. Fast service and great customer
            support."
          </p>
          <h4 className="mt-4 font-bold text-green-700">— Sara Ahmed</h4>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <p className="text-gray-600 italic">
            "High octane fuel improved my bike performance a lot. Very
            satisfied!"
          </p>
          <h4 className="mt-4 font-bold text-green-700">— Hassan Raza</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
