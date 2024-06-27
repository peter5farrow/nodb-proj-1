import DiscInput from "./DiscInput/DiscInput";
import DiscListHeader from "./DiscListHeader";
import DiscListRow from "./DiscListRow/DiscListRow";

export default function DiscList({ discList, setDiscList }) {
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
        initialDiscInfo={{ id, disc, speed, stability }}
        initialIsEditing={false}
        discList={discList}
        setDiscList={setDiscList}
        onDeleteDisc={() => deleteDisc(id)}
      />
    );
  });

  return (
    <div>
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
