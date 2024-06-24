import { useState } from "react";
import "./App.css";
import BagGraphic from "./components/DGBagBuilder/BagGraphic/BagGraphic";
import DiscList from "./components/DGBagBuilder/DiscList/DiscList";
import TEST_DATA from "./docs/data-mockup";

function App() {
  return (
    <>
      <BagGraphic initialDiscs={TEST_DATA} />
      <DiscList initialDiscs={TEST_DATA} />
    </>
  );
}

export default App;
