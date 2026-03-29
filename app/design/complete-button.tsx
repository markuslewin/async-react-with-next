"use client";

import { PendingButton } from "@/app/design/pending-button";
import { CircleCheckBig } from "lucide-react";
import { startTransition, useOptimistic } from "react";

type CompleteButtonProps = {
  isComplete: boolean;
  action: () => void | Promise<void>;
};

export const CompleteButton = ({ isComplete, action }: CompleteButtonProps) => {
  const [optimisticIsComplete, setOptimisticIsComplete] =
    useOptimistic(isComplete);

  const clickAction = () => {
    startTransition(async () => {
      setOptimisticIsComplete(!optimisticIsComplete);
      await action();
    });
  };

  return (
    <PendingButton action={clickAction}>
      {optimisticIsComplete ? (
        <CircleCheckBig className="size-4 text-chart-2" />
      ) : null}
    </PendingButton>
  );
};
