import type { CSSProperties } from 'react'

const HEARTS = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 61) % 100}%`,
  delay: `${(i * 1.9) % 9}s`,
  duration: `${8 + (i % 5)}s`,
  size: 12 + (i % 4) * 9,
  opacity: 0.18 + ((i * 5) % 6) * 0.09,
  scale: 0.7 + ((i * 3) % 5) * 0.15,
}))

export function FloatingHearts() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {HEARTS.map((h, i) => (
        <span
          key={i}
          className="animate-float-up absolute select-none text-morado-500"
          style={
            {
              left: h.left,
              top: 0,
              fontSize: h.size,
              animationDelay: h.delay,
              animationDuration: h.duration,
              '--o': h.opacity,
              '--s': h.scale,
            } as CSSProperties
          }
        >
          ♥
        </span>
      ))}
    </div>
  )
}