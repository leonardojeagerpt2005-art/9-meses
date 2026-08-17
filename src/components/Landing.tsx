import { BUTTON_TEXT } from '../data/config'

interface LandingProps {
  onStart: () => void
}

export function Landing({ onStart }: LandingProps) {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white via-blau-50 to-white px-5 pb-14 pt-56 sm:px-6 sm:pb-16 sm:pt-44 lg:pt-48">
      <div className="animate-glow flex h-36 w-36 items-center justify-center rounded-full border-4 border-morado-300 bg-white shadow-xl shadow-morado-500/20 sm:h-48 sm:w-48 lg:h-52 lg:w-52">
        <span className="animate-heartbeat text-6xl font-black text-blau-800 sm:text-8xl lg:text-9xl">9</span>
      </div>

      <p className="mt-8 text-[10px] uppercase tracking-[0.4em] text-blau-500 sm:mt-10 sm:text-sm lg:text-base">
        Nuestra historia de amor
      </p>

      <h1 className="mt-3 text-[2.6rem] font-bold leading-tight text-blau-900 sm:mt-4 sm:text-6xl lg:text-8xl">
        Nueve meses
      </h1>

      <p className="mt-5 max-w-xl px-2 text-base italic leading-relaxed text-blau-700 sm:mt-6 sm:text-xl lg:text-2xl">
        "Y todavía me sigue faltando tiempo para amarte tanto como tú te mereces."
      </p>

      <button
        onClick={onStart}
        className="animate-glow mt-10 rounded-full bg-gradient-to-r from-blau-700 via-blau-800 to-grana-600 px-7 py-3.5 text-base font-semibold text-white shadow-2xl shadow-blau-900/30 transition duration-300 hover:scale-105 hover:from-blau-600 hover:via-blau-700 hover:to-grana-500 sm:mt-12 sm:px-8 sm:py-4 sm:text-xl"
      >
        {BUTTON_TEXT}
      </button>

      <p className="mt-5 text-xs text-blau-400 sm:mt-6 sm:text-sm">
        Pulsa y revivamos cada momento que nos ha traído hasta aquí.
      </p>
    </section>
  )
}