import { Button } from '@mui/material';
import React from 'react';

const ListItem = (props) => {
const {bouquetname,description,quantityoFlower,price,imageurl, available} = props.item ;
 return <div>
    <img src={ imageurl } alt={bouquetname} />
      <h3>{quantityoFlower}</h3>
      <p>{description}</p>
      <h3>{price}</h3>
      <Button> Update </Button>
      <Button> Deleate </Button>
  </div>
}

export default ListItem;
