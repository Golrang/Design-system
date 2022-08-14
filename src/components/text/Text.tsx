import { ComponentProps, ElementType, ReactNode } from "react";

type TTextOwn<E extends ElementType> = {
  className?: string;
  size?: "header" | "title" | "subtitle" | "body" | "footer";
  children?: ReactNode;
  as?: E;
};

export type TText<E extends ElementType> = TTextOwn<E> &
  Omit<ComponentProps<E>, keyof TTextOwn<E>>;

export const Text = <E extends ElementType = "span">({
  className,
  size,
  children,
  as,
}: TText<E>) => {
  const Component = as || "span";
  return (
    <Component
      className={` font-serif text-gray-700 ${
        !className ||
        (!className.includes("text") && "text-gray-600 dark:text-gray-400")
      } ${
        size === "header"
          ? "text-3xl"
          : size === "title"
          ? "text-2xl"
          : "text-base"
      } ${className}`}
    >
      {children}
    </Component>
  );
};
