import capitalize from "../../../../utils/capitalizeFn";

export default function EditableDiscCell({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td>
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>{capitalize(value)}</td>
  );
}
