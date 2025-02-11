import { Form, FormItemProps, DatePicker } from 'antd';
import { DatePickerProps } from 'antd/es/date-picker';
import React from 'react';

export interface BaseDatePickerProps extends DatePickerProps {
    name: string;
    label?: React.ReactNode;
    formItemProps?: FormItemProps;
}

const BaseDatePicker = ({ label, name, formItemProps, ...props }: BaseDatePickerProps) => {
    return (
        <Form.Item label={label} name={name} {...formItemProps}>
            <DatePicker {...props} />
        </Form.Item>
    );
};

export default BaseDatePicker;
