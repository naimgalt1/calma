import { motion } from 'framer-motion';

/** Fade-in + subida al entrar en pantalla. Solo se anima la primera vez. */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.75, ease: 'easeOut', delay }}
    >
      {children}
    </Component>
  );
}
