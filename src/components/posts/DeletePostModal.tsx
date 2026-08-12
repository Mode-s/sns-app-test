type DeletePostModalProps = {
  onCancel: () => void;
  onDelete: () => void;
};

export default function DeletePostModal({
  onCancel,
  onDelete,
}: DeletePostModalProps) {
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="delete-post-title">
      <h2 id="delete-post-title">投稿を削除しますか？</h2>
      <p>この操作は取り消せません。</p>
      <div>
        <button type="button" onClick={onCancel}>キャンセル</button>
        <button type="button" onClick={onDelete}>削除</button>
      </div>
    </div>
  )
}
