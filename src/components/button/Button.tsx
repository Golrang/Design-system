import { ComponentProps } from "react";
export type TButton = ComponentProps<"button">;

export const Button = ({ ...rest }: TButton) => {
  return (
    <button className="p-2 rounded bg-blue-400" {...rest}>
      Button
    </button>
  );
};
