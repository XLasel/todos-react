import { FC, useEffect, useRef, useState } from "react";

import { useAppDispatch } from "@redux/hook";
import {
  toggleTask,
  deleteTask,
  updateTask,
  TodoType,
} from "@redux/todosSlice";

import { cn } from "@lib";

import { Checkbox } from "@components/common/Checkbox";
import { EditIcon } from "@/components/common/EditIcon";
import { DeleteIcon } from "@/components/common/DeleteIcon";

export const TaskItem: FC<TodoType> = ({ id, text, done }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isEditing) return;
    const textarea = inputRef.current;
    if (textarea) {
      textarea.focus();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
      adjustTextareaHeight();
    }
  }, [isEditing]);

  const getColor = () => {
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
  };

  const adjustTextareaHeight = () => {
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = "24px";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  const handleToggleTask = () => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = () => {
    setInputValue(text);
    setIsEditing(true);
  };

  const saveEdit = () => {
    const currentValue = inputValue.trim();
    if (currentValue === "") {
      handleDeleteTask();
    } else {
      dispatch(updateTask({ id, newText: currentValue }));
    }
    exitEdit();
  };

  const exitEdit = () => {
    setInputValue("");
    setIsEditing(false);
  };

  const handeleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      saveEdit();
    }
    if (e.key === "Escape") {
      exitEdit();
    }
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
        <textarea
          ref={inputRef}
          onChange={(e) => {
            setInputValue(e.target.value);
            adjustTextareaHeight();
          }}
          onBlur={saveEdit}
          onKeyDown={(e) => handeleKeyPress(e)}
          value={inputValue}
          className="flex-auto resize-none rounded bg-transparent text-base outline-none"
        />
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
      <EditIcon
        onClick={handleEditTask}
        className={cn("flex-initial lg:invisible", {
          "group-hover:visible": !isEditing,
          invisible: isEditing,
        })}
      />
      <DeleteIcon
        onClick={handleDeleteTask}
        className={cn("flex-initial lg:invisible", {
          "group-hover:visible": !isEditing,
          invisible: isEditing,
        })}
      />
    </li>
  );
};
