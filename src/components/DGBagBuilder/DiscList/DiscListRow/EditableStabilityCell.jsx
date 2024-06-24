import capitalize from "../../../../utils/capitalizeFn";

export default function EditableStabilityCell({ value, isEditing }) {
  return isEditing ? (
    <td>
      <select name="stability">
        <option value="understable">Understable</option>
        <option value="stable">Stable</option>
        <option value="overstable">Overstable</option>
      </select>
    </td>
  ) : (
    <td>{capitalize(value)}</td>
  );
}
