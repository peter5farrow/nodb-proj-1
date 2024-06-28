import axios from "axios";
import DiscInput from "./DiscInput/DiscInput";
import DiscListHeader from "./DiscListHeader";
import DiscListRow from "./DiscListRow/DiscListRow";

export default function DiscList({ discList }) {
  const deleteDisc = async (id) => {
    const { data } = await axios.delete(`/api/discs/${id}/delete`);
    // if (!data.error) {
    //   const newDiscList = [...discList];
    //   const index = newDiscList.findIndex((disc) => disc.id === id);
    //   newDiscList.splice(index, 1);
    // }
  };

  const rows = discList.map((eachDisc) => {
    const { id, disc, speed, stability } = eachDisc;

    return (
      <DiscListRow
        key={id}
        initialDiscInfo={{ id, disc, speed, stability }}
        initialIsEditing={false}
        discList={discList}
        onDeleteDisc={() => deleteDisc(id)}
      />
    );
  });

  return (
    <div>
      <DiscInput discList={discList} />
      <table>
        <thead>
          <DiscListHeader />
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
