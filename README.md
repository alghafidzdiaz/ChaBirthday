# BDAY QUEST — 8-Bit Pixel Birthday Webapp

A mobile-first, retro pixel-art birthday experience built with React (Vite),
Tailwind CSS, and Framer Motion.

## Screens

- **HOME** — Hero landing with the birthday character sprite and an "Open Wish" CTA.
- **WISH** — A pixel cake with a lit candle. Tap "Tiup Lilin" to blow it out and
  trigger the RPGDialog system-message reveal.
- **GIFT** — A mystery gift box. Tap to trigger a staccato shake (Framer Motion),
  then reveal a "Golden Heart +100 Love" reward.
- **LOG** — A vertical feed of Polaroid-style memory cards.

## Stack

- React 19 + Vite
- Tailwind CSS (custom design tokens: `primary`, `background`, `surface`,
  `accent`, `neutral`)
- Framer Motion for staccato/linear-eased transitions
- Self-contained SVG icon set (`src/components/Icon.jsx`) — no external icon
  font/CDN dependency

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173

npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  assets/             hero sprite (PNG, transparent bg)
  components/
    BottomNav.jsx      4-tab fixed bottom nav (HOME / WISH / GIFT / LOG)
    CakeSprite.jsx      pixel-art SVG cake with lit/unlit candle states
    Icon.jsx            self-contained pixel-friendly SVG icon set
    PixelButton.jsx     thick-border button with block shadow + press state
    RPGDialog.jsx       system-message dialog box with typewriter effect
    TopBar.jsx          fixed top app bar
  screens/
    Home.jsx
    Wish.jsx
    Gift.jsx
    Log.jsx
  App.jsx               tab state + screen transitions
  index.css             global styles, pixelated image rendering, scanlines
tailwind.config.js      design tokens (colors, shadows, animations)
```

## Notes

- All `<img>` tags use `image-rendering: pixelated` globally.
- Borders are `4px solid #2b0b49` (neutral) throughout; shadows use
  `4px_4px_0px_0px rgba(132,34,220,1)` (accent purple) for the signature
  "block shadow" look — no blur, no border-radius.
- Optimized for 390–430px viewports (iPhone widths); the layout caps at
  `max-w-[430px]` and centers on wider screens.
