import "./BagGraphicStyles.css";

export default function BagGraphic({ initialDiscs }) {
  const discArray = [];
  const discs = [...initialDiscs];

  for (const disc of discs) {
    discArray.push(<div className={disc.speed} key={disc.id}></div>);
  }

  return <div className="grid-container">{discArray}</div>;
}
