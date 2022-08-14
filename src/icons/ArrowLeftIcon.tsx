import { TIcon } from "./icons.types";
import { ICWrapper } from "./IconWrapper";

export const ICArrowLeft = ({ className, onClick }: TIcon) => {
  return (
    <ICWrapper className={className} onClick={onClick}>
      <path
        fill-rule="evenodd"
        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
      />
    </ICWrapper>
  );
};