import React, {useState} from 'react';
const AddBouquet = ({addBouquet}) => {
  const [newBouquet, setNewBouquet] = useState({})
  return (
    <div>
      <div>Add a Bouquet</div>
      <div><input type="text" name="bouquetname" placeholder="bouquetname" onChange={(e) => {
        setNewBouquet({ ...newBouquet, bouquetname: e.target.value })
      }} /></div>
      <div><textarea name="description" placeholder="description" onChange={(e) => {
        setNewBouquet({ ...newBouquet, description: e.target.value })
      }} /></div>
      <div><input type="text" name="imageUrl" placeholder="imageUrl" onChange={(e) => {
        setNewBouquet({ ...newBouquet, imageUrl: e.target.value })
      }} /></div>
      <div><input type="number" name="price" placeholder="price" onChange={(e) => {
        setNewBouquet({ ...newBouquet, price: e.target.value })
      }} /></div>
      <div><input type="number" name="quantityoFlower" placeholder="quantityoFlower" onChange={(e) => {
        setNewBouquet({ ...newBouquet, quantityoFlower: e.target.value })
      }} /></div>
      <div><input type="boolean" name="available" placeholder="available" onChange={(e) => {
        setNewBouquet({ ...newBouquet, available: e.target.value })
      }} /></div>
      <button onClick={() => { addBouquet(newBouquet) }}>Submit</button>

    </div>

  )
}

export default AddBouquet