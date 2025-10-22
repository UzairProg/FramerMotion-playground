// ScrollRevealDemo.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * ScrollRevealDemo
 * - Shows three reveal patterns:
 *   1) Single reveal item (once: true)
 *   2) Staggered list reveal using individual in-view
 *   3) Reveal with custom threshold & rootMargin
 *
 * Key: useInView(ref, { once, amount })
 * - once: true -> runs once when item enters view
 * - amount: fraction (0..1) of element visible to consider "in view"
 */

export default function ScrollView() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 antialiased p-8">
      <main className="max-w-3xl mx-auto space-y-20">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold">Scroll Reveal — Framer Motion</h1>
          <p className="text-sm text-slate-400">
            Scroll down to see reveal effects. Each example uses <code>useInView</code>.
          </p>
        </header>

        {/* --- Example 1: Single reveal (fade + up) --- */}
        <section>
          <h2 className="text-xl font-medium mb-4">1) Simple Reveal (fade + slide up)</h2>
          <RevealBox>
            <div className="p-6 bg-gray-800 rounded-xl shadow">
              <h3 className="text-lg font-semibold">Hello — I reveal once</h3>
              <p className="mt-2 text-slate-300">This animates the first time it enters the viewport.</p>
            </div>
          </RevealBox>
        </section>

        {/* --- Example 2: Staggered list reveal --- */}
        <section>
          <h2 className="text-xl font-medium mb-4">2) Staggered list reveal</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Design", "Develop", "Test", "Deploy", "Monitor", "Iterate"].map((label, i) => (
              <RevealListItem key={i} index={i}>
                <div className="p-4 bg-gray-800 rounded-lg shadow-sm">
                  <div className="text-lg font-semibold">{label}</div>
                  <div className="text-xs text-slate-400 mt-1">staggered reveal #{i + 1}</div>
                </div>
              </RevealListItem>
            ))}
          </div>
        </section>

        {/* --- Example 3: Reveal with custom threshold & rootMargin --- */}
        <section>
          <h2 className="text-xl font-medium mb-4">3) Reveal with threshold & rootMargin</h2>
          <p className="text-sm text-slate-400 mb-4">
            This one uses <code>amount: 0.6</code> (60% visible) and <code>rootMargin</code> to trigger earlier.
          </p>
          <RevealBox amount={0.6} rootMargin="-40px">
            <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-400/8 rounded-xl border border-slate-800">
              <h3 className="text-lg font-semibold">Important section</h3>
              <p className="mt-2 text-slate-300">Will reveal only when most of it is visible (useful for big blocks).</p>
            </div>
          </RevealBox>
        </section>

        <footer className="text-sm text-slate-500">
          Tip: change window height or shrink viewport to experiment. <br />
          <code>useInView(ref, {'{ once: true, amount: 0.3 }'})</code> — amount = fraction visible to trigger.
        </footer>
      </main>
    </div>
  );
}

/* ===========================
   Reusable Reveal components
   =========================== */

/** RevealBox
 * - Wrap any content and it fades + slides up when in view.
 * - Props: amount (0..1), rootMargin (string)
 */
function RevealBox({ children, amount = 0.35, rootMargin = "0px" }) {
  const ref = useRef(null);
  // isInView becomes true when `amount` fraction of element is visible
  const isInView = useInView(ref, { once: true, amount, rootMargin });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} // animate only when in view
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

/** RevealListItem
 * - Slightly delayed reveal per index (simple staggering without a parent timeline)
 * - Using index to compute delay ensures progressive reveal as you scroll
 */
function RevealListItem({ children, index = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  // small delay based on index creates a stagger effect
  const delay = 0.08 * index;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22, scale: 0.99 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
