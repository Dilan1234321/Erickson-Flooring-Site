export default function Services() {
  const services = [
    {
      title: "Hardwood Installation",
      desc: "From classic oak to exotic teak, we install solid and engineered hardwood with precision nailing and glue-down techniques.",
      price: "Starting at $4/sqft"
    },
    {
      title: "Luxury Vinyl Plank (LVP)",
      desc: "100% waterproof flooring that mimics real wood. Perfect for kitchens, bathrooms, and active households.",
      price: "Starting at $2.50/sqft"
    },
    {
      title: "Tile & Stone",
      desc: "Custom porcelain, ceramic, and natural stone installation. We specialize in large-format tile and intricate mosaic patterns.",
      price: "Custom Quote"
    },
    {
      title: "Dustless Refinishing",
      desc: "Bring your old hardwood back to life without the mess. Our HEPA-filter sanding system keeps your home clean.",
      price: "Starting at $3/sqft"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-gray-900 tracking-tight">Erickson Flooring</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/services" className="text-amber-700 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="/about" className="hover:text-amber-700 transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="/gallery" className="hover:text-amber-700 transition-colors px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
                <a href="/contact" className="bg-amber-700 text-white hover:bg-amber-800 transition-colors px-5 py-2.5 rounded-full text-sm font-medium shadow-md">Get a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We don't just lay floors; we elevate homes. Choose the material that fits your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="border border-gray-100 p-8 rounded-2xl hover:shadow-xl transition-shadow bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{s.desc}</p>
              <div className="inline-block bg-white px-4 py-2 rounded-full text-sm font-semibold text-amber-700 border border-amber-100">
                {s.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
