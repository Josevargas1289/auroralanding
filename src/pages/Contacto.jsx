import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const schema = z.object({
  nombre: z.string().min(2, 'Ingresa tu nombre'),
  correo: z.string().email('Correo inválido'),
  empresa: z.string().min(2, 'Ingresa el nombre de tu institución/empresa'),
  mensaje: z.string().min(10, 'Cuéntanos brevemente tu necesidad'),
  acepta: z.literal(true, { errorMap: () => ({ message: 'Debes aceptar la política de datos' }) }),
})

export default function Contacto() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })
  const [status, setStatus] = useState(null)

  const onSubmit = async (data) => {
    setStatus('enviando')
    try {
      // Simulación de envío
      await new Promise(res => setTimeout(res, 900))
      // Falso request
      await axios.post('/api/contacto', data, { timeout: 200 })
      console.log('Payload enviado:', data)
      setStatus('ok')
      reset()
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <>
      <Helmet><title>Contacto — Aurora 365</title></Helmet>
      <section className="section">
        <div className="container-max max-w-2xl">
          <h1 className="text-3xl font-semibold mb-6">Contacto</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card p-6 space-y-4">
            <div>
              <label className="block text-sm mb-1">Nombre</label>
              <input className="w-full border border-border-subtle rounded-md px-3 py-2" {...register('nombre')} aria-invalid={!!errors.nombre} />
              {errors.nombre && <p className="text-sm text-error mt-1">{errors.nombre.message}</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">Correo</label>
              <input className="w-full border border-border-subtle rounded-md px-3 py-2" {...register('correo')} type="email" aria-invalid={!!errors.correo} />
              {errors.correo && <p className="text-sm text-error mt-1">{errors.correo.message}</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">Institución / Empresa</label>
              <input className="w-full border border-border-subtle rounded-md px-3 py-2" {...register('empresa')} />
              {errors.empresa && <p className="text-sm text-error mt-1">{errors.empresa.message}</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">Mensaje</label>
              <textarea className="w-full border border-border-subtle rounded-md px-3 py-2" rows="4" {...register('mensaje')} />
              {errors.mensaje && <p className="text-sm text-error mt-1">{errors.mensaje.message}</p>}
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" {...register('acepta')} />
              Acepto la política de tratamiento de datos.
            </label>
            {errors.acepta && <p className="text-sm text-error">{errors.acepta.message}</p>}
            <div className="flex items-center gap-3">
              <button disabled={isSubmitting} className="btn btn-primary" type="submit">
                {isSubmitting ? 'Enviando…' : 'Enviar'}
              </button>
              {status === 'ok' && <span className="text-success text-sm">¡Mensaje enviado!</span>}
              {status === 'error' && <span className="text-error text-sm">Ocurrió un error. Intenta de nuevo.</span>}
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
