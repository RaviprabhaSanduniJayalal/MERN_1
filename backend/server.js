import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import productRoutes from './routes/product.routes.js';

dotenv.config();

const app = express();

app.use(express.json());
const PORT=process.env.PORT || 5000


//app.get("/",(req,res)=>{});

app.use('/api/products',productRoutes);


    

//console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:'+ PORT);
     });

     