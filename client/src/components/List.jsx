import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => (
  <div>
    <h4> Bouquets  </h4>
    These are {props.items.length} Bouquets.
    {props.items.map((item, index) => (
      <div key={index}>
        <ListItem item={item} />
      </div>
    ))}
  </div>
);

export default List;
