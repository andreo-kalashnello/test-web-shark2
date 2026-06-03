import { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';

export function useFlatpickr(inputRef, options) {
  const optionsRef = useRef(options);
  optionsRef.current = options;

  const onChangeRef = useRef(options.onChange);
  onChangeRef.current = options.onChange;

  useEffect(() => {
    const element = inputRef.current;
    if (!element) return undefined;

    const { onChange, onClose, ...restOptions } = optionsRef.current;

    const notify = (selectedDates, dateStr, instanceRef) => {
      onChangeRef.current?.(selectedDates, dateStr, instanceRef);
    };

    const instance = flatpickr(element, {
      ...restOptions,
      onChange: notify,
      onClose: (selectedDates, dateStr, instanceRef) => {
        onClose?.(selectedDates, dateStr, instanceRef);
        notify(selectedDates, dateStr, instanceRef);
      },
    });

    return () => {
      instance.destroy();
    };
  }, [inputRef]);
}
