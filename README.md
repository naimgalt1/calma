# Calma — Yoga & Meditación en Barcelona

Página de reservas y presentación para un estudio de yoga, construida con **React**, **Three.js** y **Framer Motion**.

## Scripts

```bash
npm install
npm run dev      # servidor de desarrollo (Vite)
npm run build    # build de producción
npm run preview  # previsualizar el build
```

## Estructura

```
src/
├─ components/            Una sección = un componente + su CSS
│  ├─ Hero.jsx / Hero.css
│  ├─ ZenCanvas.jsx       Escena de Three.js (nudo wireframe + partículas)
│  ├─ Schedule.jsx        Horario con filtros animados
│  ├─ FirstClass.jsx      Formulario de primera clase gratuita
│  ├─ Pricing.jsx         Tarifas
│  ├─ Testimonials.jsx    Opiniones de alumnos
│  └─ …                   Navbar, Philosophy, Footer, Reveal, Logo
├─ data/                  Horario, tarifas y contenido en archivos separados
├─ styles/base.css        Tokens de color/tipografía y estilos compartidos
└─ App.jsx                Composición de la página
```
