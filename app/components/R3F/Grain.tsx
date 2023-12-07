import { forwardRef } from "react";
import GrainEffect from "./GrainEffect";
import { BlendFunction } from "postprocessing";

interface GrainProps {
    blendFunction: BlendFunction;
    // other props
  }
  

export default forwardRef(function Grain(props, ref) {

  const effect = new GrainEffect(props);

  return (
    <primitive
        object={effect}
        ref={ref}
     
    />   
  );
})
