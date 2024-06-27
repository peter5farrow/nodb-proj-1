import { useState } from "react";
import "./App.css";
import BagGraphic from "./components/DGBagBuilder/BagGraphic/BagGraphic";
import DiscList from "./components/DGBagBuilder/DiscList/DiscList";
import TEST_DATA from "../docs/data-mockup";

function App() {
  const [discList, setDiscList] = useState(TEST_DATA);

  return (
    <>
      <BagGraphic discList={discList} />
      <DiscList discList={discList} setDiscList={setDiscList} />
    </>
  );
}

export default App;
