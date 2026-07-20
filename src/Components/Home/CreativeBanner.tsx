'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CreativeBanner() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 6000); // disappears after 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="
    fixed top-5 inset-x-0
    z-50
    flex justify-center
    pointer-events-none
  "
        >
          <div
            className="
                rounded-full
                bg-black/40
                backdrop-blur-md
                border border-white/20
                text-white
                px-6 py-3
                shadow-lg
                text-sm
                font-medium
                whitespace-nowrap
            "
          >
            <span className="text-yellow-400">
              ⚠️ <b>This is not Google! </b>
            </span>
            <span>
              This is my google inspired personal portfolio where you can
              explore my projects, skills, and journey 🚀
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
