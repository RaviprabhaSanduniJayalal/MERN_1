import Product from '../models/product.model.js';

export const getProducts= async(req,res)=>{
    try{
        const products=await Product.find({});
        res.json(products);
    }catch(error){
        console.error("Error in get products:",error.message);
        res.status(500).json({message:"Server Error"});
    }
}