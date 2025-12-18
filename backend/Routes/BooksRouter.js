import express from 'express';
import { createBook, getAllBooks, singlePost, update } from '../controller/Books.js';


const router = express.Router();


router.get('/books',getAllBooks)
router.post('/book',createBook)
router.get('/book/:id',singlePost);
router.put('/book/:id',update)
export default router