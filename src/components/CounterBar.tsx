import { useTimeTogether } from '../hooks/useTimeTogether'
import { pad } from '../lib/time'

interface Tile {
  label: string
  value: string
}

export function CounterBar() {
  const t = useTimeTogether()

  const tiles: Tile[] = [
    { label: 'Meses', value: pad(t.months) },
    { label: 'Semanas', value: pad(t.weeks) },
    { label: 'Días', value: pad(t.days) },
    { label: 'Horas', value: pad(t.hours) },
    { label: 'Minutos', value: pad(t.minutes) },
    { label: 'Segundos', value: pad(t.seconds) },
    { label: 'Milésimas', value: pad(t.milliseconds, 3) },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
      {tiles.map((tile, i) => (
        <div
          key={tile.label}
          className="flex items-center gap-1 rounded-lg border border-blau-100 bg-white px-1.5 py-1 text-center shadow-sm sm:gap-2 sm:rounded-xl sm:px-3"
        >
          <div>
            <p className="min-w-[1.6ch] text-base font-bold tabular-nums text-blau-800 sm:min-w-[2ch] sm:text-2xl">
              {tile.value}
            </p>
            <p className="text-[8px] uppercase tracking-wider text-blau-400 sm:text-[10px]">
              {tile.label}
            </p>
          </div>
          {i < tiles.length - 1 && (
            <span className="hidden text-sm text-morado-500 sm:block">·</span>
          )}
        </div>
      ))}
    </div>
  )
}