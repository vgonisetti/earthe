import FadeUp from "../animations/FadeUp";

const categories = [
  {
    title: "Women’s Comfortwear",
    description:
      "Relaxed silhouettes designed for calm everyday movement.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Kidswear",
    description:
      "Soft breathable essentials crafted for gentle comfort.",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Family Matching Sets",
    description:
      "Thoughtful coordinated comfort for warm family moments.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Categories() {
  return (
    <section className="py-32 bg-[#f3ece4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#8a8178] mb-5">
              Featured Collections
            </p>

            <h2 className="text-5xl md:text-6xl text-[#4d473f] leading-tight">
              Comfort for every moment.
            </h2>
          </div>

          <button className="hidden md:block rounded-full border border-[#d8cbb9] px-6 py-3 text-sm text-[#5f584f] hover:bg-[#ebe2d7] transition">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <FadeUp delay={index * 0.15}>
            <div
              key={item.title}
              className="group overflow-hidden rounded-[2rem] bg-[#f7f2eb] shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl text-[#4d473f]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[#6d655d] leading-8">
                  {item.description}
                </p>

                <button className="mt-8 text-sm uppercase tracking-[0.2em] text-[#7b736a]">
                  Explore →
                </button>
              </div>
            </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}