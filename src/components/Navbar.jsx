import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import './Navbar.css';

const links = [
  { href: '#filosofia', label: 'Nosotros' },
  { href: '#horario', label: 'Horario' },
  { href: '#precios', label: 'Precios' },
  { href: '#testimonios', label: 'Alumnos' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        <Logo size={32} />
        <span className="nav-logo-text">Calma</span>
      </a>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <a href="#primera-clase" className="nav-cta">
        Primera clase gratis
      </a>
    </nav>
  );
}
