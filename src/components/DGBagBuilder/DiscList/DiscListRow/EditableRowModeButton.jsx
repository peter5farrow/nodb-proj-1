export default function EditableRowModeButtons({ isEditing }) {
  return isEditing ? (
    <td>
      <button>Save</button>
    </td>
  ) : (
    <td>
      <button id="delete-buttons">x</button>
      <button id="edit-buttons">Edit</button>
    </td>
  );
}
