import { Radio as AntRadio } from "antd";

import { useController } from "react-hook-form";

type TRadio<G> = {
  name: G;
  className?: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
};

export const Radio = <G extends string>({
  options,
  name,
  ...rest
}: TRadio<G>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  return (
    <>
      <AntRadio.Group {...{ name }} {...rest} {...field}>
        {options.map((option, key) => (
          <AntRadio {...{ key }} {...option}>
            {option.label}
          </AntRadio>
        ))}
      </AntRadio.Group>
      {error && <p className="text-red-500">{error.message}</p>}
    </>
  );
};
