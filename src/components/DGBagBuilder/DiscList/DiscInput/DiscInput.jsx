import axios from "axios";
import DiscInputBox from "./DiscInputBox";
import SpeedInputBox from "./SpeedInputBox";
import StabilityInputBox from "./StabilityInputBox";
import DiscInputSubmitButton from "./InputSubmitButton";
import generateId from "../../../../../utils/idGeneratorFn";
import { useState } from "react";

export default function DiscInput({ discList, setDiscList }) {
  const [disc, setDisc] = useState("new disc");
  const [speed, setSpeed] = useState("driver");
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

  const addDisc = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("api/discs", {
      disc: disc,
      speed: speed,
      stability: stability,
    });
    const newDisc = {
      id: generateId(),
      ...data,
    };

    setDiscList([...discList, newDisc]);
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
