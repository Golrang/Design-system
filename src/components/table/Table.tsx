import { Table as AntTable } from 'antd';
import { TTable } from './table.types'
import { forwardRef } from 'react';


export const Table = forwardRef(
    ({ ...rest }: TTable, ref?: any) => (
        <AntTable {...rest} {...{ ref }} />
    )
);


