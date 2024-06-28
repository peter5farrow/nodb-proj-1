import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import BagGraphic from "./components/DGBagBuilder/BagGraphic/BagGraphic";
import DiscList from "./components/DGBagBuilder/DiscList/DiscList";

function App() {
  const [discList, setDiscList] = useState([]);

  useEffect(() => {
    const getDiscs = async () => {
      try {
        const res = await axios.get("/api/discs");
        setDiscList(res.data);
      } catch (error) {
        console.error("Error fetching discs:", error);
        // Optionally handle errors here, e.g., set a default discList or show an error message.
      }
    };

    getDiscs(); // Initial fetch when component mounts

    // This useEffect will re-run whenever discList changes
  }, []); // Add discList as a dependency here

  return (
    <>
      <BagGraphic discList={discList} />
      <DiscList discList={discList} />
    </>
  );
}

export default App;
