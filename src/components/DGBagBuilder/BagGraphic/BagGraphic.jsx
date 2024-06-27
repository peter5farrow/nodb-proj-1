import "./BagGraphicStyles.css";

export default function BagGraphic({ discList }) {
  const discArray = [];
  const discs = [...discList];

  for (const disc of discs) {
    discArray.push(<div className={disc.speed} key={disc.id}></div>);
  }

  return <div className="grid-container">{discArray}</div>;
}
