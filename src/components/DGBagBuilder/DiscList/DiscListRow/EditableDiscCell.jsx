import capitalize from "../../../../utils/capitalizeFn";

export default function EditableDiscCell({ value, isEditing }) {
  return isEditing ? (
    <td>
      <input type="text" value={value} />
    </td>
  ) : (
    <td>{capitalize(value)}</td>
  );
}
