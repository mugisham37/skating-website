import React, { CSSProperties, ReactNode } from "react";
import clsx from "clsx";

interface BoundedProps {
  as?: "section" | "div" | "article" | "nav";
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function Bounded({
  as = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  const Container = as;
  
  return (
    <Container
      className={clsx(
        "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className
      )}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Container>
  );
}
