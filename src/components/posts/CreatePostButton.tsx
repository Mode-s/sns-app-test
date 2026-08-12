import Link from 'next/link';
import styles from './CreatePostButton.module.css';

export default function CreatePostButton() {
  return (
    <Link className={styles.createButton} href="/posts/new" aria-label="新しい投稿を作成">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.99921 12H19.0008M12 4.99921V19.0008" stroke="#FAF1E6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </Link>
  );
}
