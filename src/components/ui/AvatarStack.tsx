import Image from "next/image";

type AvatarStackProps = {
  avatars: string[];
  total: string;
  size: number;
  overlap: number;
  totalClassName?: string;
};

export default function AvatarStack({
  avatars,
  total,
  size,
  overlap,
  totalClassName = "bg-secondary-400 text-neutral-950",
}: AvatarStackProps) {
  return (
    <div className="flex">
      {avatars.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={size}
          height={size}
          className="shrink-0 rounded-full object-cover"
          style={{ width: size, height: size, marginLeft: index === 0 ? 0 : overlap }}
        />
      ))}
      <span
        className={`flex shrink-0 items-center justify-center rounded-full text-xs ${totalClassName}`}
        style={{ width: size, height: size, marginLeft: overlap }}
      >
        {total}
      </span>
    </div>
  );
}
