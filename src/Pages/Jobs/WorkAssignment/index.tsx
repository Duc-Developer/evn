import BaseTable from "@src/Components/Table";
import { Form } from "antd";
import Filters from "../Components/Filters";
import BaseButton from "@src/Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFileExcel, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import ProgressTag from "@src/Components/Tag/ProgressTag";

const mockData = [
    {
        trainingType: 'Loại 1',
        trainingContent: 'Nội dung 1',
        time: '2021-09-01',
        personId: 'ID 1',
        manager: 'Quản lý 1',
        assignmentStatus: <ProgressTag status="done">Đã phân công</ProgressTag>,
        step: <ProgressTag status="inProgress">Đang thực hiện</ProgressTag>,
    },
    {
        trainingType: 'Loại 2',
        trainingContent: 'Nội dung 2',
        time: '2021-09-02',
        personId: 'ID 2',
        manager: 'Quản lý 2',
        assignmentStatus: <ProgressTag status="inProgress">Chưa phân công</ProgressTag>,
        step: <ProgressTag status="done">Đã hoàn thành</ProgressTag>,
    },
    {
        trainingType: 'Loại 3',
        trainingContent: 'Nội dung 3',
        time: '2021-09-03',
        personId: 'ID 3',
        manager: 'Quản lý 3',
        assignmentStatus: <ProgressTag status="done">Đã phân công</ProgressTag>,
        step: <ProgressTag status="done">Đã hoàn thành</ProgressTag>,
    },
    {
        trainingType: 'Loại 4',
        trainingContent: 'Nội dung 4',
        time: '2021-09-04',
        personId: 'ID 4',
        manager: 'Quản lý 4',
        assignmentStatus: <ProgressTag status="done">Đã phân công</ProgressTag>,
        step: <ProgressTag status="overdue">Quá hạn</ProgressTag>,
    },
    {
        trainingType: 'Loại 5',
        trainingContent: 'Nội dung 5',
        time: '2021-09-05',
        personId: 'ID 5',
        manager: 'Quản lý 5',
        assignmentStatus: <ProgressTag status="inProgress">Chưa phân công</ProgressTag>,
        step: <ProgressTag status="inProgress">Đang thực hiện</ProgressTag>,
    },
    {
        trainingType: 'Loại 6',
        trainingContent: 'Nội dung 6',
        time: '2021-09-06',
        personId: 'ID 6',
        manager: 'Quản lý 6',
        assignmentStatus: <ProgressTag status="done">Đã phân công</ProgressTag>,
        step: <ProgressTag status="done">Đã hoàn thành</ProgressTag>,
    },
];
const WorkAssignment = () => {
    const columns = [
        {
            title: 'STT',
            render: (_value: any, _item: any, index: number) => index + 1,
            key: '_no',
            className: 'text-center',
        },
        {
            title: 'Loại hình đào tạo',
            dataIndex: 'trainingType',
            key: 'trainingType',
            className: 'text-center',
        },
        {
            title: 'Nội dung đào tạo',
            dataIndex: 'trainingContent',
            key: 'trainingContent',
        },
        {
            title: 'Thời gian',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'ID cán bộ',
            dataIndex: 'personId',
            key: 'personId',
        },
        {
            title: 'Cán bộ quản lý',
            dataIndex: 'manager',
            key: 'manager',
        },
        {
            title: 'Trạng thái phân công',
            dataIndex: 'assignmentStatus',
            key: 'assignmentStatus',
        },
        {
            title: 'Trạng thái thực hiện',
            dataIndex: 'step',
            key: 'step',
        },
        {
            title: 'Thao tác',
            key: 'actions',
            className: 'text-center',
            render: () => (
                <div className="flex align-items-center justify-center gap-1">
                    <BaseButton className="!text-primary" type="text" icon={<FontAwesomeIcon icon={faEye} />}/>
                    <BaseButton className="!text-primary" type="text" icon={<FontAwesomeIcon icon={faUserPlus} />} />
                </div>
            ),
        },
    ];

    return (
        <div className="bg-bg-base rounded h-full">
            <Form.Provider onFormFinish={console.log}>
                <div className="flex gap-2 justify-between p-4">
                    <Filters pageType='assignment' />
                    <BaseButton type="primary" icon={<FontAwesomeIcon icon={faFileExcel} />}>
                        Xuất DS
                    </BaseButton>
                </div>

                <div className="px-4 pb-4">
                <BaseTable
                                        size="small"
                                        columns={columns}
                                        dataSource={mockData}
                                        pagination={{ pageSize: 5 }}
                                        bordered
                                    />
                </div>
            </Form.Provider>
        </div>
    );
}

export default WorkAssignment