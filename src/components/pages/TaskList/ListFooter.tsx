import { useAppDispatch, useAppSelector } from "@redux/hook";

import {
  removeCompletedTasks,
  selectCountActiveTasks,
} from "@redux/todosSlice";

export const ListFooter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCountActiveTasks);

  const textCase = count === 0 || count === 1 ? "item" : "items";

  return (
    <div className="flex items-center justify-between px-1">
      <button
        onClick={() => dispatch(removeCompletedTasks())}
        className="lg:active:scale-95 cursor-pointer rounded-lg bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-black/95"
      >
        Clear comleted
      </button>
      <span id="counter" className="cursor-default px-4 py-1.5 text-sm-bold">
        <span className="font-display text-orange">{count}</span> {textCase}{" "}
        left
      </span>
    </div>
  );
};
