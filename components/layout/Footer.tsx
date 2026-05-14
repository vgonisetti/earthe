export default function Footer() {
  return (
    <footer className="bg-[#ece3d7] py-20 mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl text-[#4d473f] tracking-[0.15em]">
          Earthé
        </h2>

        <p className="mt-6 text-[#6d655d] max-w-xl leading-8">
          Thoughtful comfortwear inspired by breathable living,
          emotional warmth, and calm everyday rituals.
        </p>

        <div className="mt-16 border-t border-[#d8cbb9] pt-8 flex flex-col md:flex-row justify-between gap-6 text-sm text-[#847d75]">
          <p>© 2026 Earthé</p>

          <div className="flex gap-6">
            <a href="#">Instagram</a>
            <a href="#">Journal</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}