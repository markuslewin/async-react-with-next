"use client";

import {
  InputGroupAddon,
  InputGroupControl,
  InputGroupControlProps,
  InputGroupRoot,
} from "@/app/components/ui/input-group";
import { ButtonShimmer } from "@/app/design/button-shimmer";
import { SearchIcon } from "lucide-react";
import { startTransition, useOptimistic } from "react";

export type SearchInputProps = {
  value: string;
  changeAction: (value: string) => Promise<void>;
};

export const SearchInput = ({ value, changeAction }: SearchInputProps) => {
  const [optimisticValue, setOptimisticValue] = useOptimistic(value);
  const isPending = optimisticValue !== value;

  const handleChange: InputGroupControlProps["onChange"] = (e) => {
    const nextValue = e.target.value;
    startTransition(async () => {
      setOptimisticValue(nextValue);
      await changeAction(nextValue);
    });
  };

  return (
    <InputGroupRoot className="relative overflow-hidden isolate">
      <InputGroupAddon align={"inline-start"}>
        <SearchIcon className="size-4" />
      </InputGroupAddon>
      <InputGroupControl
        value={optimisticValue}
        onChange={handleChange}
        placeholder="Search..."
      />
      <ButtonShimmer isPending={isPending} />
    </InputGroupRoot>
  );
};
