const express=require('express');
const router=express.Router();// for the routing we are using router middleware

const { createBill,fetchAllBill,fetchBillDetail } = require('../controller/billController');






router.post('/bill/createBill',createBill)// create bill routes
router.get('/bill/getAllBill',fetchAllBill);//get all bill routes
router.get('/bill/getBillDetail/:id',fetchBillDetail);//// get detail bill

module.exports =router;