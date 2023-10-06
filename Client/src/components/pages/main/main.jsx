import LineMenu from "../../menu/lineMenu/lineMenu";
import GridMenu from "../../menu/gridMenu/gridMenu";
import "./main.css";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Main() {
  const courses = useLoaderData();

  return (
    <div className="main-page">
      <GridMenu title={'Популярные курсы'} cards={courses} parentClassName="main-page" />
    </div>
  );
}

export default Main;
