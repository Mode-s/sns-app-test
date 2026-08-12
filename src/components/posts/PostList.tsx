import type { Post } from '@/types/type';
import PostItem from './PostItem';
import styles from './PostList.module.css';

const posts: Post[] = [
  {
    id: '1',
    userName: '田中太郎',
    avatarUrl: '/images/avatar.png',
    body: 'これは最初の投稿です。',
    createdAt: '2026-08-11T14:00:00+09:00',
  },
  {
    id: '2',
    userName: '佐藤花子',
    avatarUrl: '/images/avatar.png',
    body: '２件目の投稿です。',
    createdAt: '2026-08-11T14:00:00+09:00',
  },
];

export default function PostList() {
  return (
    <section className={styles.postList} aria-label="投稿一覧">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </section>
  );
}
