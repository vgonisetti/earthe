import FadeUp from "../animations/FadeUp";

export default function Philosophy() {
  return (
    <section className="py-32 bg-[#f7f2eb]">
      <FadeUp>
  <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-[#8a8178] mb-6">
          Our Philosophy
        </p>

        <h2 className="text-5xl md:text-7xl leading-[1.1] text-[#4d473f]">
          Clothing designed to feel gentle on skin and calming in life.
        </h2>

        <p className="mt-10 text-lg leading-9 text-[#6d655d] max-w-3xl mx-auto">
          Earthé blends breathable fabrics, relaxed silhouettes, and
          thoughtful design to create comfortwear that feels emotionally warm,
          timeless, and deeply wearable.
        </p>
      </div>
</FadeUp>
    </section>
  );
}