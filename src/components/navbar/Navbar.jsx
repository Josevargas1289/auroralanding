import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const nav = [
  { to: '/', label: 'Inicio' },
  { to: '/productos', label: 'Productos' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/casos-exito', label: 'Casos de éxito' },
  { to: '/precios', label: 'Precios' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-surface-contrast/90 backdrop-blur border-b border-border-subtle">
      <div className="container-max flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg" style={{ background: 'var(--grad-aurora-base)' }} />
          <span className="font-semibold">Aurora 365</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({isActive}) => 'text-sm ' + (isActive ? 'text-brand-primary font-medium' : 'text-text-secondary hover:text-text-primary')}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contacto" className="btn btn-primary">Solicitar demo</Link>
        </nav>
        <button className="md:hidden p-2" aria-label="Abrir menú" onClick={() => setOpen(v => !v)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border-subtle bg-surface-contrast">
          <div className="container-max py-2 flex flex-col">
            {nav.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-text-secondary hover:text-text-primary"
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contacto" onClick={() => setOpen(false)} className="btn btn-primary mt-2 w-full justify-center">Solicitar demo</Link>
          </div>
        </div>
      )}
    </header>
  )
}
