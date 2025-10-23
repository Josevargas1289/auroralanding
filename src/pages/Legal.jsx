import { Helmet } from 'react-helmet-async'

export default function Legal() {
  return (
    <>
      <Helmet><title>Legal — Aurora 365</title></Helmet>
      <section className="section">
        <div className="container-max prose max-w-none">
          <h1 className="text-3xl font-semibold">Términos y Privacidad</h1>
          <p className="mt-3 text-text-secondary">Contenido legal demo. Ajusta este texto a tus políticas.</p>
        </div>
      </section>
    </>
  )
}
