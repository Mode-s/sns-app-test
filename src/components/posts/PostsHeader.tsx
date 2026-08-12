import Image from 'next/image';
import styles from './PostsHeader.module.css';

export default function PostsHeader() {
  return (
    <header className={styles.header}>
      <Image className={styles.avatar} src="/images/avatar.png" alt="" width={40} height={40} />
      <p className={styles.logo}>TakT</p>
    </header>
  );
}
