import { usePostsContext } from '../../context/PostsContext';
import { formatPickerDate } from '../../utils/dateUtils';

export default function DateFilterHint() {
  const { dateFrom, dateTo, filteredPosts, posts, isDateFilterActive } =
    usePostsContext();

  const fromLabel = dateFrom ? formatPickerDate(dateFrom) : '…';
  const toLabel = dateTo ? formatPickerDate(dateTo) : '…';

  return (
    <p className="filters__hint" aria-live="polite">
      {isDateFilterActive ? (
        <>
          Показано {filteredPosts.length} из {posts.length} — дата поста{' '}
          {dateFrom ? `от ${fromLabel} ` : ''}
          {dateTo ? `до ${toLabel}` : ''}
        </>
      ) : (
        <>Фильтр по дате поста (средняя колонка). Выбери день в календаре.</>
      )}
    </p>
  );
}
