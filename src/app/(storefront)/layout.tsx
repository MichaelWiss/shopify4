import { ReactNode } from "react";

import { AvantFooter } from "@/components/avant-footer";
import { AvantHeader } from "@/components/avant-header";

export default function StorefrontLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AvantHeader />
      {children}
      <AvantFooter />
    </>
  );
}
