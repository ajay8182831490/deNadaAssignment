const express=require('express');
const router=express.Router();
const Prisma = require('@prisma/client');
const { createBill,fetchAllBill,fetchBillDetail } = require('../controller/billController');
const { PrismaClient } = Prisma;
const prisma=new PrismaClient()

// create bill
//get all bill
// get detail bill

router.post('/bill/createBill',createBill)
router.get('/bill/getAllBill',fetchAllBill);
router.get('/bill/getBillDetail/:id',fetchBillDetail);

module.exports =router;