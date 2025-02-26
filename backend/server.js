import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import productRoutes from './routes/product.routes.js';

dotenv.config();

const app = express();

app.use(express.json());

//app.get("/",(req,res)=>{});

app.use('/api/products',productRoutes);


    

//console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
     });

     