import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TypedLine({ text, speed = 18, onDone }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        onDone && onDone();
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return <>{shown}</>;
}

export default function RPGDialog({
  header = "SYSTEM MESSAGE",
  lines = [],
  className = "",
  onComplete,
  children,
}) {
  const [visibleCount, setVisibleCount] = useState(1);
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    setVisibleCount(1);
    setDoneTyping(false);
  }, [lines]);

  useEffect(() => {
    if (doneTyping) {
      onComplete && onComplete();
    }
  }, [doneTyping]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.15, ease: "linear" }}
      className={`bg-surface border-4 border-neutral shadow-pixel-lg relative ${className}`}
    >
      <div className="bg-primary h-7 flex items-center px-3 border-b-4 border-neutral">
        <span className="font-display text-[10px] text-white tracking-widest uppercase">
          {header}
        </span>
      </div>
      <div className="p-5">
        {lines.slice(0, visibleCount).map((line, idx) => (
          <p
            key={idx}
            className="font-mono text-sm leading-relaxed text-neutral mb-3 last:mb-0"
          >
            <span className="text-accent font-bold mr-1">&gt;</span>
            {idx === visibleCount - 1 ? (
              <TypedLine
                text={line}
                onDone={() => {
                  if (visibleCount < lines.length) {
                    setTimeout(() => setVisibleCount((c) => c + 1), 200);
                  } else {
                    setDoneTyping(true);
                  }
                }}
              />
            ) : (
              line
            )}
          </p>
        ))}
        <AnimatePresence>
          {doneTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3"
            >
              <div className="flex items-center gap-1 mb-3">
                <span className="w-2.5 h-4 bg-primary animate-blink" />
                <span className="font-display text-[9px] text-neutral/50 tracking-widest">
                  READY_
                </span>
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
