import { ComponentProps, ElementType, ReactNode } from "react";

type TTextOwn<E extends ElementType> = {
  className?: string;
  size?: 1 | 2 | 3 | 4 | 5;
  children?: ReactNode;
  as?: E;
};

export type TText<E extends ElementType> = TTextOwn<E> &
  Omit<ComponentProps<E>, keyof TTextOwn<E>>;
