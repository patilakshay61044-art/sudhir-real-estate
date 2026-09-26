import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseMe from "./components/WhyChooseMe";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <Hero />

      <About />

      <WhyChooseMe />

      <Services />

      <Blog />

      <Contact />

      <Footer />
    </main>
  );
}