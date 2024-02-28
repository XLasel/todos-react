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
        width="43"
        height="58"
        viewBox="0 0 43 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M28.0122 1.00548C19.9023 1.00548 12.5016 0.671984 5.31993 5.20775C0.582174 8.20001 -1.70142 16.1336 6.16038 16.1336C11.305 16.1336 16.4496 16.1336 21.5942 16.1336C26.2393 16.1336 23.7397 15.9699 21.1357 17.2033C15.7315 19.7632 7.38286 25.9011 7.38286 32.6371C7.38286 42.5452 18.1287 35.967 22.511 34.0888C23.8656 33.5082 27.5799 30.9189 27.4009 31.109C24.0798 34.6377 22.686 38.5707 21.1357 43C19.1497 48.6744 24.4807 63.1785 32.5 53.5C32.5 53.5 41.7651 42.156 41.7651 34.0124"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="drawing-path"
        />
      </svg>
    ) : (
      <svg
        width="40"
        height="51"
        viewBox="0 0 40 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M1.30646 14.9401C1.30646 11.6193 0.494882 7.15302 1.51316 3.98505C2.05523 2.29861 3.6319 0.581421 5.5438 1.09126C10.0439 2.29128 10.3312 8.74643 10.5563 12.4597C10.7407 15.5028 9.79267 18.2574 9.67779 21.2445C9.6128 22.9342 9.64098 20.094 10.0912 19.5909C11.5786 17.9284 16.7467 12.7115 18.4625 17.3688C19.9419 21.3843 19.9912 29.2738 15.7754 31.6828C14.3673 32.4874 21.0057 31.2182 21.9764 30.9593C27.9387 29.3694 42.7769 38.4452 36.5487 45.1183C30.9136 51.1559 23.3108 49.5301 16.1888 47.4953"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="drawing-path"
        />
      </svg>
    );

  return <div>{svgData}</div>;
};
