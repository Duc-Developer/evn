import { useState } from 'react';
import BaseColorPicker from '@src/Components/ColorPicker';
import BaseModal from '@src/Components/Dialog';
import BaseFormItem from '@src/Components/Form';
import BaseInput from '@src/Components/Input/LabelInputText';

interface IProps {
    isVisible: boolean;
    setIsVisible: (val: boolean) => void;
}

const ModalLabeling = (props: IProps) => {
    const { isVisible, setIsVisible } = props;
    const [color, setColor] = useState('#0D6EFD');
    return (
        <BaseModal
            open={isVisible}
            onClose={() => setIsVisible(false)}
            onCancel={() => setIsVisible(false)}
            onOk={() => setIsVisible(false)}
            destroyOnClose
            title="Thông tin nhãn"
            width={'30vw'}
        >
            <BaseFormItem layout="vertical">
                <div className="flex flex-col gap-4">
                    <BaseInput label="Tên nhãn *" name="topic" />
                    <BaseInput label="Mô tả" name="category" />
                    <BaseInput label="Icon" name="phone" />
                    <BaseColorPicker
                        label="Màu"
                        name="phone"
                        showText
                        className="w-full"
                        value={color}
                        onChange={(value) => setColor(value.toHexString())}
                    />

                    <span>Chọn màu bất kỳ hoặc các màu gợi ý dưới đây</span>
                    <div className="flex gap-2 mt-2">
                        {[
                            '#0D6EFD',
                            '#0dcaf0',
                            '#198754',
                            '#ffc107',
                            '#dc3545',
                            '#adb5bd',
                            '#0c1a36',
                            '#20c997',
                            '#6f42c1',
                            '#fd7e14',
                            '#d63384',
                            '#212529',
                        ].map((c) => (
                            <div
                                key={c}
                                className="w-8 h-8 rounded cursor-pointer border"
                                style={{ backgroundColor: c }}
                                onClick={() => setColor(c)}
                            />
                        ))}
                    </div>
                </div>
            </BaseFormItem>
        </BaseModal>
    );
};

export default ModalLabeling;
