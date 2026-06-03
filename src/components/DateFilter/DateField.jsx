import { useId, useMemo, useRef } from 'react';
import { FLATPICKR_BASE_OPTIONS } from '../../constants/flatpickrLocale';
import { useFlatpickr } from '../../hooks/useFlatpickr';

export default function DateField({ label, placeholder, pickerOptions }) {
  const inputRef = useRef(null);
  const inputId = useId();

  const flatpickrOptions = useMemo(
    () =>
      pickerOptions
        ? { ...FLATPICKR_BASE_OPTIONS, ...pickerOptions }
        : FLATPICKR_BASE_OPTIONS,
    [pickerOptions],
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
