import PostHeader from '@/components/posts/PostsHeader';
import PostList from '@/components/posts/PostList';
import CreatePostButton from '@/components/posts/CreatePostButton';
import styles from './page.module.css';

export default function PostPage() {
  return (
    <div className={styles.page}>
      <PostHeader />
      <main className={styles.main}>
        <PostList />
        <CreatePostButton />
      </main>
    </div>
  );
}
