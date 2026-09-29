import { StarIcon } from "@/components/icons";
import { happyStudents } from "@/data/people";
import AvatarStack from "./AvatarStack";

type HappyStudentsCardProps = {
  variant?: "white" | "lime";
  compact?: boolean;
  className?: string;
};

export default function HappyStudentsCard({ variant = "white", compact = false, className = "" }: HappyStudentsCardProps) {
  const isLime = variant === "lime";

  return (
    <div className={`w-[258px] rounded-2xl p-4 ${isLime ? "bg-secondary-400" : "bg-white"} ${className}`}>
      <p className={`text-base font-medium text-neutral-950 ${compact ? "leading-6" : "leading-[1.2]"}`}>
        Happy Students
      </p>
      <p className={`flex items-center text-neutral-400 ${compact ? "text-[10px] leading-[1.5]" : "text-body-xs"}`}>
        <span className={`text-neutral-950 ${compact ? "font-bold" : ""}`}>4.5</span>&nbsp;(240)
        <StarIcon className={isLime ? "text-primary-800" : "text-secondary-400"} />
      </p>
      <div className="mt-2">
        <AvatarStack
          avatars={happyStudents}
          total="2K+"
          size={43}
          overlap={-16}
          totalClassName={`font-bold ${isLime ? "bg-neutral-950 text-neutral-50" : "bg-secondary-400 text-neutral-950"}`}
        />
      </div>
    </div>
  );
}
