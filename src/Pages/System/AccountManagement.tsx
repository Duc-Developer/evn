import { faEdit, faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faBars, faEllipsisVertical, faFileExport, faPlus, faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import BaseButton from '@src/Components/Button';
import BaseConfirmModal from '@src/Components/ConfirmPopup';
import BaseDropdown from '@src/Components/Dropdown/BaseDropdown';
import BaseInput from '@src/Components/Input/LabelInputText';
import BaseSelect from '@src/Components/Select/BaseSelect';
import BaseTable from '@src/Components/Table';
import ModalAccount from './Components/ModalAccount';

interface UserData {
    key: string;
    idTaiKhoan: string;
    hoTen: string;
    viTri: string;
    phongBan: string;
    email: string;
}

const data: UserData[] = [
    {
        key: '1',
        idTaiKhoan: 'HAN55',
        hoTen: 'Lê Đức Sơn',
        viTri: 'Chuyên viên',
        phongBan: 'Phòng TCNS, Ban TCNS',
        email: 'hanoi55@hcmpc.com.vn',
    },
    {
        key: '2',
        idTaiKhoan: 'HAN46',
        hoTen: 'Nguyễn Thị Huyền Trang',
        viTri: 'Chuyên viên',
        phongBan: 'Phòng TCNS, Ban TCNS',
        email: 'hanoi46@hcmpc.com.vn',
    },
    {
        key: '3',
        idTaiKhoan: 'HAN48',
        hoTen: 'Nguyễn Thị Oanh',
        viTri: 'Chuyên viên',
        phongBan: 'Phòng TCNS, Ban TCNS',
        email: 'hanoi48@hcmpc.com.vn',
    },
    {
        key: '4',
        idTaiKhoan: 'HAN47',
        hoTen: 'Nguyễn Trung Kiên',
        viTri: 'Chuyên viên',
        phongBan: 'Phòng TCNS, Ban TCNS',
        email: 'hanoi47@hcmpc.com.vn',
    },
    {
        key: '5',
        idTaiKhoan: 'HAN45',
        hoTen: 'Đào Quang Hoàng',
        viTri: 'Chuyên viên',
        phongBan: 'Phòng TCNS, Ban TCNS',
        email: 'hanoi45@hcmpc.com.vn',
    },
    {
        key: '6',
        idTaiKhoan: 'HAN54',
        hoTen: 'Lê Đức Tuấn',
        viTri: 'Chuyên viên',
        phongBan: 'Phòng TCNS, Ban TCNS',
        email: 'hanoi54@hcmpc.com.vn',
    },
    {
        key: '7',
        idTaiKhoan: 'HAN57',
        hoTen: 'Đồng Phương Dụ',
        viTri: 'Chuyên viên',
        phongBan: 'Phòng TCNS, Ban TCNS',
        email: 'hanoi57@hcmpc.com.vn',
    },
    {
        key: '8',
        idTaiKhoan: 'HCM98',
        hoTen: 'Vũ Thị Huyền Trang',
        viTri: 'Chuyên viên',
        phongBan: 'Phòng TCNS, Ban TCNS',
        email: 'hochiminh98@hcmpc.com.vn',
    },
    {
        key: '9',
        idTaiKhoan: 'HCM26',
        hoTen: 'Huỳnh Thị Bích Hạnh',
        viTri: 'Chuyên viên',
        phongBan: 'Phòng TCNS, Ban TCNS',
        email: 'hochiminh26@hcmpc.com.vn',
    },
    {
        key: '10',
        idTaiKhoan: 'HCM95',
        hoTen: 'Dương Châu Đoan',
        viTri: 'Chuyên viên',
        phongBan: 'Phòng TCNS, Ban TCNS',
        email: 'hochiminh95@hcmpc.com.vn',
    },
];
const AccountManagement = () => {
    const [isVisible, setIsVisible] = useState(false);

    const columns = [
        {
            title: 'ID Tài khoản',
            dataIndex: 'idTaiKhoan',
            key: 'idTaiKhoan',
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            key: 'hoTen',
        },
        {
            title: 'Vị trí',
            dataIndex: 'viTri',
            key: 'viTri',
        },
        {
            title: 'Phòng ban',
            dataIndex: 'phongBan',
            key: 'phongBan',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
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
                    <BaseInput label="" name="" placeholder="Tìm kiếm" />
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
                    dataSource={data}
                    pagination={{ pageSize: 5 }}
                    rowSelection={{ type: 'checkbox' }}
                    bordered
                />
            </div>
            <ModalAccount isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
    );
};

export default AccountManagement;
