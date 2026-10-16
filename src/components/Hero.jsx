import Reveal from './Reveal.jsx';
import ZenCanvas from './ZenCanvas.jsx';
import { stats } from '../data/content.js';
import './Hero.css';

const HERO_IMAGE = '/images/c8d6e17b1_generated_image.png';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
      <ZenCanvas />
        <Reveal>
          <p className="hero-eyebrow">Yoga &amp; Meditación · Barcelona</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="hero-title">
            Encuentra
            <br />
            <em>tu centro.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="hero-tagline">
            Un espacio donde la práctica se convierte en silencio, y el silencio en claridad.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="hero-actions">
            <a href="#primera-clase" className="btn-sage">
              Primera clase gratis
            </a>
            <a href="#horario" className="btn-ghost">
              Ver horarios
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="stat-num">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="hero-image">
        <img src={HERO_IMAGE} alt="Yoga en Calma" />
        <div className="hero-image-badge">
          <p>
            "El cuerpo sana con movimiento.
            <br />
            La mente sana con quietud."
          </p>
          <span>Filosofía Calma</span>
        </div>
      </Reveal>
    </section>
  );
}
