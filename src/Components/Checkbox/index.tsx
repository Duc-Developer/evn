import { Checkbox, CheckboxProps } from 'antd';
import React from 'react';

export interface BaseCheckboxProps extends CheckboxProps {}

const BaseCheckbox: React.FC<BaseCheckboxProps> = (props) => {
    return <Checkbox {...props} />;
};

export default BaseCheckbox;
