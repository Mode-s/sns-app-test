import styles from './page.module.css';
import LoginHeader from '@/components/login/LoginHeader';
import LoginForm from '@/components/login/LoginForm';
import LoginFooter from '@/components/login/LoginFooter';

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <LoginHeader />
      <main className={styles.main}>
        <LoginForm />
      </main>
      <LoginFooter />
    </div>
  );
}
