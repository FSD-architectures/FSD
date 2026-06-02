import type { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-lg border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-200/70 ${className}`}
    >
      {children}
    </article>
  );
}
