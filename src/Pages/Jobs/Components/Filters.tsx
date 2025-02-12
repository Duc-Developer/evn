import { Form } from 'antd';
import BaseDatePicker from '@src/Components/DatePicker/BaseDatePicker';
import BaseSelect from '@src/Components/Select/BaseSelect';
import BaseButton from '@src/Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

interface FiltersProps {pageType: "workBasket" | "assignment" | "progress"; onRefresh?: () => void}
const Filters = ({pageType, onRefresh}: FiltersProps) => {
    return (
        <Form layout="inline">
            <BaseDatePicker name="date" className="w-36" />
            <BaseSelect name="type" placeholder="Chọn loại hình" formItemProps={{ className: 'w-36' }} />
            {pageType === "workBasket" && <BaseSelect name="mission" placeholder="Chọn nhiệm vụ" formItemProps={{ className: 'w-36' }} />}
            <BaseSelect name="performStatus" placeholder="Trạng thái thực hiện" formItemProps={{ className: 'w-36' }} />
           {["assignment", "progress"].includes(pageType) && <BaseSelect name="assignmentStatus" placeholder="Trạng thái phân công" formItemProps={{ className: 'w-36' }} />}
           <BaseButton type='text' className='w-4' onClick={onRefresh} >
           <FontAwesomeIcon icon={faArrowsRotate} />
           </BaseButton>
        </Form>
    );
};

export default Filters;
