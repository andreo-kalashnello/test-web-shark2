import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  DEFAULT_LAYOUT,
  INITIAL_POSTS_COUNT,
  POSTS_LOAD_STEP,
} from '../constants/postsPagination';
import { usePosts } from '../hooks/usePosts';

const PostsContext = createContext(null);

export function PostsProvider({ children }) {
  const { posts, loading, error } = usePosts();
  const [layout, setLayout] = useState(DEFAULT_LAYOUT);
  const [displayedCount, setDisplayedCount] = useState(INITIAL_POSTS_COUNT);

  const visiblePosts = useMemo(
    () => posts.slice(0, displayedCount),
    [posts, displayedCount],
  );

  const hasMore = displayedCount < posts.length;

  const loadMore = useCallback(() => {
    setDisplayedCount((count) =>
      Math.min(count + POSTS_LOAD_STEP, posts.length),
    );
  }, [posts.length]);

  const value = useMemo(
    () => ({
      posts,
      visiblePosts,
      loading,
      error,
      layout,
      setLayout,
      hasMore,
      loadMore,
    }),
    [
      posts,
      visiblePosts,
      loading,
      error,
      layout,
      hasMore,
      loadMore,
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
