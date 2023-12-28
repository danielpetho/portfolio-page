<svg className="absolute">
<defs>
  <filter id="distort">
    <feTurbulence baseFrequency="0.005 0.005" numOctaves="1" result="warp" type="fractalNoise" />
    <feColorMatrix in="warp" result="huedturb" type="hueRotate" values="90">
      <animate attributeType="XML" attributeName="values" values="0;180;360" dur="6s"
        repeatCount="indefinite" />
    </feColorMatrix>
    <feDisplacementMap in="SourceGraphic" in2="huedturb" scale="50" xChannelSelector="R" yChannelSelector="G" result="displ" />
    <feGaussianBlur in="displ" stdDeviation="1" />
    <feConvolveMatrix order="3" kernelMatrix="2.3 -2.3  2.3 -2.3 -1 -2.3 2.3  -2.3  2.3" />
  </filter>
</defs>
</svg>