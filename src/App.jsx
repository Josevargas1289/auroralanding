import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Productos from './pages/Productos.jsx'
import ProductoDetalle from './pages/ProductoDetalle.jsx'
import Nosotros from './pages/Nosotros.jsx'
import CasosExito from './pages/CasosExito.jsx'
import Precios from './pages/Precios.jsx'
import Blog from './pages/Blog.jsx'
import Contacto from './pages/Contacto.jsx'
import Legal from './pages/Legal.jsx'

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:slug" element={<ProductoDetalle />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/casos-exito" element={<CasosExito />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </MainLayout>
  )
}
