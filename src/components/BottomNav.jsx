import Icon from "./Icon";

const TABS = [
  { id: "home", label: "HOME", icon: "home" },
  { id: "wish", label: "WISH", icon: "celebration" },
  { id: "gift", label: "GIFT", icon: "redeem" },
  { id: "log", label: "LOG", icon: "auto_stories" },
];

export default function BottomNav({ active, onChange }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#f8f2f4] border-t-4 border-neutral shadow-pixel-up">
      <div className="flex justify-around items-center max-w-[430px] mx-auto h-[72px] px-2">
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 w-16 h-14 transition-all
                ${
                  isActive
                    ? "bg-primary text-white border-4 border-neutral shadow-[2px_2px_0px_0px_rgba(43,11,73,1)] -translate-y-1"
                    : "text-neutral/50"
                }`}
            >
              <Icon name={tab.icon} size={20} filled={isActive} />
              <span className="font-display text-[7px] tracking-wider">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
