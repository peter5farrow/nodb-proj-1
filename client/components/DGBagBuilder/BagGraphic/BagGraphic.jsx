import "./BagGraphic.css";

export default function BagGraphic({ discList }) {
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

  const discArray = [];
  const discs = [...sortedDiscs];

  for (const disc of discs) {
    discArray.push(<div className={disc.speed} key={disc.id}></div>);
  }

  return <div className="grid-container">{discArray}</div>;
}
