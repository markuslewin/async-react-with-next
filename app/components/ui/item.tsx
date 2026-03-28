import { ComponentProps } from "react";

type ItemGroupProps = ComponentProps<"ul">;

export const ItemGroup = (props: ItemGroupProps) => {
  return (
    <ul role="list" data-slot="item-group" {...props} className="text-sm" />
  );
};

type ItemProps = ComponentProps<"li">;

export const Item = (props: ItemProps) => {
  return (
    <li
      data-slot="item"
      {...props}
      className="grid grid-cols-[auto_1fr_auto] gap-4 items-center py-4"
    />
  );
};

type ItemMediaProps = ComponentProps<"div">;

export const ItemMedia = (props: ItemMediaProps) => {
  return <div data-slot="item-media" {...props} className="px-3" />;
};

type ItemContentProps = ComponentProps<"div">;

export const ItemContent = (props: ItemContentProps) => {
  return <div data-slot="item-content" {...props} className="grid gap-1" />;
};

type ItemTitleProps = ComponentProps<"div">;

export const ItemTitle = (props: ItemTitleProps) => {
  return (
    <div
      data-slot="item-title"
      {...props}
      className="leading-snug font-medium"
    />
  );
};

type ItemDescriptionProps = ComponentProps<"p">;

export const ItemDescription = (props: ItemDescriptionProps) => {
  return (
    <p
      data-slot="item-description"
      {...props}
      className="text-muted-foreground"
    />
  );
};
