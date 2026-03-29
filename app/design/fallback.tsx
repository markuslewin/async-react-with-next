import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/app/components/ui/item";
import { Skeleton } from "@/app/components/ui/skeleton";

export const FallbackListItem = () => {
  return (
    <Item>
      <ItemMedia>
        <Skeleton className="size-10" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>
          <Skeleton className="h-4.75 w-24" />
        </ItemTitle>
        <ItemDescription>
          <Skeleton className="h-5 w-32" />
        </ItemDescription>
      </ItemContent>
      <Skeleton className="size-10" />
    </Item>
  );
};

export const FallbackList = () => {
  return (
    <ItemGroup>
      {Array.from({ length: 6 }).map((_, i) => {
        return <FallbackListItem key={i} />;
      })}
    </ItemGroup>
  );
};
