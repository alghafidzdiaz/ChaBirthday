import Icon from "./Icon";

export default function TopBar({ title, icon = "celebration" }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-neutral shadow-pixel">
      <div className="flex items-center justify-between h-16 px-4 max-w-[430px] mx-auto">
        <div className="flex items-center gap-2">
          <Icon name={icon} size={22} className="text-primary" />
          <h1 className="font-display text-[13px] text-primary-dark tracking-tighter uppercase">
            {title}
          </h1>
        </div>
        <Icon name="settings" size={20} className="text-neutral/40" />
      </div>
    </header>
  );
}
