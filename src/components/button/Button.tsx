import { ComponentProps } from "react";
import { joiner } from "utils";
// import { joiner } from "utils";
// export type TButton = ComponentProps<"button">;

export type TButton= {
  colorType?:
    | "Default"
    | "Alternative"
    | "Dark"
    | "Light"
    | "Green"
    | "Red"
    | "Yellow"
    | "Purple";
  size?: "ExtraSmall" | "Small" | "Base" | "Large" | "ExtraLarge";
  variant?: "Outline" | "Filled" | "Text";
  shape?: "Square" | "Round" | "Circle";
  // children: React.ReactNode;
  // onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  disabled?: boolean;
  className?: string;
  // style?: React.CSSProperties,
  btnType?: "button" | "submit" | "reset";
  // [key ?: string]: any,
} & ComponentProps<"button">;


export const Button = ({
  children,
  colorType,
  size,
  variant,
  shape,
  disabled,
  className,
  btnType,
  ...rest
}: TButton) => {
const res= joiner(
  "text-center inline-flex items-center ",

  shape == "Square" ? "" : shape == "Round" ? "rounded" : "rounded-full",

  size == "ExtraSmall"
    ? "px-3 py-2 text-xs font-medium"
    : size == "Small"
    ? "px-3 py-2 text-sm font-medium"
    : size == "Base"
    ? " font-medium  text-sm px-5 py-2.5"
    : size == "Large"
    ? " px-5 py-3 text-base font-medium"
    : size == "ExtraLarge"
    ? " font-medium  text-base px-6 py-3.5"
    : "",

  colorType == "Default"
    ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    : colorType == "Alternative"
    ? "text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    : colorType == "Dark"
    ? " text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    : colorType == "Light"
    ? "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "
    : colorType == "Green"
    ? " focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    : colorType == "Red"
    ? " focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    : colorType == "Yellow"
    ? " focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300  dark:focus:ring-yellow-900"
    : colorType == "Purple"
    ? "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    : "",

  className
)



console.log("res ===============>",res)

  return (
    <button 
    className={joiner(
      "text-center inline-flex items-center ",

      shape == "Square" ? "" : shape == "Round" ? "rounded" : "rounded-full",

      size == "ExtraSmall"
        ? "px-3 py-2 text-xs font-medium"
        : size == "Small"
        ? "px-3 py-2 text-sm font-medium"
        : size == "Base"
        ? " font-medium  text-sm px-5 py-2.5"
        : size == "Large"
        ? " px-5 py-3 text-base font-medium"
        : size == "ExtraLarge"
        ? " font-medium  text-base px-6 py-3.5"
        : "",

      colorType == "Default"
        ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        : colorType == "Alternative"
        ? "text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        : colorType == "Dark"
        ? " text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        : colorType == "Light"
        ? "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "
        : colorType == "Green"
        ? " focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        : colorType == "Red"
        ? " focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        : colorType == "Yellow"
        ? " focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300  dark:focus:ring-yellow-900"
        : colorType == "Purple"
        ? "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        : "",

      className
    )}
    disabled={disabled}
    // style={style}
    type={btnType}
    {...rest}
  >
    {children}
  </button>
  );
};
