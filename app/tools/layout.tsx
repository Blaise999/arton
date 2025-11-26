// app/tools/layout.tsx
import type { ReactNode } from "react";
import { ToolsProfileProvider } from "./ToolsProfileProvider";

export default function ToolsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ToolsProfileProvider>{children}</ToolsProfileProvider>;
}
