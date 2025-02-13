import BaseButton from '@src/Components/Button';
import BaseCheckbox from '@src/Components/Checkbox';
import BaseDatePicker from '@src/Components/DatePicker/BaseDatePicker';
import BaseModal from '@src/Components/Dialog';
import BaseFormItem from '@src/Components/Form';
import BaseInput from '@src/Components/Input/LabelInputText';
import BasePassword from '@src/Components/PassWord';
import BaseSelect from '@src/Components/Select/BaseSelect';

interface IProps {
    isVisible: boolean;
    setIsVisible: (val: boolean) => void;
}

const ModalAccount = (props: IProps) => {
    const { isVisible, setIsVisible } = props;
    return (
        <BaseModal
            open={isVisible}
            onClose={() => setIsVisible(false)}
            onCancel={() => setIsVisible(false)}
            onOk={() => setIsVisible(false)}
            destroyOnClose
            title="Thông tin tài khoản"
            width={'30vw'}
        >
            <div className="p-6 pt-0 overflow-auto h-[70vh]">
                <div className="flex justify-end items-center mb-4">
                    <BaseButton type="primary" className="mr-2">
                        Chỉnh sửa
                    </BaseButton>
                    <BaseButton type="primary" className="mr-2">
                        Lưu
                    </BaseButton>
                    <BaseButton>Hủy</BaseButton>
                </div>

                <BaseFormItem layout="vertical">
                    <div className="flex flex-col gap-4">
                        <BaseInput label="ID Tài khoản *" name="topic" />
                        <BaseInput label="Họ và tên" name="category" />
                        <BasePassword label="Mật khẩu" name="trainingType" />
                        <BasePassword label="Nhập lại mật khẩu *" name="trainingType" />
                        <BaseInput label="Email" name="demandType" />
                        <BaseInput label="Số điện thoại" name="demandType" />
                        <BaseInput label="Mã nhân viên" name="phone" />
                        <BaseSelect label="Vị trí" name="email" />
                        <BaseSelect label="Phòng ban" name="email" />
                        <BaseDatePicker className="w-full" label="Ngày hiệu lực" name="startDate" />
                        <BaseDatePicker className="w-full" label="Ngày hết hiệu lực" name="endDate" />
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <span className="pr-4">Trạng thái:</span>
                                <BaseCheckbox label="" name="" />
                                <span>Hoạt động</span>
                                <span></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="pr-4">Vai trò:</span>
                                <BaseCheckbox label="" name="" />
                                <span>Giảng viên</span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </BaseFormItem>
            </div>
        </BaseModal>
    );
};

export default ModalAccount;
