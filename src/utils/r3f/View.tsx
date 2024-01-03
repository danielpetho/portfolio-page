import { Suspense, forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { r3f } from '@/src/utils/r3f/tunnel-rat'

type ViewProps = {
  children?: React.ReactNode;
  orbit?: boolean;
  [key: string]: any;
};

type ViewRef = HTMLDivElement

export const Common = () => (
  <Suspense fallback={null}>
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
)


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
          {orbit && <OrbitControls />}
        </ViewImpl>
      </r3f.In>
    </>
  )
})
View.displayName = 'View'

export { View }