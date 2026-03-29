import { Input } from "@/app/components/ui/input";
import { cva, cx, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputGroupRootProps = ComponentProps<"div">;

export const InputGroupRoot = ({
  className,
  ...props
}: InputGroupRootProps) => {
  return (
    <div
      data-slot="input-group-root"
      {...props}
      className={twMerge(
        cx(
          "grid grid-cols-[auto_1fr_auto] group/input-group-root border border-input rounded-md transition-shadow has-focus-visible:ring-ring has-focus-visible:ring-1 forced-colors:has-focus-visible:outline",
          className,
        ),
      )}
    />
  );
};

type InputGroupControlProps = ComponentProps<"input">;

export const InputGroupControl = (props: InputGroupControlProps) => {
  return (
    <Input
      className="col-span-full row-start-1 group-has-[[data-slot=input-group-addon][data-align=inline-start]]/input-group-root:pl-9 group-has-[[data-slot=input-group-addon][data-align=inline-end]]/input-group-root:pr-9"
      data-slot="input-group-control"
      {...props}
    />
  );
};

const inputGroupAddonVariants = cva(
  "w-9 pl-3 pr-2 row-start-1 grid items-center",
  {
    variants: {
      align: {
        "inline-start": "col-start-1",
        "inline-end": "col-start-3",
      },
    },
  },
);

type InputGroupAddonProps = ComponentProps<"div"> &
  VariantProps<typeof inputGroupAddonVariants>;

export const InputGroupAddon = ({
  className,
  align,
  ...props
}: InputGroupAddonProps) => {
  return (
    <div
      className={inputGroupAddonVariants({ className, align })}
      data-slot="input-group-addon"
      data-align={align}
      {...props}
    />
  );
};
