import { memo } from "react";

import { IconWrapper, TIcon } from "./IconWrapper";

export const ThreeDotsHorizontalIcon = memo(({ className, onClick }: TIcon) => {
  return (
    <IconWrapper className={className} onClick={onClick}>
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </IconWrapper>
  );
});
