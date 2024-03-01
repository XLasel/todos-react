import { DecorationDrawing } from "@components/decorations/DecorationDrawing";
import { ArrowDrawing } from "@components/decorations/ArrowDrawing";

export function Header() {
  return (
    <div className="relative flex flex-col sm:pr-8">
      <DecorationDrawing
        direction="left"
        className="absolute -left-[40px] bottom-0 hidden text-orange xs:block"
      />
      <h1 className="m-0 cursor-default font-display text-xl lowercase text-orange">
        todos
      </h1>
      <DecorationDrawing className="absolute -right-[40px] -top-[8px] hidden text-orange xs:block sm:-right-[8px]" />
      <ArrowDrawing className="absolute -right-[32px] bottom-0 hidden text-orange sm:block" />
      <p className="self-end text-base-bold sm:pr-5">
        Organize <span className="font-display text-orange">Your</span> Tasks
      </p>
    </div>
  );
}
