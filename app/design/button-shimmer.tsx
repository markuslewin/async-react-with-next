import { cx } from "class-variance-authority";
import { ReactNode } from "react";

type ButtonShimmerProps = {
  isPending: boolean;
  children?: ReactNode;
};

export const ButtonShimmer = ({ isPending }: ButtonShimmerProps) => {
  return (
    <span
      className={cx(
        "absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-opacity",
        isPending ? "animate-shimmer" : "opacity-0",
      )}
    />
  );
};
