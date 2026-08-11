'use client';

import { useState } from 'react';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    let hasError = false;

    if (!email.trim()) {
      setEmailError('メールアドレスを入力してください');
      hasError = true;
    } else if (!email.includes('@')) {
      setEmailError('正しいメールアドレスを入力してください');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('パスワードを入力してください');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (hasError) return;
  };

  return (
    <section className={styles.loginSection} aria-labelledby="login-title">
      <h1 className={styles.title} id="login-title">ログイン</h1>
      <form className={styles.form} noValidate onSubmit={(e) => handleSubmit(e.nativeEvent as SubmitEvent)}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">メールアドレス</label>
          <input className={styles.input} id="email" name="email" type="email" placeholder="example@takt.com" value={email} onChange={(e) =>  {setEmail(e.target.value); setEmailError("");}} autoComplete="email" aria-invalid={Boolean(emailError)} aria-describedby={emailError ? 'email-error' : undefined} required />
          {emailError && (
            <p className={styles.error} id="email-error" role="alert">
              {emailError}
            </p>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">パスワード</label>
          <input className={styles.input} id="password" name="password" type="password" placeholder="パスワードを入力" value={password} onChange={(e) => {setPassword(e.target.value); setPasswordError("");}} autoComplete="current-password" aria-invalid={Boolean(passwordError)} aria-describedby={passwordError ? 'password-error' : undefined} required />
          {passwordError && (
            <p className={styles.error} id="password-error" role="alert">
              {passwordError}
            </p>
          )}
        </div>

          <button className={styles.loginButton} type="submit">ログイン</button>
          <a className={styles.password} href="#">パスワードを忘れた方はこちら</a>
      </form>
    </section>
  );
}
