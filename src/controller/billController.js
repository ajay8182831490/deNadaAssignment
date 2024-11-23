const Prisma = require('@prisma/client');
const { PrismaClient } = Prisma;

const prisma = new PrismaClient();


const createBill=async(req,res)=>{
  try {
    const { customerName, items } = req.body;

    if(!customerName || !items){
        res.status(400).json("missing feild required")
    }

    let totalAmount = 0;

    const billItems = await Promise.all(
      items.map(async (item) => {
        const inventoryItem = await prisma.inventory.findUnique({
          where: { id: item.inventoryId }
        });

        if (!inventoryItem || inventoryItem.quantity < item.quantity) {
          throw new Error(`Insufficient stock for item: ${inventoryItem?.name}`);
        }

        const totalPrice = inventoryItem.price * item.quantity;
        totalAmount += totalPrice;

        // Update inventory stock
        await prisma.inventory.update({
          where: { id: inventoryItem.id },
          data: { quantity: inventoryItem.quantity - item.quantity }
        });

        return {
          inventoryId: inventoryItem.id,
          quantity: item.quantity,
          totalPrice
        };
      })
    );

    const bill = await prisma.bill.create({
      data: {
        customerName,
        totalAmount,
        items: {
          create: billItems
        }
      },
      include: { items: true }
    });

    res.status(201).json({message:"bill created successfully",bill})
    
  } catch (error) {
    res.status(500).json("internal server error")
  }
}
const fetchAllBill=async(req,res,next)=>{
try {

   

    const bills = await prisma.bill.findMany({
        include: { items: { 
            include: 
            { 
                inventory: true 

            } } }
      });
      res.status(200).json(bills);
    
} catch (error) {
    res.status(500).json("internal server error")
}
}
const fetchBillDetail=async(req,res,next)=>{
try {
    const {id}=req.params;
    if(!id){
        return res.status(400).json({message:"missing feild required"});
    }
    const bill = await prisma.bill.findUnique({
        where: { id: parseInt(id) },
        include: { 
            items: {
                 include: {
                     inventory: true 
                    } } }
      });
  
      if (!bill) return res.status(404).json({ error: 'Bill not found' });
      res.status(200).json(bill);
} catch (error) {
    res.status(500).json("internal server error")
}
}
module.exports ={createBill,fetchAllBill,fetchBillDetail}





