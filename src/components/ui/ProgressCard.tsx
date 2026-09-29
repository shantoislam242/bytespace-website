type ProgressCardProps = {
  label?: string;
  value: number;
  className?: string;
};

export default function ProgressCard({ label = "Learning Progress", value, className = "" }: ProgressCardProps) {
  return (
    <div className={`w-[232px] rounded-2xl bg-white p-4 ${className}`}>
      <p className="text-label-s font-medium text-neutral-950">{label}</p>
      <p className="mt-2 font-heading text-5xl leading-[1.2] font-semibold tracking-[-0.01em] text-neutral-950">
        {value}%
      </p>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-2 h-2 w-full overflow-hidden rounded-3xl bg-[#f6f6f6]"
      >
        <div className="h-full rounded-3xl bg-secondary-400" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
