import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "../components/TopBar";
import PixelButton from "../components/PixelButton";
import RPGDialog from "../components/RPGDialog";
import CakeSprite from "../components/CakeSprite";

export default function Wish({ onNavigate }) {
  const [candleLit, setCandleLit] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  const blowCandle = () => {
    if (!candleLit) return;
    setCandleLit(false);
    setTimeout(() => setShowDialog(true), 350);
  };

  return (
    <div className="min-h-screen pt-20 pb-28 px-5 max-w-[430px] mx-auto flex flex-col items-center">
      <TopBar title="BIRTHDAY WISH" icon="celebration" />

      <div className="w-full bg-secondary border-4 border-neutral shadow-pixel-lg px-4 py-2 text-center mb-6 mt-2">
        <span className="font-display text-[10px] text-primary-dark uppercase tracking-widest">
          Make A Wish
        </span>
      </div>

      <motion.div
        animate={candleLit ? { y: [0, -6, 0] } : { y: 0 }}
        transition={{ duration: 2, repeat: candleLit ? Infinity : 0, ease: "linear" }}
        className="w-60 h-60 bg-surface border-4 border-neutral shadow-pixel-lg flex items-center justify-center mb-8"
      >
        <div className="w-36 h-36">
          <CakeSprite lit={candleLit} />
        </div>
      </motion.div>

      <div className="w-full px-2 mb-6">
        <PixelButton
          full
          icon={candleLit ? "air" : "check_circle"}
          onClick={blowCandle}
          variant={candleLit ? "primary" : "secondary"}
        >
          {candleLit ? "Tiup Lilin" : "Wish Made!"}
        </PixelButton>
      </div>

      <AnimatePresence>
        {showDialog && (
          <RPGDialog
            className="w-full"
            header="SYSTEM MESSAGE"
            lines={[
              "Happy Birthday, Chaaaa! 🎉.",
              "My wish for you is that you live a life filled with happiness, stay healthy always, and may this world never take away that beautiful smile of yours.",
            ]}
          >
            <PixelButton
              full
              icon="redeem"
              variant="tertiary"
              onClick={() => onNavigate && onNavigate("gift")}
            >
              Next: Open Gift
            </PixelButton>
          </RPGDialog>
        )}
      </AnimatePresence>
    </div>
  );
}
