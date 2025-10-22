import React from 'react'
import { useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
const Scroll = () => {
    const { scrollYProgress } = useScroll(); // value 0 → 1
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const container = useRef(null);
const scrollYProgress2 = useScroll({ target: container }).scrollYProgress;
const scale2 = useTransform(scrollYProgress2, [0,1], [1,2])

  return (
    <div>
      {/* 
      Scroll-based Animations (useScroll)
        ⚡ One-line
        useScroll() tracks how far you’ve scrolled on a page or inside an element — you can use that value to animate anything based on scroll progress.

        🧠 Basic idea
        useScroll() gives two main motion values:

        scrollY → how many pixels scrolled vertically.

        scrollYProgress → normalized value 0 → 1, from start to end of the page/target element.

        You can use these motion values directly in style or pass them into useTransform() to map scroll position → visual effect.
      */}

      <motion.div
    //   className='h-40 w-40 bg-pink-50'
      style={{
        scale,
        opacity,
        background: "linear-gradient(90deg,#6EE7B7,#3B82F6)",
        height: 200,
        width: 200,
        // margin: "100vh auto",
        margin: "10px 20px",
        borderRadius: 20,
      }}
    >
      Scroll to Zoom & Fade
    </motion.div>

      <div
      className='h-screen bg-pink-500'
      >

    <motion.div 
    className='bg-blue-600 h-60 w-60 ml-50 flex justify-center items-center'
    ref={container}>
        <motion.div
        className='bg-amber-500 h-10 w-10'
        style={{
            scale: scale2
        }}
        >
                hiiiii
        </motion.div>
    </motion.div>
      </div>
      <div
      className='h-screen'
      >

      </div>
    </div>
  )
}

export default Scroll

/* 
QUick RECAP on useScroll and related values
| Hook / Value      | Meaning                         | Typical Use                    |
| ----------------- | ------------------------------- | ------------------------------ |
| `useScroll()`     | get scroll position             | for any scroll-based animation |
| `scrollY`         | pixel scroll distance           | triggers sticky effects        |
| `scrollYProgress` | normalized 0–1                  | scale/opacity transforms       |
| `useTransform()`  | map one motion value to another | connect scroll to animation    |


🧠 4️⃣ Pan — onPan, onPanStart, onPanEnd

For detecting directional swipe gestures (mobile-like).

<motion.div
  onPan={(e, info) => console.log("Dragging:", info.delta.x, info.delta.y)}
  className="w-40 h-40 bg-teal-500 rounded-xl"
/>
*/