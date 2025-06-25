"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect if the current browser is Safari
 * @param defaultValue - Optional default value to use before detection completes
 * @returns boolean indicating if the browser is Safari
 */
export function useIsSafari(defaultValue = false): boolean {
  const [isSafari, setIsSafari] = useState<boolean>(defaultValue);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return;

    const userAgent = window.navigator.userAgent;
    const isSafariCheck =
      userAgent.includes("Safari") && !userAgent.includes("Chrome");

    setIsSafari(isSafariCheck);
  }, []);

  return isSafari;
}
