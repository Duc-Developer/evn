import { Table, TableProps } from 'antd';
import "./index.css";
import classNames from 'classnames';

export interface BaseTableProps<T> extends TableProps<T> {}

const BaseTable = <T extends object>({className, pagination, ...props}: BaseTableProps<T>) => {
    return <Table 
    className={classNames("base-table", className)}
    pagination={{
        showSizeChanger: true,
        showQuickJumper: true,
        ...pagination,
    } } 
    {...props} 
    />;
};

export default BaseTable;
