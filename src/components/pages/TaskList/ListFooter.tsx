import { Button } from "@/components/common/Button";
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
      <Button
        onClick={() => dispatch(removeCompletedTasks())}
        label="Clear comleted"
      />
      <span id="counter" className="cursor-default px-4 py-1.5 text-sm-bold">
        <span className="font-display text-orange">{count}</span> {textCase}{" "}
        left
      </span>
    </div>
  );
};
