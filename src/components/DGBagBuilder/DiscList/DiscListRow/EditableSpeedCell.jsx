import capitalize from "../../../../../utils/capitalizeFn";

export default function EditableSpeedCell({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td>
      <select
        name="editableSpeedCell"
        className="info-cell"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      >
        <option value="putter">Putter</option>
        <option value="midrange">Midrange</option>
        <option value="fairway">Fairway</option>
        <option value="driver">Driver</option>
      </select>
    </td>
  ) : (
    <td className="info-cell">{capitalize(value)}</td>
  );
}
