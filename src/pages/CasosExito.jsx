import { Helmet } from 'react-helmet-async'

export default function CasosExito() {
  return (
    <>
      <Helmet><title>Casos de éxito — Aurora 365</title></Helmet>
      <section className="section">
        <div className="container-max grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold">Caso {i}</h3>
              <p className="text-sm text-text-secondary">Desafío → solución → resultados (KPIs) — contenido demo.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
