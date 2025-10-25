import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../../assets/images/favicon.png";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/productos", label: "Productos" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/casos-exito", label: "Casos de éxito" },
  { to: "/precios", label: "Precios" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY < 40);
    window.addEventListener("scroll", onScroll);
    setTimeout(() => setIsAtTop(window.scrollY < 40), 50);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location]);

  const isHome = location.pathname === "/";

  // 🔹 Si estamos arriba, es transparente (en todas las páginas)
  const isTransparent = isAtTop;
  const textOnDark = isHome && isAtTop;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 ease-in-out ${
        isTransparent ? "bg-transparent" : "bg-white shadow-md"
      }`}
      style={{
        backdropFilter: isTransparent ? "blur(12px)" : "none",
        WebkitBackdropFilter: isTransparent ? "blur(12px)" : "none",
      }}
    >
      <div
        className={`container-max flex items-center justify-between transition-[padding,min-height] duration-700 ease-in-out ${
          isAtTop ? "py-8 min-h-[110px]" : "py-3 min-h-[70px]"
        }`}
      >
        {/* LOGO + NOMBRE */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Aurora 365 Logo"
            className={`object-contain transition-[width,height] duration-700 ${
              isAtTop ? "w-14 h-14" : "w-9 h-9"
            }`}
          />
          <span
            className={`font-semibold transition-all duration-700 ${
              textOnDark
                ? "text-white text-2xl tracking-wide drop-shadow-md"
                : "text-[#222145] text-lg tracking-tight"
            }`}
          >
            Aurora 365
          </span>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 transition-all duration-700">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-[15px] font-medium transition-colors duration-300 ${
                  textOnDark
                    ? isActive
                      ? "text-white underline underline-offset-4"
                      : "text-white/85 hover:text-white"
                    : isActive
                    ? "text-[#2b2a3f] underline underline-offset-4"
                    : "text-[#2b2a3f]/80 hover:text-[#2b2a3f]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Botón demo */}
          <Link
            to="/contacto"
            className={`btn transition-all duration-700 ${
              textOnDark
                ? "bg-white text-[#222145] font-semibold hover:bg-white/90 scale-105"
                : "btn-primary scale-95"
            }`}
          >
            Solicitar demo
          </Link>
        </nav>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          className={`md:hidden p-2 transition-colors duration-700 ${
            textOnDark ? "text-white" : "text-[#222145]"
          }`}
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu size={26} />
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div
          className={`md:hidden transition-colors duration-500 ${
            textOnDark ? "bg-[#55537A]" : "bg-white"
          }`}
        >
          <div className="container-max py-3 flex flex-col">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`py-3 text-[15px] font-medium transition-colors ${
                  textOnDark
                    ? "text-white hover:text-white/90"
                    : "text-[#2b2a3f] hover:text-[#484766]"
                }`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className={`btn mt-3 w-full ${
                textOnDark
                  ? "bg-white text-[#222145] hover:bg-white/90"
                  : "btn-primary"
              }`}
            >
              Solicitar demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
