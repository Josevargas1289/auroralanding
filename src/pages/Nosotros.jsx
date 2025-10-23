import { Helmet } from 'react-helmet-async'

export default function Nosotros() {
  return (
    <>
      <Helmet><title>Nosotros — Aurora 365</title></Helmet>
      <section className="section">
        <div className="container-max">
          <h1 className="text-3xl font-semibold">Nosotros</h1>
          <p className="mt-3 text-text-secondary max-w-prose">
            Construimos software educativo empresarial con foco en seguridad, cumplimiento normativo y soporte.
          </p>
        </div>
      </section>
    </>
  )
}
