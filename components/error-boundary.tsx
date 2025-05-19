'use client'

import { Component, ErrorInfo, ReactNode, Suspense } from 'react'
import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>
    }

    return this.props.children
  }
}

const environment = useLoader(RGBELoader, '/hdri/studio_small_03_1k.hdr')

export default function Page() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Environment
          files={environment}
          fallback={<ambientLight intensity={0.5} />}
        />
        {/* ...rest of your 3D scene... */}
      </Suspense>
    </Canvas>
  )
}
