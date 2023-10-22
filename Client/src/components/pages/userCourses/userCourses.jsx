import './userCourses.css';
import { observer } from "mobx-react-lite";
import { useLayoutEffect } from "react";
import ItemsList from "../../elements/itemsList/itemsList";
import { useLoaderData } from "react-router-dom";

const UserCourses = observer(({mode}) => {
  useLayoutEffect(() => window.scrollTo(0, 0));
  const loadedData = useLoaderData();
  const block = {items: loadedData};
  console.log(block);
  return (
    <div className="courses-list">
      <ItemsList parentName="courses-list" block={block}/>
    </div>
  );
})

export default UserCourses;