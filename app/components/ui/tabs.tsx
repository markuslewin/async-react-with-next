import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ComponentProps } from "react";

export type TabsRootProps = ComponentProps<typeof TabsPrimitive.Root>;

export const TabsRoot = (props: TabsRootProps) => {
  return (
    <TabsPrimitive.Root className="grid gap-2" data-slot="tabs" {...props} />
  );
};

type TabsListProps = ComponentProps<typeof TabsPrimitive.List>;

export const TabsList = (props: TabsListProps) => {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      {...props}
      className="bg-muted text-muted-foreground rounded-lg p-0.75 h-9 flex"
    />
  );
};

type TabsTriggerProps = ComponentProps<typeof TabsPrimitive.Trigger>;

export const TabsTrigger = (props: TabsTriggerProps) => {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      {...props}
      className="border border-transparent text-sm flex-1 rounded-md font-medium data-[state=active]:bg-input/30 data-[state=active]:text-foreground data-[state=active]:border-input"
    />
  );
};

type TabsContentProps = ComponentProps<typeof TabsPrimitive.Content>;

export const TabsContent = (props: TabsContentProps) => {
  return <TabsPrimitive.Content data-slot="tabs-content" {...props} />;
};
