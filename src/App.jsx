import { useState } from "react";
import "./App.css";
import BagGraphic from "./components/DGBagBuilder/BagGraphic/BagGraphic";
import DiscList from "./components/DGBagBuilder/DiscList/DiscList";

function App({ initialDiscList }) {
  const [discList, setDiscList] = useState(initialDiscList);

  return (
    <>
      <h1>DG Bag Builder</h1>
      <div className="discBagOutline">
        <BagGraphic discList={discList} />
        <DiscList discList={discList} setDiscList={setDiscList} />
      </div>
    </>
  );
}

export default App;
