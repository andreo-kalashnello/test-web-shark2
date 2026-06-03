import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { DEFAULT_DATE_TO } from '../constants/dateFilter';
import {
  DEFAULT_LAYOUT,
  INITIAL_POSTS_COUNT,
  POSTS_LOAD_STEP,
} from '../constants/postsPagination';
import { usePosts } from '../hooks/usePosts';
import { filterPostsByDate, parsePickerDate } from '../utils/dateUtils';

const PostsContext = createContext(null);

export function PostsProvider({ children }) {
  const { posts, loading, error } = usePosts();
  const [layout, setLayout] = useState(DEFAULT_LAYOUT);
  const [displayedCount, setDisplayedCount] = useState(INITIAL_POSTS_COUNT);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(() => parsePickerDate(DEFAULT_DATE_TO));

  const filteredPosts = useMemo(
    () => filterPostsByDate(posts, dateFrom, dateTo),
    [posts, dateFrom, dateTo],
  );

  const visiblePosts = useMemo(
    () => filteredPosts.slice(0, displayedCount),
    [filteredPosts, displayedCount],
  );

  const hasMore = displayedCount < filteredPosts.length;

  const loadMore = useCallback(() => {
    setDisplayedCount((count) =>
      Math.min(count + POSTS_LOAD_STEP, filteredPosts.length),
    );
  }, [filteredPosts.length]);

  useEffect(() => {
    setDisplayedCount(INITIAL_POSTS_COUNT);
  }, [dateFrom, dateTo]);

  const value = useMemo(
    () => ({
      posts,
      filteredPosts,
      visiblePosts,
      loading,
      error,
      layout,
      setLayout,
      hasMore,
      loadMore,
      dateFrom,
      dateTo,
      setDateFrom,
      setDateTo,
      isDateFilterActive: Boolean(dateFrom || dateTo),
    }),
    [
      posts,
      filteredPosts,
      visiblePosts,
      loading,
      error,
      layout,
      hasMore,
      loadMore,
      dateFrom,
      dateTo,
    ],
  );

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}

export function usePostsContext() {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error('usePostsContext must be used within PostsProvider');
  }

  return context;
}
