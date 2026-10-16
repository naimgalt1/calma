import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Philosophy from './components/Philosophy.jsx';
import Schedule from './components/Schedule.jsx';
import FirstClass from './components/FirstClass.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Schedule />
        <FirstClass />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
