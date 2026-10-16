import { motion } from 'framer-motion';

/** Anillo de la marca. Se dibuja al cargar la página. */
export default function Logo({ size = 32, stroke = 'var(--sage)' }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      aria-hidden="true"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
    >
      <motion.circle
        cx="20"
        cy="20"
        r="14"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        initial={{ pathLength: 0, rotate: -90 }}
        animate={{ pathLength: 0.85, rotate: 0 }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
        style={{ originX: '50%', originY: '50%' }}
      />
    </motion.svg>
  );
}
