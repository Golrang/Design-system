import { useController } from "react-hook-form";
import { TimePicker } from "components/timePicker";

export const FormTimePicker = ({ name }: any) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  return <TimePicker {...{ ...field }} />;
};
