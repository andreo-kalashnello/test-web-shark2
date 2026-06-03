import { useEffect, useState } from 'react';
import postsData from '../data/posts.json';
import { publicAsset } from '../utils/publicAsset';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const postsWithAssets = postsData.posts.map((post) => ({
        ...post,
        image: publicAsset(post.image),
      }));
      setPosts(postsWithAssets);
      setError(null);
    } catch (err) {
      setError('Failed to load posts');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { posts, loading, error };
}
