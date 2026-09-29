// Exported at 2x from Figma, so the real size is half of these numbers.
export const shapes = {
  "squiggle-lime": { width: 778, height: 774 },
  "squiggle-white": { width: 354, height: 352 },
  "spring-lime": { width: 667, height: 664 },
  "spring-white": { width: 667, height: 664 },
  "torus-lime": { width: 692, height: 688 },
  "torus-white": { width: 692, height: 688 },
  "cylinder-lime": { width: 748, height: 744 },
  "cylinder-white": { width: 748, height: 744 },
  "cone-lime": { width: 380, height: 378 },
  "cone-white": { width: 380, height: 378 },
  "cone-white-alt": { width: 380, height: 378 },
} as const;

export type ShapeName = keyof typeof shapes;
