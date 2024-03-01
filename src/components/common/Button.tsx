import { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export const Button: FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-lg bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-black/95 lg:active:scale-95"
    >
      {label}
    </button>
  );
};
