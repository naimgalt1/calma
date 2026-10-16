import Logo from './Logo.jsx';
import './Footer.css';

const studioLinks = [
  { href: '#filosofia', label: 'Quiénes somos' },
  { href: '#horario', label: 'Horario' },
  { href: '#precios', label: 'Precios' },
  { href: '#testimonios', label: 'Comunidad' },
];

const socials = ['✦', '◎', '⊹'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <Logo size={28} stroke="#a8c4a0" />
            Calma
          </div>
          <p className="footer-desc">
            Estudio boutique de yoga y meditación en Barcelona. Un espacio para detenerse, respirar y encontrar el camino
            de vuelta a uno mismo.
          </p>
        </div>

        <div className="footer-col">
          <h4>Estudio</h4>
          <ul>
            {studioLinks.map((link) => (
              <li key={link.href + link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Horario</h4>
          <p>
            Lunes — Viernes
            <br />
            7:30 · 21:00
          </p>
          <br />
          <p>
            Sábado — Domingo
            <br />
            9:00 · 13:00
          </p>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <p>
            C/ Enric Granados, 28
            <br />
            08007 Barcelona
          </p>
          <br />
          <p>
            hola@calmabarcelona.com
            <br />
            +34 931 000 000
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Calma · Estudio de Yoga &amp; Meditación Barcelona</p>
        <div className="footer-social">
          {socials.map((icon) => (
            <a key={icon} href="#" aria-label="Redes sociales">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
