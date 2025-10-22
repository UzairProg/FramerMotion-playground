🧠 Deeper explanation (step-by-step)
1. When you write just:
<motion.div drag="x" />


Framer Motion internally creates its own hidden motion value for x.
It uses that to apply transform: translateX(...) under the hood when you drag.

✅ So yes — the element moves visually even without style={{ x }}.
❌ But you can’t access or control that x value — it’s internal.

2. When you define your own motion value:
const x = useMotionValue(0);

<motion.div drag="x" style={{ x }} />


Now:

You’re linking your external variable x with the internal drag motion.

Framer Motion syncs its internal drag calculations to your x.

This means you can:

Read the position (x.get())

React to changes (x.onChange(...))

Drive other animations (rotate = useTransform(x, ...))

Control it programmatically (x.set(100) or animate(x, 200))

Basically, it turns your element into a data-driven draggable component — not just a visual one.

3. Example — with and without style={{x}}
❌ Without style
<motion.div drag="x" />


Box moves, but you can’t read or map its motion anywhere.

You can’t link it to rotation, opacity, etc.

✅ With style
const x = useMotionValue(0);
const rotate = useTransform(x, [-200, 200], [-30, 30]);

<motion.div drag="x" style={{ x, rotate }} />


Now you can connect that movement to anything:

Rotate with drag distance.

Fade out when you drag far.

Trigger color changes or progress bars.

🧩 Think of it like this analogy:

drag="x" = automatic car — moves fine, but you can’t see or tweak the engine.
style={{ x }} = manual + dashboard access — you can read, tune, and control the engine.