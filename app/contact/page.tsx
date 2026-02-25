export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-gray-900 tracking-tight">Erickson Flooring</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/services" className="hover:text-amber-700 transition-colors px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="/about" className="hover:text-amber-700 transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="/gallery" className="hover:text-amber-700 transition-colors px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
                <a href="/contact" className="text-amber-700 px-3 py-2 rounded-md text-sm font-medium">Get a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="bg-gray-900 p-12 text-white md:w-2/5 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-6">Let's Talk Floors.</h1>
              <p className="text-gray-300 mb-8">
                Ready to upgrade your space? Fill out the form, and we'll get back to you within 24 hours to schedule a free estimate.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span>📞</span> <span>(813) 555-0199</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span>📧</span> <span>hello@ericksonflooring.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span>📍</span> <span>Downtown Tampa, FL</span>
                </div>
              </div>
            </div>
            <div className="mt-12 text-gray-500 text-sm">
              © Erickson Flooring
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 md:w-3/5">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none">
                  <option>Hardwood Installation</option>
                  <option>Vinyl Plank (LVP)</option>
                  <option>Tile/Stone</option>
                  <option>Refinishing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
