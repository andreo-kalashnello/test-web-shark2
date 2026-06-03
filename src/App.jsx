import Decor from './components/Decor/Decor';
import Header from './components/Header/Header';
import PostsSection from './components/PostsSection/PostsSection';
import { PostsProvider } from './context/PostsContext';

export default function App() {
  return (
    <PostsProvider>
      <Decor />
      <Header />
      <main className="main">
        <PostsSection />
      </main>
    </PostsProvider>
  );
}
