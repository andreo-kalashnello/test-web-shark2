import { usePostsContext } from '../../context/PostsContext';
import PostCard from '../PostCard/PostCard';
import './PostsList.scss';

export default function PostsList() {
  const { layout, visiblePosts, loading, error } = usePostsContext();

  if (loading) {
    return <p className="posts__status">Loading…</p>;
  }

  if (error) {
    return <p className="posts__status posts__status--error">{error}</p>;
  }

  return (
    <div className={`posts posts--${layout}`}>
      {visiblePosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
