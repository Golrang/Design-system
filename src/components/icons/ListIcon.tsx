import { memo } from "react";

import { IconWrapper, TIcon } from "./IconWrapper";

export const ListIcon = memo(({ className, onClick }: TIcon) => {
  return (
    <IconWrapper className={className} onClick={onClick}>
      <path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </IconWrapper>
  );
});