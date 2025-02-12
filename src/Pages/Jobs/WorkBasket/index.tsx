import { faEdit, faEye, faFileExcel, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Typography } from 'antd';
import BaseButton from '@src/Components/Button';
import BaseConfirmModal from '@src/Components/ConfirmPopup';
import BaseDropdown from '@src/Components/Dropdown/BaseDropdown';
import BaseTable from '@src/Components/Table';
import BaseTabs from '@src/Components/Tabs/BaseTabs';
import Filters from '../Components/Filters';
import classNames from 'classnames';
import ProgressTag from '@src/Components/Tag/ProgressTag';

const mockData = [
    {
        startDate: '2021-09-01',
        endDate: '2021-09-30',
        missionInfo: 'Nhiệm vụ 1',
        missionCommonInfo: 'Nhiệm vụ chung 1',
        codePlan: 'KH001',
        planProcess: 'Quy trình 1',
        step: 'Bước 1',
        status: <ProgressTag status="done" >Đã hoàn thành</ProgressTag>,
        progress: <ProgressTag status="inProgress" >Còn 10 ngày</ProgressTag>,
    },
    {
        startDate: '2021-09-01',
        endDate: '2021-09-30',
        missionInfo: 'Nhiệm vụ 2',
        missionCommonInfo: 'Nhiệm vụ chung 2',
        codePlan: 'KH002',
        planProcess: 'Quy trình 2',
        step: 'Bước 2',
        status: <ProgressTag status="inProgress" >Đang thực hiện</ProgressTag>,
        progress: <ProgressTag status="done" >Đã hoàn thành</ProgressTag>,
    },
    {
        startDate: '2021-09-01',
        endDate: '2021-09-30',
        missionInfo: 'Nhiệm vụ 3',
        missionCommonInfo: 'Nhiệm vụ chung 3',
        codePlan: 'KH003',
        planProcess: 'Quy trình 3',
        step: 'Bước 3',
        status: <ProgressTag status="notStarted" >Chưa thực hiện</ProgressTag> ,
        progress: <ProgressTag status="done" >Đã hoàn thành</ProgressTag>,
    },
    {
        startDate: '2021-09-01',
        endDate: '2021-09-30',
        missionInfo: 'Nhiệm vụ 4',
        missionCommonInfo: 'Nhiệm vụ chung 4',
        codePlan: 'KH004',
        planProcess: 'Quy trình 4',
        step: 'Bước 4',
        status: <ProgressTag status="done" >Đã hoàn thành</ProgressTag>,
        progress: <ProgressTag status="overdue" >Quá hạn</ProgressTag>,
    },
    {
        startDate: '2021-09-01',
        endDate: '2021-09-30',
        missionInfo: 'Nhiệm vụ 5',
        missionCommonInfo: 'Nhiệm vụ chung 5',
        codePlan: 'KH005',
        planProcess: 'Quy trình 5',
        step: 'Bước 5',
        status: <ProgressTag status="inProgress" >Đang thực hiện</ProgressTag>,
        progress: <ProgressTag status="inProgress" >Còn 10 ngày</ProgressTag>,
    },
];
const WorkBasket = () => {
    const columns = [
        {
            title: 'STT',
            render: (_value: any, _item: any, index: number) => index + 1,
            key: '_no',
            className: 'text-center',
        },
        {
            title: 'Thời gian bắt đầu',
            dataIndex: 'startDate',
            key: 'startDate',
            className: 'text-center',
        },
        {
            title: 'Thời gian kết thúc',
            dataIndex: 'endDate',
            key: 'endDate',
        },
        {
            title: 'Nội dung nhiệm vụ',
            dataIndex: 'missionInfo',
            key: 'missionInfo',
        },
        {
            title: 'Nội dung nhiệm vụ chung',
            dataIndex: 'missionCommonInfo',
            key: 'missionCommonInfo',
        },
        {
            title: 'Mã kế hoạch',
            dataIndex: 'codePlan',
            key: 'codePlan',
        },
        {
            title: 'Quy trình thuộc kế hoạch',
            dataIndex: 'planProcess',
            key: 'planProcess',
            className: 'text-center',
        },
        {
            title: 'Bước',
            dataIndex: 'step',
            key: 'step',
            className: 'text-center',
        },
        {
            title: 'Trạng thái thực hiện',
            dataIndex: 'status',
            key: 'status',
            className: 'text-center',
        },
        {
            title: 'Tiến độ',
            key: 'progress',
            dataIndex: 'progress',
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
                                    <BaseButton type="text" icon={<FontAwesomeIcon icon={faEye} />}>
                                        Xem chi tiết
                                    </BaseButton>
                                ),
                                key: '0',
                            },
                            {
                                label: (
                                    <BaseButton type="text" danger icon={<FontAwesomeIcon icon={faEdit} />}>
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
                    <FontAwesomeIcon icon={faEllipsisVertical} className="cursor-pointer" />
                </BaseDropdown>
            ),
        },
    ];

    return (
        <div className="bg-bg-base rounded h-full">
            <Form.Provider onFormFinish={console.log}>
                <div className="flex gap-2 justify-between p-4">
                    <Filters />
                    <BaseButton type="primary" icon={<FontAwesomeIcon icon={faFileExcel} />}>
                        Xuất DS
                    </BaseButton>
                </div>

                <div className="px-4 pb-4">
                    <BaseTabs
                        type="card"
                        defaultActiveKey="1"
                        tabBarStyle={{ marginBottom: 0 }}
                        items={[
                            {
                                label: <div>
                                    <Typography.Text>Nhiệm vụ cá nhân</Typography.Text>
                                    <Typography.Text className={
                                        classNames("inline-block w-6 h-6 ml-2", " !bg-primary !text-white text-center font-bold rounded-full")
                                    }>5</Typography.Text>
                                </div>,
                                key: '1',
                                children: (
                                    <BaseTable
                                        size="small"
                                        columns={columns.filter((c) => c.key !== 'missionCommonInfo')}
                                        dataSource={mockData}
                                        pagination={{ pageSize: 5 }}
                                        bordered
                                    />
                                ),
                            },
                            {
                                label: <div>
                                <Typography.Text>Nhiệm vụ chung</Typography.Text>
                                <Typography.Text  className={
                                        classNames("inline-block w-6 h-6 ml-2", " !bg-primary !text-white text-center font-bold rounded-full")
                                    }>8</Typography.Text>
                            </div>,
                                key: '2',
                                children: (
                                    <BaseTable
                                        size="small"
                                        columns={columns.filter((c) => c.key !== 'missionInfo')}
                                        dataSource={mockData}
                                        pagination={{ pageSize: 5 }}
                                        bordered
                                    />
                                ),
                            },
                        ]}
                    />
                </div>
            </Form.Provider>
        </div>
    );
};

export default WorkBasket;
