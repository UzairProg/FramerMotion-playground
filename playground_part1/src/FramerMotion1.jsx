import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useScroll } from "motion/react";

// Framer Motion Demo (Tailwind dark theme) - JS only
// Save as: src/FramerMotion_Demo_App.jsx
// Requirements:
// 1) framer-motion installed -> npm i framer-motion
// 2) Tailwind CSS configured in your React project (postcss + autoprefixer) — this file assumes Tailwind is set up

export default function FramerMotionDemo() {
  const [showBox, setShowBox] = useState(true);
  const [layoutList, setLayoutList] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // motion values (drag -> rotate)
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-200, 200], [-12, 12]);

  // scroll progress for top progress bar
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.16 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-slate-100 antialiased p-6">
      {/* progress bar */}
      <motion.div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 z-50"
                  style={{ width: progress }} />

      <main className="max-w-4xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold">Framer Motion — Tailwind Dark Demo</h1>
          <p className="mt-1 text-sm text-slate-300">A compact playground: hover, drag, variants, AnimatePresence, layout animations.</p>
        </header>

        <section className="space-y-6">
          {/* 1) Entrance */}
          <div>
            <h2 className="text-lg font-medium mb-2">1. Basic entrance</h2>
            <motion.div
              initial={{ opacity: 0, y: -28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-block bg-gray-800 p-4 rounded-xl shadow-md"
            >
              <strong>Entrance</strong>
              <div className="text-xs text-slate-400 mt-1">initial → animate</div>
            </motion.div>
          </div>

          {/* 2) Hover / Tap */}
          <div>
            <h2 className="text-lg font-medium mb-2">2) whileHover / whileTap</h2>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 450 }}
                className="px-4 py-2 rounded-lg bg-rose-500 text-white font-medium"
                onClick={() => alert("Button clicked")}
              >
                Hover & Tap
              </motion.button>

              <motion.button
                whileHover={{ rotate: -6 }}
                whileTap={{ scale: 0.96 }}
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium"
                onClick={() => setShowModal(true)}
              >
                Open Modal
              </motion.button>
            </div>
          </div>

          {/* 3) Variants + Stagger */}
          <div>
            <h2 className="text-lg font-medium mb-2">3) Variants + Stagger</h2>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="show"
              className={`grid gap-4 ${layoutList ? "grid-cols-1" : "grid-cols-3"}`}
            >
              {"ABCDEF".split("").map((t) => (
                <motion.li key={t} variants={itemVariants} className="bg-gray-800 p-4 rounded-xl shadow-sm">
                  <div className="text-lg font-semibold">{t}</div>
                  <div className="text-xs text-slate-400">staggerChildren + variants</div>
                </motion.li>
              ))}
            </motion.ul>
            <div className="mt-3">
              <button className="px-3 py-1 border rounded text-slate-200 border-slate-700" onClick={() => setLayoutList((s) => !s)}>
                Toggle Layout
              </button>
            </div>
          </div>

          {/* 4) Drag + motionValue */}
          <div>
            <h2 className="text-lg font-medium mb-2">4) Drag + motionValue</h2>
            <motion.div
              drag="x"
              dragConstraints={{ left: -200, right: 200 }}
              style={{ x, rotate: rotateZ }}
              dragElastic={0.12}
              className="inline-block select-none cursor-grab bg-gradient-to-r from-amber-400 via-rose-400 to-fuchsia-500 p-4 rounded-2xl text-black shadow-lg"
            >
              Drag me horizontally
x              <div className="text-xs text-slate-700 mt-2">x → rotation via useMotionValue + useTransform</div>
            </motion.div>
          </div>

          {/* 5) AnimatePresence mount/unmount */}
          <div>
            <h2 className="text-lg font-medium mb-2">5) AnimatePresence</h2>
            <div className="flex items-center gap-3">
              <button className="px-3 py-1 rounded bg-emerald-500 text-black" onClick={() => setShowBox((s) => !s)}>
                Toggle Box
              </button>

              <AnimatePresence>
                {showBox && (
                  <motion.div
                    key="mountBox"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.35 }}
                    className="bg-gray-800 p-3 rounded-lg ml-2"
                    layout
                  >
                    Mounted with exit animation
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* 6) Layout animation */}
          <div>
            <h2 className="text-lg font-medium mb-2">6) Layout animations</h2>
            <motion.div layout className="bg-gray-800 p-3 rounded-lg">
              <div className="text-sm text-slate-300">Toggle the layout above to see smooth positional transitions.</div>
            </motion.div>
          </div>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 bg-black/60 grid place-items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ y: 36, opacity: 0, scale: 0.96 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 36, opacity: 0, scale: 0.96 }}
                // transition={{ type: "spring", stiffness: 240, damping: 28 }}
                className="w-96 bg-gray-800 p-6 rounded-2xl shadow-2xl text-slate-100"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-lg font-semibold">Modal</h3>
                <p className="text-sm text-slate-300 mt-2 mb-4">AnimatePresence + exit animation in Tailwind dark.</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded bg-rose-500 text-white" onClick={() => setShowModal(false)}>Close</button>
                  <motion.button whileTap={{ scale: 0.95 }} className="px-3 py-1 rounded bg-indigo-600 text-white">Action</motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-8 text-sm text-slate-400">Demo: initial/animate, whileHover/whileTap, variants, staggerChildren, drag, motionValue, AnimatePresence, layout animations.</footer>
      </main>
    </div>
  );
}
