import { useState } from 'react'

interface PhotoImageProps {
  src: string
  alt: string
  className?: string
  objectPosition?: string
}

type PhotoStatus = 'loading' | 'ok' | 'error'

export function PhotoImage({
  src,
  alt,
  className = '',
  objectPosition = '50% 50%',
}: PhotoImageProps) {
  const [status, setStatus] = useState<PhotoStatus>('loading')

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {status === 'loading' && (
        <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-blau-50">
          <span className="animate-heartbeat text-4xl text-morado-500">♥</span>
        </div>
      )}

      {status === 'error' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-blau-100 p-6 text-center">
          <span className="text-4xl">💜</span>
          <p className="text-sm font-medium text-blau-700">
            Esta foto se resiste, pero nuestro amor nunca falla.
          </p>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setStatus('ok')}
        onError={() => setStatus('error')}
        style={{ objectPosition }}
        className={`h-full w-full object-cover transition-opacity duration-700 ${
          status === 'ok' ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}