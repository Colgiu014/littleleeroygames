import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Games from '@/components/Games';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Games />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
