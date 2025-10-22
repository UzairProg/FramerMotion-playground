import React from 'react'
import { motion, useMotionValue, useTransform } from "motion/react";
const UseMotionTransform = () => {
    const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);
  return (
    <div 
    className=' text-white'
    style={{ padding: 40 }}>
      <motion.div
        drag="x"
        dragConstraints={{ left: -200, right: 200 }}
        style={{
          x,            // motion value -> translateX(px)
          rotate,       // derived -> rotate(deg)
          width: 220,
          height: 90,
          borderRadius: 12,
          background: "linear-gradient(90deg,#ffd166,#ef476f)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#111",
          cursor: "grab"
        }}
      >
        Drag me — I translate (x) and rotate (rotate)
      </motion.div>
    </div>
  )
}

export default UseMotionTransform
