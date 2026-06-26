import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "../components/TopBar";
import Icon from "../components/Icon";

export default function Gift() {
  const [state, setState] = useState("idle"); // idle | shaking | revealed

  const handleTap = () => {
    if (state !== "idle") return;
    setState("shaking");
    setTimeout(() => setState("revealed"), 450);
  };

  return (
    <div className="min-h-screen pt-20 pb-28 px-5 max-w-[430px] mx-auto flex flex-col items-center justify-center relative overflow-hidden">
      <TopBar title="MYSTERY GIFT" icon="redeem" />

      <Icon
        name="auto_awesome"
        size={28}
        className="absolute top-28 left-6 text-secondary opacity-60"
      />
      <Icon
        name="stars"
        size={28}
        className="absolute bottom-44 right-6 text-primary opacity-60"
      />

      <div className="relative mb-10">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-accent text-white border-2 border-neutral px-3 py-1 font-display text-[8px] tracking-widest shadow-pixel-pink z-10">
          LVL 21 SURPRISE
        </div>

        <AnimatePresence mode="wait">
          {state !== "revealed" ? (
            <motion.button
              key="box"
              onClick={handleTap}
              animate={
                state === "shaking"
                  ? { x: [0, -6, 6, -6, 6, 0], rotate: [0, -4, 4, -3, 3, 0] }
                  : { x: 0, rotate: 0 }
              }
              transition={{ duration: 0.45, ease: "linear" }}
              whileTap={{ scale: 0.97 }}
              className="w-52 h-52 bg-[#ff4ead] border-4 border-neutral shadow-pixel-lg flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-8 h-full bg-neutral" />
                <div className="h-8 w-full bg-neutral absolute" />
              </div>
              <Icon name="redeem" filled size={64} className="text-white relative z-10" />
            </motion.button>
          ) : (
            <motion.div
              key="reward"
              initial={{ scale: 0, rotate: -20, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
              className="w-52 h-52 bg-secondary border-4 border-neutral shadow-pixel-lg flex flex-col items-center justify-center gap-2"
            >
              <Icon name="favorite" filled size={56} className="text-primary-dark" />
              <p className="font-display text-[10px] text-neutral text-center leading-relaxed">
                GOLDEN HEART
                <br />
                +100 LOVE
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="w-full bg-[#e7e1e3] border-4 border-neutral shadow-pixel-lg p-5 text-center">
        {state !== "revealed" ? (
          <>
            <h2 className="font-display text-xs text-neutral uppercase mb-3 tracking-tight">
              Tap To Unwrap Your Surprise!
            </h2>
            <div className="flex justify-center gap-1">
              <div className="w-2 h-2 bg-primary" />
              <div className="w-2 h-2 bg-accent" />
              <div className="w-2 h-2 bg-primary" />
            </div>
          </>
        ) : (
          <>
            <h2 className="font-display text-xs text-primary-dark uppercase mb-2 tracking-tight">
              Wow! Amazing!
            </h2>
            <p className="font-mono text-xs text-neutral/70">
              Added to your birthday collection
            </p>
          </>
        )}
      </div>
    </div>
  );
}
