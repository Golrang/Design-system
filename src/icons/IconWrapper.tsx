import type { TIcon } from "./icons.types";

export const ICWrapper = ({ children, ...rest }: TIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      {children}
    </svg>
  );
};
