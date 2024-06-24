import capitalize from "../../../../utils/capitalizeFn";

export default function EditableSpeedCell({ value, isEditing }) {
  return isEditing ? (
    <td>
      <select name="speed">
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
