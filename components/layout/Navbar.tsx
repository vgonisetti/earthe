export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#f7f2eb]/70 border-b border-[#e8ddd0]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div>
          <h1 className="text-3xl tracking-[0.2em] text-[#4d473f]">
            Earthé
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm text-[#655f58]">
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Family</a>
          <a href="#">Fabrics</a>
          <a href="#">Journal</a>
        </nav>

        <button className="rounded-full px-6 py-3 bg-[#a8b2a1] text-white text-sm hover:opacity-90 transition">
          Shop Now
        </button>
      </div>
    </header>
  );
}