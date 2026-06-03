import PostStat from '../PostStat/PostStat';

export default function PostStats({ items }) {
  return (
    <div className="post__card-stats">
      {items.map((item) => (
        <PostStat key={item.type} type={item.type} value={item.value} />
      ))}
    </div>
  );
}
