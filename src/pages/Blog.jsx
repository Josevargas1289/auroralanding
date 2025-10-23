import { Helmet } from 'react-helmet-async'

export default function Blog() {
  return (
    <>
      <Helmet><title>Blog — Aurora 365</title></Helmet>
      <section className="section">
        <div className="container-max">
          <h1 className="text-3xl font-semibold">Blog</h1>
          <p className="mt-3 text-text-secondary">Aún no hay entradas. Suscríbete para recibir novedades.</p>
        </div>
      </section>
    </>
  )
}
