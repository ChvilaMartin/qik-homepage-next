"use client";

import { useState, useEffect, useCallback } from "react";
import { checkWorkspaceAvailability } from "@/app/lib/actions";

export type AvailabilityState = {
  isChecking: boolean;
  isAvailable: boolean | null;
  error: string | null;
};

export function useWorkspaceAvailability(slug: string, debounceMs: number = 500) {
  const [state, setState] = useState<AvailabilityState>({
    isChecking: false,
    isAvailable: null,
    error: null,
  });

  const checkAvailability = useCallback(async (slugToCheck: string) => {
    if (!slugToCheck || slugToCheck.trim().length === 0) {
      setState({
        isChecking: false,
        isAvailable: null,
        error: null,
      });
      return;
    }

    setState(prev => ({
      ...prev,
      isChecking: true,
      error: null,
    }));

    try {
      const result = await checkWorkspaceAvailability(slugToCheck);

      setState({
        isChecking: false,
        isAvailable: result.error ? null : !result.exists,
        error: result.error || null,
      });
    } catch {
      setState({
        isChecking: false,
        isAvailable: null,
        error: "Chyba při ověřování dostupnosti",
      });
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      checkAvailability(slug);
    }, debounceMs);

    return () => clearTimeout(timeoutId);
  }, [slug, debounceMs, checkAvailability]);

  return state;
}
