import { ComponentProps } from "react";
export type TButton = ComponentProps<"button">;

export const Button = ({ children, ...rest }: TButton) => {
  return (
    <button className="bg-indigo-500 p-4 rounded text-white" {...rest}>
      {children}
    </button>
  );
};
