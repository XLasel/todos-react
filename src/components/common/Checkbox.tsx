import { ChangeEvent, FC } from "react";

import { cn } from "@lib";

type CheckboxProps = {
  ariaLabel: string;
  isChecked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
};

export const Checkbox: FC<CheckboxProps> = ({
  ariaLabel,
  isChecked,
  onChange,
  label,
  className,
}) => {
  return (
    <label
      aria-label={ariaLabel}
      className={cn(
        "group/checkbox relative flex-initial cursor-pointer",
        className,
      )}
    >
      <input
        className="absolute -z-10 opacity-100"
        checked={isChecked}
        onChange={onChange}
        type="checkbox"
      />
      <div className="flex gap-2 text-sm">
        <svg
          className="lg:active:scale-95"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className={cn(
              "fill-transparent transition group-hover/checkbox:fill-black/10 ",
              {
                "fill-black group-hover/checkbox:fill-black/90": isChecked,
                "lg:group-active/checkbox:fill-black/20": !isChecked,
              },
            )}
            x="0.5"
            y="0.5"
            width="22"
            height="22"
            rx="10.5"
          />
          {isChecked && (
            <path
              className="fill-white"
              d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z"
            />
          )}
          <rect
            className={cn("stroke-black/40", {
              "stroke-black": isChecked,
            })}
            x="1"
            y="1"
            width="21"
            height="21"
            rx="10.5"
            stroke-width="2"
          />
        </svg>
        {label}
      </div>
    </label>
  );
};
