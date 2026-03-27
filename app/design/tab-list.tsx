"use client";

import {
  TabsList,
  TabsRoot,
  TabsRootProps,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { ReactNode, startTransition, useOptimistic } from "react";

export type TabListProps = {
  tab: string;
  changeAction: (value: string) => void | Promise<void>;
  children?: ReactNode;
};

export const TabList = ({ tab, children, changeAction }: TabListProps) => {
  const [optimisticTab, setOptimisticTab] = useOptimistic(tab);
  // todo
  // const isPending = tab !== optimisticTab;

  const handleValueChange: TabsRootProps["onValueChange"] = (value) => {
    startTransition(async () => {
      setOptimisticTab(value);
      await changeAction(value);
    });
  };

  return (
    <TabsRoot
      activationMode="manual"
      value={optimisticTab}
      onValueChange={handleValueChange}
    >
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="wip">In Progress</TabsTrigger>
        <TabsTrigger value="done">Complete</TabsTrigger>
      </TabsList>
      {children}
      {/* todo */}
      {/* <TabsContent value=""></TabsContent> */}
    </TabsRoot>
  );
};
