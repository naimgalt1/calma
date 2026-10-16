import Reveal from './Reveal.jsx';
import { plans } from '../data/pricing.js';
import './Pricing.css';

export default function Pricing() {
  return (
    <section id="precios" className="section-pad pricing">
      <Reveal className="pricing-header">
        <span className="section-label">Tarifas</span>
        <h2 className="section-title">
          Planes <em>simples.</em>
        </h2>
        <div className="sage-line centered" />
        <p>Elige el ritmo que se adapta a tu vida. Sin permanencias, sin letra pequeña.</p>
      </Reveal>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 0.1} className={`price-card ${plan.featured ? 'featured' : ''}`}>
            {plan.featured && <p className="price-badge">Más popular</p>}
            <p className="price-name">{plan.name}</p>
            <p className="price-amount">
              <sup>€</sup>
              {plan.price}
            </p>
            <p className="price-period">{plan.period}</p>
            <div className="price-divider" />
            <ul className="price-features">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a href="#primera-clase" className={`price-cta ${plan.featured ? 'price-cta-white' : 'price-cta-outline'}`}>
              Empezar
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
