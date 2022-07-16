import { ComponentProps } from "react";
import { joiner } from "utils";

export type TRadioButton = {
  // children: React.ReactNode;
  className?: string;
  name?: string;
  id?: string;
  value?: string;
  lableClass?: string;
  colorType?:
    | "Default"
    | "Red"
    | "Green"
    | "Purple"
    | "Teal"
    | "Yellow"
    | "Orange";

  size?: "Base" | "Large" | "ExtraLarge";

  isRtl?: boolean;
  isDisabled?: boolean;
} & ComponentProps<"input">; //radioButton

export const RadioButton = ({
  children,
  className,
  name,
  id,
  value,
  lableClass,
  colorType,
  size,
  isRtl,
  isDisabled,
  ...rest
}: TRadioButton) => {
  return (
    <div className="flex items-center mr-4 form-check form-check-inline">


      {isRtl && (
        <label
          htmlFor={id}
          className={joiner(
            "form-check-label mr-2 text-sm font-medium text-gray-900 dark:text-gray-300",
            lableClass
          )}
        >
          {children}
        </label>
      )}

      <input
        id={id}
        type="radio"
        value={value ? value : ""}
        name={name}
        className={joiner(
          "form-check-input form-check-input appearance-none rounded-full cursor-pointer border focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain" ,
          size == "Base"
            ? "w-4 h-4 "
            : size == "Large"
            ? "h-6 w-6"
            : size == "ExtraLarge"
            ? "h-8 w-8"
            : "",

          colorType == "Default"
            ? "text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 bg-white checked:bg-blue-600 checked:border-blue-600"
            : colorType == "Red"
            ? "text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checked:bg-red-600 checked:border-red-600"
            : colorType == "Green"
            ? "text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600  checked:bg-green-600 checked:border-green-600"
            : colorType == "Purple"
            ? "text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checked:bg-purple-600 checked:border-purple-600"
            : colorType == "Teal"
            ? "text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checked:bg-teal-600 checked:border-teal-600"
            : colorType == "Yellow"
            ? "text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checked:bg-yellow--600 checked:border-yellow--600"
            : colorType == "Orange"
            ? "text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checked:bg-orange-600 checked:border-orange-600"
            : "",

          className
        )}
        disabled={isDisabled}
        {...rest}
      />
      {!isRtl && (
        <label
          htmlFor={id}
          className={joiner(
            "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",
            lableClass
          )}
        >
          {children}
        </label>
      )}
    </div>
  );
};
