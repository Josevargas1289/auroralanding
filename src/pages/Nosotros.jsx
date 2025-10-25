import { Helmet } from "react-helmet-async";

export default function Nosotros() {
  return (
    <>
      <Helmet>
        <title>Nosotros — Aurora 365</title>
      </Helmet>

      <section className="pt-36 md:pt-44 pb-20 bg-[#F7F7FC] min-h-screen">
        <div className="container-max">
          <h1 className="text-3xl font-semibold text-[#222145] mb-4">
            Nosotros
          </h1>
          <p className="text-text-secondary max-w-prose leading-relaxed text-[15px]">
            En <strong>Aurora 365</strong> desarrollamos software educativo
            empresarial con un enfoque en <strong>seguridad</strong>,
            <strong>cumplimiento normativo</strong> y
            <strong> acompañamiento institucional</strong>.  
            Nuestra misión es transformar la gestión académica y administrativa
            de las instituciones educativas mediante herramientas modernas,
            seguras y alineadas con la normativa del MEN.
          </p>
        </div>
      </section>
    </>
  );
}
