import { faEdit, faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faBars, faEllipsisVertical, faFileExport, faPlus, faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import { useState } from 'react';
import BaseButton from '@src/Components/Button';
import BaseCheckbox from '@src/Components/Checkbox';
import BaseConfirmModal from '@src/Components/ConfirmPopup';
import BaseDropdown from '@src/Components/Dropdown/BaseDropdown';
import BaseInput from '@src/Components/Input/LabelInputText';
import BaseSelect from '@src/Components/Select/BaseSelect';
import BaseTable from '@src/Components/Table';
import ModalTraining from './Components/ModalTraining';

interface DataType {
    key: string;
    programCode: string;
    trainingProgram: string;
    trainingGroup: string;
    trainingType: string;
    year: number;
    department: string;
    position: string;
    isOutOfPlan: boolean;
    status: string;
    startDate: string;
    endDate: string;
}

const data: DataType[] = [
    {
        key: '1',
        programCode: 'MC111',
        trainingProgram: 'Kỹ thuật điện, hệ thống điện',
        trainingGroup: 'Quản lý vận hành',
        trainingType: 'Dài hạn',
        year: 2024,
        department: '',
        position: '',
        isOutOfPlan: false,
        status: 'Chưa thông báo',
        startDate: '01.08.2024',
        endDate: '01.08.2025',
    },
    {
        key: '2',
        programCode: 'MC111',
        trainingProgram: 'Đào tạo, bồi dưỡng cán bộ quản lý cấp 2 (theo chương trình khung của EVN)',
        trainingGroup: 'Quản lý vận hành',
        trainingType: 'Nội bộ',
        year: 2024,
        department: '',
        position: '',
        isOutOfPlan: false,
        status: 'Chưa thông báo',
        startDate: '01.08.2024',
        endDate: '01.08.2024',
    },
];

const ProgramManagement = () => {
    const [isVisible, setIsVisible] = useState(false);

    const columns = [
        {
            title: 'Mã chương trình',
            dataIndex: 'programCode',
            key: 'programCode',
            className: 'text-center',
        },
        {
            title: 'Tên chương trình đào tạo',
            dataIndex: 'trainingProgram',
            key: 'trainingProgram',
        },
        {
            title: 'Nhóm chương trình',
            dataIndex: 'trainingGroup',
            key: 'trainingGroup',
        },
        {
            title: 'Loại hình đào tạo',
            dataIndex: 'trainingType',
            key: 'trainingType',
        },
        {
            title: 'Năm',
            dataIndex: 'year',
            key: 'year',
            className: 'text-center',
        },
        {
            title: 'Phòng ban',
            dataIndex: 'phongban',
            key: 'phongban',
            className: 'text-center',
        },
        {
            title: 'Vị trí công việc',
            dataIndex: 'vitri',
            key: 'vitri',
            className: 'text-center',
        },
        {
            title: 'Ngoài kế hoạch',
            key: 'outplan',
            render: () => (
                <div className="text-center">
                    <BaseCheckbox />
                </div>
            ),
        },
        {
            title: 'Từ ngày',
            dataIndex: 'startDate',
            key: 'startDate',
            className: 'text-center',
        },
        {
            title: 'Đến ngày',
            dataIndex: 'endDate',
            key: 'endDate',
            className: 'text-center',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            className: 'text-center',
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
                <strong>Chương trình đào tạo</strong>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-4">
                    <BaseInput label="" name="" placeholder="Nhập tên chương trình đào tạo…" />
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
                        placeholder="--Chọn năm--"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <Button color="yellow" variant="solid" icon={<FontAwesomeIcon icon={faRotate} />}>
                        Đồng bộ
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        icon={<FontAwesomeIcon icon={faPlus} />}
                        onClick={() => setIsVisible(true)}
                        className=" !shadow-none"
                    >
                        Tạo mới
                    </Button>
                    <Button color="green" variant="solid" icon={<FontAwesomeIcon icon={faFileExport} color="white" />}>
                        Xuất DS
                    </Button>
                </div>
            </div>
            <div className="overflow-auto">
                <BaseTable size="small" columns={columns} dataSource={data} pagination={{ pageSize: 5 }} bordered />
            </div>
            <ModalTraining isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
    );
};

export default ProgramManagement;
