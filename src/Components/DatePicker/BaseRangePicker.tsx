import { Form, FormItemProps, DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import React from 'react';

const { RangePicker } = DatePicker;

export interface BaseRangePickerProps extends RangePickerProps {
    name: string;
    label?: React.ReactNode;
    formItemProps?: FormItemProps;
}

const BaseRangePicker = ({ label, name, formItemProps, ...props }: BaseRangePickerProps) => {
    return (
        <Form.Item label={label} name={name} {...formItemProps}>
            <RangePicker {...props} />
        </Form.Item>
    );
};

export default BaseRangePicker;
