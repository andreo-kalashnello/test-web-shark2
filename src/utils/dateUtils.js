/** Post date in data: "9-08-2016" (d-M-yyyy) */
const POST_DATE_PATTERN = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;

/** Flatpickr / input: "09.08.2016" (d.m.Y) */
const PICKER_DATE_PATTERN = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/;

function toLocalDate(day, month, year) {
  return new Date(year, month - 1, day);
}

export function parsePostDate(value) {
  if (!value?.trim()) return null;

  const match = value.trim().match(POST_DATE_PATTERN);
  if (!match) return null;

  const [, day, month, year] = match;
  return toLocalDate(Number(day), Number(month), Number(year));
}

export function parsePickerDate(value) {
  if (!value?.trim()) return null;

  const match = value.trim().match(PICKER_DATE_PATTERN);
  if (!match) return null;

  const [, day, month, year] = match;
  return toLocalDate(Number(day), Number(month), Number(year));
}

export function dateFromPickerSelection(selectedDates, dateStr) {
  if (selectedDates?.length > 0) {
    const [date] = selectedDates;
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  return parsePickerDate(dateStr);
}

export function isDateInRange(date, from, to) {
  if (!date) return false;

  const time = date.getTime();

  if (from) {
    const fromStart = new Date(
      from.getFullYear(),
      from.getMonth(),
      from.getDate(),
    ).getTime();

    if (time < fromStart) return false;
  }

  if (to) {
    const toEnd = new Date(
      to.getFullYear(),
      to.getMonth(),
      to.getDate(),
      23,
      59,
      59,
      999,
    ).getTime();

    if (time > toEnd) return false;
  }

  return true;
}

export function filterPostsByDate(posts, from, to) {
  if (!from && !to) {
    return posts;
  }

  if (from && to && from.getTime() > to.getTime()) {
    return [];
  }

  return posts.filter((post) => {
    const postDate = parsePostDate(post.date);
    return postDate && isDateInRange(postDate, from, to);
  });
}
