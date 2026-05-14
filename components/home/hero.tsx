export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1800&auto=format&fit=crop"
        alt="Earthé Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.3em] text-sm text-white/80 mb-6">
              Thoughtful Comfortwear
            </p>

            <h1 className="text-6xl md:text-8xl leading-[0.95] text-white">
              Thoughtful comfort for everyday living.
            </h1>

            <p className="mt-8 text-lg text-white/80 leading-8 max-w-xl">
              Breathable muslin essentials designed for calm mornings,
              slower living, and soft family moments.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-full px-8 py-4 bg-white text-[#4d473f] text-sm hover:bg-[#f2ebe2] transition">
                Explore Collection
              </button>

              <button className="rounded-full px-8 py-4 border border-white/40 text-white text-sm backdrop-blur-sm">
                Discover Fabrics
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}