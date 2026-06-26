// Minimal pixel-friendly line-icon set, drawn to look crisp at small sizes.
// Self-contained SVGs replace Material Symbols so the app has zero external
// font/CDN dependency for iconography (avoids FOUT/blocked-request issues).
//
// Each icon defines:
//  - fill: closed shape(s) drawn filled when filled=true, otherwise stroked
//  - lines: always-stroked detail strokes (candle wick, decorative ticks)

const ICONS = {
  home: {
    fill: "M12 3.5l8 7v9.5h-5.5v-6h-5v6H4v-9.5l8-7z",
  },
  celebration: {
    fill: "M5.5 20.5l3-8.5 5.5 5.5-8.5 3z",
    lines: "M13 4l1.4 1.4M17 8l1.4 1.4M9.5 8l1.4 1.4",
  },
  redeem: {
    fill: "M3 10h18v3H3v-3zm0 4.5h18v7.5H3v-7.5zm6-4.5V7.5a2.5 2.5 0 115 0V10H9zm0 0a2.5 2.5 0 01-2.5-2.5A2.5 2.5 0 019 5h2v5H9zm6 0a2.5 2.5 0 002.5-2.5A2.5 2.5 0 0015 5h-2v5h2z",
  },
  auto_stories: {
    fill: "M3 5.5c2-1 5-1 8 .3v13c-3-1.3-6-1.3-8-.3v-13zM21 5.5c-2-1-5-1-8 .3v13c3-1.3 6-1.3 8-.3v-13z",
  },
  settings: {
    fill: "M12 9.2a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zM19.4 11.2l-1.5-.4a6 6 0 00-.6-1.4l.8-1.4-1.4-1.4-1.4.8a6 6 0 00-1.4-.6l-.4-1.5h-2l-.4 1.5a6 6 0 00-1.4.6l-1.4-.8-1.4 1.4.8 1.4a6 6 0 00-.6 1.4l-1.5.4v2l1.5.4a6 6 0 00.6 1.4l-.8 1.4 1.4 1.4 1.4-.8a6 6 0 001.4.6l.4 1.5h2l.4-1.5a6 6 0 001.4-.6l1.4.8 1.4-1.4-.8-1.4a6 6 0 00.6-1.4l1.5-.4v-2z",
  },
  card_giftcard: {
    fill: "M3 11h18v2H3v-2zm0 3h8v7H4a1 1 0 01-1-1v-6zm10 0h8v6a1 1 0 01-1 1h-7v-7zM7.5 4.5a2.5 2.5 0 015 0V9h2V4.5a2.5 2.5 0 015 0c0 1.4-1.1 2.5-2.5 2.5h-12c-1.4 0-2.5-1.1-2.5-2.5z",
  },
  air: {
    lines: "M3 8h11.5a2.5 2.5 0 100-5M2 13h15.5a2.5 2.5 0 110 5M5.5 18h9.5a2.5 2.5 0 10-2.5-2.5",
  },
  check_circle: {
    fill: "M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19zm-1.7 13.8L6.5 12.5l1.6-1.6 2.2 2.2 5.6-5.6 1.6 1.6-7.2 7.2z",
  },
  auto_awesome: {
    fill: "M10 1.5l1.7 5L17 8l-5.3 1.5L10 14.5l-1.7-5L3 8l5.3-1.5L10 1.5zM18 12.5l1 2.8 2.8 1-2.8 1-1 2.8-1-2.8-2.8-1 2.8-1z",
  },
  favorite: {
    fill: "M12 21s-7.2-4.5-9.8-9.1C0.6 8.6 2 4.9 5.4 4 7.6 3.4 10 4.4 12 7c2-2.6 4.4-3.6 6.6-3 3.4.9 4.8 4.6 2.8 7.9C19.2 16.5 12 21 12 21z",
  },
  cake: {
    fill: "M5 21v-6.5a2 2 0 012-2h10a2 2 0 012 2V21H5z",
    lines: "M8.5 12.5V9M12 12.5V7M15.5 12.5V9M11 4.2l1-1.7 1 1.7v1H11v-1z",
  },
  stars: {
    fill: "M12 2l2.6 6.6L21 9.3l-5.1 4.4L17.5 21 12 17.2 6.5 21l1.6-7.3L3 9.3l6.4-.7L12 2z",
  },
  explore: {
    fill: "M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19zm3.4 6.1L14 14l-5.4 1.4L10 9.6l5.4-1z",
  },
  emoji_events: {
    fill: "M7 4h10v4.5a5 5 0 01-10 0V4z",
    lines: "M5 6.5H3v2a4 4 0 003 3.8M19 6.5h2v2a4 4 0 01-3 3.8M9.5 17h5l.8 3.5H8.7l.8-3.5z",
  },
  add_a_photo: {
    fill: "M12 9.5a4.2 4.2 0 100 8.4 4.2 4.2 0 000-8.4z",
    lines: "M4 7.5h3l1.4-2h7l1.4 2h3a1 1 0 011 1V19a1 1 0 01-1 1H4a1 1 0 01-1-1V8.5a1 1 0 011-1zM18 3.5v3.4M16.3 5.2h3.4",
  },
};

export default function Icon({ name, className = "", filled = false, size = 24 }) {
  const icon = ICONS[name];
  if (!icon) return null;
  const { fill, lines } = icon;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      {fill && (
        <path
          d={fill}
          fill={filled ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={filled ? 0 : 1.6}
        />
      )}
      {lines && <path d={lines} fill="none" stroke="currentColor" strokeWidth={1.6} />}
    </svg>
  );
}
