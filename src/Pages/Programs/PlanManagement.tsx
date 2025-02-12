import { faEdit, faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faBars, faEllipsisVertical, faFileExport, faPlus, faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import BaseButton from '@src/Components/Button';
import BaseConfirmModal from '@src/Components/ConfirmPopup';
import BaseDatePicker from '@src/Components/DatePicker/BaseDatePicker';
import BaseDropdown from '@src/Components/Dropdown/BaseDropdown';
import BaseInput from '@src/Components/Input/LabelInputText';
import BaseSelect from '@src/Components/Select/BaseSelect';
import BaseTable from '@src/Components/Table';
import ModalTraining from './Components/ModalTraining';

interface DataType {
    key: string;
    stt: string;
    loaiHinhDaoTao: string;
    noiDungChuongTrinh: string;
    doiTuong: string;
    soLuong: number | string;
    giaTri: number | string;
    children?: DataType[];
}

const data: DataType[] = [
    {
        key: '1',
        stt: 'I',
        loaiHinhDaoTao: 'Đào tạo dài hạn',
        noiDungChuongTrinh: '',
        doiTuong: '',
        soLuong: 198,
        giaTri: '3.180',
        children: [
            {
                key: '1.1',
                stt: 'I.1',
                loaiHinhDaoTao: 'Đang đào tạo',
                noiDungChuongTrinh: '',
                doiTuong: '',
                soLuong: 77,
                giaTri: 990,
            },
            {
                key: '1.2.1',
                stt: 'I.2.1',
                loaiHinhDaoTao: 'Tiến sĩ',
                noiDungChuongTrinh: '',
                doiTuong: '',
                soLuong: 33,
                giaTri: 150,
                children: [
                    {
                        key: '1.2.1.1',
                        stt: 'I.2.1.1',
                        loaiHinhDaoTao: '',
                        noiDungChuongTrinh: 'Quản trị kinh doanh',
                        doiTuong: 'CB quy hoạch, chuyên gia, KS trẻ tài năng',
                        soLuong: 1,
                        giaTri: 50,
                    },
                    {
                        key: '1.2.1.2',
                        stt: 'I.2.1.2',
                        loaiHinhDaoTao: '',
                        noiDungChuongTrinh: 'Khoa học máy tính',
                        doiTuong: 'CB quy hoạch',
                        soLuong: 1,
                        giaTri: 50,
                    },
                ],
            },
        ],
    },
    {
        key: '2',
        stt: 'II',
        loaiHinhDaoTao: 'Đào tạo mới',
        noiDungChuongTrinh: '',
        doiTuong: '',
        soLuong: 121,
        giaTri: 2190,
    },
];

const PlanManagement = () => {
    const [isVisible, setIsVisible] = useState(false);

    const columns: ColumnsType<DataType> = [
        { title: 'STT', dataIndex: 'stt', key: 'stt' },
        { title: 'Loại hình đào tạo', dataIndex: 'loaiHinhDaoTao', key: 'loaiHinhDaoTao' },
        { title: 'Nội dung/chương trình đào tạo', dataIndex: 'noiDungChuongTrinh', key: 'noiDungChuongTrinh' },
        { title: 'Đối tượng', dataIndex: 'doiTuong', key: 'doiTuong' },
        { title: 'Số lượng (*)', dataIndex: 'soLuong', key: 'soLuong' },
        { title: 'Giá trị (tr.đồng)', dataIndex: 'giaTri', key: 'giaTri' },
        { title: 'Người phụ trách', dataIndex: 'phuTrach', key: 'phuTrach' },
        { title: 'Hình thức tổ chức', dataIndex: 'hinhThuc', key: 'hinhThuc' },
        { title: 'Đối tác/Địa điểm', dataIndex: 'doiTacDiaDiem', key: 'doiTacDiaDiem' },
        { title: 'Bắt đầu', dataIndex: 'batDau', key: 'batDau' },
        { title: 'Kết thúc', dataIndex: 'ketThuc', key: 'ketThuc' },
        { title: 'Tình trạng/Tiến độ', dataIndex: 'tttd', key: 'tttd' },
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
                <strong>Kế hoạch đào tạo</strong>
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
                    <BaseSelect label="" name="" options={[]} placeholder="--Chọn trạng thái--" />
                    <BaseDatePicker label="" name="" placeholder="--Thời gian KH đăng ký ngày--" />
                    <BaseInput label="" name="" placeholder="Tổng giá trị (tr.đồng)" />
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
                        Lập kế hoạch
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

export default PlanManagement;
