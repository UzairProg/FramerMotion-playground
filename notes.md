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