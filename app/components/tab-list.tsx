"use client";

import * as Design from "@/app/design/tab-list";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

type TabListProps = {
  tab: string;
  children?: ReactNode;
};

export const TabList = ({ tab, children }: TabListProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Design.TabList
      tab={tab}
      changeAction={(nextTab) => {
        const nextSearchParams = new URLSearchParams(searchParams);
        // todo: `tabName`
        nextSearchParams.set("tab", nextTab);
        router.replace(`/?${nextSearchParams}`);
      }}
    >
      {children}
    </Design.TabList>
  );
};
