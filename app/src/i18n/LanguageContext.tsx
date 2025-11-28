"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { dictionary, type SupportedLang } from "./dictionary";

type LanguageContextValue = {
  lang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<SupportedLang>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("lang") as SupportedLang | null;
      if (stored) setLangState(stored);
    } catch {
      // ignore
    }
  }, []);

  function setLang(newLang: SupportedLang) {
    setLangState(newLang);
    try {
      window.localStorage.setItem("lang", newLang);
    } catch {
      // ignore
    }
  }

  function t(key: string) {
    const pack = dictionary[lang] || dictionary.en;
    return pack[key] ?? dictionary.en[key] ?? key;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}
