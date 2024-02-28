import { FC } from "react";

import { useAppDispatch, useAppSelector } from "@redux/hook";

import {
  selectTabAll,
  selectTabCompleted,
  selectTabActive,
  returnActiveTab,
} from "@redux/tabsSlice";

import { cn } from "@lib";

type TabItemProps = {
  id: string;
  label: string;
};

interface TabActions {
  [key: string]: () => { type: string };
}

const tabActions: TabActions = {
  all: selectTabAll,
  active: selectTabActive,
  completed: selectTabCompleted,
};

export const TabItem: FC<TabItemProps> = ({ id, label }) => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector(returnActiveTab);

  const className = cn(
    "text-sm rounded-full cursor-pointer border border-black px-4 py-2 no-underline duration-300 text-black hover:bg-black/10",
    {
      "bg-black text-white hover:bg-black/95": activeTab === id,
    },
  );

  const handleTabClick = () => {
    const action = tabActions[id];
    if (action) {
      dispatch(action());
    }
  };

  return (
    <a onClick={handleTabClick} id={id} className={className}>
      {label}
    </a>
  );
};
