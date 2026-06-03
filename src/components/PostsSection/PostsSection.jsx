import LayoutToggle from '../LayoutToggle/LayoutToggle';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import PostsList from '../PostsList/PostsList';
import './PostsSection.scss';

export default function PostsSection() {
  return (
    <section className="section">
      <div className="container container--md">
        <div className="section__wrap posts__wrap">
          <LayoutToggle />
          <PostsList />
          <LoadMoreButton />
        </div>
      </div>
    </section>
  );
}
