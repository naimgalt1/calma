import Reveal from './Reveal.jsx';
import { philosophy } from '../data/content.js';
import './Philosophy.css';

export default function Philosophy() {
  return (
    <section id="filosofia" className="section-pad philosophy">
      <Reveal>
        <span className="section-label">Por qué Calma</span>
        <h2 className="section-title">
          Un estudio pensado
          <br />
          <em>para ti.</em>
        </h2>
        <div className="sage-line" />
        <p className="section-body">
          No somos un gimnasio. Somos un espacio de práctica consciente donde cada sesión tiene intención, cada profesor
          tiene historia, y cada alumno importa.
        </p>
      </Reveal>

      <div className="philosophy-grid">
        {philosophy.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.1} className="philosophy-card">
            <p className="philosophy-num">{item.num}</p>
            <div className="philosophy-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
