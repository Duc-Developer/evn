import { Chart } from 'primereact/chart';
import { useEffect, useState } from 'react';

const TrainingPlan = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--green-500'),
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'),
                        documentStyle.getPropertyValue('--yellow-400'),
                        documentStyle.getPropertyValue('--green-400'),
                    ],
                },
            ],
        };
        const options = {
            cutout: '60%',
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg ">
            <h2 className="text-lg font-semibold mb-4">Thống kê kế hoạch đào tạo</h2>
            <div className="text-gray-600 grid grid-cols-2 gap-4">
                <p className="flex flex-col gap-2">
                    <span>Tổng kế hoạch đào tạo</span>
                    <span className="font-bold text-lg">120</span>
                </p>
                <p className="flex flex-col gap-2 text-green-600">
                    <span>Đã hoàn thành</span>
                    <span className="font-bold">70</span>
                </p>
                <p className="flex flex-col gap-2 text-blue-600">
                    <span>Đang tiến hành</span>
                    <span className="font-bold">40</span>
                </p>
                <p className="flex flex-col gap-2 text-red-600">
                    <span>Đã quá hạn</span>
                    <span className="font-bold">10</span>
                </p>
            </div>
            {/* Biểu đồ sẽ được thay bằng thư viện phù hợp */}
            <div className="card flex justify-content-center mt-6">
                <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
            </div>
        </div>
    );
};

export default TrainingPlan;
