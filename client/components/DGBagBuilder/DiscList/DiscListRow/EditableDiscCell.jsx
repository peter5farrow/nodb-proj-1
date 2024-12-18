import capitalize from "../../../../utils/capitalizeFn";

export default function EditableDiscCell({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td>
      <input
        name="editableDiscCell"
        type="text"
        className="info-cell"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td className="info-cell">{capitalize(value)}</td>
  );
}
