import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BottomNav from "./components/BottomNav";
import Home from "./screens/Home";
import Wish from "./screens/Wish";
import Gift from "./screens/Gift";
import Log from "./screens/Log";

const SCREENS = {
  home: Home,
  wish: Wish,
  gift: Gift,
  log: Log,
};

export default function App() {
  const [active, setActive] = useState("home");
  const ActiveScreen = SCREENS[active];

  return (
    <div className="bg-background min-h-screen text-neutral relative">
      <div className="scanlines" />
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.12, ease: "linear" }}
        >
          {active === "home" ? (
            <Home onNavigate={setActive} />
          ) : active === "wish" ? (
            <Wish onNavigate={setActive} />
          ) : (
            <ActiveScreen />
          )}
        </motion.div>
      </AnimatePresence>
      <BottomNav active={active} onChange={setActive} />
    </div>
  );
}
