import capitalize from "../../../../utils/capitalizeFn";

export default function EditableStabilityCell({
  value,
  isEditing,
  onValueChange,
}) {
  return isEditing ? (
    <td>
      <select
        onChange={(e) => onValueChange(e.target.value)}
        name="stability"
        value={value}
      >
        <option value="understable">Understable</option>
        <option value="stable">Stable</option>
        <option value="overstable">Overstable</option>
      </select>
    </td>
  ) : (
    <td>{capitalize(value)}</td>
  );
}
