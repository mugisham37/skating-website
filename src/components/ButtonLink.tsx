import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  color?: "purple" | "orange" | "green";
  icon?: "cart" | "arrow";
  className?: string;
  [key: string]: unknown;
};

export function ButtonLink({
  href,
  children,
  color = "purple",
  icon,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 font-medium transition-colors",
        color === "purple" && "bg-brand-purple text-white hover:bg-brand-purple/90",
        color === "orange" && "bg-brand-orange text-white hover:bg-brand-orange/90",
        color === "green" && "bg-brand-green text-white hover:bg-brand-green/90",
        className
      )}
      {...props}
    >
      {children}
      {icon === "cart" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      )}
      {icon === "arrow" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      )}
    </Link>
  );
}
