import { FC, useMemo, useState } from "react";

import { useAppDispatch } from "@redux/hook";
import { toggleTask, deleteTask, TodoType } from "@redux/todosSlice";

import { cn } from "@lib";

import { Checkbox } from "@components/common/Checkbox";
import { EditButton } from "@components/common/EditButton";
import { DeleteButton } from "@/components/common/DeleteButton";
import { TaskEditor } from "./TaskEditor";

export const TaskItem: FC<TodoType> = ({ id, text, done }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const getColor = useMemo(() => {
    const sum = id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colorNumber = sum % 4;
    switch (colorNumber) {
      case 0:
        return "hover:bg-pink-600 bg-pink";
      case 1:
        return "hover:bg-yellow-600 bg-yellow";
      case 2:
        return "hover:bg-blue-600 bg-blue";
      default:
        return "hover:bg-green-600 bg-green";
    }
  }, [id]);

  const handleToggleTask = () => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = () => {
    setIsEditing(true);
  };

  const handleEditComplete = () => {
    setIsEditing(false);
  };

  return (
    <li
      className={cn(
        "group flex w-full gap-3 rounded-xl border border-transparent px-4 py-5 transition",
        getColor,
        {
          "bg-opacity-40 hover:bg-opacity-40": !isEditing && done,
        },
      )}
    >
      <Checkbox
        ariaLabel="Done task"
        className={cn({ invisible: isEditing })}
        isChecked={done}
        onChange={handleToggleTask}
      />
      {isEditing ? (
        <TaskEditor id={id} text={text} onEditComplete={handleEditComplete} />
      ) : (
        <span
          onDoubleClick={handleEditTask}
          className={cn("flex-auto break-all transition", {
            "text-black/80 line-through": done,
          })}
        >
          {text}
        </span>
      )}
      <div className="flex flex-initial gap-1">
        <EditButton
          onClick={handleEditTask}
          className={cn("flex-auto lg:invisible", {
            "group-hover:visible": !isEditing,
            invisible: isEditing,
          })}
        />
        <DeleteButton
          onClick={handleDeleteTask}
          className={cn("flex-auto lg:invisible", {
            "group-hover:visible": !isEditing,
            invisible: isEditing,
          })}
        />
      </div>
    </li>
  );
};
