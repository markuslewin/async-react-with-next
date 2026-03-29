"use client";

import {
  TabsList,
  TabsRoot,
  TabsRootProps,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { ButtonShimmer } from "@/app/design/button-shimmer";
import { ReactNode, startTransition, useOptimistic } from "react";

export type TabListProps = {
  tab: string;
  changeAction: (value: string) => void | Promise<void>;
  children?: ReactNode;
};

export const TabList = ({ tab, children, changeAction }: TabListProps) => {
  const [optimisticTab, setOptimisticTab] = useOptimistic(tab);
  const isPending = tab !== optimisticTab;

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
        <TabsTrigger className="relative overflow-hidden isolate" value="all">
          All
          <ButtonShimmer isPending={isPending && optimisticTab === "all"} />
        </TabsTrigger>
        <TabsTrigger className="relative overflow-hidden isolate" value="wip">
          In Progress
          <ButtonShimmer isPending={isPending && optimisticTab === "wip"} />
        </TabsTrigger>
        <TabsTrigger className="relative overflow-hidden isolate" value="done">
          Complete
          <ButtonShimmer isPending={isPending && optimisticTab === "done"} />
        </TabsTrigger>
      </TabsList>
      {children}
      {/* todo */}
      {/* <TabsContent value=""></TabsContent> */}
    </TabsRoot>
  );
};
