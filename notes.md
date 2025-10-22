⚛️ Framer Motion — Part 1: Core Basics
🚀 What is Framer Motion?

Framer Motion is a React animation library for smooth, declarative animations — easy, powerful, and React-friendly.

🧠 One-line:

Animate React components with simple props — no manual timelines or state juggling.

1. Installation
npm install framer-motion or new npm i motion
import { motion } from "framer-motion";

🔹 2. The motion Component
You wrap your normal HTML tags with motion. to make them animatable.

Example:
<motion.div
  animate={{ x: 100 }}
  transition={{ duration: 1 }}
/>

🧾 What happens:

motion.div → animatable <div>

animate={{ x: 100 }} → moves 100px right

transition={{ duration: 1 }} → takes 1 sec

🎬 Smooth animation without useEffect or refs — declarative and clean.


🔹 3. Initial & Animate States

Define start and end states directly.

Example:
<motion.div
  initial={{ opacity: 0, y: -50 }}   // before render
  animate={{ opacity: 1, y: 0 }}     // after render
  transition={{ duration: 0.8 }}
/>


🧠 One-line:

initial = where it starts, animate = where it ends.

🔹 4. WhileHover & WhileTap

Built-in states for interactivity — perfect for buttons, cards, etc.

Example:
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  Click Me
</motion.button>


🧠 One-line:

whileHover runs when hovered, whileTap runs when pressed.


🔹 5. Exit (For Component Unmount Animations)

Used with <AnimatePresence> for when components leave the DOM.

Example:
import { AnimatePresence, motion } from "framer-motion";

{show && (
  <AnimatePresence>
    <motion.div
      key="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  </AnimatePresence>
)}

🔹 6. Transition Control

Customize timing, easing, delays, and spring motion.

Example:
<motion.div
  animate={{ x: 200 }}
  transition={{
    duration: 1,
    delay: 0.2,
    type: "spring",
    stiffness: 120
  }}
/>

🧠 Quick Cheatsheet:

| Type        | Effect                      |
| ----------- | --------------------------- |
| `"tween"`   | smooth linear easing        |
| `"spring"`  | bouncy physics-like motion  |
| `"inertia"` | keeps momentum (like fling) |


🔹 7. Variants 🧩 (Reusable Animation States)

Define multiple named states and switch between them easily.

Example:
const boxVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

<motion.div
  variants={boxVariants}
  initial="hidden"
  animate="visible"
  transition={{ duration: 1 }}
/>


🧠 One-line:

variants = predefined states; initial and animate pick which one to run.

🔹 8. Stagger Children (like GSAP’s stagger)

Use in a parent container with variants.

Example:
const parent = {
  show: {
    transition: { staggerChildren: 0.3 },
  },
};
const child = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

<motion.ul variants={parent} initial="hidden" animate="show">
  <motion.li variants={child} />
  <motion.li variants={child} />
  <motion.li variants={child} />
</motion.ul>


🧠 One-line:

🎯 Quick Summary – Core Concepts
staggerChildren animates each child with a delay between them.

| Concept                    | What It Does                 | Example             |
| -------------------------- | ---------------------------- | ------------------- |
| **motion.div**             | Makes element animatable     | `<motion.div />`    |
| **animate**                | Defines end state            | `{ x: 100 }`        |
| **initial**                | Defines start state          | `{ opacity: 0 }`    |
| **whileHover / whileTap**  | Interactive animations       | Buttons, Cards      |
| **exit + AnimatePresence** | Animate on unmount           | Fading out modals   |
| **transition**             | Control timing/easing        | `type: 'spring'`    |
| **variants**               | Named reusable states        | `hidden`, `visible` |
| **staggerChildren**        | Delay animations in sequence | List items          |
