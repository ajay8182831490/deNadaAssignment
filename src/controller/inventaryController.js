const Prisma = require('@prisma/client');
const { PrismaClient } = Prisma;

const prisma = new PrismaClient();



const getAllItem=async(req,res)=>{
try {

    const item=await prisma.inventory.findMany();
    res.status(200).json(item)
    
} catch (error) {
    res.status(500).json("internal server error")
}
}
const updateItem=async(req,res)=>{
try {

    const {id}=req.params;
    const { name, price, quantity } = req.body;
    if(!id||!name ||!price ||!quantity){
        return res.status(400).json("missing field  required");
    }

    await prisma.inventory.update({where:{
        id:parseInt(id)
    },data:{
        name,price,quantity

    }})
    res.status(200).json({message:"itme updated successfully"})
    
} catch (error) {
    res.status(500).json("internal server error")
}
}
const deleteItem=async(req,res)=>{
try {
    const {id}=req.params;

   const item= await prisma.inventory.findFirst({where:{
        id:parseInt(id)
    }})

    if(!item){
        return res.status(400).json("item does not exist in data base")
    }

    await prisma.inventory.delete({where:{
        id:parseInt(id)
    }})
    res.status(200).json({message:"item deleted successfully from database"})
} catch (error) {
    res.status(500).json("internal server error")
}
}
const addItem=async(req,res)=>{
try {

    const { name, price, quantity } = req.body;
    if(!name ||!price ||!quantity){
        return res.status(400).json("missing field  required");
    }

    const item = await prisma.inventory.create({
      data: { name, price, quantity }
    });
    res.status(201).json(item);
    
} catch (error) {
    res.status(500).json("internal server error")
}

}

module.exports={getAllItem,addItem,deleteItem,updateItem}