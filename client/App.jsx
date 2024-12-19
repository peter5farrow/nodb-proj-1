import { useState } from "react";
import "./App.css";
import BagGraphic from "./components/DGBagBuilder/BagGraphic/BagGraphic";
import DiscList from "./components/DGBagBuilder/DiscList/DiscList";

function App() {
  const [discList, setDiscList] = useState([
    { id: 0, disc: "Aviar", speed: "putter", stability: "stable" },

    { id: 1, disc: "Hex", speed: "midrange", stability: "stable" },

    { id: 2, disc: "Undertaker", speed: "fairway", stability: "understable" },

    { id: 3, disc: "Rive", speed: "driver", stability: "overstable" },
  ]);

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
