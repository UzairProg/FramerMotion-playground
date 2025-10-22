useMotionValue(initial)

Returns a motion value object (not a number): e.g. const x = useMotionValue(0).

It has methods .get(), .set(value), .onChange(callback) for JS access.

Motion values update the DOM directly when bound to style (fast).

Motion values are the building block for interactive animations (drag, scroll, manual controls).

x specifically

x represents horizontal displacement. When bound in style it becomes translateX(...).

x is numeric by default — interpreted as pixels.

x is commonly updated automatically by user gestures (drag) or by Framer Motion tweening (e.g., with animate), or manually via x.set(100).

useTransform(source, inputRange, outputRange, options?)

Maps a source motion value to a derived motion value.

Example: const rotate = useTransform(x, [-200, 200], [-12, 12]) — when x is -200 → rotate = -12deg; when x is 0 → rotate = 0; when x is 200 → rotate = 12deg.

The returned value from useTransform is itself a motion value — you can bind it to style.

You can provide multiple breakpoints in inputRange and corresponding outputs in outputRange.

By default mapping is linear between points. You can pass an easing function or options to smooth.

How they connect (flow)

x (motion value) changes (via drag or code).

rotate = useTransform(x, ...) computes derived values on the fly.

Both x and rotate are bound in style (e.g., style={{ x, rotate }}).

Framer Motion writes the composed transform to the DOM (GPU-accelerated).

Examples (practical)

A. Drag → rotate mapping

import { motion, useMotionValue, useTransform } from "framer-motion";

function DragRotate() {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -200, right: 200 }}
      style={{ x, rotate, width: 160, height: 80, background: "linear-gradient(90deg,#ffd166,#ef476f)" }}
    >
      Drag me
    </motion.div>
  );
}