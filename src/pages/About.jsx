export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            Welcome to our online store. We are dedicated to providing
            high-quality products and excellent customer service.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to make shopping easy, convenient, and enjoyable for
            everyone.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Values</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>Quality products at fair prices</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>Fast and reliable shipping</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>Excellent customer support</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>Sustainable and ethical practices</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
          <p className="text-gray-700">Email: info@myapp.com</p>
          <p className="text-gray-700">Phone: 1-800-123-4567</p>
          <p className="text-gray-700">
            Address: 123 Main St, City, State 12345
          </p>
        </div>
      </div>
    </div>
  );
}
