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

## Qué aprendí

- **Liberar recursos de WebGL.** Al desmontar el componente hay que cancelar el `requestAnimationFrame`, desconectar el `ResizeObserver` y llamar a `dispose()` sobre geometrías, materiales y renderer. Si no, React StrictMode (que monta dos veces en desarrollo) deja contextos de WebGL colgando.
- **Animar al entrar en pantalla.** `whileInView` con `viewport={{ once: true }}` resuelve la mayoría de casos sin escribir `IntersectionObserver` a mano.
- **Animaciones de layout.** Con `layout` y `AnimatePresence`, los elementos que se filtran se reordenan con transición sin que yo tenga que calcular posiciones.
- **Unidades distintas en cada librería.** Framer Motion mide los retrasos en segundos y el CSS en milisegundos; confundirlas dejaba animaciones desfasadas.

## Retos

- **Canvas que no ocupaba el hero.** El renderer de Three.js se dimensionaba con el tamaño de la ventana y no con el contenedor. Lo corregí con `ResizeObserver` sobre el propio contenedor.
- **Horario que se salía de la pantalla.** La cuadrícula de siete días tenía un mínimo de 1000 px y en móvil obligaba a desplazarse en horizontal. En pantallas pequeñas ahora cada día se apila en una fila.
- **Navegación en móvil.** Los enlaces se ocultaban en móvil y no había forma de llegar a ellos. Los dejé en una fila bajo el logo, y el botón principal se redujo para caber junto al logo.
- **Imágenes de un servicio externo.** Igual que en Raíz, las descargué al proyecto y reescribí el historial de git para eliminar las referencias.
