import { useState } from 'react'
import { ErrorBoundary } from './components/ErrorBoundary'
import { FloatingHearts } from './components/FloatingHearts'
import { StickyHeader } from './components/StickyHeader'
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'

type Phase = 'landing' | 'recuerdos'

export default function App() {
  const [phase, setPhase] = useState<Phase>('landing')

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      <ErrorBoundary>
        <FloatingHearts />
        <StickyHeader />
        {phase === 'landing' ? (
          <Landing onStart={() => setPhase('recuerdos')} />
        ) : (
          <Dashboard />
        )}
      </ErrorBoundary>
    </div>
  )
}