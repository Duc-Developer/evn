import { Button, ButtonProps } from 'primereact/button';

export interface BaseButtonProps extends ButtonProps {}
const BaseButton = (props: BaseButtonProps) => {
    return <Button {...props} />;
};

export default BaseButton;
