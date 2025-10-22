import React from 'react'
import { motion, useMotionValue } from "motion/react";

const StyleUseMotion = () => {
    const x = useMotionValue(0); 
  return (
    <div>
       <motion.div
      drag="x"
      style={{
        x,  // // <- motion value bound to transform: translateX(...)                     
        // y:x,           // <- motion value bound to transform: translateY(...)                
        width: 120,
        height: 80,
        background: "tomato",
        borderRadius: 8
      }}
      dragConstraints={{ left: 0, right: 200 }} 
      // it means, you can drag only within this box.. left=0 means you cant drag left side, right=200 means you can drag right side upto 200px
      // if no constraints provided, you can drag anywhere.. 
    ></motion.div>

    <button
        onClick={() => {
            // x.set(100)
            console.log(x)
            console.log(x.get())
        }}
        className='bg-red-400 h-20 w-20 px-4 py-4'
    >
        click
    </button>
    </div>
  )
}

/* 
soo whats hapenning here?

like if we just used drag="x" without the useMotionValue, it would still work right?
yes, drag will obv work! we'll be able to drag the element in x direction.

so why we added style={{x}} with useMotionValue??
✅ drag="x" alone = makes the box move visually (Framer Motion handles transform internally).
✅ style={{ x }} = connects that motion value (x) to the actual movement, so you can read, react to, or control it yourself.

🧩 Think of it like this analogy:

drag="x" = automatic car — moves fine, but you can’t see or tweak the engine.
style={{ x }} = manual + dashboard access — you can read, tune, and control the engine.

check styleAndusemotion.md for in depth explanation

*/



// now here..  what exactly is useMotionValue doing differently than just using useState? is it just more optimized for motion values?
// or is there some other benefit?.. the ans is that useMotionValue is specifically designed for handling values that will be animated or changed frequently, providing better performance and smoother animations compared to useState.
export default StyleUseMotion
