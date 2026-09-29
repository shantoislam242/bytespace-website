const palette = {
  blue: "0 59 226",
  lime: "203 252 1",
} as const;

type BlobOptions = {
  color: keyof typeof palette;
  // center position, x is relative to the middle of the section
  x: number;
  y: number;
  radius: number;
  opacity: number;
};

// Soft glow circles from the design, rebuilt as radial gradients.
export function blob({ color, x, y, radius, opacity }: BlobOptions) {
  const rgb = palette[color];
  const stop = (alpha: number) => `rgb(${rgb} / ${+(alpha * opacity).toFixed(3)})`;

  return `radial-gradient(circle ${radius}px at calc(50% + ${x}px) ${y}px, ${stop(1)} 0%, ${stop(0.23)} 53%, ${stop(0.06)} 75%, transparent 100%)`;
}
