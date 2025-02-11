import { DatePicker, Form, Input, Select, Upload } from 'antd';
import BaseButton from '@src/Components/Button';
import BaseModal from '@src/Components/Dialog';
import BaseInput from '@src/Components/Input/LabelInputText';

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
            width={"70vw"}
        >
            <div className="p-6 pt-0 overflow-auto h-[70vh]">
                <div className="flex justify-end items-center mb-4">
                    <div>
                        <BaseButton type="primary" className="mr-2">
                            📝 Chỉnh sửa
                        </BaseButton>
                        <BaseButton type="primary" className="mr-2">
                            💾 Lưu
                        </BaseButton>
                        <BaseButton>❌ Hủy</BaseButton>
                    </div>
                </div>

                <Form layout="vertical">
                    {/* Thông tin chương trình đào tạo */}
                    <h2 className="text-lg font-semibold mb-2">Thông tin chương trình đào tạo</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <Form.Item label="Kế hoạch đào tạo năm *" name="planYear">
                            <Select placeholder="Chọn" />
                        </Form.Item>
                        <Form.Item label="Chương trình đào tạo *" name="trainingProgram">
                            <Select placeholder="Chọn" />
                        </Form.Item>
                        <BaseInput label="Đề mục *" name="topic" required />
                        <BaseInput label="Khoản mục" name="category" />
                        <BaseInput label="Hình thức đào tạo" name="trainingType" />
                        <BaseInput label="Tính chất nhu cầu" name="demandType" />
                        <Form.Item label="Giảng viên đào tạo" name="trainer">
                            <Select placeholder="Chọn" />
                        </Form.Item>
                        <BaseInput label="Số điện thoại" name="phone" />
                        <BaseInput label="Email" name="email" />
                    </div>

                    <h2 className="text-lg font-semibold mt-6 mb-2">Thời gian và đơn vị đào tạo</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <Form.Item label="Thời gian từ ngày *" name="startDate">
                            <DatePicker className="w-full" />
                        </Form.Item>
                        <Form.Item label="Đến ngày" name="endDate">
                            <DatePicker className="w-full" />
                        </Form.Item>
                        <BaseInput label="Thời lượng *" name="duration" />
                        <Form.Item label="Ngày thi *" name="examDate">
                            <DatePicker className="w-full" />
                        </Form.Item>
                        <BaseInput label="Số lần học/thi *" name="sessions" />
                        <BaseInput label="Hình thức thi" name="examType" />
                        <BaseInput label="Nội dung đào tạo" name="trainingContent" />
                        <BaseInput label="Địa điểm đào tạo" name="trainingLocation" />
                        <Form.Item label="Đơn vị tổ chức" name="organizer">
                            <Select placeholder="Chọn" />
                        </Form.Item>
                        <BaseInput label="Trung tâm đào tạo" name="trainingCenter" />
                        <Form.Item label="Phòng ban" name="department">
                            <Select placeholder="Chọn" />
                        </Form.Item>
                        <Form.Item label="Vị trí công" name="jobPosition">
                            <Select placeholder="Chọn" />
                        </Form.Item>
                    </div>

                    {/* Chi phí đào tạo */}
                    <h2 className="text-lg font-semibold mt-6 mb-2">Chi phí đào tạo</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <BaseInput label="Kế hoạch năm" name="budgetYear" />
                        <BaseInput label="SL học viên" name="studentCount" />
                        <BaseInput label="Chi phí dự kiến" name="estimatedCost" />
                        <Form.Item label="Loại tiền tệ" name="currency">
                            <Select placeholder="Chọn" />
                        </Form.Item>
                        <BaseInput label="Tỷ giá" name="exchangeRate" />
                        <BaseInput label="Số tiền" name="amount" />
                        <BaseInput label="% Tập đoàn hỗ trợ" name="supportRate" />
                        <BaseInput label="Chi phí công ty hỗ trợ" name="companySupport" />
                        <BaseInput label="Chi phí cho mỗi học viên" name="costPerStudent" />
                        <BaseInput label="Chi phí học viên đóng" name="studentFee" />
                        <BaseInput label="Chi phí tài liệu" name="documentCost" />
                        <BaseInput label="Chi phí ăn, ở, đi lại" name="livingCost" />
                        <Form.Item label="Ghi chú" name="note">
                            <Input.TextArea />
                        </Form.Item>
                    </div>

                    <Form.Item label="Đính kèm">
                        <Upload>
                            <BaseButton>Tải file</BaseButton>
                        </Upload>
                    </Form.Item>
                </Form>
            </div>
        </BaseModal>
    );
};

export default ModalTraining;
