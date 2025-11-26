// app/tools/ToolsProfileProvider.tsx
"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Currency = "USD" | "EUR" | "CAD";

export type AgeFieldKey =
  | "spouse"
  | "child1"
  | "child2"
  | "child3"
  | "child4"
  | "parent1"
  | "parent2";

export type AgesState = Record<AgeFieldKey, string>;

export const DEFAULT_AGES: AgesState = {
  spouse: "0",
  child1: "0",
  child2: "0",
  child3: "0",
  child4: "0",
  parent1: "0",
  parent2: "0",
};

type ToolsProfileState = {
  currency: Currency;
  setCurrency: (c: Currency) => void;

  ages: AgesState;
  setAge: (key: AgeFieldKey, value: string) => void;
  resetAges: () => void;
};

const ToolsProfileContext = createContext<ToolsProfileState | null>(null);

export function ToolsProfileProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [ages, setAges] = useState<AgesState>(DEFAULT_AGES);

  const setAge = (key: AgeFieldKey, raw: string) => {
    const cleaned = raw.replace(/[^\d]/g, "");
    setAges((prev) => ({ ...prev, [key]: cleaned || "0" }));
  };

  const resetAges = () => setAges(DEFAULT_AGES);

  const value = useMemo(
    () => ({
      currency,
      setCurrency,
      ages,
      setAge,
      resetAges,
    }),
    [currency, ages]
  );

  return (
    <ToolsProfileContext.Provider value={value}>
      {children}
    </ToolsProfileContext.Provider>
  );
}

export function useToolsProfile() {
  const ctx = useContext(ToolsProfileContext);
  if (!ctx) {
    throw new Error(
      "useToolsProfile must be used within ToolsProfileProvider"
    );
  }
  return ctx;
}
