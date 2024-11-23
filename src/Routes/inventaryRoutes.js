const express = require('express');

const router = express.Router();
const {getAllItem,updateItem,deleteItem,addItem}=require('../controller/inventaryController')

//  add item 
//update item 
//delete items
// get all items

router.get('/item/getAllItem',getAllItem);
router.put('/item/updateItem/:id',updateItem);
router.delete('/item/deletItem/:id',deleteItem);
router.post('/item/addItem',addItem);
module.exports=router
