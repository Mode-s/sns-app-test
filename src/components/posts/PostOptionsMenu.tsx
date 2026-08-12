import Image from 'next/image';
import styles from './PostOptionsMenu.module.css';

type PostOptionMenuProps = {
  onDelete: () => void;
};

export default function PostOptionsMenu({ onDelete }: PostOptionMenuProps) {
  return (
    <div className={styles.menu} role="menu" aria-label="投稿オプション">
      <button className={styles.deleteButton} type="button" role="menuitem" onClick={onDelete}>
        <span>ポストを削除</span>
        <Image className={styles.icon} src="/icons/trash.png" alt="" width={16} height={16} aria-hidden="true" />
      </button>
      <button className={styles.hogeButton} type="button" role="menuitem">
        hogehoge
      </button>
    </div>
  );
}
