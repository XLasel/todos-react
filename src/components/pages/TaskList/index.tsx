import { useRef } from "react";

import { useAppSelector } from "@redux/hook";
import {
  selectAllTasks,
  selectCompletedTasks,
  selectActiveTasks,
} from "@redux/todosSlice";
import { returnActiveTab } from "@redux/tabsSlice";

import { ToggleAll } from "./ToggleAll";
import { FilterList } from "./FilterList";
import { TaskItem } from "./TaskItem";
import { ListFooter } from "./ListFooter";

export const TaskList = () => {
  const activeTab = useAppSelector(returnActiveTab);
  let { current: selectTasks } = useRef(selectAllTasks);

  switch (activeTab) {
    case "completed":
      selectTasks = selectCompletedTasks;
      break;
    case "active":
      selectTasks = selectActiveTasks;
      break;
    default:
      selectTasks = selectAllTasks;
  }

  const renderTasks = useAppSelector(selectTasks);

  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-wrap-reverse items-start justify-between gap-3 px-1 md:flex-nowrap md:items-end">
        <ToggleAll />
        <FilterList />
      </div>
      {!renderTasks?.length ? (
        <div className="border border-transparent px-4 py-5 text-center text-black/60">
          No tasks to show
        </div>
      ) : (
        <ul className="flex list-none flex-col-reverse gap-2 p-0">
          {renderTasks.map((task) => (
            <TaskItem key={task.id} {...task} />
          ))}
        </ul>
      )}
      <ListFooter />
    </section>
  );
};
