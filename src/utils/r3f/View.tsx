import { Suspense, forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { r3f } from '@/src/utils/r3f/tunnel-rat'

type ViewProps = {
  children?: React.ReactNode;
  orbit?: boolean;
  [key: string]: any;
};

type ViewRef = HTMLDivElement

const View = forwardRef<ViewRef, ViewProps>(({ children, orbit, ...props }, ref) => {
  const localRef = useRef<HTMLDivElement>(null!)
  useImperativeHandle(ref, () => localRef.current)

  useEffect(() => {
    console.log(props)
  }, [])


  return (
    <>
      <div ref={localRef} {...props} />
      <r3f.In>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls makeDefault />}
        </ViewImpl>
      </r3f.In>
    </>
  )
})
View.displayName = 'View'

export { View }