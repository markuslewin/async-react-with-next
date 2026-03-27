import { Input } from "@/app/components/ui/input";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

type InputGroupRootProps = ComponentProps<"div">;

export const InputGroupRoot = (props: InputGroupRootProps) => {
  return (
    <div
      className="grid grid-cols-[auto_1fr_auto] group/input-group-root"
      data-slot="input-group-root"
      {...props}
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
