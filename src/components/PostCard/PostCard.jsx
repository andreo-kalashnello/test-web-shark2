import PostCardBody from './PostCardBody/PostCardBody';
import PostThumbnail from './PostThumbnail/PostThumbnail';
import './PostCard.scss';

export default function PostCard({ post }) {
  return (
    <a href="#" className="post__card">
      <PostThumbnail
        src={post.image}
        alt={`Post image from ${post.date}`}
      />
      <PostCardBody post={post} />
    </a>
  );
}
