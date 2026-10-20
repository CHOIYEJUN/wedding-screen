export function PixelHeart({ size = 32 }: { size?: number }) {
  const rows = ["0110110", "1111111", "1111111", "0111110", "0011100", "0001000"];
  const width = 7;
  const height = rows.length;

  return (
    <svg
      width={size}
      height={Math.round((size * height) / width)}
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
      className="heart"
    >
      {rows.flatMap((row, y) =>
        [...row].map((cell, x) =>
          cell === "1" ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} /> : null,
        ),
      )}
    </svg>
  );
}

export function IconCode() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 8 4 12l4 4M16 8l4 4-4 4M13 6l-2 12" />
    </svg>
  );
}

export function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  );
}

export function IconPill() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="9" width="18" height="6" rx="3" />
      <path d="M12 9v6" />
    </svg>
  );
}

export function IconChart() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19V10M12 19V5M19 19v-7" />
    </svg>
  );
}

export function IconNote() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4h8l4 4v12H7z" />
      <path d="M15 4v4h4M9 12h6M9 16h4" />
    </svg>
  );
}

export function IconPin() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
      <circle cx="12" cy="11" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </svg>
  );
}

export function IconRacket() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10" cy="9" r="5" />
      <path d="M14 13l6 6M8 7l4 4M7 10h6M10 6v6" />
    </svg>
  );
}

export function IconMoon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 3a8 8 0 1 0 6 13 7 7 0 0 1-6-13z" />
    </svg>
  );
}
