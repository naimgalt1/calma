import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { classTypes, classTypeNames } from '../data/content.js';
import { schedule } from '../data/schedule.js';
import './Schedule.css';

export default function Schedule() {
  const [filter, setFilter] = useState('all');

  const matches = (type) => filter === 'all' || type === filter;

  return (
    <section id="horario" className="section-pad schedule">
      <div className="schedule-header">
        <Reveal>
          <span className="section-label">Mayo 2026</span>
          <h2 className="section-title">Horario semanal</h2>
          <div className="sage-line" />
        </Reveal>

        <Reveal delay={0.15} className="schedule-filters">
          {classTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              aria-pressed={filter === type.id}
              onClick={() => setFilter(type.id)}
              className={`filter-btn ${filter === type.id ? 'active' : ''}`}
            >
              {type.label}
            </button>
          ))}
        </Reveal>
      </div>

      <Reveal className="schedule-scroll">
        <div className="schedule-grid">
          {schedule.map((day) => (
            <div key={day.day} className="schedule-day">
              <div className="schedule-day-header">
                <p className="schedule-day-name">{day.day}</p>
                <p className="schedule-day-num">{day.num}</p>
              </div>
              <div className="schedule-classes">
                <AnimatePresence>
                  {day.classes.filter((c) => matches(c.type)).map((c) => (
                    <motion.article
                      key={`${day.day}-${c.time}`}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className={`clase-card ${c.type}`}
                    >
                      <p className="clase-hora">{c.time}</p>
                      <p className="clase-nombre">{c.name}</p>
                      <p className="clase-prof">{c.teacher}</p>
                      <span className={`clase-tag ${c.type}`}>{classTypeNames[c.type]}</span>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
