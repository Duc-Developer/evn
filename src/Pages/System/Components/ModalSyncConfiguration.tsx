import BaseModal from '@src/Components/Dialog';
import BaseFormItem from '@src/Components/Form';
import BaseInput from '@src/Components/Input/LabelInputText';
import BaseInputNumber from '@src/Components/InputNumber';
import BasePassword from '@src/Components/PassWord';

interface IProps {
    isVisible: boolean;
    setIsVisible: (val: boolean) => void;
}

const ModalSyncConfiguration = (props: IProps) => {
    const { isVisible, setIsVisible } = props;
    return (
        <BaseModal
            open={isVisible}
            onClose={() => setIsVisible(false)}
            onCancel={() => setIsVisible(false)}
            onOk={() => setIsVisible(false)}
            destroyOnClose
            title="Thông tin cấu hình"
            width={'30vw'}
        >
            <BaseFormItem layout="vertical">
                <div className="flex flex-col gap-4 pb-2">
                    <BaseInput label="Tên nguồn *" name="topic" />
                    <BaseInput label="Link" name="category" />
                    <BaseInput label="Tài khoản" name="phone" />
                    <BasePassword label="Mật khẩu" name="phone" />
                    <BaseInputNumber style={{ width: '100%' }} label="Thời gian" name="time" />
                </div>
            </BaseFormItem>
        </BaseModal>
    );
};

export default ModalSyncConfiguration;
