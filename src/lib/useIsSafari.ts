"use client";

import { useLayoutEffect, useState } from "react";

/**
 * Hook to detect if the current browser is Safari
 * @param defaultValue - Optional default value to use before detection completes
 * @returns boolean indicating if the browser is Safari
 */
export function useIsSafari(defaultValue = false): boolean {
  const [isSafari, setIsSafari] = useState<boolean>(defaultValue);

  useLayoutEffect(() => {
    setIsSafari(
      typeof window === "undefined"
        ? false
        : window.navigator.userAgent.includes("Safari") &&
            !window.navigator.userAgent.includes("Chrom") // "Chrome" or "Chromium"
    );
  }, []);

  return isSafari;
}
