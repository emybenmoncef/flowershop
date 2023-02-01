const Item = require("./server/database-mongo/item.model.js");
const data = require("./data");
const db = require('./server/database-mongo');

Item.create(data)
.then(() => console.log("Data added successfully !"))
.catch((err) => console.log(err));

