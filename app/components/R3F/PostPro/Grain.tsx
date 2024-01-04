import { forwardRef } from "react";
import GrainEffect from "./GrainEffect";

export default forwardRef(function Grain(props, ref) {

  const effect = new GrainEffect(props);

  return (
    <primitive
        object={effect}
        ref={ref}
     
    />   
  );
})
