import axios from "axios";
import EditableRowModeButtons from "./EditableRowModeButton";
import EditableDiscCell from "./EditableDiscCell";
import EditableSpeedCell from "./EditableSpeedCell";
import EditableStabilityCell from "./EditableStabilityCell";
import { useState } from "react";

export default function DiscListRow({
  initialDiscInfo,
  initialIsEditing,
  discList,
  setDiscList,
  onDeleteDisc,
}) {
  const [isEditing, setIsEditing] = useState(initialIsEditing);
  const [disc, setDisc] = useState(initialDiscInfo.disc);
  const [speed, setSpeed] = useState(initialDiscInfo.speed);
  const [stability, setStability] = useState(initialDiscInfo.stability);

  const updateDisc = async (id) => {
    const { data } = await axios.put(`/api/discs/${id}`);
    if (!data.error) {
      const newDiscList = [...discList];
      const index = newDiscList.findIndex((disc) => disc.id === id);
      newDiscList.splice(index, 1, {
        id: `${id}`,
        disc: disc,
        speed: speed,
        stability: stability,
      });
      setDiscList(newDiscList);
    }
  };

  const setEditMode = () => setIsEditing(true);
  const setNormalMode = async () => {
    const { data } = await axios.put(`/api/discs/${initialDiscInfo.id}`, {
      disc,
      speed,
      stability,
    });
    if (!data.error) {
      setDisc(data.disc);
      setSpeed(data.speed);
      setStability(data.stability);
    }
    setIsEditing(false);
    updateDisc(initialDiscInfo.id);
  };

  return (
    <tr>
      <EditableRowModeButtons
        isEditing={isEditing}
        onEditClick={setEditMode}
        onSaveClick={setNormalMode}
        onDeleteClick={onDeleteDisc}
      />
      <EditableDiscCell
        value={disc}
        isEditing={isEditing}
        onValueChange={setDisc}
      />
      <EditableSpeedCell
        value={speed}
        isEditing={isEditing}
        onValueChange={setSpeed}
      />
      <EditableStabilityCell
        value={stability}
        isEditing={isEditing}
        onValueChange={setStability}
      />
    </tr>
  );
}
