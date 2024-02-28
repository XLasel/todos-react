import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@redux/hook";
import { selectAllTasks, toggleAllTasks } from "@redux/todosSlice";

import { Checkbox } from "@components/common/Checkbox";

export const ToggleAll = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectAllTasks);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const allTasksDone = tasks.every((task) => task.done);
    setSelectAll(allTasksDone);
  }, [tasks]);

  const handleSelectAll = () => {
    if (tasks.some((task) => !task.done)) {
      dispatch(toggleAllTasks(true));
    } else {
      dispatch(toggleAllTasks(false));
    }
  };

  return (
    <Checkbox
      ariaLabel="Select all"
      isChecked={selectAll}
      onChange={handleSelectAll}
      label="All Tasks"
    />
  );
};
