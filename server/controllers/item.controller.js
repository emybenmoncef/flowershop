// DELETE THIS LINE


// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require("../database-mysql");
 const Item = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// const selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES

const selectAll = async function (req, res) {
   try {
     const items = await Item.find();
    res.status(200).send(items);
     } catch (error) {
     res.status(404).send(error);
  }
 };
 const getById = async function (req, res){
  const id = req.params.id ;
   let item;
   try {
    item = await Item.findById(id);
   }  catch(err){
    console.log(err)
   }
 }
 const addbouquet = async function (req, res) {
  try {
    console.log (req.body)
    const item = await Item.create(req.body);
   res.status(200).json(item);
   
    } catch (error) {
    res.status(404).send(error);
 }
};
const updatebouquet = async function (req, res) {
  const id = req.params.id ;
  const { bouquetname, description,price, quantityoFlower,imageUrl,available} =  req.body
  try {
    const item = await Item.findByIdAndUpdate(id,{
      bouquetname:bouquetname,
      description:description,
      price:price,
      quantityoFlower:quantityoFlower,
      imageUrl:imageUrl,
      available:available
    });
    item = await item.save()
  } catch (error) {
    res.status(404).send(error);
 }
};
const popbouquet = async function (req, res) {
  const id = req.params.id;
  try {
    const item = await Item.findByIdAndRemove(id);
   res.status(200).json(item);
    } catch (error) {
    res.status(404).send(error);
 }
};


module.exports = { selectAll,getById,addbouquet,updatebouquet,popbouquet};

