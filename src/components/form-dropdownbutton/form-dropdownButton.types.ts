export type TFormDropdownButton<G> = {
    name: G;
    className?: string;
    options: { key: number; label: string }[];
    children?: React.ReactNode;
  };