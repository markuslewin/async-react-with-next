import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const inputVariants = cva(
  "text-sm bg-input/30 h-9 px-3 outline-none placeholder:text-muted-foreground",
  {
    variants: {},
  },
);

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputVariants>;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      data-slot="input"
      {...props}
      className={twMerge(inputVariants({ className }))}
    />
  );
};
