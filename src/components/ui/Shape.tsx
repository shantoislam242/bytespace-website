import Image from "next/image";
import { shapes, type ShapeName } from "@/data/shapes";

type ShapeProps = {
  name: ShapeName;
  className?: string;
};

// Decorative 3D shapes. Position and size come from the className.
export default function Shape({ name, className = "" }: ShapeProps) {
  const { width, height } = shapes[name];

  return (
    <Image
      src={`/images/shapes/${name}.png`}
      alt=""
      aria-hidden="true"
      width={width}
      height={height}
      className={`pointer-events-none absolute h-auto max-w-none select-none ${className}`}
    />
  );
}
