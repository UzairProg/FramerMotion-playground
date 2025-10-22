import React from "react";
import { useRef } from "react";
import { motion } from "motion/react";

const Drag = () => {
  const boxRef = useRef(null);
  return (
    <div>
    {/* 
    1. dragConstraints — “Set the area where dragging is allowed”
    ✅ A. With numeric boundaries
    The element can move left 0px max 100px right and 50px up/down from its original spot.
    */}
      <motion.div
        className="bg-amber-200 h-10 w-10 rounded-xl"
        drag
        dragConstraints={{ left: 0, right: 100, top: -50, bottom: 50 }} 
      />

    {/* 
    ✅ B. With a container ref (most common)
    Here, the inner box cannot leave the parent container.

    This method auto-calculates the parent boundaries.

    You must apply the ref on a motion.div or normal div that’s rendered in the DOM before the draggable one.
    */}

    <motion.div ref={boxRef} // parent div.. note the parent div must be motion.div only not normal div
    className="bg-pink-300 h-40 w-40 flex items-center justify-center mt-10 ml-50"
    >
      <motion.div // inner box
        drag dragConstraints={boxRef}
        style={{ width: 50, height: 50, background: "#222" }}
      >
        hi
      </motion.div>
    </motion.div>

    {/* 
    2. dragElastic — “How stretchy the drag feels”

    */}

        <div className="flex gap-30 mt-20">
    <motion.div 
    className="bg-blue-200 h-10 w-10 "
    drag dragConstraints={{ left: 0, right: 100, top: -100, bottom: 100}} dragElastic={0} />
    {/* // → stops instantly at 100px, no extra pull */}

    <motion.div 
    className="bg-blue-200 h-10 w-10 "
    drag dragConstraints={{ left: -100, right: 100, top:0, bottom:-10 }} dragElastic={1} />
    {/* // → can pull beyond limit and bounce back like a rubber band */}

    <motion.div 
    className="bg-blue-500 h-10 w-10"
    drag dragConstraints={{ left: -100, right: 100, top:0,bottom:0 }} dragElastic={0.5} />
    {/* // → can pull beyond limit halfway and bounces back */}
        </div>

    </div>


  );
};

export default Drag;

/* 
🧱 1. dragConstraints — “Set the area where dragging is allowed”
🧩 One-line definition

Limits how far the element can be dragged (horizontally, vertically, or both).

| Property                            | Meaning                                  | Example                             |
| ----------------------------------- | ---------------------------------------- | ----------------------------------- |
| `left` / `right` / `top` / `bottom` | Limit in px                              | `{ left: -100, right: 100 }`        |
| `ref`                               | Use another element as bounding box      | `{ dragConstraints: containerRef }` |
| Works with                          | `drag="x"`, `drag="y"`, or `drag` (both) | ✅                                   |

🪀 2. dragElastic — “How stretchy the drag feels”
🧩 One-line definition

Controls how much the element can “pull beyond” its constraint before snapping back.
dragElastic={{ top: 0.2, bottom: 0.5, left: 0.1, right: 0.8 }}

🎚️ Range

dragElastic value → 0 to 1

0 → No stretch (hard wall)

0.5 → Default, medium stretch

1 → Full stretch, very bouncy

*/
