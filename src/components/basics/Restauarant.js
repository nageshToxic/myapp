import React, { useState } from "react";
import "./style.css";
import Menu from "../menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar"

const uniqueData =[ ...new Set(Menu.map((curElem)=>{
   return curElem.category;
})),"All"
];
console.log(uniqueData);

const Restauarant = () => {
  
  const [menuData ,setMenuData] = useState(Menu);
  const [menuList,setmenuList] =useState(uniqueData)
  console.log(menuData);

  const filterItem =(cate) =>{
    if(cate==="ALL"){
      setMenuData(Menu)
      return setMenuData;
    }
    const updatedList=Menu.filter((curElem)=>{
      return curElem.category === cate;
    });
    setMenuData(updatedList);

  };


  
  return (
    
    <>
      
      <Navbar filterItem={filterItem } menuList={menuList}/> 
      < MenuCard menuData={menuData}/>
    </>
);
};




export default Restauarant;
