const NewestPlan = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg flex-1 col-span-2">
            <h2 className="text-lg font-semibold mb-4">Kế hoạch đào tạo mới nhất</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 text-left">STT</th>
                            <th className="p-2 text-left">Mã</th>
                            <th className="p-2 text-left">Thời gian bắt đầu</th>
                            <th className="p-2 text-left">Thời gian kết thúc</th>
                            <th className="p-2 text-left">Nội dung đào tạo</th>
                            <th className="p-2 text-left">Loại hình đào tạo</th>
                            <th className="p-2 text-left">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(12)].map((_, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2">00001</td>
                                <td className="p-2">10/03/2023</td>
                                <td className="p-2">15/10/2023</td>
                                <td className="p-2">Kỹ thuật điện</td>
                                <td className="p-2">Nội bộ</td>
                                <td className="p-2 flex items-center">
                                    {index < 8 ? (
                                        <span className="text-green-500">▶</span>
                                    ) : (
                                        <span className="text-orange-500">||</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NewestPlan;
