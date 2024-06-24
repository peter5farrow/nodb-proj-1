import EditableRowModeButtons from "./EditableRowModeButton";
import EditableDiscCell from "./EditableDiscCell";
import EditableSpeedCell from "./EditableSpeedCell";
import EditableStabilityCell from "./EditableStabilityCell";

export default function DiscListRow({ initialDiscInfo, initialIsEditing }) {
  const { disc, speed, stability } = initialDiscInfo;

  return (
    <tr>
      <EditableRowModeButtons isEditing={initialIsEditing} />
      <EditableDiscCell value={disc} isEditing={initialIsEditing} />
      <EditableSpeedCell value={speed} isEditing={initialIsEditing} />
      <EditableStabilityCell value={stability} isEditing={initialIsEditing} />
    </tr>
  );
}
