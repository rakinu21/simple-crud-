import React from 'react'
import { useState } from 'react'
import { getAllBooks } from '../api/books.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Books.scss'

export const Books = () => {

    const [books , setbooks] = useState([]);

    const handleBooks = async()=>{
         try {
             const res = await getAllBooks();
             console.log(res)
             setbooks(res)
         } catch (error) {
            
         }
    }

    useEffect(()=>{
    
        handleBooks()
    },[])
  return (
    <div className='books'>

        <div className="button-add">
           <Link to={'/create'}><button className="button">add</button></Link>
        </div>
        {books && books.length > 0 ? 

        books.map((booksItem, index) =>{

            return (
                <div className="container">
                     <h1>{booksItem.title} 
                      <div className="button">
                        <button className="delete">Delete</button>
                        <button className="edit">edit</button>
                      </div>
                    
                    </h1>
                     <p>{booksItem.description}</p>
                </div>
            )
        })
        
        : <p>no data found</p>
        }
    </div>
  )
}
