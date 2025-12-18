import { db } from "../config/db.js";


export const getAllBooks = async(req, res)=>{

    try {
         const [booksdataAll] =  await db.query('SELECT * FROM books');
         res.status(201).json(booksdataAll);

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


export const createBook = async(req , res)=>{

    try {
        const {title , description} = req.body;

        const [data] = await db.query('INSERT INTO books (title , description) VALUES (?, ?)',[title, description,]);
        
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}




