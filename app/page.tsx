import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductGallery from "@/components/ProductGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductGallery />
      <Features />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

