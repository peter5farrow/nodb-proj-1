import DiscInputBox from "./DiscInputBox";
import SpeedInputBox from "./SpeedInputBox";
import StabilityInputBox from "./StabilityInputBox";
import DiscInputSubmitButton from "./InputSubmitButton";
import generateId from "../../../../../utils/idGeneratorFn";
import { useState } from "react";

export default function DiscInput({ discList, setDiscList }) {
  const [disc, setDisc] = useState("new disc");
  const [speed, setSpeed] = useState("putter");
  const [stability, setStability] = useState("understable");

  function handleDisc(e) {
    setDisc(e.target.value);
  }
  function handleSpeed(e) {
    setSpeed(e.target.value);
  }
  function handleStability(e) {
    setStability(e.target.value);
  }

  const addDisc = (e) => {
    e.preventDefault();

    const newDiscList = [...discList];
    newDiscList.push({
      id: generateId(),
      disc: disc,
      speed: speed,
      stability: stability,
    });

    setDiscList(newDiscList);
  };

  return (
    <div id="discInput">
      <h2>Add a new disc</h2>
      <form id="discForm">
        <DiscInputBox onChange={handleDisc} />

        <SpeedInputBox onChange={handleSpeed} />

        <StabilityInputBox onChange={handleStability} />

        <DiscInputSubmitButton onSubmit={addDisc} />
      </form>
    </div>
  );
}
