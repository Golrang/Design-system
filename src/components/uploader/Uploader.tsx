import { forwardRef } from "react";
import type { UploadProps } from "antd";
import { Upload as AntUpload } from "antd";

export const Uploader = forwardRef(
  ({ children, ...rest }: UploadProps, ref?: any) => (
    <AntUpload {...rest} {...{ ref }} >
      {children}
    </AntUpload>
  )
);
