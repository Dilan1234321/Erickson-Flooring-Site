import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">Erickson Flooring</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/services" className="hover:text-amber-700 transition-colors px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="/about" className="hover:text-amber-700 transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="/gallery" className="hover:text-amber-700 transition-colors px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
                <a href="/contact" className="bg-amber-700 text-white hover:bg-amber-800 transition-colors px-5 py-2.5 rounded-full text-sm font-medium shadow-md">Get a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Placeholder for Hero Image - would normally use next/image with a real asset */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581858726768-7589d36de170?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Flooring Done <span className="text-amber-400">Right.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
            Tampa's premier choice for hardwood, luxury vinyl, and tile installation. Elevate your space with craftsmanship that lasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg border border-amber-500">
              Get Your Free Quote
            </a>
            <a href="/gallery" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold transition-all border border-white/30">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-amber-700 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-gray-900">Premium Flooring Solutions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Hardwood Installation",
                desc: "Timeless elegance for your home. We specialize in solid and engineered hardwood installation, refinishing, and repair.",
                icon: "🪵"
              },
              {
                title: "Luxury Vinyl Plank (LVP)",
                desc: "Durability meets design. Perfect for high-traffic areas, our LVP solutions offer water resistance without sacrificing style.",
                icon: "✨"
              },
              {
                title: "Tile & Stone",
                desc: "From ceramic to marble, our precision tile installation creates stunning floors, backsplashes, and bathroom retreats.",
                icon: "🏛️"
              }
            ].map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Projects Completed", value: "500+" },
              { label: "Happy Clients", value: "100%" },
              { label: "Warranty Years", value: "5" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Floors?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Schedule a free consultation. We'll bring samples to you, measure your space, and provide an instant quote.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg mx-auto border border-gray-100">
            <form className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none" placeholder="(813) 555-0123" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none">
                  <option>Hardwood Installation</option>
                  <option>Vinyl Plank (LVP)</option>
                  <option>Tile Installation</option>
                  <option>Repair/Refinishing</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="button" className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg mt-4">
                Request Free Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-gray-900">Erickson Flooring</div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Erickson Flooring. All rights reserved. Serving the Tampa Bay Area.
          </div>
        </div>
      </footer>
    </div>
  );
}
