import { Helmet } from "react-helmet-async";

export default function Precios() {
  const plans = [
    {
      name: "Starter",
      price: "$",
      features: ["Hasta 200 estudiantes", "Soporte por email"],
    },
    {
      name: "Pro",
      price: "$$",
      features: ["Hasta 800 estudiantes", "Soporte prioritario"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["+800 estudiantes", "Acuerdos de servicio (SLA)"],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Precios — Aurora 365</title>
      </Helmet>

      <section className="pt-36 md:pt-44 pb-20 bg-[#F7F7FC] min-h-screen">
        <div className="container-max">
          <h1 className="text-3xl font-semibold text-[#222145] mb-10 text-center">
            Planes y precios
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((p) => (
              <div
                key={p.name}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#E0E0F0] flex flex-col items-center text-center"
              >
                <h3 className="font-semibold text-[#222145] text-xl mb-3">
                  {p.name}
                </h3>
                <div className="text-4xl font-bold text-[#6560F0] mb-6">
                  {p.price}
                </div>
                <ul className="space-y-2 text-sm text-text-secondary text-left">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#6560F0] font-bold">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary mt-8 w-full">
                  Solicitar demo
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
