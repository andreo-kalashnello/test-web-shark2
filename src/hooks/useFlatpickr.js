import { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';

export function useFlatpickr(inputRef, options) {
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const element = inputRef.current;
    if (!element) return undefined;

    const instance = flatpickr(element, optionsRef.current);

    return () => {
      instance.destroy();
    };
  }, [inputRef]);
}
