import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { products } from '../data/products'

export default function Productos() {
  return (
    <>
      <Helmet><title>Productos — Aurora 365</title></Helmet>
      <section className="section">
        <div className="container-max">
          <h1 className="text-3xl font-semibold mb-6">Productos</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <div key={p.slug} className="card p-6 flex flex-col">
                <img src={p.image} alt={p.name} className="rounded-lg border border-border-subtle mb-4" loading="lazy"/>
                <div className="text-sm badge w-max mb-2">{p.slug === 'skola' ? 'Insignia' : 'Nuevo'}</div>
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-text-secondary mt-1">{p.short}</p>
                <Link to={`/productos/${p.slug}`} className="btn btn-primary mt-4">Ver detalle</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
