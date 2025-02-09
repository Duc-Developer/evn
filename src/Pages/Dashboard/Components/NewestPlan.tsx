import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

interface TrainingPlan {
    stt: number;
    ma: string;
    startDate: string;
    endDate: string;
    content: string;
    type: string;
    status: string;
}

const NewestPlan = () => {
    const data = Array.from({ length: 12 }, (_, i) => ({
        stt: i + 1,
        ma: '00001',
        startDate: '10/03/2023',
        endDate: '15/10/2023',
        content: 'Kỹ thuật điện',
        type: 'Nội bộ',
        status: i < 9 ? 'pi pi-angle-right text-green-500' : 'pi pi-pause text-orange-500',
    }));

    const statusBodyTemplate = (rowData: TrainingPlan) => <i className={rowData.status}></i>;
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg flex-1 col-span-2">
            <h2 className="text-lg font-semibold mb-4">Kế hoạch đào tạo mới nhất</h2>
            <div className="overflow-x-auto">
                <DataTable value={data} className="shadow-md" breakpoint="960px">
                    <Column field="stt" header="STT" className="w-10" />
                    <Column field="ma" header="Mã" className="w-20" />
                    <Column field="startDate" header="Thời gian bắt đầu" />
                    <Column field="endDate" header="Thời gian kết thúc" />
                    <Column field="content" header="Nội dung đào tạo" />
                    <Column field="type" header="Loại hình đào tạo" />
                    <Column body={statusBodyTemplate} header="" className="text-center" />
                </DataTable>
            </div>
        </div>
    );
};

export default NewestPlan;
