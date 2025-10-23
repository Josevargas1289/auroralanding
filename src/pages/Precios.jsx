import { Helmet } from 'react-helmet-async'

export default function Precios() {
  const plans = [
    {name:'Starter', price:'$', features:['Hasta 200 estudiantes','Soporte por email']},
    {name:'Pro', price:'$$', features:['Hasta 800 estudiantes','Soporte prioritario']},
    {name:'Enterprise', price:'Custom', features:['+800 estudiantes','Acuerdos de servicio (SLA)']},
  ]
  return (
    <>
      <Helmet><title>Precios — Aurora 365</title></Helmet>
      <section className="section">
        <div className="container-max grid md:grid-cols-3 gap-6">
          {plans.map(p => (
            <div key={p.name} className="card p-6">
              <h3 className="font-semibold">{p.name}</h3>
              <div className="text-3xl mt-2">{p.price}</div>
              <ul className="mt-4 list-disc pl-5 space-y-1 text-sm">
                {p.features.map((f,i)=><li key={i}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
