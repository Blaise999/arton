"use client";

import React, { AnchorHTMLAttributes, MouseEvent } from "react";
import { event as fbEvent } from "@/libs/metaPixel";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName?: string;
  eventProps?: Record<string, any>;
};

export function TrackedLink({
  eventName = "Contact",
  eventProps = {},
  onClick,
  ...rest
}: TrackedLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    try {
      fbEvent(eventName, {
        ...eventProps,
        href: rest.href,
      });
    } catch (err) {
      // Avoid breaking UX if tracking fails
      console.warn("Failed to send Meta event for TrackedLink:", err);
    }

    if (onClick) {
      onClick(e);
    }
  };

  return <a {...rest} onClick={handleClick} />;
}
