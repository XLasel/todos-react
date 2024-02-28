import React, { useRef, useEffect, useState } from "react";

import { useAppDispatch } from "@redux/hook";
import { useAppSelector } from "@redux/hook";

import { selectAllTasks, addTask } from "@redux/todosSlice";

export const AddTaskInput = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectAllTasks);

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (inputRef.current && tasks.length === 0) {
      inputRef.current.focus();
    }
  }, [tasks]);

  const createTask = () => {
    if (inputValue.trim().length) {
      dispatch(addTask(inputValue.trim()));
      setInputValue("");
    }
  };

  const handleAddTask = () => {
    createTask();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      createTask();
    }
  };

  return (
    <div className="has-[:focus]:main-outline flex gap-3 rounded-xl border border-transparent bg-white px-5 py-4">
      <svg
        className="stroke-black/40"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 3.00006C17.2626 2.73741 17.5744 2.52907 17.9176 2.38693C18.2608 2.24479 18.6286 2.17163 19 2.17163C19.3714 2.17163 19.7392 2.24479 20.0824 2.38693C20.4256 2.52907 20.7374 2.73741 21 3.00006C21.2626 3.2627 21.471 3.57451 21.6131 3.91767C21.7553 4.26083 21.8284 4.62862 21.8284 5.00006C21.8284 5.37149 21.7553 5.73929 21.6131 6.08245C21.471 6.42561 21.2626 6.73741 21 7.00006L7.5 20.5001L2 22.0001L3.5 16.5001L17 3.00006Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <input
        ref={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleAddTask}
        onKeyDown={handleKeyPress}
        type="text"
        value={inputValue}
        className="flex-auto bg-transparent text-base placeholder-black/60 outline-none"
        placeholder="Add a task..."
      />
    </div>
  );
};
