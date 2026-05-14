import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Philosophy />
      <Categories />
    </main>
  );
}