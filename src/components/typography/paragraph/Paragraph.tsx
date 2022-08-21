import { Typography } from "antd";
import { ComponentProps } from "react";

const { Paragraph: AntParagraph } = Typography;

type TParagraphProps = ComponentProps<typeof Typography.Paragraph>;

export const Paragraph = ({ children, ...rest }: TParagraphProps) => {
  return <AntParagraph {...rest}>{children}</AntParagraph>;
};
