import { useEffect } from 'react';
import { clearHashFromUrl } from './scrollToSection';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Approach from './components/Approach';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(clearHashFromUrl, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
