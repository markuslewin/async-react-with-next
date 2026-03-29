import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-grid place-items-center bg-input/30 border rounded-sm border-input hover:bg-input/50 transition-colors",
  {
    variants: {
      size: {
        "icon-lg": "size-10",
      },
    },
  },
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export const Button = ({ className, size, ...props }: ButtonProps) => {
  return (
    <button
      data-slot="button"
      {...props}
      className={twMerge(buttonVariants({ className, size }))}
    />
  );
};
