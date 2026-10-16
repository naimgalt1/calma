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
        <div className="sage-line centered" />
      </Reveal>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.1} className="testimonial-card">
            <div className="testimonial-quote">"</div>
            <p className="testimonial-stars">★★★★★</p>
            <p className="testimonial-text">{item.text}</p>
            <div className="testimonial-divider" />
            <div className="testimonial-author">
              <div className="testimonial-avatar">{item.initial}</div>
              <div>
                <p className="testimonial-name">{item.name}</p>
                <p className="testimonial-detail">{item.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
