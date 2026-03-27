import { ComponentProps } from "react";

type CardRootProps = ComponentProps<"div">;

export const CardRoot = (props: CardRootProps) => {
  return (
    <div
      className="bg-card text-card-foreground border rounded-xl py-6 px-8"
      data-slot="card-root"
      {...props}
    />
  );
};

export const CardHeader = () => {};
