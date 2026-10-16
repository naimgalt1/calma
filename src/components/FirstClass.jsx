import { useState } from 'react';
import Reveal from './Reveal.jsx';
import './FirstClass.css';

const CLASS_OPTIONS = ['Hatha Suave', 'Vinyasa Flow', 'Yin Yoga', 'Meditación Guiada'];
const TIME_OPTIONS = ['Mañana (7:30–9:00)', 'Mediodía (12:00–14:00)', 'Tarde (19:00–21:00)'];
const IMAGE = '/images/1ae66415d_generated_image.png';

export default function FirstClass() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="primera-clase" className="first-class">
      <Reveal className="first-class-image">
        <img src={IMAGE} alt="Primera clase en Calma" />
      </Reveal>

      <Reveal delay={0.1} className="first-class-form-wrap">
        <div className="free-badge">
          <span className="dot" />
          <span>Primera clase completamente gratuita</span>
        </div>
        <span className="section-label">Empieza hoy</span>
        <h2 className="section-title">
          Tu primera
          <br />
          <em>clase, gratis.</em>
        </h2>
        <div className="sage-line" />
        <p className="section-body first-class-intro">
          Sin compromiso, sin tarjeta. Ven, practica y decide si Calma es tu espacio.
        </p>

        {submitted ? (
          <div className="form-success">
            <p>¡Bienvenida/o a Calma. Te esperamos en el estudio.</p>
            <p className="form-success-note">Recibirás la confirmación en tu email en breves.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <Field label="Nombre" placeholder="Tu nombre" required />
              <Field label="Apellidos" placeholder="Tus apellidos" required />
            </div>
            <Field label="Email" type="email" placeholder="hola@tucorreo.com" required />
            <Field label="Teléfono" type="tel" placeholder="+34 600 000 000" />
            <div className="form-row">
              <SelectField label="Tipo de clase" options={CLASS_OPTIONS} placeholder="Elige clase" />
              <SelectField label="Horario preferido" options={TIME_OPTIONS} placeholder="Elige turno" />
            </div>
            <button type="submit" className="form-submit">
              Reservar mi clase gratuita
            </button>
            <p className="form-note">Sin compromiso · Confirmación inmediata por email</p>
          </form>
        )}
      </Reveal>
    </section>
  );
}

function Field({ label, ...inputProps }) {
  return (
    <label className="form-field">
      <span className="form-label">{label}</span>
      <input className="form-input" {...inputProps} />
    </label>
  );
}

function SelectField({ label, options, placeholder }) {
  return (
    <label className="form-field">
      <span className="form-label">{label}</span>
      <select className="form-input" required defaultValue="" aria-label={label}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
