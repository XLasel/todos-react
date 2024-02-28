import { AddTaskInput } from "@components/pages/AddTaskInput";
import { TaskList } from "@components/pages/TaskList";
import { ArrowDrawing } from "@components/decorations/ArrowDrawing";

import { useAppSelector } from "@redux/hook";
import { selectAllTasks } from "@redux/todosSlice";
import { DecorationDrawing } from "./components/decorations/DecorationDrawing";

function App() {
  const tasks = useAppSelector(selectAllTasks);
  return (
    <body className="bg-bedge text-base text-black lg:pr-[calc(20px-(100vw-100%))]">
      <div className="mx-auto min-w-64 max-w-xl px-4">
        <div className="flex flex-col items-center gap-6 pb-7 pt-12 xs:pt-16 sm:pt-24">
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
              Organize <span className="font-display text-orange">Your</span>{" "}
              Tasks
            </p>
          </div>
          <article className="flex w-full flex-col justify-center gap-4">
            <AddTaskInput />
            {tasks && tasks.length !== 0 && <TaskList />}
          </article>
        </div>
      </div>
    </body>
  );
}

export default App;
