import PostStats from '../PostStats/PostStats';

export default function PostInfoBlock({ title, stats, children }) {
  return (
    <div className="post__card-info-item">
      {title ? <p>{title}</p> : null}
      {stats ? <PostStats items={stats} /> : null}
      {children}
    </div>
  );
}
