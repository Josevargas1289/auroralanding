import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { products } from '../data/products'

export default function ProductoDetalle() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)

  if (!product) {
    return (
      <section className="section">
        <div className="container-max">
          <h1 className="text-2xl font-semibold">Producto no encontrado</h1>
          <Link to="/productos" className="btn btn-secondary mt-4">Volver</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <Helmet><title>{product.name} — Aurora 365</title></Helmet>
      <section className="section">
        <div className="container-max grid md:grid-cols-2 gap-8 items-center">
          <img src={product.image} alt={product.name} className="rounded-xl border border-border-subtle"/>
          <div>
            <span className="badge mb-2">{product.tagline}</span>
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <p className="mt-3 text-text-secondary">{product.short}</p>
            <ul className="mt-4 list-disc pl-5 space-y-1 text-sm">
              {product.features.map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <div className="mt-6 flex gap-3">
              <Link to="/contacto" className="btn btn-primary">{product.ctas.primary}</Link>
              <Link to="/precios" className="btn btn-secondary">{product.ctas.secondary}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-max grid md:grid-cols-3 gap-6">
          {['Módulos', 'Integraciones', 'Resultados'].map((t,i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold">{t}</h3>
              <p className="text-sm text-text-secondary mt-2">Contenido demo para {t.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
