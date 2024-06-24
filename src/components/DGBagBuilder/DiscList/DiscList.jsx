import DiscInput from "./DiscInput";
import DiscListHeader from "./DiscListHeader";
import DiscListRow from "./DiscListRow/DiscListRow";

export default function DiscList({ initialDiscs }) {
  const rows = initialDiscs.map((eachDisc) => {
    const { id, disc, speed, stability } = eachDisc;

    return (
      <DiscListRow
        key={id}
        initialDiscInfo={{ disc, speed, stability }}
        initialIsEditing={false}
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
