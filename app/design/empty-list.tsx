import {
  EmptyDescription,
  EmptyMedia,
  EmptyRoot,
  EmptyTitle,
} from "@/app/components/ui/empty";
import { BookX } from "lucide-react";

export const EmptyList = () => {
  return (
    <EmptyRoot>
      <EmptyMedia>
        <BookX className="size-6" />
      </EmptyMedia>
      <EmptyTitle asChild>
        <h2>Woah!</h2>
      </EmptyTitle>
      <EmptyDescription>No lessons found</EmptyDescription>
    </EmptyRoot>
  );
};
