import express from 'express';
import dotenv from 'dotenv';
import path from "path"; 
import {connectDB} from './config/db.js';
import productRoutes from './routes/product.routes.js';

dotenv.config();

const app = express();
const PORT=process.env.PORT || 5000

const _dirname = path.resolve();

app.use(express.json());



//app.get("/",(req,res)=>{});

app.use('/api/products',productRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(_dirname,"/frontend/dist")));
}
  
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
})

//console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:'+ PORT);
     });

     