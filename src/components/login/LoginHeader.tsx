import styles from './LoginHeader.module.css';

export default function LoginHeader() {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>TakT</p>
    </header>
  );
}
