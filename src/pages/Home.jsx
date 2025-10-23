import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Zap, ShieldCheck, Building2 } from "lucide-react"; // ← CORRECTO

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Aurora 365 — Soluciones educativas empresariales</title>
        <link rel="canonical" href="https://aurora365.local/" />
      </Helmet>

      {/* Hero */}
      <section className="section">
        <div className="container-max grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="badge">Software educativo empresarial</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Gestión educativa confiable y moderna
            </h1>
            <p className="mt-4 text-text-secondary max-w-prose">
              Centraliza procesos académicos, normativos y de convivencia con
              una plataforma segura y escalable, diseñada para instituciones
              educativas en Colombia.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contacto" className="btn btn-primary">
                Solicitar demo
              </Link>
              <Link to="/productos" className="btn btn-secondary">
                Ver productos
              </Link>
            </div>
          </div>

          <div className="card p-8">
            <div
              className="h-40 rounded-xl mb-4"
              style={{ background: "var(--grad-aurora-fresco)" }}
            />
            <p className="text-sm text-text-secondary">
              Arquitectura escalable, seguridad y soporte dedicado.
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section">
        <div className="container-max grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck />,
              title: "Cumplimiento normativo",
              desc: "Reportes y flujos alineados a lineamientos del MEN.",
            },
            {
              icon: <Zap />, // ← Aquí usamos el nuevo icono
              title: "Rendimiento y fiabilidad",
              desc: "Infraestructura lista para crecer y operar 24/7.",
            },
            {
              icon: <Building2 />,
              title: "Soporte y acompañamiento",
              desc: "Equipo cercano para onboarding, capacitación y mejora continua.",
            },
          ].map((b, i) => (
            <div key={i} className="card p-6">
              <div className="text-brand-primary">{b.icon}</div>
              <h3 className="mt-3 font-semibold">{b.title}</h3>
              <p className="text-sm text-text-secondary">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destacado Skola */}
      <section className="section">
        <div className="container-max grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/assets/skola-hero.png"
            alt="Skola"
            className="w-full rounded-xl border border-border-subtle"
            loading="lazy"
          />
          <div>
            <h2 className="text-2xl font-semibold">
              Skola — gestión académica integral
            </h2>
            <p className="mt-3 text-text-secondary">
              Matrículas, evaluación, indicadores y convivencia en un solo lugar.
            </p>
            <div className="mt-4 flex gap-3">
              <Link to="/productos/skola" className="btn btn-primary">
                Ver Skola
              </Link>
              <Link to="/precios" className="btn btn-secondary">
                Ver precios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
