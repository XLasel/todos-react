import { FC, useState, useRef, useEffect, useCallback } from "react";
import { useAppDispatch } from "@redux/hook";
import { deleteTask, updateTask } from "@redux/todosSlice";

interface TaskEditorProps {
  id: string;
  text: string;
  onEditComplete: () => void;
}

export const TaskEditor: FC<TaskEditorProps> = ({
  id,
  text,
  onEditComplete,
}) => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState(text);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    adjustTextareaHeight();
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(inputValue.length, inputValue.length);
      adjustTextareaHeight();
    }
  }, [inputValue]);

  const adjustTextareaHeight = () => {
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = "24px";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  const saveEdit = useCallback(() => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) {
      dispatch(deleteTask(id));
    } else {
      dispatch(updateTask({ id, newText: trimmedValue }));
    }
    onEditComplete();
  }, [dispatch, id, inputValue, onEditComplete]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter") {
        saveEdit();
      }
      if (e.key === "Escape") {
        setInputValue(text);
        onEditComplete();
      }
    },
    [saveEdit, text, onEditComplete],
  );

  return (
    <textarea
      ref={inputRef}
      onChange={(e) => setInputValue(e.target.value)}
      onBlur={saveEdit}
      onKeyDown={handleKeyPress}
      value={inputValue}
      className="flex-auto resize-none rounded bg-transparent text-base outline-none"
    />
  );
};
