import React from "react";
//import style from "C:/Users/ALPHA/Desktop/project flowershop/flowershop/client/dist/style.css"
import ListItem from "./ListItem.jsx";

const List = (props) => (
  <div>
    <h4> Bouquets  </h4>

    Here are {props.items.length} Bouquets
    <li>
    {props.items.map((item, index) => (
      <div className="itemlist" key={index}>
          <ListItem item={item}/>
      </div>
    
    ))}
    </li>
  </div >
);

export default List;
