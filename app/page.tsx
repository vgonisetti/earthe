import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Philosophy />
      <Categories />
      <Footer />
    </main>
  );
}