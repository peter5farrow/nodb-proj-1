import axios from "axios";
import DiscInput from "./DiscInput/DiscInput";
import DiscListHeader from "./DiscListHeader";
import DiscListRow from "./DiscListRow/DiscListRow";
import "./DiscList.css";
import { useEffect } from "react";

export default function DiscList({ discList, setDiscList }) {
  const deleteDisc = async (id) => {
    const { data } = await axios.delete(`/api/discs/${id}/delete`);
    if (!data.error) {
      const newDiscList = [...discList];
      const index = newDiscList.findIndex((disc) => disc.id === id);
      newDiscList.splice(index, 1);
      setDiscList(newDiscList);
    }
  };

  const sortedDiscs = discList.map((eachDisc) => {
    return eachDisc;
  });

  const sortOrder = ["driver", "fairway", "midrange", "putter"];

  sortedDiscs.sort((a, b) => {
    if (a.speed === b.speed) {
      // If the elements both have the same `speed`,
      return b.stability.localeCompare(a.stability); // Compare the elements by `stability`. Sorts them reverse alph. (U, S, O)
    } else {
      // Otherwise,
      return sortOrder.indexOf(a.speed) - sortOrder.indexOf(b.speed); // Sort by 'speed'.
    }
  });

  const rows = sortedDiscs.map((eachDisc) => {
    const { id, disc, speed, stability } = eachDisc;

    return (
      <DiscListRow
        key={id}
        initialDiscInfo={{ id, disc, speed, stability }}
        initialIsEditing={false}
        discList={discList}
        setDiscList={setDiscList}
        onDeleteDisc={() => deleteDisc(id)}
      />
    );
  });

  return (
    <div className="discList">
      <DiscInput discList={discList} setDiscList={setDiscList} />
      <table>
        <thead>
          <DiscListHeader />
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
