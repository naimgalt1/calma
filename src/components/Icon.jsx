const paths = {
  leaf: 'M5 19c0-8 6-14 14-14 0 8-6 14-14 14z M5 19l7-7',
  group: 'M9 9m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0 M16 9m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0 M12.5 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0',
  wind: 'M3 8h11a3 3 0 1 0-3-3 M3 12h15a3 3 0 1 1-3 3 M3 16h7',
};

/** Icono de trazo fino para la web de Calma. Hereda el color del texto. */
export default function Icon({ name, size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  );
}
