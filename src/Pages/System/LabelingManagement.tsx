import { faEdit, faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faBars, faEllipsisVertical, faFileExport, faPlus, faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import BaseButton from '@src/Components/Button';
import BaseConfirmModal from '@src/Components/ConfirmPopup';
import BaseDropdown from '@src/Components/Dropdown/BaseDropdown';
import BaseInput from '@src/Components/Input/LabelInputText';
import BaseTable from '@src/Components/Table';
import BaseTag from '@src/Components/Tag/BaseTag';
import ModalLabeling from './Components/ModalLabeling';

interface LabelData {
    key: string;
    label: string;
    name: string;
    description: string;
    color: string;
}

const labels: LabelData[] = [
    { key: '1', label: 'Key', name: 'Key', description: 'Nhãn biểu tượng từ khóa', color: 'orange' },
    { key: '2', label: 'PO', name: 'PO', description: 'Nhãn biểu tượng sản phẩm', color: 'red' },
    { key: '3', label: 'Document', name: 'Document', description: 'Nhãn biểu tượng tài liệu', color: 'blue' },
    {
        key: '4',
        label: 'Đã phân công',
        name: 'Đã phân công',
        description: 'Nhãn biểu tượng trạng thái',
        color: 'green',
    },
    {
        key: '5',
        label: 'Chưa phân công',
        name: 'Chưa phân công',
        description: 'Nhãn biểu tượng trạng thái',
        color: 'gray',
    },
    {
        key: '6',
        label: 'Đang thực hiện',
        name: 'Đang thực hiện',
        description: 'Nhãn biểu tượng trạng thái',
        color: 'blue',
    },
    {
        key: '7',
        label: 'Chưa thực hiện',
        name: 'Chưa thực hiện',
        description: 'Nhãn biểu tượng trạng thái',
        color: 'red',
    },
    { key: '8', label: 'Hoàn thành', name: 'Hoàn thành', description: 'Nhãn biểu tượng trạng thái', color: 'yellow' },
    { key: '9', label: 'Hoạt động', name: 'Hoạt động', description: 'Nhãn biểu tượng trạng thái', color: 'green' },
    {
        key: '10',
        label: 'Ngừng hoạt động',
        name: 'Ngừng hoạt động',
        description: 'Nhãn biểu tượng trạng thái',
        color: 'pink',
    },
];

const LabelingManagement = () => {
    const [isVisible, setIsVisible] = useState(false);
    const columns = [
        {
            title: 'Label',
            dataIndex: 'label',
            key: 'label',
            render: (text: string, record: LabelData) => (
                <BaseTag color={record.color} className="px-2 py-1 text-white">
                    {text}
                </BaseTag>
            ),
        },
        { title: 'Tên nhãn', dataIndex: 'name', key: 'name' },
        { title: 'Mô tả', dataIndex: 'description', key: 'description' },
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
                <strong>Quản lý gán nhãn</strong>
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
                    dataSource={labels}
                    pagination={{ pageSize: 10 }}
                    rowSelection={{ type: 'checkbox' }}
                    bordered
                />
            </div>
            <ModalLabeling isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
    );
};

export default LabelingManagement;
