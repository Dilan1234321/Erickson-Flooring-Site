export default function Gallery() {
  const projects = [
    { id: 1, title: "Modern Oak Living Room", loc: "Hyde Park", img: "https://images.unsplash.com/photo-1522050212171-61b01dd24579?q=80&w=2080&auto=format&fit=crop" },
    { id: 2, title: "Herringbone Entryway", loc: "Davis Islands", img: "https://images.unsplash.com/photo-1620608316279-d102dc87f39d?q=80&w=1974&auto=format&fit=crop" },
    { id: 3, title: "Luxury Vinyl Kitchen", loc: "Seminole Heights", img: "https://images.unsplash.com/photo-1595515106967-143892019912?q=80&w=1974&auto=format&fit=crop" },
    { id: 4, title: "Marble Master Bath", loc: "Channelside", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" },
    { id: 5, title: "Reclaimed Wood Office", loc: "Ybor City", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop" },
    { id: 6, title: "Porcelain Patio", loc: "South Tampa", img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop" },
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
                <a href="/services" className="hover:text-amber-700 transition-colors px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="/about" className="hover:text-amber-700 transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="/gallery" className="text-amber-700 px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
                <a href="/contact" className="bg-amber-700 text-white hover:bg-amber-800 transition-colors px-5 py-2.5 rounded-full text-sm font-medium shadow-md">Get a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h1>
          <p className="text-xl text-gray-600">Explore the standard of quality we bring to every job.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.id} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${p.img}')` }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-gray-200">{p.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
