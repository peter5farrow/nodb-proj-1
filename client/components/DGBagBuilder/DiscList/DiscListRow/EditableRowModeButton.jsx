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
      <button
        className="mode-buttons"
        id="delete-button"
        name="delete-button"
        onClick={onDeleteClick}
      >
        x
      </button>
      <button className="mode-buttons" name="edit-button" onClick={onEditClick}>
        Edit
      </button>
    </td>
  );
}
