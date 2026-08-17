import { Component, type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
          <div>
            <p className="text-6xl">💜</p>
            <h1 className="mt-4 text-2xl font-bold text-blau-900">
              Nuestro amor sigue, aunque hubo un pequeño tropiezo técnico
            </h1>
            <p className="mt-2 text-blau-700">Recarga la página y volvemos a los recuerdos.</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}