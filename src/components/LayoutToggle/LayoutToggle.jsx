import { usePostsContext } from '../../context/PostsContext';
import GridIcon from './icons/GridIcon';
import ListIcon from './icons/ListIcon';
import './LayoutToggle.scss';

export default function LayoutToggle() {
  const { layout, setLayout } = usePostsContext();

  return (
    <div className="posts__layout-buttons">
      <button
        type="button"
        className={`posts__layout-btn ${layout === 'grid' ? 'posts__layout-btn--active' : ''}`}
        onClick={() => setLayout('grid')}
        aria-label="Grid view"
        aria-pressed={layout === 'grid'}
      >
        <GridIcon />
      </button>
      <button
        type="button"
        className={`posts__layout-btn ${layout === 'list' ? 'posts__layout-btn--active' : ''}`}
        onClick={() => setLayout('list')}
        aria-label="List view"
        aria-pressed={layout === 'list'}
      >
        <ListIcon />
      </button>
    </div>
  );
}
