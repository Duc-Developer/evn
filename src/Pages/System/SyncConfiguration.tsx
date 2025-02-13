import { faEdit, faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faBars, faEllipsisVertical, faFileExport, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import BaseButton from '@src/Components/Button';
import BaseConfirmModal from '@src/Components/ConfirmPopup';
import BaseDropdown from '@src/Components/Dropdown/BaseDropdown';
import BaseInput from '@src/Components/Input/LabelInputText';
import BaseTable from '@src/Components/Table';
import ModalSyncConfiguration from './Components/ModalSyncConfiguration';

interface SourceData {
    key: string;
    source: string;
    link: string;
    account: string;
    password: string;
    duration: number;
}

const data: SourceData[] = Array.from({ length: 10 }, (_, i) => ({
    key: `${i + 1}`,
    source: 'HRMS',
    link: 'http://hrms.evn.com.vn',
    account: 'Admin',
    password: '********',
    duration: 1,
}));

const SyncConfiguration = () => {
    const [isVisible, setIsVisible] = useState(false);

    const columns = [
        { title: 'Tên nguồn', dataIndex: 'source', key: 'source' },
        {
            title: 'Link',
            dataIndex: 'link',
            key: 'link',
            render: (text: string) => (
                <a href={text} className="text-blue-500">
                    {text}
                </a>
            ),
        },
        { title: 'Tài khoản', dataIndex: 'account', key: 'account' },
        { title: 'Mật khẩu', dataIndex: 'password', key: 'password' },
        { title: 'Thời gian (phút)', dataIndex: 'duration', key: 'duration' },
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
                <strong>Cấu hình đồng bộ</strong>
            </div>
            <div className="flex items-center justify-between">
                <BaseInput label="" name="" placeholder="Tìm kiếm" />
                <div className="flex items-center gap-4">
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
                    pagination={{ pageSize: 10 }}
                    rowSelection={{ type: 'checkbox' }}
                    bordered
                />
            </div>
            <ModalSyncConfiguration isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
    );
};

export default SyncConfiguration;
