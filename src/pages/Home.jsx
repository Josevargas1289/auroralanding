import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Zap, ShieldCheck, Building2 } from "lucide-react";
import { carruselDataHome } from "../data/carruselDataHome";
import ImageCarousel from "../components/ui/ImageCarousel";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Aurora 365 — Home</title>
        <link rel="canonical" href="https://aurora365.local/" />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#55537A] text-white">
        {/* Espaciado superior para separar de la navbar */}
        <div className="container-max grid md:grid-cols-2 gap-10 items-center pt-40 pb-24">
          {/* Texto principal */}
          <div className="z-10">
            <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-medium">
              Software educativo empresarial
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight drop-shadow-md">
              Innovación educativa que transforma el aprendizaje
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-prose">
              Con Aurora 365, gestiona matrículas, evaluaciones y convivencia en
              una plataforma moderna, segura y alineada con la normativa MEN.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contacto"
                className="btn bg-white text-[#222145] font-semibold hover:bg-[#F2F1F9]"
              >
                Solicitar demo
              </Link>
              <Link
                to="/productos"
                className="btn btn-outline border-white text-white hover:bg-white/10"
              >
                Ver productos
              </Link>
            </div>
          </div>

          {/* Carrusel */}
          <div className="relative z-10">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageCarousel images={carruselDataHome} />
            </div>
          </div>
        </div>

        {/* Elemento decorativo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full" />
      </section>

      {/* BENEFICIOS */}
      <section className="py-24 bg-white">
        <div className="container-max text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#222145]">
            ¿Por qué elegir Aurora 365?
          </h2>
          <p className="text-text-secondary mt-3">
            Tres pilares que impulsan la excelencia institucional.
          </p>
        </div>

        <div className="container-max grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck size={38} />,
              title: "Cumplimiento normativo",
              desc: "Reportes, indicadores y formatos alineados al MEN y la Ley 1620.",
            },
            {
              icon: <Zap size={38} />,
              title: "Rendimiento y fiabilidad",
              desc: "Arquitectura escalable + tecnología cloud para 99.9 % de uptime.",
            },
            {
              icon: <Building2 size={38} />,
              title: "Soporte y acompañamiento",
              desc: "Acompañamiento cercano, formación docente y asistencia técnica.",
            },
          ].map((b, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-[#F9FAFB] hover:bg-white hover:-translate-y-1"
            >
              <div className="text-brand-primary mb-4 flex justify-center">
                {b.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#222145] mb-2">
                {b.title}
              </h3>
              <p className="text-text-secondary text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKOLA */}
      <section className="relative py-24 overflow-hidden bg-[#EAEAFD]">
        <div className="container-max grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#222145]">
              Skola — gestión académica integral
            </h2>
            <p className="mt-4 text-text-secondary max-w-prose">
              Matrículas, evaluación, indicadores y convivencia en un solo lugar.
              Simplifica la gestión escolar con una solución centralizada y segura.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/productos/skola" className="btn btn-primary">
                Ver Skola
              </Link>
              <Link to="/precios" className="btn btn-secondary">
                Ver precios
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/assets/skola-hero.png"
                alt="Skola"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#06B48A]/20 blur-2xl rounded-full" />
          </div>
        </div>
      </section>
    </>
  );
}
