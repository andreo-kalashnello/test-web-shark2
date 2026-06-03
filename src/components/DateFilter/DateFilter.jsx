import { useMemo } from 'react';
import { DEFAULT_DATE_TO } from '../../constants/dateFilter';
import DateField from './DateField';
import 'flatpickr/dist/flatpickr.min.css';
import './DateFilter.scss';

const DATE_TO_PICKER_OPTIONS = {
  defaultDate: DEFAULT_DATE_TO,
  defaultMonth: 11,
  defaultYear: 2016,
};

export default function DateFilter() {
  const toPickerOptions = useMemo(() => DATE_TO_PICKER_OPTIONS, []);

  return (
    <div className="filters__date">
      <span className="filters__label" id="date-filter-label">
        Date
      </span>
      <div
        className="filters__date-inputs"
        role="group"
        aria-labelledby="date-filter-label"
      >
        <DateField field="from" label="Date from" placeholder="from" />
        <DateField
          field="to"
          label="Date to"
          placeholder="09_08_2016"
          pickerOptions={toPickerOptions}
        />
      </div>
    </div>
  );
}
