import { Header } from "@components/pages/Header";
import { AddTaskInput } from "@components/pages/AddTaskInput";
import { TaskList } from "@components/pages/TaskList";

import { useAppSelector } from "@redux/hook";
import { selectAllTasks } from "@redux/todosSlice";

function App() {
  const tasks = useAppSelector(selectAllTasks);
  return (
    <body className="bg-bedge text-base text-black lg:pr-[calc(20px-(100vw-100%))]">
      <div className="mx-auto min-w-64 max-w-xl px-4">
        <div className="flex flex-col items-center gap-6 pb-7 pt-12 xs:pt-16 sm:pt-24">
          <Header />
          <article className="flex w-full flex-col justify-center gap-4">
            <AddTaskInput />
            {!!tasks?.length && <TaskList />}
          </article>
        </div>
      </div>
    </body>
  );
}

export default App;
