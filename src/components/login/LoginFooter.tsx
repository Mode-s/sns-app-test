import styles from './LoginFooter.module.css';

export default function LoginFooter() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.navigation} aria-label="規約関連">
        <a href="#">利用規約</a>
        <a href="#">プライバシーポリシー</a>
      </nav>
    </footer>
  );
}