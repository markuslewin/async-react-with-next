import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/app/components/ui/item";
import {
  FastForward,
  Hourglass,
  Lightbulb,
  LucideIcon,
  Puzzle,
  Shuffle,
  Zap,
} from "lucide-react";
import { ReactNode } from "react";

const ICONS: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  shuffle: Shuffle,
  zap: Zap,
  hourglass: Hourglass,
  fastforward: FastForward,
  puzzle: Puzzle,
};

type LessonProps = {
  item: { title: string; description: string; icon: string };
  children?: ReactNode;
};

export const LessonCard = ({ item, children }: LessonProps) => {
  const Icon = ICONS[item.icon];
  return (
    <Item>
      <ItemMedia>
        <Icon className="size-6" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemDescription>{item.description}</ItemDescription>
      </ItemContent>
      {children}
    </Item>
  );
};

type ListProps = {
  children?: ReactNode;
};

export const List = ({ children }: ListProps) => {
  return <ItemGroup>{children}</ItemGroup>;
};
