import React from 'react'
import { useState } from 'react'
import { DeletePost, getAllBooks } from '../api/books.js';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

    const handleDelete = async(id)=>{

           try {
             const res = await DeletePost(id);
             window.location.reload()
         } catch (error) {
             console.log(error)
         }
    }
  return (
    <div className='books'>

        <div className="button-add">
           <Link to={'/create'}><button className="button">add</button></Link>
        </div>
        {books && books.length > 0 ? 

        books.map((booksItem, index) =>{

            return (
                <div className="container" key={booksItem.id}>
                     <h1>{booksItem.title} 
                      <div className="button">
                        <button className="delete"onClick={()=> handleDelete(booksItem.id)}>Delete</button>
                        <button className="edit"><Link to={`/book/${booksItem.id}`}>Edit</Link></button>
                      </div>
                    
                    </h1>
                     <p>{booksItem.description}</p>
                </div>
            )
        })
        
        : <p>no data found

         
        </p>
        }
    </div>
  )
}
