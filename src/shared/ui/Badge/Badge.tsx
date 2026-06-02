import type { PropsWithChildren } from "react";

type BadgeProps = PropsWithChildren<{
  tone?: "blue" | "green" | "neutral";
}>;

const toneClasses = {
  blue: "border-blue-200 bg-blue-50 text-blue-700",
  green: "border-emerald-200 bg-emerald-50 text-emerald-700",
  neutral: "border-slate-200 bg-white text-slate-700",
};

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
