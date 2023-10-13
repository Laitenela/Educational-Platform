import "./main.css";
import { useLayoutEffect } from "react";
import { useLoaderData } from "react-router-dom";
import GridContainer from "../../containers/gridContainer/gridContainer";
import { BlocksStore } from "../../../modules/stores/blocksStore";

function Main() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  const loadedData = useLoaderData();
  const blocksStore = new BlocksStore(loadedData.infoBlocks);

  return (
    <div className="main-page">
      <GridContainer blocksStore={blocksStore}/>
    </div>
  );
}

export default Main;
