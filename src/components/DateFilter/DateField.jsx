import { useCallback, useId, useMemo, useRef } from 'react';
import { FLATPICKR_BASE_OPTIONS } from '../../constants/flatpickrLocale';
import { usePostsContext } from '../../context/PostsContext';
import { useFlatpickr } from '../../hooks/useFlatpickr';
import { dateFromPickerSelection } from '../../utils/dateUtils';

export default function DateField({ field, label, placeholder, pickerOptions }) {
  const inputRef = useRef(null);
  const inputId = useId();
  const { setDateFrom, setDateTo } = usePostsContext();

  const handleChange = useCallback(
    (selectedDates, dateStr) => {
      const parsed = dateFromPickerSelection(selectedDates, dateStr);

      if (field === 'from') {
        setDateFrom(parsed);
        return;
      }

      setDateTo(parsed);
    },
    [field, setDateFrom, setDateTo],
  );

  const flatpickrOptions = useMemo(
    () => ({
      ...(pickerOptions
        ? { ...FLATPICKR_BASE_OPTIONS, ...pickerOptions }
        : FLATPICKR_BASE_OPTIONS),
      onChange: handleChange,
    }),
    [pickerOptions, handleChange],
  );

  useFlatpickr(inputRef, flatpickrOptions);

  return (
    <input
      ref={inputRef}
      type="text"
      className="filters__input"
      id={inputId}
      placeholder={placeholder}
      aria-label={label}
      autoComplete="off"
    />
  );
}
