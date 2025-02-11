/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, FormItemProps, Input, InputProps } from 'antd';

export interface LabelInputTextProps extends InputProps {
    name: string;
    label: React.ReactNode;
    formItemProps?: FormItemProps;
}

const LabelInputText = ({ name, label, formItemProps, ...props }: LabelInputTextProps) => {
    return (
        <Form.Item label={label} name={name} {...formItemProps}>
            <Input {...props} />
        </Form.Item>
    );
};

export default LabelInputText;
