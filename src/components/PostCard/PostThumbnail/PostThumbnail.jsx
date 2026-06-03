export default function PostThumbnail({ src, alt }) {
  return <img className="post__card-image" src={src} alt={alt} loading="lazy" />;
}
