import { usePostsContext } from '../../context/PostsContext';
import './LoadMoreButton.scss';

export default function LoadMoreButton() {
  const { hasMore, loadMore, loading } = usePostsContext();

  if (loading || !hasMore) {
    return null;
  }

  return (
    <button type="button" className="loadmore__btn" onClick={loadMore}>
      LOAD MORE
    </button>
  );
}
