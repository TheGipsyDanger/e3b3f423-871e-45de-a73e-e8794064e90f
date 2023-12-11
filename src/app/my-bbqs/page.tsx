import { useMyBbqs } from "@/app/my-bbqs/my-bbqs.model";
import { IMyBbqs } from "@/app/my-bbqs/my-bbqs.types";
import { Align } from "@/components/Align";

export default function MyBbqs(props: IMyBbqs.IView) {
  const {} = useMyBbqs({});

  return (
    <Align.Row className="flex flex-1 justify-center bg-slate-400">
      <Align.Column className="w-1/2"></Align.Column>
    </Align.Row>
  );
}
