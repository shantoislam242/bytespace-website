import { StarSharpIcon } from "@/components/icons";

type StarRatingProps = {
  value: number;
  className?: string;
};

export default function StarRating({ value, className = "text-neutral-700" }: StarRatingProps) {
  return (
    <span role="img" aria-label={`${value} out of 5 stars`} className={`flex gap-1 ${className}`}>
      {Array.from({ length: 5 }, (_, index) => (
        <StarSharpIcon key={index} className={index < value ? "" : "opacity-25"} />
      ))}
    </span>
  );
}
