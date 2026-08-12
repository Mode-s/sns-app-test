import PostHeader from '@/components/posts/PostsHeader';
import PostList from '@/components/posts/PostList';

export default function PostPage() {
  return (
    <>
      <PostHeader />
      <main>
        <PostList />
      </main>
    </>
  );
}
