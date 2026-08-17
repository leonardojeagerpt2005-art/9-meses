import { getGreeting } from '../lib/greeting'
import { CounterBar } from './CounterBar'
import { COUPLE_NAMES } from '../data/config'

export function StickyHeader() {
  const greeting = getGreeting()

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-4">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-blau-100 bg-white/90 px-4 py-3 shadow-lg shadow-blau-900/10 backdrop-blur-md">
          <p className="text-center text-sm font-semibold text-blau-800 sm:text-base">
            <span className="text-morado-500">{greeting},</span> {COUPLE_NAMES.her} 💜
          </p>
          <CounterBar />
        </div>
      </div>
    </header>
  )
}