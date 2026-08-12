'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './PostForm.module.css';

export default function PostForm() {
  const [body, setBody] = useState('');
  const router = useRouter();

  const MAX_LENGTH = 200;
  const getCountClassName = () => {
    if (body.length >= 195) return styles.danger;
    if (body.length >= 190) return styles.warning;
    if (body.length >= 180) return styles.caution;

    return '';
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    if (!body.trim()) return;

    console.log(body);
    setBody('');
  };

  const handleCancel = () => {
    router.push('/posts');
  };

  return (
    <section aria-label="投稿作成">
      <form className={styles.form} onSubmit={(e) => handleSubmit(e.nativeEvent as SubmitEvent)}>
        <div className={styles.actions}>
          <button className={styles.cancelButton} onClick={handleCancel} type="button">キャンセル</button>
          <button className={styles.postButton} type="submit" disabled={!body.trim()}>ポスト</button>
        </div>
        <div className={styles.postEditor}>
          <Image className={styles.avatar} src="/images/avatar.png" alt="" width={40} height={40} />
          <label className={styles.srOnly} htmlFor="post">投稿内容</label>
          <div className={styles.textareaWrapper}>
            <textarea
              className={styles.textarea}
              id="post"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              maxLength={MAX_LENGTH}
              name="post"
              placeholder="いまどうしてる？"
              aria-describedby="post-limit"
             />
            <p className={`${styles.inputCount} ${getCountClassName()}`} aria-hidden="true">
              {body.length}/{MAX_LENGTH}
            </p>
            <p className={styles.srOnly} id="post-limit">最大200文字まで入力できます</p>
          </div>
        </div>
      </form>
    </section>
  );
}
