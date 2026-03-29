import { Button } from "@/app/components/ui/button";
import { ButtonShimmer } from "@/app/design/button-shimmer";
import { ReactNode, useTransition } from "react";

type PendingButtonProps = {
  children?: ReactNode;
  action: () => void | Promise<void>;
};

export const PendingButton = ({ children, action }: PendingButtonProps) => {
  const [isPending, transition] = useTransition();

  return (
    <Button
      className="relative isolate overflow-hidden"
      size={"icon-lg"}
      onClick={() => {
        transition(async () => {
          await action();
        });
      }}
    >
      {children}
      <ButtonShimmer isPending={isPending} />
    </Button>
  );
};
