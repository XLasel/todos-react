import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";

export type TodoType = {
  id: string;
  text: string;
  done: boolean;
};

type TodosState = {
  list: TodoType[];
};

const initialState: TodosState = {
  list: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<TodoType>) => {
        state.list.push(action.payload);
      },
      prepare: (text: string) => {
        const id = nanoid();
        const done = false;
        return { payload: { id, text, done } };
      },
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: string; newText: string }>,
    ) => {
      const { id, newText } = action.payload;
      const taskToUpdate = state.list.find((task) => task.id === id);
      if (!taskToUpdate) return;
      taskToUpdate.text = newText;
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.list.find((task) => task.id === action.payload);
      if (!task) return;
      task.done = !task.done;
    },
    toggleAllTasks: (state, action: PayloadAction<boolean>) => {
      const newValue = action.payload;
      state.list.forEach((task) => {
        task.done = newValue;
      });
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
    removeCompletedTasks: (state) => {
      state.list = state.list.filter((task) => !task.done);
    },
  },
});

export const {
  addTask,
  updateTask,
  toggleTask,
  toggleAllTasks,
  deleteTask,
  removeCompletedTasks,
} = todosSlice.actions;

export const selectAllTasks = (state: RootState) => state.todos.list;
export const selectCompletedTasks = (state: RootState) =>
  state.todos.list.filter((task) => task.done);
export const selectActiveTasks = (state: RootState) =>
  state.todos.list.filter((task) => !task.done);
export const selectCountActiveTasks = (state: RootState) =>
  state.todos.list.reduce((acc, task) => (!task.done ? (acc += 1) : acc), 0);

export default todosSlice.reducer;
