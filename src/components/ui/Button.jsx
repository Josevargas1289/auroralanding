export default function Button({ children, variant='primary', className='', ...props }) {
  const base = 'btn ' + (variant === 'secondary' ? 'btn-secondary' : 'btn-primary')
  return <button className={`${base} ${className}`} {...props}>{children}</button>
}
