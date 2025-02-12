import BaseUpload from '@src/Components/BaseUpload';
import BaseButton from '@src/Components/Button';
import BaseDatePicker from '@src/Components/DatePicker/BaseDatePicker';
import BaseModal from '@src/Components/Dialog';
import BaseFormItem from '@src/Components/Form';
import BaseInput from '@src/Components/Input/LabelInputText';
import BaseSelect from '@src/Components/Select/BaseSelect';
import BaseTextArea from '@src/Components/TextArea';

interface Props {
    isVisible: boolean;
    setIsVisible: (val: boolean) => void;
}

const ModalTraining = (props: Props) => {
    const { isVisible, setIsVisible } = props;
    return (
        <BaseModal
            open={isVisible}
            onClose={() => setIsVisible(false)}
            onCancel={() => setIsVisible(false)}
            onOk={() => setIsVisible(false)}
            destroyOnClose
            title="Thông tin tổ chức đào tạo"
            width={'70vw'}
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
                    <h2 className="text-lg font-semibold mb-2">Thông tin chương trình đào tạo</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <BaseSelect placeholder="Chọn" label="Kế hoạch đào tạo năm *" name="planYear" />
                        <BaseSelect placeholder="Chọn" label="Chương trình đào tạo *" name="trainingProgram" />
                        <BaseInput label="Đề mục *" name="topic" required />
                        <BaseInput label="Khoản mục" name="category" />
                        <BaseInput label="Hình thức đào tạo" name="trainingType" />
                        <BaseInput label="Tính chất nhu cầu" name="demandType" />
                        <BaseSelect placeholder="Chọn" label="Giảng viên đào tạo" name="trainer" />
                        <BaseInput label="Số điện thoại" name="phone" />
                        <BaseInput label="Email" name="email" />
                    </div>

                    <h2 className="text-lg font-semibold mt-6 mb-2">Thời gian và đơn vị đào tạo</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <BaseDatePicker className="w-full" label="Thời gian từ ngày *" name="startDate" />
                        <BaseDatePicker className="w-full" label="Đến ngày" name="endDate" />
                        <BaseInput label="Thời lượng *" name="duration" />
                        <BaseDatePicker className="w-full" label="Ngày thi *" name="examDate" />
                        <BaseInput label="Số lần học/thi *" name="sessions" />
                        <BaseInput label="Hình thức thi" name="examType" />
                        <BaseInput label="Nội dung đào tạo" name="trainingContent" />
                        <BaseInput label="Địa điểm đào tạo" name="trainingLocation" />
                        <BaseSelect placeholder="Chọn" label="Đơn vị tổ chức" name="organizer" />
                        <BaseInput label="Trung tâm đào tạo" name="trainingCenter" />
                        <BaseSelect placeholder="Chọn" label="Phòng ban" name="department" />
                        <BaseSelect placeholder="Chọn" label="Vị trí công" name="jobPosition" />
                    </div>

                    <h2 className="text-lg font-semibold mt-6 mb-2">Chi phí đào tạo</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <BaseInput label="Kế hoạch năm" name="budgetYear" />
                        <BaseInput label="SL học viên" name="studentCount" />
                        <BaseInput label="Chi phí dự kiến" name="estimatedCost" />
                        <BaseSelect placeholder="Chọn" label="Loại tiền tệ" name="currency" />
                        <BaseInput label="Tỷ giá" name="exchangeRate" />
                        <BaseInput label="Số tiền" name="amount" />
                        <BaseInput label="% Tập đoàn hỗ trợ" name="supportRate" />
                        <BaseInput label="Chi phí công ty hỗ trợ" name="companySupport" />
                        <BaseInput label="Chi phí cho mỗi học viên" name="costPerStudent" />
                        <BaseInput label="Chi phí học viên đóng" name="studentFee" />
                        <BaseInput label="Chi phí tài liệu" name="documentCost" />
                        <BaseInput label="Chi phí ăn, ở, đi lại" name="livingCost" />
                        <BaseTextArea label="Chi phí ăn, ở, đi lại" name="livingCost" />
                    </div>

                    <BaseUpload label="Đính kèm" name="">
                        <BaseButton>Tải file</BaseButton>
                    </BaseUpload>
                </BaseFormItem>
            </div>
        </BaseModal>
    );
};

export default ModalTraining;
