import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const inputVariants = cva(
  "text-sm bg-input/30 h-9 border border-input rounded-md px-3 transition-shadow focus-visible:ring-ring focus-visible:ring-1 outline-hidden placeholder:text-muted-foreground",
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
