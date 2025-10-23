# Aurora 365 — Landing corporativa (React + Vite + Tailwind)

Proyecto listo para ejecutar con **npm**.

## Requisitos
- Node 18+
- npm

## Scripts
```bash
npm install
npm run dev      # desarrollo
npm run build    # producción
npm run preview  # servir build local
```

## Estructura
- `src/pages` rutas: Home, Productos, ProductoDetalle, Nosotros, CasosExito, Precios, Blog, Contacto, Legal
- `src/components` Navbar, Footer y UI básicos
- `src/data/products.js` catálogo (incluye **Skola**)
- `src/styles/globals.css` Tailwind + variables CSS con la paleta

## Añadir un nuevo producto
1. Agrega el objeto en `src/data/products.js` (con `slug`, `name`, `short`, etc.).
2. Crea el contenido en `ProductoDetalle.jsx` si requiere secciones especiales.
3. Verifica la ruta `/productos/:slug`.

## Paleta
Variables definidas en `globals.css` y mapeadas en `tailwind.config.js`.

## Accesibilidad y SEO
- Semántica básica, focus states visibles.
- `react-helmet-async` para `<title>` y meta.
- `robots.txt` incluido.

## Despliegue
- Vercel / Netlify / hosting estático: construir con `npm run build` y servir `dist/`.
