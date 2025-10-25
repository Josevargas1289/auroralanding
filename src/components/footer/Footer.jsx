export default function Footer() {
  return (
    <footer className="mt-18 border-t border-border-subtle bg-surface-contrast">
      <div className="container-max py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="w-10 h-10 rounded-lg mb-2" style={{ background: 'var(--grad-aurora-base)' }} />
          <p className="text-sm text-text-secondary">© {new Date().getFullYear()} Aurora 365. Todos los derechos reservados.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Compañía</h4>
          <ul className="space-y-1 text-sm text-text-secondary">
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/casos-exito">Casos de éxito</a></li>
            <li><a href="/legal">Legal</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contacto</h4>
          <ul className="space-y-1 text-sm text-text-secondary">
            <li>info@aurora365.co</li>
            <li>Cali, Colombia</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
