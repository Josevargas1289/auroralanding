import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const schema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre"),
  correo: z.string().email("Correo inválido"),
  empresa: z.string().min(2, "Ingresa el nombre de tu institución/empresa"),
  mensaje: z.string().min(10, "Cuéntanos brevemente tu necesidad"),
  acepta: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar la política de datos" }),
  }),
});

export default function Contacto() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    setStatus("enviando");
    try {
      await new Promise((res) => setTimeout(res, 900));
      await axios.post("/api/contacto", data, { timeout: 200 });
      console.log("Payload enviado:", data);
      setStatus("ok");
      reset();
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contacto — Aurora 365</title>
      </Helmet>

      <section className="pt-36 md:pt-44 pb-20 bg-[#F7F7FC] min-h-screen">
        <div className="container-max max-w-2xl">
          <h1 className="text-3xl font-semibold text-[#222145] mb-8 text-center">
            Contáctanos
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 space-y-5 border border-transparent hover:border-[#E0E0F0]"
          >
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-[#222145] mb-1">
                Nombre
              </label>
              <input
                className="w-full border border-[#DADAE5] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6560F0]"
                {...register("nombre")}
                aria-invalid={!!errors.nombre}
              />
              {errors.nombre && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.nombre.message}
                </p>
              )}
            </div>

            {/* Correo */}
            <div>
              <label className="block text-sm font-medium text-[#222145] mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                className="w-full border border-[#DADAE5] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6560F0]"
                {...register("correo")}
                aria-invalid={!!errors.correo}
              />
              {errors.correo && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.correo.message}
                </p>
              )}
            </div>

            {/* Empresa */}
            <div>
              <label className="block text-sm font-medium text-[#222145] mb-1">
                Institución / Empresa
              </label>
              <input
                className="w-full border border-[#DADAE5] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6560F0]"
                {...register("empresa")}
              />
              {errors.empresa && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.empresa.message}
                </p>
              )}
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-sm font-medium text-[#222145] mb-1">
                Mensaje
              </label>
              <textarea
                rows="4"
                className="w-full border border-[#DADAE5] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6560F0]"
                {...register("mensaje")}
              />
              {errors.mensaje && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.mensaje.message}
                </p>
              )}
            </div>

            {/* Política de datos */}
            <label className="flex items-center gap-2 text-sm text-[#222145]">
              <input type="checkbox" {...register("acepta")} />
              Acepto la política de tratamiento de datos personales.
            </label>
            {errors.acepta && (
              <p className="text-sm text-red-500">{errors.acepta.message}</p>
            )}

            {/* Botón de envío */}
            <div className="flex items-center gap-3">
              <button
                disabled={isSubmitting}
                className="btn btn-primary"
                type="submit"
              >
                {isSubmitting ? "Enviando…" : "Enviar mensaje"}
              </button>
              {status === "ok" && (
                <span className="text-green-600 text-sm">
                  ¡Mensaje enviado correctamente!
                </span>
              )}
              {status === "error" && (
                <span className="text-red-600 text-sm">
                  Ocurrió un error. Intenta nuevamente.
                </span>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
