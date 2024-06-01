import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const Resturant = () => {
  // new Set data strc. ke help se hum sirf inique chizo ko show karwa sakte hai, ( ... )Spread operator for making object to array ok
  const uniqueList = [
    ...new Set(
      Menu.map((curElem) => {
        return curElem.category;
      })
    ), "All"
  ];
  // console.log(uniqueList);
  // const [first, setfirst] = useState(initialData); and "React. "hum baad mei usko use karne ke liye lagate hai.
  // InitialData mera API ko represent akrta hai.
  const [menuData, setmenuData] = React.useState(Menu);
  const [menuList, setmenuList] = React.useState(uniqueList);
  const filteritem = (category) => {

    if(category === "All"){
      setmenuData(Menu);
      return;
    }

    const updateList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setmenuData(updateList);
  };
  return (
    <>
      <Navbar filteritem = {filteritem} menuList = {menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
