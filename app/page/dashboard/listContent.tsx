import { CardContent } from "~/components/ui/card";
import { cn } from "~/lib/utils";

export default function ListContent() {
  return (
    <CardContent className={cn("")}>
      <ul>
        <li>고객 문의사항 - 카드</li>
        <li>고객 문의사항 - 카드</li>
        <li>고객 문의사항 - 카드</li>
        <li>고객 문의사항 - 카드</li>
      </ul>
    </CardContent>
  );
}
