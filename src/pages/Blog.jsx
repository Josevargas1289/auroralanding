import { Helmet } from "react-helmet-async";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog — Aurora 365</title>
      </Helmet>

      <section className="pt-36 md:pt-44 pb-20 bg-[#F7F7FC] min-h-screen">
        <div className="container-max text-center">
          <h1 className="text-3xl font-semibold text-[#222145] mb-4">
            Blog
          </h1>
          <p className="text-text-secondary max-w-md mx-auto mb-6 leading-relaxed">
            Aún no hay entradas publicadas.  
            Suscríbete para recibir nuestras próximas novedades, guías y artículos sobre innovación educativa.
          </p>

          <button className="btn btn-primary mt-4">
            Suscribirme
          </button>
        </div>
      </section>
    </>
  );
}
