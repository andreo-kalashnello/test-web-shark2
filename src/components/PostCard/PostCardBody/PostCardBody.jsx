import PostInfoBlock from '../PostInfoBlock/PostInfoBlock';
import PostUploadMeta from '../PostUploadMeta/PostUploadMeta';

function buildTodayStats(post) {
  return [
    { type: 'like', value: post.likes1 },
    { type: 'comment', value: post.comments1 },
  ];
}

function buildDateStats(post) {
  return [
    { type: 'like', value: post.likes2 },
    { type: 'comment', value: post.views },
  ];
}

export default function PostCardBody({ post }) {
  return (
    <div className="post__card-info">
      <PostInfoBlock title={post.label} stats={buildTodayStats(post)} />
      <PostInfoBlock title={post.date} stats={buildDateStats(post)} />
      <PostUploadMeta text={post.uploadText} date={post.uploadDate} />
    </div>
  );
}
