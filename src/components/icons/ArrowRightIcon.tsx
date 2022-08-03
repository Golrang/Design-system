import { memo } from "react";

import { IconWrapper, TIcon } from "./IconWrapper";

export const ArrowRightIcon = memo(({ className, onClick }: TIcon) => {
  return (
    <IconWrapper className={className} onClick={onClick}>
      <path
        fill-rule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
      />
    </IconWrapper>
  );
});
