import { motion } from "framer-motion";
import TopBar from "../components/TopBar";
import Icon from "../components/Icon";
import fotoCha1 from "../assets/memories/fotoCha1.png";
import fotoCha2 from "../assets/memories/fotoCha2.png";
import fotoCha3 from "../assets/memories/fotoCha3.png";

// === NAMBAH MEMORY BARU ===
// 1. Taro foto lo di folder: src/assets/memories/  (misal: foto1.jpg)
// 2. Import di atas, contoh:
//      import foto1 from "../assets/memories/foto1.jpg";
// 3. Tambahin object baru di array MEMORIES di bawah, isi `photo: foto1`
//    (kalau nggak ada foto, hapus aja baris `photo` -> otomatis pakai ikon)

const MEMORIES = [
  {
    date: "15 April",
    title: "HORMAT GERAK!",
    quote: "Lurahnya ga ada",
    icon: "cake",
    photo: fotoCha1, // ganti jadi nama foto yang udah di-import, misal: foto1
    bg: "bg-secondary",
    tag: "bg-primary text-white",
  },
  {
    date: "15 April",
    title: "Waiting...",
    quote: "pft lucu bgt",
    icon: "explore",
    photo: fotoCha2,
    bg: "bg-[#ff4ead]/30",
    tag: "bg-accent text-white",
  },
  {
    date: "23 Juni",
    title: "Sidang KP",
    quote: "Revisi 67X",
    icon: "emoji_events",
    photo: fotoCha3,
    bg: "bg-[#b873ff]/30",
    tag: "bg-[#b873ff] text-white",
  },
];

export default function Log() {
  return (
    <div className="min-h-screen pt-20 pb-28 px-5 max-w-[430px] mx-auto">
      <TopBar title="MEMORY LOG" icon="auto_stories" />

      <div className="flex justify-center mt-2 mb-8">
        <div className="bg-primary border-4 border-neutral shadow-pixel-lg px-4 py-2 -rotate-2">
          <h2 className="font-display text-xs text-white uppercase tracking-tight">
            Capture The Magic
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {MEMORIES.map((m, idx) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.08, ease: "linear" }}
            whileTap={{ x: 4, y: 4, boxShadow: "none" }}
            className={`bg-surface border-4 border-neutral shadow-pixel-lg p-4 pb-6 ${
              idx % 2 === 0 ? "rotate-1" : "-rotate-1"
            }`}
          >
            <div
              className={`aspect-square border-4 border-neutral mb-4 flex items-center justify-center overflow-hidden ${
                m.photo ? "" : m.bg
              }`}
            >
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.title}
                  className="w-full h-full object-cover"
                  style={{ imageRendering: "auto" }}
                />
              ) : (
                <Icon name={m.icon} filled size={56} className="text-neutral/70" />
              )}
            </div>
            <div className="text-center">
              <span
                className={`font-display text-[8px] px-2 py-1 inline-block border-2 border-neutral mb-2 tracking-widest ${m.tag}`}
              >
                {m.date}
              </span>
              <h3 className="font-display text-xs text-neutral uppercase mb-1">
                {m.title}
              </h3>
              <p className="font-mono text-xs text-neutral/60 italic">
                "{m.quote}"
              </p>
            </div>
          </motion.div>
        ))}

        {/* Add memory placeholder */}
        <div className="bg-[#f2ecee] border-4 border-dashed border-neutral/40 p-4 pb-6 flex flex-col items-center justify-center aspect-square">
          <Icon name="add_a_photo" size={44} className="text-neutral/30 mb-2" />
          <p className="font-display text-[9px] text-neutral/40 uppercase tracking-wide">
            Pending...
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-3 pb-4">
        <div className="w-4 h-4 bg-primary border-2 border-neutral" />
        <div className="w-4 h-4 bg-secondary border-2 border-neutral" />
        <div className="w-4 h-4 bg-accent border-2 border-neutral" />
      </div>
    </div>
  );
}