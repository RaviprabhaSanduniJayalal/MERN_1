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

export const createProduct= async(req,res)=>{
    const product=req.body; //user will send the product data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message:"Please enter all fields"});
    }

    const newProduct = new Product(product)

        try{
            await newProduct.save();
            res.status(201).json({success:true, data:newProduct});
        }catch(error){
            console.error("Error in create product:",error.message);
            res.status(500).json({success:false, message:"Server Error"});
        }
    
}