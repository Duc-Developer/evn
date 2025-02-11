import { Table, TableProps } from 'antd';

export interface BaseTableProps<T> extends TableProps<T> {}

const BaseTable = <T extends object>(props: BaseTableProps<T>) => {
    return <Table {...props} />;
};

export default BaseTable;
