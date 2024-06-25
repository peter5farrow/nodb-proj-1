export default function EditableRowModeButtons({
  isEditing,
  onEditClick,
  onSaveClick,
  onDeleteClick,
}) {
  return isEditing ? (
    <td>
      <button onClick={onSaveClick}>Save</button>
    </td>
  ) : (
    <td>
      <button id="delete-buttons" onClick={onDeleteClick}>
        x
      </button>
      <button id="edit-buttons" onClick={onEditClick}>
        Edit
      </button>
    </td>
  );
}
