const express = require('express');

const router = express.Router();
const {getAllItem,updateItem,deleteItem,addItem}=require('../controller/inventaryController')






router.get('/item/getAllItem',getAllItem);// get all items routes
router.put('/item/updateItem/:id',updateItem);//update item routes
router.delete('/item/deletItem/:id',deleteItem);//delete items routes
router.post('/item/addItem',addItem);//  add item  routes
module.exports=router
