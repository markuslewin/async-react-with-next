import { Button } from "@/app/components/ui/button";
import { ReactNode, useTransition } from "react";

type PendingButtonProps = {
  children?: ReactNode;
  action: () => void | Promise<void>;
};

export const PendingButton = ({ children, action }: PendingButtonProps) => {
  const [isPending, transition] = useTransition();

  return (
    <Button
      onClick={() => {
        transition(async () => {
          await action();
        });
      }}
    >
      {children}
      {isPending ? "Pending" : "Idle"}
    </Button>
  );
};
