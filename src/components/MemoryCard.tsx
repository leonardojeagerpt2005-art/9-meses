import { useInView } from '../hooks/useInView'
import { PhotoImage } from './PhotoImage'
import type { Memory } from '../data/memories'

interface MemoryCardProps {
  memory: Memory
  url: string
  reversed?: boolean
}

export function MemoryCard({ memory, url, reversed = false }: MemoryCardProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`grid items-center gap-8 transition-all duration-700 ease-out md:grid-cols-2 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className={reversed ? 'md:order-2' : ''}>
        <div className="overflow-hidden rounded-2xl border-4 border-gold-500/30 bg-white shadow-xl shadow-blau-900/10">
          <PhotoImage
            src={url}
            alt={memory.title}
            className="aspect-[4/3]"
            objectPosition={memory.objectPosition}
          />
        </div>
      </div>

      <div className={reversed ? 'md:order-1' : ''}>
        <p className="text-[10px] uppercase tracking-[0.3em] text-gold-600 sm:text-sm">
          Capítulo {memory.id.replace('m', '')}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-blau-900 sm:text-3xl lg:text-4xl">
          {memory.title}
        </h3>
        <div className="mt-3 h-0.5 w-14 bg-gradient-to-r from-gold-500 to-blau-700 sm:mt-4 sm:w-16" />
        <p className="mt-4 text-base italic leading-relaxed text-blau-800 sm:mt-5 sm:text-lg lg:text-xl">
          {memory.text}
        </p>
      </div>
    </div>
  )
}