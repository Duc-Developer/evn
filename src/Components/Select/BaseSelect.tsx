import { Form, FormItemProps, Select, SelectProps } from 'antd';

export interface BaseSelectProps<ValueType> extends SelectProps<ValueType> {
    name: string;
    label?: React.ReactNode;
    formItemProps?: FormItemProps;
}

const BaseSelect = <ValueType = any,>({ name, label, formItemProps, ...props }: BaseSelectProps<ValueType>) => {
    return (
        <Form.Item label={label} name={name} {...formItemProps}>
            <Select {...props} />
        </Form.Item>
    );
};

export default BaseSelect;
