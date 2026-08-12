import Image from 'next/image';
import type { Post } from '@/types/type';
import styles from './PostItem.module.css';

type PostItemProps = {
  post: Post;
};

export default function PostItem({ post }: PostItemProps) {
  const formattedDate = new Intl.DateTimeFormat('ja-JP', {
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(post.createdAt));

  return (
    <article className={styles.postItem}>
    <header className={styles.postHeader}>
      <Image className={styles.avatar} src={post.avatarUrl} alt="" width={48} height={48} />
      <p className={styles.userName}>{post.userName}</p>
      <div className={styles.postMeta}>
        <time className={styles.time} dateTime={post.createdAt}>{formattedDate}</time>
        <button className={styles.optionButton} type="button" aria-label="投稿メニューを開く">
          <svg width="20" height="4" viewBox="0 0 20 4" fill="none" aria-hidden="true">
            <circle cx="2" cy="2" r="2" fill="#9CA3AF" />
            <circle cx="10" cy="2" r="2" fill="#9CA3AF" />
            <circle cx="18" cy="2" r="2" fill="#9CA3AF" />
          </svg>
        </button>
      </div>
    </header>
    <p className={styles.postText}>{post.body}</p>
  </article>
  );
}
