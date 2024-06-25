import { useState } from "react";
import DiscInput from "./DiscInput";
import DiscListHeader from "./DiscListHeader";
import DiscListRow from "./DiscListRow/DiscListRow";

export default function DiscList({ initialDiscs }) {
  const [discList, setDiscList] = useState(initialDiscs);

  const deleteDisc = (id) => {
    const newDiscList = [...discList];
    const index = newDiscList.findIndex((disc) => disc.id === id);
    newDiscList.splice(index, 1);
    setDiscList(newDiscList);
  };

  const rows = discList.map((eachDisc) => {
    const { id, disc, speed, stability } = eachDisc;
    return (
      <DiscListRow
        key={id}
        initialDiscInfo={{ disc, speed, stability }}
        initialIsEditing={false}
        onDeleteDisc={() => deleteDisc(id)}
      />
    );
  });

  return (
    <div>
      <DiscInput />
      <table>
        <thead>
          <DiscListHeader />
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
