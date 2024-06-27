export default function EditableRowModeButtons({
  isEditing,
  onEditClick,
  onSaveClick,
  onDeleteClick,
}) {
  return isEditing ? (
    <td className="mode-buttons">
      <button name="save-button" onClick={onSaveClick}>
        Save
      </button>
    </td>
  ) : (
    <td>
      <button name="delete-button" onClick={onDeleteClick}>
        x
      </button>
      <button name="edit-button" onClick={onEditClick}>
        Edit
      </button>
    </td>
  );
}
