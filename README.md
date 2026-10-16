# Calma — Yoga y meditación en Barcelona

Página de presentación y reservas para un estudio de yoga, desarrollada por **Naim Galet Naieb**. El objetivo era una web con personalidad propia: un hero con una escena 3D sutil, animaciones que acompañan la lectura y un horario que se puede filtrar sin recargar la página.

🔗 **Demo:** https://naim-calma.vercel.app

## Stack y por qué lo elegí

| Tecnología | Por qué la elegí |
|---|---|
| **React 19** | Cada sección de la página es un componente con su propio CSS, así que cualquiera puede localizar y modificar una parte sin afectar a las demás. |
| **Three.js** | Quería una escena 3D ligera en el hero. Usé Three.js directamente porque solo necesitaba un nudo wireframe y un sistema de partículas; añadir un renderer intermedio habría sido más complejo de lo necesario. |
| **Framer Motion** | Para animaciones de entrada al hacer scroll y para las transiciones del horario al cambiar de filtro (`AnimatePresence` y `layout`), que con CSS puro habría sido bastante más difícil de mantener. |
| **Vite** | Build rápido y configuración mínima. |

## Estructura

```
src/
├─ components/            Una sección = un componente + su CSS
│  ├─ Hero.jsx / Hero.css
│  ├─ ZenCanvas.jsx       Escena de Three.js (nudo wireframe y partículas)
│  ├─ Schedule.jsx        Horario con filtros animados
│  ├─ FirstClass.jsx      Formulario de primera clase gratuita
│  ├─ Pricing.jsx         Tarifas
│  └─ …                   Navbar, Philosophy, Testimonials, Footer, Reveal, Logo
├─ data/                  Horario, tarifas y contenido en archivos separados
├─ styles/base.css        Tokens de color y tipografía compartidos
└─ App.jsx                Composición de la página
```

## Scripts

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar el build
```


## Lecciones técnicas

- **Liberar recursos de WebGL.** Al desmontar, hay que cancelar `requestAnimationFrame`, desconectar el `ResizeObserver` y llamar a `dispose()` sobre geometrías, materiales y renderer. React StrictMode monta dos veces en desarrollo, así que sin esto quedan contextos de WebGL activos.
- **Animar al entrar en pantalla.** `whileInView` con `viewport={{ once: true }}` cubre la mayoría de casos sin escribir un `IntersectionObserver` a mano.
- **Animaciones de layout.** Con `layout` y `AnimatePresence`, los elementos que se filtran se reordenan con transición sin calcular posiciones manualmente.
- **Unidades de tiempo distintas.** Framer Motion usa segundos en `delay`, mientras que CSS usa milisegundos. Mezclarlas produce animaciones desfasadas.

## Problemas resueltos

- **Canvas con el tamaño equivocado.** El renderer de Three.js se dimensionaba con la ventana y no con el contenedor. Se corrige con `ResizeObserver` sobre el propio contenedor.
- **Agenda que desbordaba en móvil.** La cuadrícula de siete días tenía un mínimo de 1000 px. En pantallas pequeñas, cada día se apila en una fila.
- **Navegación oculta en móvil.** Los enlaces se muestran como fila bajo el logo, y el botón principal se reduce para caber junto al logo.
- **Dependencia de imágenes externas.** Igual que en Raíz: imágenes locales y historial de git reescrito para eliminar referencias.
