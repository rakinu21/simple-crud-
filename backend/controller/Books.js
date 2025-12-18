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

export const singlePost = async (req , res) =>{

    try {
        const {id} = req.params;

        const [data] = await db.query('SELECT * FROM books WHERE id = ? ', [id]);

        return res.status(201).json(data)
    } catch (error) {
       res.status(500).json({message:error.message})
    }
}


export const update = async(req, res) =>{

    try {
        const {id} = req.params;
        const {title , description} = req.body;

        const [data] = await db.query('UPDATE books SET title =? , description =? WHERE id = ?', [title, description, id]);

        return res.status(201).json(data);
    } catch (error) {
         res.status(500).json({message:error.message})
    }
}



export const DeleteBook = async(req, res) =>{

    try {
        const {id} = req.params;

        const [data] = await db.query('DELETE FROM  books WHERE id = ?',[id]);
        return res.status(201).json({message:"item deleted sucessfully"})
    } catch (error) {
         res.status(500).json({message:error.message})
    }
}

