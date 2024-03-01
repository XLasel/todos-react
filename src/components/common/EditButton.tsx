import { FC } from "react";

import { cn } from "@lib";

type EditButtonProps = {
  onClick: () => void;
  className?: string;
};

export const EditButton: FC<EditButtonProps> = ({ onClick, className }) => {
  return (
    <svg
      aria-label="Edit task"
      className={cn(
        "h-[24px] w-[24px] cursor-pointer text-black/40 transition-colors hover:text-black/55 lg:active:scale-95 lg:active:text-black/75",
        className,
      )}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={onClick}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  );
};
