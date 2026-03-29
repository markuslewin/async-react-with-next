"use client";

import {
  InputGroupRoot,
  InputGroupAddon,
  InputGroupControl,
} from "@/app/components/ui/input-group";
import { ButtonShimmer } from "@/app/design/button-shimmer";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useOptimistic } from "react";

type SearchInputProps = {
  value: string;
};

export const SearchInput = ({ value }: SearchInputProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [optimisticValue, setOptimisticValue] = useOptimistic(value);
  const isPending = optimisticValue !== value;

  return (
    <InputGroupRoot className="relative overflow-hidden isolate">
      <InputGroupAddon align={"inline-start"}>
        <SearchIcon className="size-4" />
      </InputGroupAddon>
      <InputGroupControl
        value={optimisticValue}
        onChange={(e) => {
          const nextValue = e.target.value;
          const nextSearchParams = new URLSearchParams(searchParams);
          // todo: `searchName`
          nextSearchParams.set("q", nextValue);
          startTransition(() => {
            setOptimisticValue(nextValue);
            router.replace(`/?${nextSearchParams}`);
          });
        }}
        placeholder="Search..."
      />
      <ButtonShimmer isPending={isPending} />
    </InputGroupRoot>
  );
};
