export const FLATPICKR_LOCALE = {
  firstDayOfWeek: 0,
  weekdays: {
    shorthand: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    longhand: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  },
  months: {
    shorthand: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    longhand: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
};

export const FLATPICKR_BASE_OPTIONS = {
  dateFormat: 'd.m.Y',
  disableMobile: true,
  locale: FLATPICKR_LOCALE,
  allowInput: true,
  /** Calendar closes after pick — filter applies immediately */
  closeOnSelect: true,
};
