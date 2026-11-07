import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import About from '@/sections/About';
import Certifications from '@/sections/Certifications';
import Contact from '@/sections/Contact';
import Education from '@/sections/Education';
import Experience from '@/sections/Experience';
import Hero from '@/sections/Hero';
import Interests from '@/sections/Interests';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';

function App() {
  return (
    <div className="min-h-screen bg-bg font-sans text-fg antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Interests />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
