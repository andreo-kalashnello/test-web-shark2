import { publicAsset } from '../../../utils/publicAsset';

const ICONS = {
  like: publicAsset('images/like.svg'),
  comment: publicAsset('images/comment.svg'),
};

export default function PostStat({ type, value }) {
  return (
    <div className="post__card-stats-item">
      <img src={ICONS[type]} alt="" width={18} height={18} />
      <span>{value}</span>
    </div>
  );
}
