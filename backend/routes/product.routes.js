import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/product.model.js';
import e from 'express';
import { createProduct, getProducts } from '../controllers/product.controller.js';


const router = express.Router();

router.get("/",getProducts);

router.put("/:id",async(req,res)=>{
    const {id}=req.params;
    const product=req.body;

    // if(!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({success:false, message:"Invalid Product ID"}); //if id is not valid    

    // }


    try{
       const updatedProduct=await Product.findByIdAndUpdate
       (id,product,{new:true}); //new:true will return the updated product
       res.status(200).json({success:true, data:updatedProduct});   

    }
    catch(error){
     
        res.status(500).json({success:false, message:"Server Error"});
    }
});


router.post("/",createProduct);

router.delete("/:id",async(req,res)=>{
    const {id}=req.params;
    
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Product deleted successfully"});
    }catch(error){

    }


});

export default router;