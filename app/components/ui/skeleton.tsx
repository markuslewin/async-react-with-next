import { cx } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type SkeletonProps = ComponentProps<"span">;

export const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <span
      data-slot="skeleton"
      {...props}
      className={twMerge(
        cx("block bg-accent animate-pulse rounded-md", className),
      )}
    />
  );
};
