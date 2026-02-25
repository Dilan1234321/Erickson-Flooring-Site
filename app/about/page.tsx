import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation (Reuse comp later, static for now) */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-gray-900 tracking-tight">Erickson Flooring</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/services" className="hover:text-amber-700 transition-colors px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="/about" className="text-amber-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="/gallery" className="hover:text-amber-700 transition-colors px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
                <a href="/contact" className="bg-amber-700 text-white hover:bg-amber-800 transition-colors px-5 py-2.5 rounded-full text-sm font-medium shadow-md">Get a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Craftsmanship You Can Stand On.</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded in Tampa, Erickson Flooring was built on a simple premise: do it right the first time. We don't cut corners. We cut wood, tile, and stone with obsession-level precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513467535987-fd81bc7d7cd3?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              What started as a one-man operation has grown into Tampa's most trusted flooring team. We've seen every type of subfloor disaster and every design trend. We bring that depth of experience to your living room.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Us?</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">✅ <strong>Dust-Free Installation Systems</strong></li>
              <li className="flex items-center">✅ <strong>Transparent Pricing (No Surprise Fees)</strong></li>
              <li className="flex items-center">✅ <strong>5-Year Craftsmanship Warranty</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
