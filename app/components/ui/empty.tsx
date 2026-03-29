// - Empty
//   - Media/Icon
//   - Title
//   - Description

import { Slot } from "radix-ui";
import { ComponentProps } from "react";

type EmptyRootProps = ComponentProps<"div">;

export const EmptyRoot = (props: EmptyRootProps) => {
  return (
    <div
      data-slot="empty-root"
      {...props}
      className="grid gap-2 p-6 text-center md:p-12"
    />
  );
};

type EmptyMediaProps = ComponentProps<"div">;

export const EmptyMedia = (props: EmptyMediaProps) => {
  return (
    <div
      data-slot="empty-media"
      {...props}
      className="justify-self-center grid place-items-center size-10 rounded-lg bg-muted text-foreground"
    />
  );
};

type EmptyTitleProps = ComponentProps<"h1"> & { asChild?: boolean };

export const EmptyTitle = ({ asChild = false, ...props }: EmptyTitleProps) => {
  const Comp = asChild ? Slot.Root : "h1";

  return (
    <Comp
      data-slot="empty-title"
      {...props}
      className="text-lg font-medium tracking-tight"
    />
  );
};

type EmptyDescriptionProps = ComponentProps<"p"> & { asChild?: boolean };

export const EmptyDescription = ({
  asChild = false,
  ...props
}: EmptyDescriptionProps) => {
  const Comp = asChild ? Slot.Root : "p";

  return (
    <Comp
      data-slot="empty-description"
      {...props}
      className="text-muted-foreground text-sm/relaxed"
    />
  );
};
