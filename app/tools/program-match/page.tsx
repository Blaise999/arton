// app/tools/program-match/page.tsx

import ProgramMatchClient from "./ProgramMatchClient";

export const metadata = {
  title: "Program Match - Arton Capitals",
  description:
    "Discover which residency and citizenship by investment programs best match your goals based on net worth, contribution type, relocation preferences, mobility, and more.",
};

export default function ProgramMatchPage() {
  return <ProgramMatchClient />;
}
