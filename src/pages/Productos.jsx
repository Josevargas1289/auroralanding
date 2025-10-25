import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { products } from "../data/products";

export default function Productos() {
  return (
    <>
      <Helmet>
        <title>Productos — Aurora 365</title>
      </Helmet>

      <section className="pt-36 md:pt-44 pb-20 bg-[#F7F7FC] min-h-screen">
        <div className="container-max">
          <h1 className="text-3xl font-semibold mb-10 text-[#222145]">
            Productos
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <div
                key={p.slug}
                className="card p-6 flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="rounded-lg border border-border-subtle mb-4 object-cover w-full h-44"
                  loading="lazy"
                />
                <div className="text-sm badge w-max mb-2 bg-[#EAEAFD] text-[#484766]">
                  {p.slug === "skola" ? "Insignia" : "Nuevo"}
                </div>
                <h3 className="font-semibold text-lg text-[#222145]">
                  {p.name}
                </h3>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                  {p.short}
                </p>
                <Link
                  to={`/productos/${p.slug}`}
                  className="btn btn-primary mt-6 self-start"
                >
                  Ver detalle
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
