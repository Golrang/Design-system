import type { UploadProps } from "antd";

export type TFormUploader = {
  label?: string;
  name: string;
} & UploadProps;
