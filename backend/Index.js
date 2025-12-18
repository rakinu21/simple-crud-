import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import { testDb } from './config/db.js';

dotenv.config()

const app = express()


app.use(express.json())
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT,async()=>{

    console.log('server running')

    try {
        await testDb()
       
    } catch (error) {
        console.log(error)
    }
})