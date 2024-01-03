'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Scene from '@/app/components/R3F/Scene'


type LayoutProps = {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  const ref = useRef<HTMLDivElement>(null!)

  return (
    <div
      ref={ref}
      className='w-full h-full overflow-auto touch-auto relative'
    >
      {children}
      <Scene
        style={{
          position: "fixed !important",
          top: "0px",
          left: "0px",
          width: "100vw !important",
          height: "100vh !important",
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
        eventSource={ref}
        eventPrefix='client'
      />
    </div>
  )
}

export { Layout }