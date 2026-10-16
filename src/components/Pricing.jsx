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
        <p>Elige el ritmo que se adapta a tu vida. Sin permanencias ni letra pequeña.</p>
      </Reveal>

      <Reveal delay={0.1}>
        <ol className="price-list">
          {plans.map((plan) => (
            <li key={plan.name} className={`price-row ${plan.featured ? 'featured' : ''}`}>
              <div className="price-head">
                <p className="price-name">{plan.name}</p>
                <p className="price-period">{plan.period}</p>
              </div>
              <ul className="price-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p className="price-amount">
                <span>{plan.price}</span>
                <sup>€</sup>
                <a href="#primera-clase" className="price-link">Empezar</a>
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
