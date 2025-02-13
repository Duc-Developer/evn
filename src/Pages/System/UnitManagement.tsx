import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faBars, faEllipsisVertical, faEye, faFileExport, faPlus, faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import BaseButton from '@src/Components/Button';
import BaseConfirmModal from '@src/Components/ConfirmPopup';
import BaseDropdown from '@src/Components/Dropdown/BaseDropdown';
import BaseInput from '@src/Components/Input/LabelInputText';
import BaseSelect from '@src/Components/Select/BaseSelect';
import BaseTable from '@src/Components/Table';
import ModalRole from './Components/ModalRole';

interface Unit {
    key: string;
    id: string;
    name: string;
    phone?: string;
    email?: string;
    address?: string;
    children?: Unit[];
}

const units: Unit[] = [
    {
        key: '1',
        id: '1',
        name: 'Tổng công ty điện lực Thành phố Hồ Chí Minh',
        children: [
            { key: '1-1', id: '1.1', name: 'Hội đồng thành viên' },
            { key: '1-2', id: '1.2', name: 'Ban Tổng giám đốc' },
            { key: '1-3', id: '1.3', name: 'Ban Tổng hợp' },
            { key: '1-4', id: '1.4', name: 'Ban Kế hoạch' },
            { key: '1-5', id: '1.5', name: 'Ban Kỹ thuật' },
            { key: '1-6', id: '1.6', name: 'Ban An toàn' },
            { key: '1-7', id: '1.7', name: 'Ban viễn thông và CNTT' },
            { key: '1-8', id: '1.8', name: 'Ban pháp chế' },
            { key: '1-9', id: '1.9', name: 'Ban kiểm toán nội bộ và GS tài chính' },
            { key: '1-10', id: '1.10', name: 'Ban quản lý đấu thầu' },
            { key: '1-11', id: '1.11', name: 'Ban Tổ chức và nhân sự' },
            { key: '1-12', id: '1.12', name: 'Ban truyền thông' },
            {
                key: '1-13',
                id: '1.13',
                name: 'Công ty Điện lực trực thuộc',
                children: [
                    { key: '1-13-1', id: '1.13.1', name: 'ĐL Phú Thọ' },
                    { key: '1-13-2', id: '1.13.2', name: 'ĐL Sài Gòn' },
                    { key: '1-13-3', id: '1.13.3', name: 'ĐL An Phú Đông' },
                    { key: '1-13-4', id: '1.13.4', name: 'ĐL Bình Chánh' },
                    { key: '1-13-5', id: '1.13.5', name: 'ĐL Bình Phú' },
                ],
            },
        ],
    },
];

const UnitManagement = () => {
    const [isVisible, setIsVisible] = useState(false);
    const columns = [
        { title: 'Mã ĐV', dataIndex: 'id', key: 'id' },
        { title: 'Tên đơn vị', dataIndex: 'name', key: 'name' },
        { title: 'Số điện thoại', dataIndex: 'phone', key: 'phone' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Địa chỉ', dataIndex: 'address', key: 'address' },
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
                <strong>Quản lý đơn vị</strong>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-4">
                    <BaseInput label="" name="" placeholder="Mã đơn vị" />
                    <BaseSelect
                        label=""
                        name=""
                        options={[
                            {
                                value: 2024,
                                label: 2024,
                            },
                            {
                                value: 2025,
                                label: 2025,
                            },
                        ]}
                        placeholder="Trạng thái"
                    />
                </div>
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
                    dataSource={units}
                    pagination={{ pageSize: 10 }}
                    rowSelection={{ type: 'checkbox' }}
                    bordered
                />
            </div>
            <ModalRole isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
    );
};

export default UnitManagement;
