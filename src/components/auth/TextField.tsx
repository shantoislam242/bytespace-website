import type { ComponentProps } from "react";

type TextFieldProps = ComponentProps<"input"> & {
  label: string;
};

export default function TextField({ label, id, name, ...props }: TextFieldProps) {
  const inputId = id ?? name;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-label-s font-medium text-neutral-950">
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        className="h-[52px] rounded-xl border border-neutral-100 bg-white px-6 text-body-l text-neutral-950 transition-colors outline-none placeholder:text-neutral-400 focus:border-primary-800"
        {...props}
      />
    </div>
  );
}
