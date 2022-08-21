import { Table as AntTable } from "antd";
import { TColumn, TData, TTable } from "./table.types";

export const Table = <T extends TData, G extends TColumn<T>>({
  dataSource,
  columns,
  ...rest
}: TTable<T> & {
  dataSource: T[];
  columns: G[];
}) => <AntTable {...{ dataSource, columns }} {...rest} />;
