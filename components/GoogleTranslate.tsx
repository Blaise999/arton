"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export function GoogleTranslateLoader() {
  useEffect(() => {
    // Already loaded?
    if (document.querySelector("script[data-google-translate]")) return;

    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "zh-CN,vi,ru,fr,ar", // add what you want
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.setAttribute("data-google-translate", "true");
    document.body.appendChild(script);
  }, []);

  // Google injects its dropdown into this div (we’ll hide it with CSS if you want)
  return <div id="google_translate_element" className="hidden" />;
}
