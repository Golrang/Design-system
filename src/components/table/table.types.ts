import { TableProps } from 'antd'

export type TTable<T> = Omit<TableProps<T>, 'dataSource' | 'columns'>

export type TColumn<T> = {
  title: string
  dataIndex: Exclude<keyof T, 'key'> & string
  key: Exclude<keyof T, 'key'> & string
} & Record<string, any>

export type TData = Record<'key' & string, any>
