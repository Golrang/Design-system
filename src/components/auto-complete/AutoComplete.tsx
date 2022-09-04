import { forwardRef } from "react";
import { AutoComplete as AntAutoComplete } from "antd";

import { TAutoComplete } from "./auto-complete.types";

export const AutoComplete = forwardRef(
  ({ children, ...rest }: TAutoComplete, ref: any) => {
    return (
      <AntAutoComplete {...rest} {...ref}>
        {children}
      </AntAutoComplete>
    );
  }
);
