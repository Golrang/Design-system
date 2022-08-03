import { memo } from "react";

import { IconWrapper, TIcon } from "./IconWrapper";

export const ThreeDotsVerticalIcon = memo(({ className, onClick }: TIcon) => {
  return (
    <IconWrapper className={className} onClick={onClick}>
      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
    </IconWrapper>
  );
});
