import { useMemo } from 'react';
import {
  DEFAULT_DATE_TO,
  DEFAULT_PICKER_MONTH,
  DEFAULT_PICKER_YEAR,
} from '../../constants/dateFilter';
import DateField from './DateField';
import DateFilterHint from './DateFilterHint';
import 'flatpickr/dist/flatpickr.min.css';
import './DateFilter.scss';

export default function DateFilter() {
  const toPickerOptions = useMemo(
    () => ({
      defaultDate: DEFAULT_DATE_TO,
      defaultMonth: DEFAULT_PICKER_MONTH,
      defaultYear: DEFAULT_PICKER_YEAR,
    }),
    [],
  );

  return (
    <div className="filters__date-wrap">
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
            placeholder="30_06_2026"
            pickerOptions={toPickerOptions}
          />
        </div>
      </div>
      <DateFilterHint />
    </div>
  );
}
