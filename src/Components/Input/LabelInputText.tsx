import { Form, FormItemProps, Input, InputProps } from 'antd';

export interface LabelInputTextProps extends InputProps {
    name: string;
    label: React.ReactNode;
    formItemProps?: FormItemProps;
}

const BaseInput = ({ name, label, formItemProps, ...props }: LabelInputTextProps) => {
    return (
        <Form.Item label={label} name={name} {...formItemProps}>
            <Input {...props} />
        </Form.Item>
    );
};

export default BaseInput;
