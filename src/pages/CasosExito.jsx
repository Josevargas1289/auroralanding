import { Helmet } from "react-helmet-async";

export default function CasosExito() {
  return (
    <>
      <Helmet>
        <title>Casos de éxito — Aurora 365</title>
      </Helmet>

      <section className="pt-36 md:pt-44 pb-20 bg-[#F7F7FC] min-h-screen">
        <div className="container-max">
          <h1 className="text-3xl font-semibold text-[#222145] mb-10">
            Casos de éxito
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#E0E0F0]"
              >
                <h3 className="font-semibold text-[#222145] mb-2">
                  Caso {i}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Desafío → solución → resultados (KPIs).  
                  Ejemplo de cómo una institución educativa mejoró sus procesos con Aurora 365.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
