export default function PostUploadMeta({ text, date }) {
  return (
    <div className="post__card-info-item">
      <p className="post__card-upload">{text}</p>
      <p className="post__card-date">{date}</p>
    </div>
  );
}
