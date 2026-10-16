import Reveal from './Reveal.jsx';
import { testimonials } from '../data/content.js';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section id="testimonios" className="section-pad testimonials">
      <Reveal className="testimonials-header">
        <span className="section-label">Comunidad Calma</span>
        <h2 className="section-title">
          Lo que dicen
          <br />
          <em>nuestros alumnos.</em>
        </h2>
      </Reveal>

      <ul className="quote-list">
        {testimonials.map((item) => (
          <Reveal as="li" key={item.name} className="quote-item">
            <p className="quote-text">{item.text}</p>
            <p className="quote-author">
              <span>{item.name}</span>
              <span className="quote-detail">{item.detail}</span>
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
