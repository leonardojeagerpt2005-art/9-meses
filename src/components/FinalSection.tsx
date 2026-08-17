import { useState } from 'react'
import { FOREVER_BUTTON_TEXT, COUPLE_NAMES } from '../data/config'
import { FloatingHearts } from './FloatingHearts'

interface FinalSectionProps {
  url: string
}

export function FinalSection({ url }: FinalSectionProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="relative z-10 mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 sm:py-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-gold-600 sm:text-sm">
          Y esto apenas empieza
        </p>
        <h2 className="mt-4 text-2xl font-bold text-blau-900 sm:text-4xl lg:text-5xl">
          El amor no se mide en meses, se mide en decisiones.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base italic leading-relaxed text-blau-800 sm:text-lg lg:text-xl">
          Las dificultades llegaron, y tú y yo seguimos aquí, más juntos que nunca. Porque lo nuestro
          no es una etapa: es una promesa de por vida.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="animate-glow mt-10 rounded-full bg-gradient-to-r from-blau-700 via-blau-800 to-grana-600 px-7 py-3.5 text-base font-bold text-white shadow-2xl shadow-blau-900/30 transition duration-300 hover:scale-105 hover:from-blau-600 hover:via-blau-700 hover:to-grana-500 sm:px-8 sm:py-4 sm:text-xl"
        >
          {FOREVER_BUTTON_TEXT}
        </button>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-blau-950">
          <img
            src={url}
            alt="Foto final"
            className="fixed inset-0 h-full w-full object-cover"
          />
          <div className="fixed inset-0 bg-gradient-to-b from-blau-950/70 via-blau-950/35 to-morado-900/70" />

          <FloatingHearts />

          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-16 text-center sm:px-6">
            <span className="animate-heartbeat text-5xl sm:text-6xl lg:text-7xl">💍</span>

            <h2 className="mt-5 text-4xl font-bold text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
              Para siempre
            </h2>

            <div className="mt-5 flex items-center gap-3 sm:mt-6">
              <span className="h-px w-8 bg-gold-400 sm:w-10" />
              <span className="text-morado-400">♥</span>
              <span className="h-px w-8 bg-gold-400 sm:w-10" />
            </div>

            <p className="mt-5 max-w-2xl text-lg italic leading-relaxed text-blau-50 drop-shadow sm:mt-6 sm:text-2xl">
              Te amo, {COUPLE_NAMES.her}. Nueve meses son solo el comienzo de nuestra eternidad. Los
              problemas no nos separan: nos fortalecen.
            </p>

            <p className="mt-6 text-base font-semibold text-gold-400 drop-shadow sm:mt-8 sm:text-xl">
              Y sí… quiero seguir contigo muchos meses y años más, siempre. 💜
            </p>

            <button
              onClick={() => setOpen(false)}
              className="mt-8 rounded-full border border-white/40 bg-blau-950/50 px-6 py-3 text-sm text-white backdrop-blur transition hover:bg-blau-900/70 sm:mt-10"
            >
              Volver a nuestros recuerdos
            </button>
          </div>
        </div>
      )}
    </>
  )
}