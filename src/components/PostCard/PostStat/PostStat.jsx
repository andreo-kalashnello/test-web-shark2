const ICONS = {
  like: '/images/like.svg',
  comment: '/images/comment.svg',
};

export default function PostStat({ type, value }) {
  return (
    <div className="post__card-stats-item">
      <img src={ICONS[type]} alt="" width={18} height={18} />
      <span>{value}</span>
    </div>
  );
}
