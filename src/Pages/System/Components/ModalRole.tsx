import { faFileExport, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BaseButton from '@src/Components/Button';
import BaseModal from '@src/Components/Dialog';
import BaseFormItem from '@src/Components/Form';
import BaseInput from '@src/Components/Input/LabelInputText';
import BaseSelect from '@src/Components/Select/BaseSelect';
import BaseTable from '@src/Components/Table';

interface IProps {
    isVisible: boolean;
    setIsVisible: (val: boolean) => void;
}

interface Member {
    key: string;
    id: string;
    name: string;
    email: string;
}

const members: Member[] = [
    { key: '1', id: 'HAN55', name: 'Lê Đức Sơn', email: 'hanoi55@hcmpc.com.vn' },
    { key: '2', id: 'HAN46', name: 'Nguyễn Thị Huyền Trang', email: 'hanoi46@hcmpc.com.vn' },
    { key: '3', id: 'HAN48', name: 'Nguyễn Thị Oanh', email: 'hanoi48@hcmpc.com.vn' },
    { key: '4', id: 'HAN47', name: 'Nguyễn Trung Kiên', email: 'hanoi47@hcmpc.com.vn' },
    { key: '5', id: 'HAN45', name: 'Đào Quang Hoàng', email: 'hanoi45@hcmpc.com.vn' },
    { key: '6', id: 'HAN54', name: 'Lê Đức Tuấn', email: 'hanoi54@hcmpc.com.vn' },
    { key: '7', id: 'HAN57', name: 'Đồng Phương Dịu', email: 'hanoi57@hcmpc.com.vn' },
    { key: '8', id: 'HCM98', name: 'Vũ Thị Huyền Trang', email: 'hochiminh98@hcmpc.com.vn' },
    { key: '9', id: 'HCM26', name: 'Huỳnh Thị Bích Hạnh', email: 'hochiminh26@hcmpc.com.vn' },
    { key: '10', id: 'HCM95', name: 'Dương Châu Đoan', email: 'hochiminh95@hcmpc.com.vn' },
];

const ModalRole = (props: IProps) => {
    const { isVisible, setIsVisible } = props;

    const memberColumns = [
        { title: 'Mã nhân viên', dataIndex: 'id', key: 'id' },
        { title: 'Họ tên', dataIndex: 'name', key: 'name' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        {
            title: 'Thao tác',
            dataIndex: 'action',
            key: 'action',
            render: () => <FontAwesomeIcon icon={faTrash} />,
        },
    ];

    return (
        <BaseModal
            open={isVisible}
            onClose={() => setIsVisible(false)}
            onCancel={() => setIsVisible(false)}
            onOk={() => setIsVisible(false)}
            destroyOnClose
            title="Vai trò người dùng"
            width={'70vw'}
        >
            <BaseFormItem layout="vertical">
                <div className="flex justify-end gap-2">
                    <BaseButton type="primary">Chỉnh sửa</BaseButton>
                    <BaseButton
                        color="green"
                        variant="solid"
                        icon={<FontAwesomeIcon icon={faFileExport} color="white" />}
                    >
                        Xuất DS
                    </BaseButton>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="flex flex-col items-start gap-4 border-r border-gray-500">
                        <h2 className="font-semibold mb-4">Thông tin vai trò</h2>
                        <BaseInput label="Tên vai trò *" name="topic" />
                        <BaseInput label="Mô tả vai trò *" name="topic" />
                        <BaseSelect label="Thêm người dùng" name="email" />
                        <BaseButton>Thêm tất cả user trong hệ thống</BaseButton>
                    </div>

                    <div className="flex flex-col gap-4 col-span-2">
                        <div className="flex items-end justify-between">
                            <h2 className="font-semibold mb-4">Danh sách thành viên</h2>
                            <BaseInput label="Tìm kiếm" name="topic" />
                        </div>
                        <div className="overflow-auto">
                            <BaseTable
                                size="small"
                                columns={memberColumns}
                                dataSource={members}
                                pagination={{ pageSize: 10 }}
                                rowSelection={{ type: 'checkbox' }}
                                bordered
                            />
                        </div>
                    </div>
                </div>
            </BaseFormItem>
        </BaseModal>
    );
};

export default ModalRole;
