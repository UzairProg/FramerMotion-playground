import React from 'react'
import { motion } from 'motion/react'

const App = () => {
  return (
    <div>
      <motion.div 
      animate={{ // in motion we pass an object to the animate prop
        x: 1000,
      }}
      transition={{
        duration: 3
      }}
      className='circle'>
        
      </motion.div>

      <motion.div
      animate={{
        x:[0,800,800,0,0], // positions of x: [initial,move,stay,move back,stay]
        y:[0,0,300,300,0], // positions of y: [initial,stay,move,stay,back]
        rotate:[0,360,360,0,0], // positions of rotate: [initial,rotate,stay,rotate back,stay]
      }}
      transition={{ // it is used to control the animation timing and behavior
        duration: 4,
        delay: 1,
        repeat: Infinity,
        repeatDelay: 1,
        ease: "easeInOut",
      }}
      className='box'
      >

      </motion.div>
    </div>

    // soo, in short we use animate prop to define the animation behavior and transition prop to control the timing and behavior of the animation.
  )
}

export default App
