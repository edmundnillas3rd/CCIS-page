import { useState, useRef, useEffect } from "react";
import NET from "vanta/dist/vanta.net.min.js";

import * as THREE from "three";

export default function Backround({ width, height, children }) {
  const [vantaEffect, setVantaEffect] = useState(0);

  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          THREE,
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: height,
          minWidth: width,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x22f2be,
          backgroundColor: 0x1f1c28,
          points: 5.0,
          maxDistance: 16.0,
          spacing: 20.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} id="vanta">
      {children}
    </div>
  );
}
