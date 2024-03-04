import { FC } from "react";

interface DecorationDrawingProps {
  direction?: "left" | "right";
  className?: string;
}

export const DecorationDrawing: FC<DecorationDrawingProps> = ({
  direction = "right",
  className,
}) => {
  const svgData =
    direction === "left" ? (
      <svg
        width="45"
        height="56"
        viewBox="0 0 45 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M25 1.5C17 2 10.5 3.56758 6.31986 6.2075C1.58211 9.19976 -1 14.5 7.49997 17.1335C13 18.2031 18 18 22.5941 17.1334C27.1882 16.2668 24.7396 16.9696 22.1357 18.2031C16.7314 20.763 7.49993 24.2638 7.49993 30.9998C7.49993 40.9078 19.1286 36.9667 23.511 35.0885C24.8656 34.508 28.5798 31.9186 28.4009 32.1088C25.0797 35.6374 23.6859 39.5705 22.1357 43.9998C19.4999 51.9998 26.5001 59.5002 36 51C36 51 41.5 45.5 44 37.5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          className="drawing-path"
        />
      </svg>
    ) : (
      <svg
        width="43"
        height="51"
        viewBox="0 0 43 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M1 16.131C1 14.1138 2.12079 10.3074 3 8.50012C4.26342 5.90309 6.14441 3.12904 9 2.00008C15.5812 -0.601795 16.9546 10.5 15 15.4952C14.6333 16.4323 11.6003 22.0106 13.7721 19.4252C16.0354 16.7307 17.7978 16.155 21.1695 15.4953C26.4993 14.4525 29.2641 18.3354 29.087 23.4706C28.9615 27.1097 26.1049 31.1165 22.8454 32.7463C20.1208 34.1086 23.4834 32.5572 24.4058 32.1394C30.4105 29.4204 37.4265 30.0437 40.8766 36.1849C43.2282 40.3707 41.9071 48.236 36.5422 49.0148C33.6953 49.428 27.5 49.0148 24.4058 48.0001"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          className="drawing-path"
        />
      </svg>
    );

  return <div>{svgData}</div>;
};
