export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="h-20 rounded-full backdrop-blur-xl bg-[#f7f2eb]/70 border border-[#e8ddd0] px-8 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
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