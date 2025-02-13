import { faEdit, faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faBars, faEllipsisVertical, faFileExport, faPlus, faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import BaseButton from '@src/Components/Button';
import BaseConfirmModal from '@src/Components/ConfirmPopup';
import BaseDropdown from '@src/Components/Dropdown/BaseDropdown';
import BaseInput from '@src/Components/Input/LabelInputText';
import BaseSwitch from '@src/Components/Switch';
import BaseTable from '@src/Components/Table';
import ModalRole from './Components/ModalRole';

interface Role {
    key: string;
    name: string;
    description: string;
    accounts: number;
    quantity: number;
    status: boolean;
}

const data: Role[] = [
    { key: '1', name: 'Admin', description: 'Admin hệ thống', accounts: 10, quantity: 10, status: false },
    { key: '2', name: 'Quản trị', description: '', accounts: 1, quantity: 1, status: false },
    { key: '3', name: 'Đối tác học tập', description: '', accounts: 1, quantity: 1, status: false },
    { key: '4', name: 'All user', description: 'Học viên', accounts: 1085, quantity: 1085, status: false },
    { key: '5', name: 'Giảng viên cộng tác', description: '', accounts: 200, quantity: 200, status: false },
    { key: '6', name: 'Giảng viên nội bộ', description: '', accounts: 100, quantity: 100, status: false },
    { key: '7', name: 'Vận hành hệ thống', description: '', accounts: 1, quantity: 1, status: false },
    { key: '8', name: 'Học tập trực tuyến', description: '', accounts: 1, quantity: 1, status: false },
    { key: '9', name: 'Chủ động học tập', description: '', accounts: 2, quantity: 2, status: false },
    { key: '10', name: 'Quản lý khóa học', description: '', accounts: 1, quantity: 1, status: false },
];

const RoleManagement = () => {
    const [isVisible, setIsVisible] = useState(false);

    const columns = [
        { title: 'Tên vai trò', dataIndex: 'name', key: 'name', className: 'font-semibold' },
        { title: 'Mô tả', dataIndex: 'description', key: 'description' },
        {
            title: 'Tài khoản',
            dataIndex: 'accounts',
            key: 'accounts',
            render: () => (
                <span
                    className="text-blue-500 hover:underline flex items-center cursor-pointer"
                    onClick={() => setIsVisible(true)}
                >
                    Xem thêm
                </span>
            ),
        },
        { title: 'Số lượng', dataIndex: 'quantity', key: 'quantity' },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (status: boolean) => <BaseSwitch label="" name="" defaultChecked={status} />,
        },
        {
            title: 'Thao tác',
            key: 'actions',
            className: 'text-center',
            render: () => (
                <BaseDropdown
                    menu={{
                        items: [
                            {
                                label: (
                                    <BaseButton
                                        type="text"
                                        icon={<FontAwesomeIcon icon={faEye} />}
                                        onClick={() => setIsVisible(true)}
                                    >
                                        Xem chi tiết
                                    </BaseButton>
                                ),
                                key: '0',
                            },
                            {
                                label: (
                                    <BaseButton
                                        type="text"
                                        danger
                                        icon={<FontAwesomeIcon icon={faEdit} />}
                                        onClick={() => setIsVisible(true)}
                                    >
                                        Chỉnh sửa
                                    </BaseButton>
                                ),
                                key: '1',
                            },
                            {
                                label: (
                                    <BaseButton
                                        type="text"
                                        icon={<FontAwesomeIcon icon={faTrashCan} />}
                                        onClick={() =>
                                            BaseConfirmModal({
                                                content: 'Bạn có muốn xóa chương trình?',
                                            })
                                        }
                                    >
                                        Xóa bỏ
                                    </BaseButton>
                                ),
                                key: '2',
                            },
                        ],
                    }}
                    trigger={['click']}
                >
                    <BaseButton type="text" icon={<FontAwesomeIcon icon={faEllipsisVertical} />} />
                </BaseDropdown>
            ),
        },
    ];

    return (
        <div className="bg-white p-4 space-y-6 rounded-md">
            <div className="flex items-center text-xl text-[#034081] gap-2">
                <FontAwesomeIcon icon={faBars} />
                <strong>Quản lý vai trò</strong>
            </div>
            <div className="flex items-center justify-between">
                <BaseInput label="" name="" placeholder="Tìm kiếm" />
                <div className="flex items-center gap-4">
                    <BaseButton color="yellow" variant="solid" icon={<FontAwesomeIcon icon={faRotate} />}>
                        Đồng bộ
                    </BaseButton>
                    <BaseButton
                        variant="outlined"
                        color="primary"
                        icon={<FontAwesomeIcon icon={faPlus} />}
                        onClick={() => setIsVisible(true)}
                        className=" !shadow-none"
                    >
                        Tạo mới
                    </BaseButton>
                    <BaseButton
                        color="green"
                        variant="solid"
                        icon={<FontAwesomeIcon icon={faFileExport} color="white" />}
                    >
                        Xuất DS
                    </BaseButton>
                </div>
            </div>
            <div className="overflow-auto">
                <BaseTable
                    size="small"
                    columns={columns}
                    dataSource={data}
                    pagination={{ pageSize: 5 }}
                    rowSelection={{ type: 'checkbox' }}
                    bordered
                />
            </div>
            <ModalRole isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
    );
};

export default RoleManagement;
