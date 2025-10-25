import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images = [] }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  // autoplay cada 5s
  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [index]);

  const startAuto = () => {
    stopAuto();
    timeoutRef.current = setTimeout(next, 5000);
  };

  const stopAuto = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  if (!images.length) return null;

  return (
    <div
      className="relative w-full max-w-[900px] mx-auto overflow-hidden select-none group rounded-2xl"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
    >
      {/* Imagen activa con bordes redondeados y sin bordes extra */}
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index].src}
          src={images[index].src}
          alt={images[index].alt || `Imagen ${index + 1}`}
          className="w-full aspect-[4/3] md:aspect-[16/9] object-cover rounded-2xl"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          loading="lazy"
        />
      </AnimatePresence>

      {/* Flechas laterales (solo aparecen al hover) */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        aria-label="Anterior"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        aria-label="Siguiente"
      >
        <ChevronRight size={22} />
      </button>

      {/* Indicadores inferiores */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full cursor-pointer transition-all ${
              i === index
                ? "w-6 bg-white"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
