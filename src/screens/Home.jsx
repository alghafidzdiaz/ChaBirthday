import { motion } from "framer-motion";
import TopBar from "../components/TopBar";
import PixelButton from "../components/PixelButton";
import Icon from "../components/Icon";
import heroSprite from "../assets/hero-sprite.png";

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen pt-20 pb-28 px-5 max-w-[430px] mx-auto flex flex-col items-center justify-center relative">
      <TopBar title="BDAY QUEST" icon="celebration" />

      {/* floating pixel stars */}
      <span className="star-pixel top-24 left-8" />
      <span className="star-pixel top-40 right-10" style={{ animationDelay: "0.6s" }} />
      <span className="star-pixel bottom-40 left-1/4" style={{ animationDelay: "1.1s" }} />

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "linear" }}
        className="font-display text-2xl text-primary-dark text-center uppercase leading-tight mb-2 tracking-tight"
      >
        Happy
        <br />
        Birthday
      </motion.h2>
      <p className="font-mono text-xs text-neutral/60 text-center mb-8 uppercase tracking-wide">
        Level 21 Celebration Unlocked
      </p>

      <div className="relative mb-10 animate-float">
        <div className="absolute inset-0 bg-primary opacity-20 blur-2xl scale-110 rounded-full" />
        <div className="relative w-56 h-56 bg-surface border-4 border-neutral shadow-pixel-lg flex items-center justify-center overflow-hidden">
          <img
            src={heroSprite}
            alt="Birthday hero sprite"
            className="w-44 h-44 object-contain"
          />
        </div>
        <Icon
          name="auto_awesome"
          filled
          size={28}
          className="absolute -top-4 -right-4 text-primary animate-twinkle"
        />
        <Icon
          name="favorite"
          filled
          size={28}
          className="absolute -bottom-3 -left-4 text-accent"
        />
      </div>

      <div className="w-full px-2">
        <PixelButton
          full
          icon="card_giftcard"
          onClick={() => onNavigate("wish")}
          className="text-sm"
        >
          Open Wish
        </PixelButton>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-6 opacity-70">
        {[
          ["cake", "CAKE"],
          ["celebration", "PARTY"],
          ["stars", "EXP+"],
        ].map(([icon, label]) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <Icon name={icon} size={20} className="text-primary" />
            <span className="font-display text-[8px] text-neutral/60">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
