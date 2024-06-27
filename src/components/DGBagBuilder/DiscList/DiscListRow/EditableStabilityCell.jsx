import capitalize from "../../../../../utils/capitalizeFn";

export default function EditableStabilityCell({
  value,
  isEditing,
  onValueChange,
}) {
  return isEditing ? (
    <td>
      <select
        name="editableStabilityCell"
        className="info-cell"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      >
        <option value="understable">Understable</option>
        <option value="stable">Stable</option>
        <option value="overstable">Overstable</option>
      </select>
    </td>
  ) : (
    <td className="info-cell">{capitalize(value)}</td>
  );
}
