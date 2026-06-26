import { motion } from "framer-motion";
import Icon from "./Icon";

const variants = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-neutral",
  tertiary: "bg-[#b873ff] text-white",
  white: "bg-surface text-neutral",
};

export default function PixelButton({
  children,
  onClick,
  variant = "primary",
  className = "",
  icon = null,
  full = false,
}) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ x: 4, y: 4, boxShadow: "0px 0px 0px 0px rgba(132,34,220,1)" }}
      transition={{ duration: 0.06, ease: "linear" }}
      className={`${variants[variant]} ${full ? "w-full" : ""}
        border-4 border-neutral shadow-pixel-lg
        font-display uppercase text-xs tracking-wide
        py-4 px-6 flex items-center justify-center gap-3
        active:shadow-none transition-shadow ${className}`}
    >
      {icon && <Icon name={icon} size={20} filled />}
      <span>{children}</span>
    </motion.button>
  );
}
