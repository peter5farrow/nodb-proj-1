import capitalize from "../../../../utils/capitalizeFn";

export default function EditableSpeedCell({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td>
      <select
        onChange={(e) => onValueChange(e.target.value)}
        name="speed"
        value={value}
      >
        <option value="putter">Putter</option>
        <option value="midrange">Midrange</option>
        <option value="fairway">Fairway</option>
        <option value="driver">Driver</option>
      </select>
    </td>
  ) : (
    <td>{capitalize(value)}</td>
  );
}
