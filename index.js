const express =require('express');// using express framework for backend server
const app=express();
const billRoutes=require('./src/Routes/billRoutes')
const inventaryRoutes=require('./src/Routes/inventaryRoutes')
app.use(express.json());

app.use(billRoutes);// calling routes for bill
app.use(inventaryRoutes);//calling routes for inventary
//global error handled
app.use((err,req,res,next)=>{
    console.log("something error occured");
})

app.listen(3000,()=>{
    console.log("server are running on port no 3000")
})