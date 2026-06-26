export default function CakeSprite({ lit = true }) {
  return (
    <svg
      viewBox="0 0 64 64"
      shapeRendering="crispEdges"
      className="w-full h-full"
      style={{ imageRendering: "pixelated" }}
    >
      {/* plate */}
      <rect x="6" y="54" width="52" height="4" fill="#2b0b49" />
      <rect x="8" y="50" width="48" height="4" fill="#ffffff" />

      {/* cake base layer */}
      <rect x="10" y="38" width="44" height="16" fill="#2b0b49" />
      <rect x="12" y="40" width="40" height="12" fill="#ff4ead" />
      <rect x="12" y="46" width="40" height="2" fill="#e0399a" />

      {/* sprinkles on base */}
      <rect x="18" y="42" width="2" height="2" fill="#8422dc" />
      <rect x="26" y="44" width="2" height="2" fill="#ffffff" />
      <rect x="34" y="42" width="2" height="2" fill="#8422dc" />
      <rect x="42" y="44" width="2" height="2" fill="#ffffff" />
      <rect x="46" y="42" width="2" height="2" fill="#8422dc" />

      {/* top layer */}
      <rect x="16" y="28" width="32" height="12" fill="#2b0b49" />
      <rect x="18" y="30" width="28" height="8" fill="#ffd8e6" />
      <rect x="18" y="36" width="28" height="2" fill="#f9b1da" />

      {/* drip details */}
      <rect x="20" y="30" width="3" height="4" fill="#ff4ead" />
      <rect x="30" y="30" width="3" height="4" fill="#ff4ead" />
      <rect x="40" y="30" width="3" height="4" fill="#ff4ead" />

      {/* candle */}
      <rect x="29" y="18" width="6" height="12" fill="#2b0b49" />
      <rect x="30" y="19" width="4" height="10" fill="#ffffff" />
      <rect x="30" y="22" width="4" height="2" fill="#ff4ead" />
      <rect x="30" y="26" width="4" height="2" fill="#ff4ead" />

      {/* flame (lit) or smoke (unlit) */}
      {lit ? (
        <>
          <rect x="30" y="10" width="4" height="4" fill="#2b0b49" />
          <rect x="31" y="11" width="2" height="2" fill="#ffb703" />
          <rect x="30" y="14" width="4" height="3" fill="#ff4500" />
          <rect x="31" y="15" width="2" height="2" fill="#ffd54f" />
        </>
      ) : (
        <>
          <rect x="31" y="13" width="2" height="2" fill="#8b707a" opacity="0.6" />
          <rect x="29" y="9" width="2" height="2" fill="#8b707a" opacity="0.4" />
          <rect x="33" y="6" width="2" height="2" fill="#8b707a" opacity="0.3" />
        </>
      )}
    </svg>
  );
}
