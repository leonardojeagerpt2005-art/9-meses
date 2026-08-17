import { MEMORIES } from '../data/memories'
import { photoUrl, finalPhotoUrl } from '../data/photos'
import { MemoryCard } from './MemoryCard'
import { FinalSection } from './FinalSection'

export function Dashboard() {
  return (
    <main className="relative z-10 px-4 pb-20 pt-56 sm:px-8 sm:pt-44 lg:pt-48">
      <section className="mx-auto mb-16 max-w-4xl text-center sm:mb-20">
        <p className="text-[10px] uppercase tracking-[0.35em] text-gold-600 sm:text-sm">
          Capítulo a capítulo
        </p>
        <h1 className="mt-3 text-3xl font-bold text-blau-900 sm:text-5xl lg:text-6xl">
          Nuestros recuerdos
        </h1>
        <p className="mx-auto mt-4 max-w-2xl px-2 text-base italic leading-relaxed text-blau-800 sm:mt-5 sm:text-lg">
          Cada foto guarda un pedacito de nosotros. Nueve meses que valen toda una vida, y esto es
          solo el principio.
        </p>
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-16 sm:gap-20 lg:gap-24">
        {MEMORIES.map((memory, index) => (
          <MemoryCard
            key={memory.id}
            memory={memory}
            url={photoUrl(memory.fileName)}
            reversed={index % 2 === 1}
          />
        ))}
      </div>

      <FinalSection url={finalPhotoUrl()} />
    </main>
  )
}