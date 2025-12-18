import express from 'express';
import { createBook, getAllBooks } from '../controller/Books.js';


const router = express.Router();


router.get('/books',getAllBooks)
router.post('/book',createBook)

export default router