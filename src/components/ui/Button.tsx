import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-dark shadow-sm",
  secondary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-white",
  ghost:
    "text-primary hover:bg-surface",
} as const;

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
