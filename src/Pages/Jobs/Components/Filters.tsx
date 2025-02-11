import { Form } from 'antd';
import BaseDatePicker from '@src/Components/DatePicker/BaseDatePicker';
import BaseSelect from '@src/Components/Select/BaseSelect';

const Filters = () => {
    return (
        <Form layout="inline">
            <BaseDatePicker name="date" className="w-36" />
            <BaseSelect name="type" placeholder="Chọn loại hình" formItemProps={{ className: 'w-36' }} />
            <BaseSelect name="mission" placeholder="Chọn nhiệm vụ" formItemProps={{ className: 'w-36' }} />
            <BaseSelect name="status" placeholder="Trạng thái thực hiện" formItemProps={{ className: 'w-36' }} />
        </Form>
    );
};

export default Filters;
